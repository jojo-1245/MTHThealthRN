import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function CustomCareInfo() {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>맞춤형 케어 검색이란?</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 소개 섹션 */}
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart" size={48} color="#8B5CF6" />
          </View>
          <Text style={styles.title}>개인 맞춤형 건강 관리</Text>
          <Text style={styles.description}>
            나의 건강 상태와 관리 필요 항목을 분석하여 최적의 제품과 서비스를 추천해드립니다.
          </Text>
        </View>

        {/* 주요 기능 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>주요 기능</Text>
          
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="analytics" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>개인 건강 분석</Text>
                <Text style={styles.featureDescription}>
                  자가진단 결과를 바탕으로 개인의 건강 상태를 종합적으로 분석합니다.
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="search" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>맞춤 제품 검색</Text>
                <Text style={styles.featureDescription}>
                  건강 상태에 맞는 영양제, 화장품, 의료기기 등을 추천합니다.
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark-circle" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>적합도 평가</Text>
                <Text style={styles.featureDescription}>
                  제품의 성분과 개인 건강 상태의 적합도를 정확하게 평가합니다.
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="nutrition" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>영양소 분석</Text>
                <Text style={styles.featureDescription}>
                  필요한 영양소와 섭취량을 개인별로 맞춤 분석해드립니다.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 사용 방법 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>사용 방법</Text>
          
          <View style={styles.stepList}>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>관리 필요 항목 선택</Text>
                <Text style={styles.stepDescription}>
                  피지과다, 홍조, 건조함, 민감성, 트러블, 안티에이징 중 원하는 항목을 선택하세요.
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>카테고리 선택</Text>
                <Text style={styles.stepDescription}>
                  건강기능식품, 화장품, 의료기기, 식품, 생활용품 중 분석할 카테고리를 선택하세요.
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>제품 검색 또는 스캔</Text>
                <Text style={styles.stepDescription}>
                  제품명을 직접 입력하거나 카메라로 제품을 스캔하여 분석을 시작하세요.
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>4</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>맞춤 결과 확인</Text>
                <Text style={styles.stepDescription}>
                  개인 건강 상태에 맞는 적합도와 상세 분석 결과를 확인하세요.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 주의사항 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>주의사항</Text>
          
          <View style={styles.warningList}>
            <View style={styles.warningItem}>
              <Ionicons name="warning" size={20} color="#ff9800" />
              <Text style={styles.warningText}>
                이 서비스는 참고용이며, 의료진의 진단을 대체하지 않습니다.
              </Text>
            </View>
            
            <View style={styles.warningItem}>
              <Ionicons name="information-circle" size={20} color="#2196f3" />
              <Text style={styles.warningText}>
                복용 중인 약물이 있다면 의사와 상담 후 영양제를 섭취하세요.
              </Text>
            </View>
            
            <View style={styles.warningItem}>
              <Ionicons name="shield-checkmark" size={20} color="#4caf50" />
              <Text style={styles.warningText}>
                제품 정보는 식약처 등록 정보를 기반으로 제공됩니다.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.startButtonText}>맞춤형 검색 시작하기</Text>
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
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  featureList: {
    gap: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  stepList: {
    gap: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  warningList: {
    gap: 16,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  warningText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginLeft: 12,
    flex: 1,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
