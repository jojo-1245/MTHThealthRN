import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

// 임시 의약품 데이터 (실제로는 API에서 가져올 데이터)
const mockMedications = [
  { id: '1', name: '타이로정', manufacturer: '한국얀센', dosage: '500mg' },
  { id: '2', name: '타이드정', manufacturer: '한국얀센', dosage: '650mg' },
  { id: '3', name: '타이론정', manufacturer: '한국얀센', dosage: '160mg' },
  { id: '4', name: '타이핀정', manufacturer: '바이엘', dosage: '100mg' },
  { id: '5', name: '타이가실주', manufacturer: '한국얀센', dosage: '200mg' },
  { id: '6', name: '타이리콜주', manufacturer: '동화약품', dosage: '300mg' },
  { id: '7', name: '타이리빈산', manufacturer: '동화약품', dosage: '복합제' },
  { id: '8', name: '타이콘주사', manufacturer: '한국얀센', dosage: '복합제' },
  { id: '9', name: '타이세프정', manufacturer: '한국얀센', dosage: '복합제' },
  { id: '10', name: '타이코신주', manufacturer: '한국얀센', dosage: '복합제' },
  { id: '11', name: '스타이렌정', manufacturer: '한국얀센', dosage: '복합제' },
];

export default function MedicationSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState<string | null>('3'); // 타이론정이 기본 선택됨

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    
    // 아무 글자나 입력하면 전체 목록 표시 (데이터베이스가 없으므로)
    // 실제로는 API 호출을 하겠지만, 여기서는 목업 데이터로 검색
    const filteredResults = mockMedications.filter(medication =>
      medication.name.toLowerCase().includes(query.toLowerCase()) ||
      medication.manufacturer.toLowerCase().includes(query.toLowerCase())
    );
    
    // 검색 시뮬레이션을 위한 약간의 지연
    setTimeout(() => {
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 300);
  };

  const handleMedicationSelect = (medication: any) => {
    setSelectedMedication(medication.id);
  };

  const handleAdd = () => {
    if (selectedMedication) {
      const selected = mockMedications.find(m => m.id === selectedMedication);
      // 선택된 의약품 정보를 이전 페이지로 전달
      router.back();
      // 실제로는 선택된 의약품 정보를 상태 관리나 파라미터로 전달
    }
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  const renderMedicationItem = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.medicationItem}
      onPress={() => handleMedicationSelect(item)}
    >
      <Text style={styles.medicationName}>{item.name}</Text>
      <View style={[
        styles.checkbox,
        selectedMedication === item.id && styles.checkboxSelected
      ]}>
        {selectedMedication === item.id && (
          <Ionicons name="checkmark" size={16} color="#fff" />
        )}
      </View>
    </TouchableOpacity>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="search-outline" size={48} color="#ccc" />
      <Text style={styles.emptyStateText}>
        {searchQuery ? '검색 결과가 없습니다' : '의약품명을 입력하여 검색하세요'}
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
        renderItem={renderMedicationItem}
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
        <Text style={styles.headerTitle}>의약품 검색</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 검색 입력 필드 */}
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearch}
            placeholder="의약품명을 입력하세요. (ex 타이레놀)"
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

      {/* 검색 결과 영역 */}
      <View style={styles.resultsContainer}>
        {renderSearchResults()}
      </View>

      {/* 하단 추가 버튼 */}
      {searchResults.length > 0 && (
        <View style={styles.bottomButtonContainer}>
          <TouchableOpacity
            style={[styles.addButton, !selectedMedication && styles.addButtonDisabled]}
            onPress={handleAdd}
            disabled={!selectedMedication}
          >
            <Text style={[styles.addButtonText, !selectedMedication && styles.addButtonTextDisabled]}>
              추가
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
    width: 34, // 뒤로가기 버튼과 동일한 너비로 중앙 정렬
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
  resultsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  resultsList: {
    flex: 1,
  },
  medicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  medicationName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    flex: 1,
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
  addButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  addButtonTextDisabled: {
    color: '#999',
  },
});
