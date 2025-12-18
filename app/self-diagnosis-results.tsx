import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface CategoryItem {
  name: string;
  progress: number;
  status: '위험' | '주의' | '관심' | '양호';
}

interface Category {
  name: string;
  overallStatus: '위험' | '주의' | '관심' | '양호';
  items: CategoryItem[];
}

export default function SelfDiagnosisResultsScreen() {
  const { t } = useTranslation();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([
    t('selfDiagnosis.results.categories.diet'),
    t('selfDiagnosis.results.categories.lifestyle'),
    t('selfDiagnosis.results.categories.skinHealth')
  ]);

  const handleBack = () => {
    router.back();
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleItemPress = (categoryName: string, itemName: string) => {
    console.log('항목 선택:', categoryName, itemName);
    // 각 항목별 상세 페이지로 이동
  };

  const getStatusColor = (status: string) => {
    if (status === t('selfDiagnosis.results.status.danger')) return '#EF4444';
    if (status === t('selfDiagnosis.results.status.caution')) return '#F59E0B';
    if (status === t('selfDiagnosis.results.status.interest')) return '#10B981';
    if (status === t('selfDiagnosis.results.status.good')) return '#3B82F6';
    return '#6B7280';
  };

  const categories: Category[] = [
    {
      name: t('selfDiagnosis.results.categories.diet'),
      overallStatus: t('selfDiagnosis.results.status.danger'),
      items: [
        { name: t('selfDiagnosis.results.dietItems.carbDiet'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.transFatDiet'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.saturatedFatDiet'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.sugarDiet'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.eatingSpeed'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.afterMealSnack'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.overeating'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.sodiumDiet'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.lateNightMeal'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.dietItems.essentialFattyAcidDiet'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.dietItems.nutritionDiet'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.dietItems.proteinDiet'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
      ],
    },
    {
      name: t('selfDiagnosis.results.categories.lifestyle'),
      overallStatus: t('selfDiagnosis.results.status.interest'),
      items: [
        { name: t('selfDiagnosis.results.lifestyleItems.smoking'), progress: 0.2, status: t('selfDiagnosis.results.status.danger') },
        { name: t('selfDiagnosis.results.lifestyleItems.activityMetabolism'), progress: 0.5, status: t('selfDiagnosis.results.status.caution') },
        { name: t('selfDiagnosis.results.lifestyleItems.brainActivity'), progress: 0.7, status: t('selfDiagnosis.results.status.interest') },
        { name: t('selfDiagnosis.results.lifestyleItems.sleepRhythm'), progress: 0.7, status: t('selfDiagnosis.results.status.interest') },
        { name: t('selfDiagnosis.results.lifestyleItems.waterIntake'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.lifestyleItems.uvExposure'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.lifestyleItems.basalMetabolism'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.lifestyleItems.caffeineIntake'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.lifestyleItems.jointFunction'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.lifestyleItems.alcoholIntake'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
      ],
    },
    {
      name: t('selfDiagnosis.results.categories.skinHealth'),
      overallStatus: t('selfDiagnosis.results.status.good'),
      items: [
        { name: t('selfDiagnosis.results.skinHealthItems.uZoneSebum'), progress: 0.5, status: t('selfDiagnosis.results.status.caution') },
        { name: t('selfDiagnosis.results.skinHealthItems.tZoneSebum'), progress: 0.5, status: t('selfDiagnosis.results.status.caution') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinBarrier'), progress: 0.5, status: t('selfDiagnosis.results.status.caution') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinSebum'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.uvDamage'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinDamage'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinMoisture'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinExfoliation'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.eyeMuscles'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinRedness'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.melanin'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.skinDensity'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.photoAging'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
        { name: t('selfDiagnosis.results.skinHealthItems.expressionWrinkles'), progress: 0.8, status: t('selfDiagnosis.results.status.good') },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('selfDiagnosis.results.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {categories.map((category, categoryIndex) => {
          const isExpanded = expandedCategories.includes(category.name);
          
          return (
            <View key={categoryIndex} style={styles.categoryContainer}>
              {/* 카테고리 헤더 */}
              <TouchableOpacity
                style={styles.categoryHeader}
                onPress={() => toggleCategory(category.name)}
              >
                <View style={styles.categoryHeaderLeft}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(category.overallStatus) + '20' }]}>
                    <Text style={[styles.statusBadgeText, { color: getStatusColor(category.overallStatus) }]}>
                      {category.overallStatus}
                    </Text>
                  </View>
                </View>
                <Ionicons
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color="#fff"
                />
              </TouchableOpacity>

              {/* 카테고리 아이템들 */}
              {isExpanded && (
                <View style={styles.categoryItems}>
                  {category.items.map((item, itemIndex) => (
                    <TouchableOpacity
                      key={itemIndex}
                      style={styles.itemRow}
                      onPress={() => handleItemPress(category.name, item.name)}
                    >
                      <View style={styles.itemContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <View style={styles.progressBarContainer}>
                          <View style={styles.progressBarBackground}>
                            <View
                              style={[
                                styles.progressBarFill,
                                {
                                  width: `${item.progress * 100}%`,
                                  backgroundColor: getStatusColor(item.status),
                                },
                              ]}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.itemRight}>
                        <View style={[styles.itemStatusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
                          <Text style={[styles.itemStatusText, { color: getStatusColor(item.status) }]}>
                            {item.status}
                          </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#fff" />
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  categoryContainer: {
    marginBottom: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#0a0a0a',
  },
  categoryHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 12,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusBadgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryItems: {
    padding: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemContent: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 8,
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemStatusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  itemStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
