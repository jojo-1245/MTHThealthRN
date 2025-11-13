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
import { useTranslation } from '@/i18n';

const { width, height } = Dimensions.get('window');

interface Condition {
  id: string;
  name: string;
  category: string;
}

export default function CardiovascularDiagnosis1Screen() {
  const { t } = useTranslation();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const conditions: Condition[] = [
    // 순환기능
    { id: 'hypertension', name: t('cardiovascular.diagnosis.conditions.hypertension'), category: t('cardiovascular.diagnosis.categories.circulation') },
    { id: 'hyperlipidemia', name: t('cardiovascular.diagnosis.conditions.hyperlipidemia'), category: t('cardiovascular.diagnosis.categories.circulation') },
    { id: 'atrial_fibrillation', name: t('cardiovascular.diagnosis.conditions.atrial_fibrillation'), category: t('cardiovascular.diagnosis.categories.circulation') },
    
    // 소화와 대사
    { id: 'type2_diabetes', name: t('cardiovascular.diagnosis.conditions.type2_diabetes'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'hypothyroidism', name: t('cardiovascular.diagnosis.conditions.hypothyroidism'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'hyperthyroidism', name: t('cardiovascular.diagnosis.conditions.hyperthyroidism'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'pms', name: t('cardiovascular.diagnosis.conditions.pms'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'chronic_hepatitis', name: t('cardiovascular.diagnosis.conditions.chronic_hepatitis'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'fatty_liver', name: t('cardiovascular.diagnosis.conditions.fatty_liver'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'constipation', name: t('cardiovascular.diagnosis.conditions.constipation'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'gerd', name: t('cardiovascular.diagnosis.conditions.gerd'), category: t('cardiovascular.diagnosis.categories.digestion') },
    { id: 'obesity', name: t('cardiovascular.diagnosis.conditions.obesity'), category: t('cardiovascular.diagnosis.categories.digestion') },
    
    // 마음과 정신건강
    { id: 'insomnia', name: t('cardiovascular.diagnosis.conditions.insomnia'), category: t('cardiovascular.diagnosis.categories.mental') },
    { id: 'stress_panic', name: t('cardiovascular.diagnosis.conditions.stress_panic'), category: t('cardiovascular.diagnosis.categories.mental') },
    { id: 'mild_cognitive', name: t('cardiovascular.diagnosis.conditions.mild_cognitive'), category: t('cardiovascular.diagnosis.categories.mental') },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/cardiovascular-diagnosis-2');
  };

  const handleConditionToggle = (conditionId: string) => {
    setSelectedConditions(prev => 
      prev.includes(conditionId) 
        ? prev.filter(id => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  const handleNoneOfAbove = () => {
    setSelectedConditions([]);
  };

  const renderCondition = (condition: Condition) => {
    const isSelected = selectedConditions.includes(condition.id);
    
    return (
      <TouchableOpacity
        key={condition.id}
        style={[
          styles.conditionItem,
          isSelected && styles.selectedConditionItem,
        ]}
        onPress={() => handleConditionToggle(condition.id)}
      >
        <Text style={[
          styles.conditionText,
          isSelected && styles.selectedConditionText,
        ]}>
          {condition.name}
        </Text>
        {isSelected && (
          <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
        )}
      </TouchableOpacity>
    );
  };

  const renderCategory = (categoryName: string) => {
    const categoryConditions = conditions.filter(c => c.category === categoryName);
    
    return (
      <View key={categoryName} style={styles.categorySection}>
        <Text style={styles.categoryTitle}>{categoryName}</Text>
        <View style={styles.conditionsContainer}>
          {categoryConditions.map(renderCondition)}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('cardiovascular.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 질문 섹션 */}
        <View style={styles.questionSection}>
          <View style={styles.questionIcon}>
            <Ionicons name="medical" size={32} color="#8B5CF6" />
          </View>
          <Text style={styles.questionText}>
            {t('cardiovascular.diagnosis.question1')}
          </Text>
          <Text style={styles.questionNote}>
            {t('cardiovascular.diagnosis.question1Note')}
          </Text>
        </View>

        {/* 질환 카테고리들 */}
        <View style={styles.categoriesContainer}>
          {renderCategory(t('cardiovascular.diagnosis.categories.circulation'))}
          {renderCategory(t('cardiovascular.diagnosis.categories.digestion'))}
          {renderCategory(t('cardiovascular.diagnosis.categories.mental'))}
        </View>

        {/* 모두 해당 없음 버튼 */}
        <TouchableOpacity 
          style={styles.noneButton} 
          onPress={handleNoneOfAbove}
        >
          <Text style={styles.noneButtonText}>{t('cardiovascular.diagnosis.noneOfAbove')}</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomContainer}>
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>1/3</Text>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{t('common.next')}</Text>
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
    backgroundColor: '#fff',
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
    color: '#000',
  },
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  questionSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  questionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },
  questionNote: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  categoriesContainer: {
    gap: 24,
    marginBottom: 20,
  },
  categorySection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  conditionsContainer: {
    gap: 12,
  },
  conditionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedConditionItem: {
    backgroundColor: '#F3E8FF',
    borderColor: '#8B5CF6',
  },
  conditionText: {
    fontSize: 16,
    color: '#374151',
  },
  selectedConditionText: {
    color: '#8B5CF6',
    fontWeight: '500',
  },
  noneButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  noneButtonText: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '500',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  pageIndicator: {
    alignItems: 'center',
  },
  pageText: {
    fontSize: 14,
    color: '#6B7280',
  },
  nextButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
