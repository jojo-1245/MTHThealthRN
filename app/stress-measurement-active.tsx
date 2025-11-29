import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StressMeasurementActive() {
  const { t } = useTranslation();
  const [measurementProgress, setMeasurementProgress] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measurementComplete, setMeasurementComplete] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // 페이드 인 애니메이션
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  const handleStartMeasurement = () => {
    setIsMeasuring(true);
    setMeasurementProgress(0);
    
    // 측정 시뮬레이션 (실제로는 카메라 센서 데이터를 사용)
    const interval = setInterval(() => {
      setMeasurementProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsMeasuring(false);
          setMeasurementComplete(true);
          // 결과 페이지로 이동
          setTimeout(() => {
            router.push('/stress-measurement-result');
          }, 1000);
          return 100;
        }
        return newProgress;
      });
    }, 100);
  };

  const handleViewMethodAgain = () => {
    router.push('/stress-measurement-guide');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('stressHeartrate.measurement.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 진행률 인디케이터 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressDots}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, isMeasuring && styles.progressDotActive]} />
        </View>
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {!isMeasuring && !measurementComplete ? (
          // 측정 시작 전
          <View style={styles.preMeasurementContainer}>
            <View style={styles.cameraFrame}>
              <View style={styles.cameraView}>
                <Text style={styles.cameraPlaceholder}>📱</Text>
              </View>
            </View>
            
            <View style={styles.instructionContainer}>
              <Text style={styles.mainInstruction}>{t('stressHeartrate.measurement.active.coverCamera')}</Text>
              <Text style={styles.subInstruction}>
                {t('stressHeartrate.measurement.active.coverInstruction')}
              </Text>
            </View>

            <TouchableOpacity style={styles.startButton} onPress={handleStartMeasurement}>
              <Text style={styles.startButtonText}>{t('stressHeartrate.measurement.active.startButton')}</Text>
            </TouchableOpacity>
          </View>
        ) : (
          // 측정 중
          <View style={styles.measurementContainer}>
            <View style={styles.cameraFrame}>
              <View style={styles.measurementCircle}>
                <Text style={styles.progressText}>{measurementProgress}%</Text>
              </View>
            </View>
            
            <View style={styles.instructionContainer}>
              <Text style={styles.mainInstruction}>{t('stressHeartrate.measurement.active.coverCamera')}</Text>
              <Text style={styles.subInstruction}>
                {t('stressHeartrate.measurement.active.coverInstruction')}
              </Text>
            </View>

            <View style={styles.warningContainer}>
              <Text style={styles.warningText}>
                {t('stressHeartrate.measurement.active.warningText')}
              </Text>
            </View>

            <View style={styles.iosWarningContainer}>
              <Text style={styles.iosWarningText}>
                {t('stressHeartrate.measurement.active.iosWarning')}
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.methodButton} onPress={handleViewMethodAgain}>
          <Text style={styles.methodButtonText}>{t('stressHeartrate.measurement.active.viewMethodAgain')}</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  headerRight: {
    width: 34,
  },
  progressContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  progressDots: {
    flexDirection: 'row',
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  progressDotActive: {
    backgroundColor: '#8B5CF6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preMeasurementContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  measurementContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraFrame: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  cameraView: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  cameraPlaceholder: {
    fontSize: 48,
    color: 'rgba(255, 255, 255, 0.5)',
  },
  measurementCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    backgroundColor: 'rgba(255, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  progressText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#fff',
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  mainInstruction: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subInstruction: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 24,
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 20,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  warningContainer: {
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  warningText: {
    fontSize: 14,
    color: '#ffc107',
    textAlign: 'center',
    fontWeight: '600',
  },
  iosWarningContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  iosWarningText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    textAlign: 'center',
    lineHeight: 18,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  methodButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  methodButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
