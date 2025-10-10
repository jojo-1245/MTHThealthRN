import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

// 임시 영양순위 데이터
const mockNutritionRanking = [
  { id: '1', name: '통째로짜낸늙은호박즙', manufacturer: '농업회사법인 우포의아침 주식회사', calories: '12kcal', serving: '80g' },
  { id: '2', name: '무농약 연근진액', manufacturer: '황지네이처농업회사법인(주)', calories: '10.0kcal', serving: '100mL' },
  { id: '3', name: '통째로짜낸늙은호박즙', manufacturer: '농업회사법인 우포의아침(주)', calories: '12kcal', serving: '80mL' },
  { id: '4', name: '무농약 연근진액', manufacturer: '황지네이처농업회사법인(주)', calories: '11.0kcal', serving: '110g' },
  { id: '5', name: '돌미나리70', manufacturer: '(주)참선진녹즙', calories: '10kcal', serving: '120mL' },
  { id: '6', name: '돌미나리70', manufacturer: '(주)참선진녹즙', calories: '10kcal', serving: '120g' },
  { id: '7', name: '그대로 담은 타트체리스틱', manufacturer: '(주)천호엔케어', calories: '5kcal', serving: '10g' },
  { id: '8', name: '순수 노니즙', manufacturer: '(주)보성식품', calories: '7.6kcal', serving: '100g' },
  { id: '9', name: '유기케일녹즙', manufacturer: '풀무원건강생활(주)', calories: '15kcal', serving: '130ml' },
  { id: '10', name: '유기케일녹즙', manufacturer: '(주)풀무원녹즙', calories: '15kcal', serving: '130mL' },
];

export default function FoodSearchResult() {
  const [activeTab, setActiveTab] = useState<'detail' | 'ranking'>('detail');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'nutrition-guide': false,
    'carbs-detail': false,
  });

  const handleSectionToggle = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleViewAllNutrients = () => {
    router.push('/food-nutrition-detail');
  };

  const handleCompareNutrients = () => {
    router.push('/food-nutrition-compare');
  };

  const renderDetailTab = () => (
    <ScrollView style={styles.tabContent} showsVerticalScrollIndicator={false}>
      {/* 음식물 정보 */}
      <View style={styles.foodInfoCard}>
        <Text style={styles.foodName}>당근</Text>
        <View style={styles.foodDetails}>
          <Text style={styles.foodDetailLabel}>분류 카테고리</Text>
          <Text style={styles.foodDetailValue}>과/채주스</Text>
        </View>
        <View style={styles.foodDetails}>
          <Text style={styles.foodDetailLabel}>카테고리 음식품 수</Text>
          <Text style={styles.foodDetailValue}>3,304개</Text>
        </View>
        <View style={styles.foodDetails}>
          <Text style={styles.foodDetailLabel}>분석결과</Text>
          <View style={styles.analysisResult}>
            <Text style={styles.analysisText}>상위 31%</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: '31%' }]} />
            </View>
          </View>
        </View>
      </View>

      {/* 주요 성분 분석 */}
      <View style={styles.analysisCard}>
        <View style={styles.analysisHeader}>
          <Text style={styles.analysisTitle}>주요 성분 분석</Text>
          <Ionicons name="help-circle-outline" size={20} color="#999" />
        </View>
        
        <View style={styles.analysisItems}>
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>저칼로리</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarGood, { width: '85%' }]} />
            </View>
          </View>
          
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>저탄수</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarGood, { width: '90%' }]} />
            </View>
          </View>
          
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>고단백</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarBad, { width: '15%' }]} />
            </View>
          </View>
          
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>저지방</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarNormal, { width: '60%' }]} />
            </View>
          </View>
          
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>저나트륨</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarBad, { width: '20%' }]} />
            </View>
          </View>
          
          <View style={styles.analysisItem}>
            <Text style={styles.analysisItemLabel}>저당</Text>
            <View style={styles.analysisBar}>
              <View style={[styles.analysisBarFill, styles.analysisBarNormal, { width: '70%' }]} />
            </View>
          </View>
        </View>
        
        <View style={styles.analysisScale}>
          <Text style={styles.scaleLabel}>상위</Text>
          <View style={styles.scaleNumbers}>
            {[1, 25, 50, 75, 100].map(num => (
              <Text key={num} style={styles.scaleNumber}>{num}</Text>
            ))}
          </View>
          <Text style={styles.scaleLabel}>하위</Text>
        </View>
      </View>

      {/* 하단 안내 */}
      <View style={styles.footerNote}>
        <Text style={styles.footerText}>음식물 1회 제공량 기준 분석입니다.</Text>
      </View>
    </ScrollView>
  );

  const renderRankingTab = () => (
    <View style={styles.tabContent}>
      <View style={styles.rankingHeader}>
        <Text style={styles.rankingTitle}>과/채주스 카테고리 TOP 10</Text>
        <Ionicons name="help-circle-outline" size={20} color="#999" />
      </View>
      
      <FlatList
        data={mockNutritionRanking}
        renderItem={({ item }) => (
          <View style={styles.rankingItem}>
            <View style={styles.rankingInfo}>
              <Text style={styles.rankingName}>{item.name}</Text>
              <Text style={styles.rankingManufacturer}>{item.manufacturer}</Text>
            </View>
            <View style={styles.rankingNutrition}>
              <Text style={styles.rankingCalories}>{item.calories}</Text>
              <Text style={styles.rankingServing}>1회 제공량: {item.serving}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>음식품 검색 결과</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 버튼들 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'detail' && styles.activeTabButton]}
          onPress={() => setActiveTab('detail')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'detail' && styles.activeTabButtonText]}>
            상세정보
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'ranking' && styles.activeTabButton]}
          onPress={() => setActiveTab('ranking')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'ranking' && styles.activeTabButtonText]}>
            영양순위
          </Text>
        </TouchableOpacity>
      </View>

      {/* 탭 콘텐츠 */}
      <View style={styles.content}>
        {activeTab === 'detail' ? renderDetailTab() : renderRankingTab()}
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllNutrients}>
          <Text style={styles.viewAllButtonText}>영양성분 전체보기</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.compareButton} onPress={handleCompareNutrients}>
          <Text style={styles.compareButtonText}>영양성분 비교하기</Text>
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
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabButtonText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  foodInfoCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    marginVertical: 20,
  },
  foodName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  foodDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  foodDetailLabel: {
    fontSize: 14,
    color: '#666',
  },
  foodDetailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  analysisResult: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  analysisText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4caf50',
    marginRight: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 4,
  },
  analysisCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  analysisHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },
  analysisItems: {
    marginBottom: 20,
  },
  analysisItem: {
    marginBottom: 16,
  },
  analysisItemLabel: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },
  analysisBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  analysisBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  analysisBarGood: {
    backgroundColor: '#4caf50',
  },
  analysisBarNormal: {
    backgroundColor: '#ff9800',
  },
  analysisBarBad: {
    backgroundColor: '#f44336',
  },
  analysisScale: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scaleLabel: {
    fontSize: 12,
    color: '#666',
  },
  scaleNumbers: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  scaleNumber: {
    fontSize: 12,
    color: '#666',
  },
  footerNote: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
  },
  rankingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  rankingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginRight: 8,
  },
  rankingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  rankingInfo: {
    flex: 1,
  },
  rankingName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  rankingManufacturer: {
    fontSize: 14,
    color: '#666',
  },
  rankingNutrition: {
    alignItems: 'flex-end',
  },
  rankingCalories: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginBottom: 4,
  },
  rankingServing: {
    fontSize: 12,
    color: '#666',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    gap: 12,
  },
  viewAllButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewAllButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  compareButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  compareButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
});
