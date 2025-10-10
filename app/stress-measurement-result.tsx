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

export default function StressMeasurementResult() {
  const handleAnalysisComplete = () => {
    // 메인 페이지로 돌아가기
    router.push('/stress-heartrate');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>스트레스 / 심박수 결과</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 스트레스 점수 섹션 */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>스트레스 점수</Text>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreValue}>64점</Text>
            <View style={styles.scoreBadge}>
              <Text style={styles.scoreBadgeText}>관심</Text>
            </View>
          </View>
          <Text style={styles.scoreAdvice}>
            마음의 여유를 가지면 더 좋아질거에요
          </Text>
        </View>

        {/* 심박수 섹션 */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>심박수</Text>
          <View style={styles.heartRateContainer}>
            <Text style={styles.heartRateValue}>61 회/분</Text>
            <View style={styles.heartRateBadge}>
              <Text style={styles.heartRateBadgeText}>양호</Text>
            </View>
          </View>
          
          {/* 심박수 범위 표시 */}
          <View style={styles.heartRateRange}>
            <View style={styles.rangeBar}>
              <View style={styles.rangeBackground} />
              <View style={styles.rangeFill} />
              <View style={styles.userMarker} />
            </View>
            <View style={styles.rangeLabels}>
              <Text style={styles.rangeLabel}>40</Text>
              <Text style={styles.rangeLabel}>60</Text>
              <Text style={styles.rangeLabel}>99</Text>
            </View>
            <View style={styles.rangeDescription}>
              <View style={styles.rangeIndicator} />
              <Text style={styles.rangeDescriptionText}>내 또래 안정 심박 범위</Text>
            </View>
          </View>
        </View>

        {/* 스트레스가 쌓이면? 섹션 */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>스트레스가 쌓이면?</Text>
          
          {/* 일러스트레이션 */}
          <View style={styles.stressIllustration}>
            <View style={styles.personHead}>
              <View style={styles.personFace}>
                <View style={styles.personEyes}>
                  <View style={styles.personEye} />
                  <View style={styles.personEye} />
                </View>
                <View style={styles.personMouth} />
              </View>
              <View style={styles.stressLightning}>
                <Ionicons name="flash" size={16} color="#ff6b6b" />
                <Ionicons name="flash" size={16} color="#ff6b6b" />
                <Ionicons name="flash" size={16} color="#ff6b6b" />
              </View>
            </View>
          </View>

          {/* 스트레스 증상 목록 */}
          <View style={styles.symptomsList}>
            <Text style={styles.symptomsTitle}>스트레스 증상:</Text>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>1. 초조 및 긴장</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>2. 불면</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>3. 죄책감, 자책감</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>4. 자극적인 행위(게임, 휴대폰)에 과몰입</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>5. 무기력함</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>6. 소화불량</Text>
            </View>
            <View style={styles.symptomItem}>
              <Text style={styles.symptomText}>7. 두통 및 어지러움</Text>
            </View>
          </View>

          <Text style={styles.specialistAdvice}>
            위 증상이 지속적으로 나타난다면 전문가와 상담해보세요
          </Text>
        </View>

        {/* 정확도 정보 */}
        <View style={styles.accuracyCard}>
          <Text style={styles.accuracyTitle}>정확도 정보</Text>
          <Text style={styles.accuracyText}>
            위 결과는 딥메디를 통해 제공되며 아래의 정확도로 분석됩니다.
          </Text>
          <View style={styles.accuracyList}>
            <Text style={styles.accuracyItem}>
              • 스트레스 지수: 95% 정확도 (KCL 공인시험 성적)
            </Text>
            <Text style={styles.accuracyItem}>
              • 심박수: 98% 정확도 (KTL 및 KCL 공인시험 성적)
            </Text>
          </View>
          <Text style={styles.disclaimer}>
            스트레스 지수 / 심박수 측정 서비스는 의료기기가 아니며, 본 서비스의 목적은 질병의 진단, 치료, 경감, 처치, 예방에 있지 않습니다.
          </Text>
        </View>
      </ScrollView>

      {/* 하단 분석 완료 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.completeButton} onPress={handleAnalysisComplete}>
          <Text style={styles.completeButtonText}>분석 완료</Text>
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
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginRight: 12,
  },
  scoreBadge: {
    backgroundColor: '#4caf50',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  scoreBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  scoreAdvice: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  heartRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  heartRateValue: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    marginRight: 12,
  },
  heartRateBadge: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  heartRateBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  heartRateRange: {
    marginTop: 20,
  },
  rangeBar: {
    height: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    position: 'relative',
    marginBottom: 8,
  },
  rangeBackground: {
    position: 'absolute',
    left: '40%',
    width: '40%',
    height: '100%',
    backgroundColor: '#2196f3',
    borderRadius: 4,
  },
  rangeFill: {
    position: 'absolute',
    left: '40%',
    width: '40%',
    height: '100%',
    backgroundColor: 'rgba(33, 150, 243, 0.3)',
    borderRadius: 4,
  },
  userMarker: {
    position: 'absolute',
    left: '20%',
    top: -4,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 12,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#2196f3',
  },
  rangeLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  rangeLabel: {
    fontSize: 12,
    color: '#666',
  },
  rangeDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rangeIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#2196f3',
    marginRight: 8,
  },
  rangeDescriptionText: {
    fontSize: 12,
    color: '#666',
  },
  stressIllustration: {
    alignItems: 'center',
    marginBottom: 20,
  },
  personHead: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ffb3ba',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  personFace: {
    alignItems: 'center',
  },
  personEyes: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  personEye: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#333',
  },
  personMouth: {
    width: 16,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  stressLightning: {
    position: 'absolute',
    top: -10,
    flexDirection: 'row',
    gap: 4,
  },
  symptomsList: {
    marginBottom: 16,
  },
  symptomsTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  symptomItem: {
    marginBottom: 8,
  },
  symptomText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  specialistAdvice: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 20,
  },
  accuracyCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  accuracyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  accuracyText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  accuracyList: {
    marginBottom: 12,
  },
  accuracyItem: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 4,
  },
  disclaimer: {
    fontSize: 12,
    color: '#999',
    lineHeight: 18,
    fontStyle: 'italic',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  completeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
