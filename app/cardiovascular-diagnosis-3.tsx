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

interface Condition {
  id: string;
  name: string;
  category: string;
}

export default function CardiovascularDiagnosis3Screen() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);

  const conditions: Condition[] = [
    // 순환기능
    { id: 'family_hypertension', name: '고혈압', category: '순환기능' },
    { id: 'family_myocardial_infarction', name: '심근경색', category: '순환기능' },
    { id: 'family_stroke', name: '뇌졸중', category: '순환기능' },
    { id: 'family_hyperlipidemia', name: '고지혈증', category: '순환기능' },
    
    // 소화와 대사
    { id: 'family_type2_diabetes', name: '2형당뇨', category: '소화와 대사' },
    { id: 'family_thyroid_disease', name: '갑상선 질환', category: '소화와 대사' },
    { id: 'family_obesity', name: '비만', category: '소화와 대사' },
    { id: 'family_fatty_liver', name: '지방간', category: '소화와 대사' },
    { id: 'family_liver_cirrhosis', name: '간경병증', category: '소화와 대사' },
    { id: 'family_ulcerative_colitis', name: '궤양성대장염', category: '소화와 대사' },
    
    // 면역 및 감각
    { id: 'family_eczema', name: '습진(아토피)', category: '면역 및 감각' },
    { id: 'family_allergy_asthma', name: '알레르기 및 천식', category: '면역 및 감각' },
    { id: 'family_hair_loss', name: '탈모', category: '면역 및 감각' },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/cardiovascular-complete');
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
        <Text style={styles.headerTitle}>진단하기</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 질문 섹션 */}
        <View style={styles.questionSection}>
          <View style={styles.questionIcon}>
            <Ionicons name="home" size={32} color="#8B5CF6" />
          </View>
          <Text style={styles.questionText}>
            현재 가족이 앓고 있는 증상이 있나요?
          </Text>
          <Text style={styles.questionNote}>
            *직계가족이나 사촌 중 같은 질병을 2명 이상 앓은 경우
          </Text>
        </View>

        {/* 질환 카테고리들 */}
        <View style={styles.categoriesContainer}>
          {renderCategory('순환기능')}
          {renderCategory('소화와 대사')}
          {renderCategory('면역 및 감각')}
        </View>

        {/* 모두 해당 없음 버튼 */}
        <TouchableOpacity 
          style={styles.noneButton} 
          onPress={handleNoneOfAbove}
        >
          <Text style={styles.noneButtonText}>모두 해당 없음</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.prevButton} onPress={handleBack}>
          <Text style={styles.prevButtonText}>이전</Text>
        </TouchableOpacity>
        
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>3/3</Text>
        </View>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
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
