import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
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

export default function FatigueMeasurementResultScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleAnalysisComplete = () => {
    // 분석 완료 후 메인 페이지로 이동
    router.push('/fatigue-main');
  };

  const symptoms = [
    '불안 증상',
    '우울감',
    '무기력함',
    '만성 신경쇠약',
    '급성 스트레스',
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>피로도 측정 결과</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 피로도 점수 */}
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreTitle}>피로도</Text>
          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreValue}>73점</Text>
            <View style={styles.scoreBadge}>
              <Text style={styles.badgeText}>양호</Text>
            </View>
          </View>
        </View>

        {/* 격려 메시지 */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            피로 회복을 잘 하고 계시네요!{'\n'}
            지금 상태를 유지하세요
          </Text>
        </View>

        {/* 피로 지속 시 안내 */}
        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>피로가 지속되면?</Text>
          
          <View style={styles.warningIconContainer}>
            <View style={styles.personIcon}>
              <Ionicons name="person" size={40} color="#6B7280" />
            </View>
            <View style={styles.batteryIcon}>
              <Ionicons name="battery-dead" size={24} color="#EF4444" />
            </View>
          </View>

          {/* 증상 목록 */}
          <View style={styles.symptomsContainer}>
            {symptoms.map((symptom, index) => (
              <View key={index} style={styles.symptomItem}>
                <Text style={styles.symptomNumber}>{index + 1}.</Text>
                <Text style={styles.symptomText}>{symptom}</Text>
              </View>
            ))}
          </View>

          {/* 주의사항 */}
          <View style={styles.disclaimerContainer}>
            <Text style={styles.disclaimerText}>
              위 증상이 지속적으로 나타난다면 전문가와 상담해보세요
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
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
    paddingTop: 40,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  scoreDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 16,
  },
  scoreBadge: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  messageText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  warningContainer: {
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  warningIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  personIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  batteryIcon: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FEF2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  symptomsContainer: {
    marginBottom: 20,
  },
  symptomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  symptomNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B7280',
    width: 20,
  },
  symptomText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 8,
  },
  disclaimerContainer: {
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#92400E',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  completeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
