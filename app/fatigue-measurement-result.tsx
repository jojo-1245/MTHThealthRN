import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();
  const handleBack = () => {
    router.back();
  };

  const handleAnalysisComplete = () => {
    // 분석 완료 후 메인 페이지로 이동
    router.push('/fatigue-main');
  };

  const symptoms = [
    t('fatigue.measurementResult.symptoms.anxiety'),
    t('fatigue.measurementResult.symptoms.depression'),
    t('fatigue.measurementResult.symptoms.lethargy'),
    t('fatigue.measurementResult.symptoms.chronicNeurasthenia'),
    t('fatigue.measurementResult.symptoms.acuteStress'),
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('fatigue.measurementResult.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 피로도 점수 */}
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreTitle}>{t('fatigue.measurementResult.scoreTitle')}</Text>
          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreValue}>73점</Text>
            <View style={styles.scoreBadge}>
              <Text style={styles.badgeText}>{t('fatigue.measurementResult.scoreBadge')}</Text>
            </View>
          </View>
        </View>

        {/* 격려 메시지 */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            {t('fatigue.measurementResult.message')}
          </Text>
        </View>

        {/* 피로 지속 시 안내 */}
        <View style={styles.warningContainer}>
          <Text style={styles.warningTitle}>{t('fatigue.measurementResult.warningTitle')}</Text>
          
          <View style={styles.warningIconContainer}>
            <View style={styles.personIcon}>
              <Ionicons name="person" size={40} color="#fff" />
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
              {t('fatigue.measurementResult.disclaimer')}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.completeButton} onPress={handleAnalysisComplete}>
          <Text style={styles.completeButtonText}>{t('fatigue.measurementResult.completeButton')}</Text>
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
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
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
    paddingTop: 40,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  scoreDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
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
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  warningContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
  warningTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#333',
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
    backgroundColor: '#1a1a1a',
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
    color: '#fff',
    width: 20,
  },
  symptomText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 8,
  },
  disclaimerContainer: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  disclaimerText: {
    fontSize: 14,
    color: '#fff',
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
