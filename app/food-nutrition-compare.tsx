import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FoodNutritionCompare() {
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'calories-major': true,
    'minerals': false,
  });

  const handleSectionToggle = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleRemoveFood = (food: 'left' | 'right') => {
    // 음식물 제거 로직
    console.log(`Remove ${food} food`);
  };

  const handleAddFood = (position: 'left' | 'right') => {
    // 음식물 추가 로직 (검색 페이지로 이동)
    router.push('/food-search');
  };

  const renderComparisonItem = (label: string, leftValue: string, rightValue: string, unit?: string) => (
    <View style={styles.comparisonRow}>
      <View style={styles.comparisonCell}>
        <Text style={styles.comparisonValue}>{leftValue}</Text>
        {unit && <Text style={styles.comparisonUnit}>{unit}</Text>}
      </View>
      <View style={styles.comparisonLabel}>
        <Text style={styles.comparisonLabelText}>{label}</Text>
      </View>
      <View style={styles.comparisonCell}>
        <Text style={styles.comparisonValue}>{rightValue}</Text>
        {unit && <Text style={styles.comparisonUnit}>{unit}</Text>}
      </View>
    </View>
  );

  const renderExpandableSection = (title: string, sectionKey: string, children: React.ReactNode) => (
    <View style={styles.expandableSection}>
      <TouchableOpacity
        style={styles.sectionHeader}
        onPress={() => handleSectionToggle(sectionKey)}
      >
        <Text style={styles.sectionTitle}>{title}</Text>
        <Ionicons
          name={expandedSections[sectionKey] ? "chevron-up" : "chevron-down"}
          size={20}
          color="#666"
        />
      </TouchableOpacity>
      
      {expandedSections[sectionKey] && (
        <View style={styles.sectionContent}>
          {children}
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>영양성분 비교</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 비교 음식물 카드들 */}
        <View style={styles.foodCardsContainer}>
          {/* 왼쪽 음식물 카드 */}
          <View style={styles.foodCard}>
            <View style={styles.foodCardHeader}>
              <Text style={styles.foodCardTitle}>당근</Text>
              <TouchableOpacity onPress={() => handleRemoveFood('left')}>
                <Ionicons name="close-circle" size={24} color="#999" />
              </TouchableOpacity>
            </View>
            <Text style={styles.foodCardServing}>120mL</Text>
          </View>

          {/* VS 텍스트 */}
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>VS</Text>
          </View>

          {/* 오른쪽 음식물 카드 */}
          <View style={styles.foodCard}>
            <View style={styles.foodCardHeader}>
              <Text style={styles.foodCardTitle}>비트</Text>
              <TouchableOpacity onPress={() => handleRemoveFood('right')}>
                <Ionicons name="close-circle" size={24} color="#999" />
              </TouchableOpacity>
            </View>
            <Text style={styles.foodCardServing}>1회 제공량</Text>
          </View>
        </View>

        {/* 제공량 정보 */}
        <View style={styles.servingInfo}>
          <View style={styles.servingInfoRow}>
            <Text style={styles.servingInfoValue}>120mL</Text>
            <Text style={styles.servingInfoLabel}>1회 제공량</Text>
            <Text style={styles.servingInfoValue}>70mL</Text>
          </View>
        </View>

        {/* 영양성분 비교 테이블 */}
        <View style={styles.comparisonTable}>
          {/* 열량 및 3대 영양소 */}
          {renderExpandableSection(
            '열량 및 3대 영양소',
            'calories-major',
            <View style={styles.comparisonContent}>
              {renderComparisonItem('에너지', '40', '30', 'kcal')}
              {renderComparisonItem('탄수화물', '8', '7', 'g')}
              {renderComparisonItem('총당류', '-', '7', 'g')}
              {renderComparisonItem('총 식이섬유', '2', '-', 'g')}
            </View>
          )}

          {/* 무기질 */}
          {renderExpandableSection(
            '무기질',
            'minerals',
            <View style={styles.comparisonContent}>
              {renderComparisonItem('나트륨', '0.06', '0.05', 'g')}
              {renderComparisonItem('칼슘', '20', '15', 'mg')}
              {renderComparisonItem('철', '0.5', '0.8', 'mg')}
            </View>
          )}
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.addFoodButton} onPress={() => handleAddFood('left')}>
          <Ionicons name="add" size={20} color="#8B5CF6" />
          <Text style={styles.addFoodButtonText}>음식물 추가</Text>
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
    paddingHorizontal: 20,
  },
  foodCardsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  foodCard: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
  },
  foodCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  foodCardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  foodCardServing: {
    fontSize: 14,
    color: '#666',
  },
  vsContainer: {
    marginHorizontal: 20,
  },
  vsText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  servingInfo: {
    marginBottom: 20,
  },
  servingInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  servingInfoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  servingInfoLabel: {
    fontSize: 14,
    color: '#666',
  },
  comparisonTable: {
    marginBottom: 20,
  },
  expandableSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  sectionContent: {
    paddingBottom: 16,
  },
  comparisonContent: {
    gap: 12,
  },
  comparisonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  comparisonCell: {
    flex: 1,
    alignItems: 'center',
  },
  comparisonValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  comparisonUnit: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  comparisonLabel: {
    flex: 1,
    alignItems: 'center',
  },
  comparisonLabelText: {
    fontSize: 14,
    color: '#666',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  addFoodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
  },
  addFoodButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
});
