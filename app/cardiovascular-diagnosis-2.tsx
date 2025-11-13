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

export default function CardiovascularDiagnosis2Screen() {
  const { t } = useTranslation();
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const conditions: Condition[] = [
    // 근골격
    { id: 'osteoarthritis', name: t('cardiovascular.diagnosis.conditions.osteoarthritis'), category: t('cardiovascular.diagnosis.categories.musculoskeletal') },
    { id: 'rheumatoid_arthritis', name: t('cardiovascular.diagnosis.conditions.rheumatoid_arthritis'), category: t('cardiovascular.diagnosis.categories.musculoskeletal') },
    { id: 'osteoporosis', name: t('cardiovascular.diagnosis.conditions.osteoporosis'), category: t('cardiovascular.diagnosis.categories.musculoskeletal') },
    { id: 'sarcopenia', name: t('cardiovascular.diagnosis.conditions.sarcopenia'), category: t('cardiovascular.diagnosis.categories.musculoskeletal') },
    
    // 노년 건강
    { id: 'bph', name: t('cardiovascular.diagnosis.conditions.bph'), category: t('cardiovascular.diagnosis.categories.elderly') },
    { id: 'menopause', name: t('cardiovascular.diagnosis.conditions.menopause'), category: t('cardiovascular.diagnosis.categories.elderly') },
    
    // 면역 및 감각
    { id: 'eczema', name: t('cardiovascular.diagnosis.conditions.eczema'), category: t('cardiovascular.diagnosis.categories.immune') },
    { id: 'allergic_rhinitis', name: t('cardiovascular.diagnosis.conditions.allergic_rhinitis'), category: t('cardiovascular.diagnosis.categories.immune') },
    { id: 'asthma', name: t('cardiovascular.diagnosis.conditions.asthma'), category: t('cardiovascular.diagnosis.categories.immune') },
    { id: 'anemia', name: t('cardiovascular.diagnosis.conditions.anemia'), category: t('cardiovascular.diagnosis.categories.immune') },
    { id: 'glaucoma', name: t('cardiovascular.diagnosis.conditions.glaucoma'), category: t('cardiovascular.diagnosis.categories.immune') },
    { id: 'cataract', name: t('cardiovascular.diagnosis.conditions.cataract'), category: t('cardiovascular.diagnosis.categories.immune') },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/cardiovascular-diagnosis-3');
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
          {renderCategory(t('cardiovascular.diagnosis.categories.musculoskeletal'))}
          {renderCategory(t('cardiovascular.diagnosis.categories.elderly'))}
          {renderCategory(t('cardiovascular.diagnosis.categories.immune'))}
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
        <TouchableOpacity style={styles.prevButton} onPress={handleBack}>
          <Text style={styles.prevButtonText}>{t('common.previous')}</Text>
        </TouchableOpacity>
        
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>2/3</Text>
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
  prevButton: {
    backgroundColor: '#F3F4F6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  prevButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8B5CF6',
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
    paddingHorizontal: 24,
    borderRadius: 12,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
