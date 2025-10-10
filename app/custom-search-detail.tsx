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

export default function CustomSearchDetail() {
  const [activeTab, setActiveTab] = useState<'essential' | 'functional'>('essential');
  const [expandedNutrient, setExpandedNutrient] = useState<string | null>(null);

  const handleNutrientToggle = (nutrient: string) => {
    setExpandedNutrient(expandedNutrient === nutrient ? null : nutrient);
  };

  const handleClose = () => {
    router.back();
  };

  const essentialNutrients = [
    {
      id: 'vitamin-a',
      name: '비타민 A',
      status: 'supplement',
      statusText: '복약중 보충',
      statusColor: '#4caf50',
      description: '피부 건강과 시력에 중요한 비타민입니다.',
      recommendedDose: '800-1000 IU',
      sources: '당근, 시금치, 달걀, 우유',
    },
    {
      id: 'vitamin-c',
      name: '비타민 C',
      status: 'caution',
      statusText: '복약중 주의',
      statusColor: '#ff9800',
      description: '항산화 작용과 콜라겐 생성에 필수적입니다.',
      recommendedDose: '100-200mg',
      sources: '오렌지, 키위, 브로콜리, 토마토',
    },
    {
      id: 'vitamin-d',
      name: '비타민 D',
      status: 'normal',
      statusText: '정상',
      statusColor: '#2196f3',
      description: '뼈 건강과 면역력에 중요한 비타민입니다.',
      recommendedDose: '600-800 IU',
      sources: '연어, 계란, 우유, 햇빛',
    },
    {
      id: 'vitamin-k',
      name: '비타민 K',
      status: 'normal',
      statusText: '정상',
      statusColor: '#2196f3',
      description: '혈액 응고와 뼈 건강에 필요합니다.',
      recommendedDose: '90-120mcg',
      sources: '시금치, 브로콜리, 양배추',
    },
    {
      id: 'iodine',
      name: '요오드',
      status: 'normal',
      statusText: '정상',
      statusColor: '#2196f3',
      description: '갑상선 기능에 필수적인 미네랄입니다.',
      recommendedDose: '150mcg',
      sources: '해조류, 생선, 요오드화 소금',
    },
    {
      id: 'selenium',
      name: '셀레늄',
      status: 'caution',
      statusText: '복약중 주의',
      statusColor: '#ff9800',
      description: '항산화 작용과 면역력에 중요한 미네랄입니다.',
      recommendedDose: '55mcg',
      sources: '브라질너트, 참치, 계란',
    },
  ];

  const functionalIngredients = [
    {
      id: 'probiotics',
      name: '프로바이오틱스',
      description: '장내 미생물 균형을 개선합니다.',
      benefits: ['소화 개선', '면역력 향상', '장 건강'],
    },
    {
      id: 'omega3',
      name: '오메가-3',
      description: '뇌 건강과 심혈관 건강에 도움을 줍니다.',
      benefits: ['뇌 기능 개선', '심혈관 건강', '항염 작용'],
    },
    {
      id: 'collagen',
      name: '콜라겐',
      description: '피부 탄력과 관절 건강에 중요합니다.',
      benefits: ['피부 탄력', '관절 건강', '모발 건강'],
    },
  ];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>맞춤형 검색</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 개인별 발생원인 */}
        <View style={styles.causesCard}>
          <View style={styles.causesHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
            <Text style={styles.causesTitle}>개인별 발생원인</Text>
          </View>
          
          <View style={styles.causesList}>
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>지방식이?</Text>
              <View style={[styles.causeStatus, styles.causeStatusDanger]}>
                <Text style={styles.causeStatusText}>위험</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>운동량?</Text>
              <View style={[styles.causeStatus, styles.causeStatusCaution]}>
                <Text style={styles.causeStatusText}>주의</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>만성피로?</Text>
              <View style={[styles.causeStatus, styles.causeStatusDanger]}>
                <Text style={styles.causeStatusText}>위험</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>과당식이?</Text>
              <View style={[styles.causeStatus, styles.causeStatusConcern]}>
                <Text style={styles.causeStatusText}>관심</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
          </View>
        </View>

        {/* 필요 영양 정보 */}
        <View style={styles.nutrientCard}>
          <View style={styles.nutrientHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
            <Text style={styles.nutrientTitle}>필요 영양 정보</Text>
          </View>

          {/* 탭 버튼들 */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'essential' && styles.activeTabButton]}
              onPress={() => setActiveTab('essential')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'essential' && styles.activeTabButtonText]}>
                필수 영양소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'functional' && styles.activeTabButton]}
              onPress={() => setActiveTab('functional')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'functional' && styles.activeTabButtonText]}>
                기능성 성분
              </Text>
            </TouchableOpacity>
          </View>

          {/* 영양소 목록 */}
          <View style={styles.nutrientList}>
            {activeTab === 'essential' ? (
              essentialNutrients.map((nutrient) => (
                <View key={nutrient.id} style={styles.nutrientItem}>
                  <TouchableOpacity
                    style={styles.nutrientHeader}
                    onPress={() => handleNutrientToggle(nutrient.id)}
                  >
                    <View style={styles.nutrientInfo}>
                      <Text style={styles.nutrientName}>{nutrient.name}</Text>
                      <View style={[styles.nutrientStatus, { backgroundColor: nutrient.statusColor }]}>
                        <Text style={styles.nutrientStatusText}>{nutrient.statusText}</Text>
                      </View>
                    </View>
                    <Ionicons
                      name={expandedNutrient === nutrient.id ? "chevron-up" : "chevron-down"}
                      size={16}
                      color="#999"
                    />
                  </TouchableOpacity>
                  
                  {expandedNutrient === nutrient.id && (
                    <View style={styles.nutrientDetails}>
                      <Text style={styles.nutrientDescription}>{nutrient.description}</Text>
                      <View style={styles.nutrientDetailRow}>
                        <Text style={styles.nutrientDetailLabel}>권장 섭취량:</Text>
                        <Text style={styles.nutrientDetailValue}>{nutrient.recommendedDose}</Text>
                      </View>
                      <View style={styles.nutrientDetailRow}>
                        <Text style={styles.nutrientDetailLabel}>주요 공급원:</Text>
                        <Text style={styles.nutrientDetailValue}>{nutrient.sources}</Text>
                      </View>
                    </View>
                  )}
                </View>
              ))
            ) : (
              functionalIngredients.map((ingredient) => (
                <View key={ingredient.id} style={styles.nutrientItem}>
                  <TouchableOpacity
                    style={styles.nutrientHeader}
                    onPress={() => handleNutrientToggle(ingredient.id)}
                  >
                    <View style={styles.nutrientInfo}>
                      <Text style={styles.nutrientName}>{ingredient.name}</Text>
                    </View>
                    <Ionicons
                      name={expandedNutrient === ingredient.id ? "chevron-up" : "chevron-down"}
                      size={16}
                      color="#999"
                    />
                  </TouchableOpacity>
                  
                  {expandedNutrient === ingredient.id && (
                    <View style={styles.nutrientDetails}>
                      <Text style={styles.nutrientDescription}>{ingredient.description}</Text>
                      <View style={styles.benefitsList}>
                        <Text style={styles.benefitsTitle}>주요 효과:</Text>
                        {ingredient.benefits.map((benefit, index) => (
                          <Text key={index} style={styles.benefitItem}>• {benefit}</Text>
                        ))}
                      </View>
                    </View>
                  )}
                </View>
              ))
            )}
          </View>
        </View>
      </ScrollView>

      {/* 하단 닫기 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
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
    paddingVertical: 20,
  },
  causesCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  causesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  causesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  causesList: {
    gap: 12,
  },
  causeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  causeName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  causeStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  causeStatusDanger: {
    backgroundColor: '#ffebee',
  },
  causeStatusCaution: {
    backgroundColor: '#fff3e0',
  },
  causeStatusConcern: {
    backgroundColor: '#e8f5e8',
  },
  causeStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  nutrientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  nutrientHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  nutrientTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: '#8B5CF6',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: '#fff',
  },
  nutrientList: {
    gap: 12,
  },
  nutrientItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingBottom: 12,
  },
  nutrientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  nutrientName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  nutrientStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 8,
  },
  nutrientStatusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#fff',
  },
  nutrientDetails: {
    marginTop: 12,
    paddingLeft: 16,
  },
  nutrientDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  nutrientDetailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  nutrientDetailLabel: {
    fontSize: 14,
    color: '#666',
    width: 100,
  },
  nutrientDetailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  benefitsList: {
    marginTop: 8,
  },
  benefitsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  benefitItem: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  closeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
