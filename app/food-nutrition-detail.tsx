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

export default function FoodNutritionDetail() {
  const [selectedServing, setSelectedServing] = useState<'per-serving' | 'total-content'>('per-serving');
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    'nutrition-guide': false,
    'calories-major': true,
    'carbs-detail': true,
    'minerals': false,
  });

  const handleSectionToggle = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderNutritionItem = (label: string, value: string, percentage: string, isExpandable: boolean = false, children?: React.ReactNode) => (
    <View style={styles.nutritionItem}>
      <TouchableOpacity
        style={styles.nutritionHeader}
        onPress={isExpandable ? () => handleSectionToggle(label) : undefined}
        disabled={!isExpandable}
      >
        <View style={styles.nutritionInfo}>
          <Text style={styles.nutritionLabel}>{label}</Text>
          <Text style={styles.nutritionValue}>{value}</Text>
        </View>
        <View style={styles.nutritionPercentage}>
          <Text style={styles.percentageText}>{percentage}</Text>
        </View>
        {isExpandable && (
          <Ionicons
            name={expandedSections[label] ? "chevron-up" : "chevron-down"}
            size={16}
            color="#999"
          />
        )}
      </TouchableOpacity>
      
      {isExpandable && expandedSections[label] && children && (
        <View style={styles.nutritionChildren}>
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
        <Text style={styles.headerTitle}>영양성분 전체보기</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 음식물 이름 */}
        <View style={styles.foodNameSection}>
          <Text style={styles.foodName}>당근</Text>
        </View>

        {/* 제공량 선택 */}
        <View style={styles.servingSelector}>
          <TouchableOpacity
            style={[styles.servingButton, selectedServing === 'per-serving' && styles.activeServingButton]}
            onPress={() => setSelectedServing('per-serving')}
          >
            <Text style={[styles.servingButtonText, selectedServing === 'per-serving' && styles.activeServingButtonText]}>
              1회 제공량
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.servingButton, selectedServing === 'total-content' && styles.activeServingButton]}
            onPress={() => setSelectedServing('total-content')}
          >
            <Text style={[styles.servingButtonText, selectedServing === 'total-content' && styles.activeServingButtonText]}>
              총 내용량
            </Text>
          </TouchableOpacity>
        </View>

        {/* 제공량 정보 */}
        <View style={styles.servingInfo}>
          <Text style={styles.servingInfoText}>
            {selectedServing === 'per-serving' ? '120mL' : '120mL'}
          </Text>
        </View>

        {/* 영양성분표 읽는 방법 */}
        {renderNutritionItem(
          '영양성분표 읽는 방법',
          '',
          '',
          true,
          <View style={styles.guideContent}>
            <Text style={styles.guideText}>
              영양성분표는 1회 제공량 기준으로 표시되며, 일일 영양소 기준치에 대한 비율(%)을 나타냅니다.
            </Text>
          </View>
        )}

        {/* 열량 및 3대 영양소 */}
        {renderNutritionItem(
          '열량 및 3대 영양소(3개)',
          '',
          '',
          true,
          <View style={styles.majorNutrients}>
            {renderNutritionItem('에너지', '40 / 2500kcal', '2%')}
            {renderNutritionItem(
              '탄수화물',
              '8 / 130g',
              '6%',
              true,
              <View style={styles.carbsDetail}>
                {renderNutritionItem('총 식이섬유', '2 / 30g', '7%')}
              </View>
            )}
          </View>
        )}

        {/* 무기질 */}
        {renderNutritionItem(
          '무기질(1개)',
          '',
          '',
          true,
          <View style={styles.minerals}>
            {renderNutritionItem('나트륨', '0.06 / 2.30g', '3%')}
          </View>
        )}
      </ScrollView>
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
  foodNameSection: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  foodName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
  },
  servingSelector: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
    marginBottom: 20,
  },
  servingButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeServingButton: {
    backgroundColor: '#8B5CF6',
  },
  servingButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeServingButtonText: {
    color: '#fff',
  },
  servingInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  servingInfoText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  nutritionItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  nutritionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  nutritionInfo: {
    flex: 1,
  },
  nutritionLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  nutritionValue: {
    fontSize: 14,
    color: '#666',
  },
  nutritionPercentage: {
    marginRight: 12,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  nutritionChildren: {
    paddingLeft: 16,
    paddingBottom: 16,
  },
  guideContent: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  guideText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  majorNutrients: {
    gap: 0,
  },
  carbsDetail: {
    paddingLeft: 16,
  },
  minerals: {
    gap: 0,
  },
});
