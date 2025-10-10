import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      return;
    }
    
    setIsSearching(true);
    // 실제로는 API 호출을 하겠지만, 여기서는 시뮬레이션
    setTimeout(() => {
      setIsSearching(false);
      // 검색 결과 페이지로 이동
      router.push('/custom-search-result');
    }, 1000);
  };

  const handleScanProduct = () => {
    router.push('/product-scan');
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>제품선택</Text>
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
              onChangeText={setSearchQuery}
              placeholder="제품명을 입력하세요. (ex 프로바이오)"
              placeholderTextColor="#999"
              autoFocus={true}
              returnKeyType="search"
              onSubmitEditing={handleSearch}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery('')} style={styles.clearButton}>
                <Ionicons name="close-circle" size={20} color="#999" />
              </TouchableOpacity>
            )}
          </View>
        </View>

        {/* 안내사항 */}
        <View style={styles.infoSection}>
          {/* 검색되지 않는 경우 안내 */}
          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Ionicons name="information-circle" size={16} color="#666" />
              <Text style={styles.infoTitle}>아래 경우에는 제품이 검색되지 않아요</Text>
            </View>
            <View style={styles.infoList}>
              <Text style={styles.infoListItem}>• 일반 의약품으로 등록된 영양제</Text>
              <Text style={styles.infoListItem}>• 식약처에 등록되지 않은 해외 직구 영양제</Text>
              <Text style={styles.infoListItem}>• 2018년 이전에 등록된 제품</Text>
            </View>
          </View>

          {/* 입력 시 주의사항 */}
          <View style={styles.infoItem}>
            <View style={styles.infoHeader}>
              <Ionicons name="information-circle" size={16} color="#666" />
              <Text style={styles.infoTitle}>제품명 입력 시 띄어쓰기, 맞춤법에 유의하여 정확하게 입력하세요</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[styles.analyzeButton, (!searchQuery.trim() || isSearching) && styles.analyzeButtonDisabled]}
          onPress={handleSearch}
          disabled={!searchQuery.trim() || isSearching}
        >
          <Text style={[styles.analyzeButtonText, (!searchQuery.trim() || isSearching) && styles.analyzeButtonTextDisabled]}>
            {isSearching ? '검색 중...' : '분석신청'}
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
    paddingVertical: 20,
  },
  infoItem: {
    marginBottom: 24,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  infoList: {
    paddingLeft: 24,
  },
  infoListItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
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
