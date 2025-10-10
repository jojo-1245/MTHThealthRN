import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

// 임시 음식물 데이터 (실제로는 API에서 가져올 데이터)
const mockFoodItems = [
  { id: '1', name: '당근', manufacturer: '(주)참선진녹즙', category: '과/채주스' },
  { id: '2', name: '당근즙', manufacturer: '(주)풀무원녹즙', category: '과/채주스' },
  { id: '3', name: '당근농원', manufacturer: '동원산업', category: '농산물' },
  { id: '4', name: '당근케익', manufacturer: '주식회사 우드앤브릭', category: '제과' },
  { id: '5', name: '당근볶음', manufacturer: '(주)명품정항우케익', category: '반찬' },
  { id: '6', name: '당근샐러드', manufacturer: '전국(대표)', category: '샐러드' },
];

export default function FoodSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedFood, setSelectedFood] = useState<string | null>('1'); // 당근이 기본 선택됨

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // 실제로는 API 호출을 하겠지만, 여기서는 목업 데이터로 검색
    const filteredResults = mockFoodItems.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase()) ||
      food.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    
    // 검색 시뮬레이션을 위한 약간의 지연
    setTimeout(() => {
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 300);
  };

  const handleFoodSelect = (food: any) => {
    setSelectedFood(food.id);
  };

  const handleAnalyze = () => {
    if (selectedFood) {
      const selected = mockFoodItems.find(f => f.id === selectedFood);
      // 검색 결과 페이지로 이동
      router.push('/food-search-result');
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const renderFoodItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.foodItem}
      onPress={() => handleFoodSelect(item)}
    >
      <View style={styles.foodInfo}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodManufacturer}>제조원: {item.manufacturer}</Text>
      </View>
      <View style={[
        styles.checkbox,
        selectedFood === item.id && styles.checkboxSelected
      ]}>
        {selectedFood === item.id && (
          <Ionicons name="checkmark" size={16} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={48} color="#ccc" />
      <Text style={styles.emptyStateText}>
        {searchQuery ? '검색 결과가 없습니다' : '음식품명을 입력하여 검색하세요'}
      </Text>
    </View>
  );

  const renderSearchResults = () => {
    if (isSearching) {
      return (
        <View style={styles.loadingState}>
          <Text style={styles.loadingText}>검색 중...</Text>
        </View>
      );
    }

    if (searchResults.length === 0) {
      return renderEmptyState();
    }

    return (
      <FlatList
        data={searchResults}
        renderItem={renderFoodItem}
        keyExtractor={(item) => item.id}
        style={styles.resultsList}
        showsVerticalScrollIndicator={false}
      />
    );
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>음식품 검색</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 검색 입력 필드 */}
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={handleSearch}
              placeholder="음식품을 입력하세요."
              placeholderTextColor="#999"
              autoFocus={true}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={handleClearSearch} style={styles.clearButton}>
                <Ionicons name="close-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* 안내사항 */}
        <View style={styles.infoSection}>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>• 식약처에 등록된 제품을 대상으로 분석해요</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>• 식약처에 등록되지 않은 해외 직구 식품은 검색이 되지않아요</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoText}>• 제품명 입력 시 띄어쓰기, 맞춤법에 유의하여 정확하게 입력하세요</Text>
          </View>
        </View>

        {/* 검색 결과 영역 */}
        <View style={styles.resultsContainer}>
          {renderSearchResults()}
        </View>
      </ScrollView>

      {/* 하단 분석신청 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[styles.analyzeButton, (!selectedFood || isSearching) && styles.analyzeButtonDisabled]}
          onPress={handleAnalyze}
          disabled={!selectedFood || isSearching}
        >
          <Text style={[styles.analyzeButtonText, (!selectedFood || isSearching) && styles.analyzeButtonTextDisabled]}>
            분석신청
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 34,
  },
  content: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  clearButton: {
    marginLeft: 8,
    padding: 2,
  },
  infoSection: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  infoItem: {
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsList: {
    flex: 1,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  foodManufacturer: {
    fontSize: 14,
    color: '#666',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
    marginTop: 16,
    textAlign: 'center',
  },
  loadingState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  loadingText: {
    fontSize: 16,
    color: '#666',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  analyzeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  analyzeButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  analyzeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  analyzeButtonTextDisabled: {
    color: '#999',
  },
});
