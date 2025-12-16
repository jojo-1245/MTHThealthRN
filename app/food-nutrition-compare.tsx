import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();
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
          color="#fff"
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
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('food.nutritionCompare.title')}</Text>
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
                <Ionicons name="close-circle" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.foodCardServing}>120mL</Text>
          </View>

          {/* VS 텍스트 */}
          <View style={styles.vsContainer}>
            <Text style={styles.vsText}>{t('food.nutritionCompare.vs')}</Text>
          </View>

          {/* 오른쪽 음식물 카드 */}
          <View style={styles.foodCard}>
            <View style={styles.foodCardHeader}>
              <Text style={styles.foodCardTitle}>비트</Text>
              <TouchableOpacity onPress={() => handleRemoveFood('right')}>
                <Ionicons name="close-circle" size={24} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text style={styles.foodCardServing}>{t('food.nutritionCompare.servingLabel')}</Text>
          </View>
        </View>

        {/* 제공량 정보 */}
        <View style={styles.servingInfo}>
          <View style={styles.servingInfoRow}>
            <Text style={styles.servingInfoValue}>120mL</Text>
            <Text style={styles.servingInfoLabel}>{t('food.nutritionCompare.servingLabel')}</Text>
            <Text style={styles.servingInfoValue}>70mL</Text>
          </View>
        </View>

        {/* 영양성분 비교 테이블 */}
        <View style={styles.comparisonTable}>
          {/* 열량 및 3대 영양소 */}
          {renderExpandableSection(
            t('food.nutritionCompare.sections.caloriesMajor'),
            'calories-major',
            <View style={styles.comparisonContent}>
              {renderComparisonItem(t('food.nutritionCompare.nutrients.energy'), '40', '30', 'kcal')}
              {renderComparisonItem(t('food.nutritionCompare.nutrients.carbs'), '8', '7', 'g')}
              {renderComparisonItem(t('food.nutritionCompare.nutrients.totalSugar'), '-', '7', 'g')}
              {renderComparisonItem(t('food.nutritionCompare.nutrients.totalFiber'), '2', '-', 'g')}
            </View>
          )}

          {/* 무기질 */}
          {renderExpandableSection(
            t('food.nutritionCompare.sections.minerals'),
            'minerals',
            <View style={styles.comparisonContent}>
              {renderComparisonItem(t('food.nutritionCompare.nutrients.sodium'), '0.06', '0.05', 'g')}
              {renderComparisonItem(t('food.nutritionCompare.nutrients.calcium'), '20', '15', 'mg')}
              {renderComparisonItem(t('food.nutritionCompare.nutrients.iron'), '0.5', '0.8', 'mg')}
            </View>
          )}
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.addFoodButton} onPress={() => handleAddFood('left')}>
          <Ionicons name="add" size={20} color="#8B5CF6" />
          <Text style={styles.addFoodButtonText}>{t('food.nutritionCompare.addFoodButton')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#000',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
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
    backgroundColor: '#1a1a1a',
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
    color: '#fff',
  },
  foodCardServing: {
    fontSize: 14,
    color: '#fff',
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
    color: '#fff',
  },
  comparisonTable: {
    marginBottom: 20,
  },
  expandableSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
    color: '#fff',
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
    color: '#fff',
  },
  comparisonUnit: {
    fontSize: 12,
    color: '#fff',
    marginTop: 2,
  },
  comparisonLabel: {
    flex: 1,
    alignItems: 'center',
  },
  comparisonLabelText: {
    fontSize: 14,
    color: '#fff',
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
    backgroundColor: '#1a1a1a',
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
