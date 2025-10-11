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

export default function FaceMeasurement() {
  const [isDetecting, setIsDetecting] = useState(true);
  const [faceDetected, setFaceDetected] = useState(false);
  const [measurementProgress, setMeasurementProgress] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // 페이드 인 애니메이션
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // 얼굴 감지 시뮬레이션
    const detectionTimer = setTimeout(() => {
      setFaceDetected(true);
      setIsDetecting(false);
      setIsMeasuring(true);
      
      // 측정 시뮬레이션
      const measurementTimer = setInterval(() => {
        setMeasurementProgress(prev => {
          const newProgress = prev + 2;
          if (newProgress >= 100) {
            clearInterval(measurementTimer);
            setIsMeasuring(false);
            // 결과 페이지로 이동
            setTimeout(() => {
              router.push('/stress-measurement-result');
            }, 1000);
            return 100;
          }
          return newProgress;
        });
      }, 100);
    }, 2000);

    return () => {
      clearTimeout(detectionTimer);
    };
  }, []);

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
        <Text style={styles.headerTitle}>스트레스 / 심박수 측정</Text>
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
        {!faceDetected ? (
          // 얼굴 감지 전
          <View style={styles.preDetectionContainer}>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>측정 시작 전</Text>
            </View>
            
            <View style={styles.cameraFrame}>
              <View style={styles.cameraView}>
                <Text style={styles.cameraPlaceholder}>📱</Text>
              </View>
            </View>
            
            <View style={styles.instructionContainer}>
              <Text style={styles.mainInstruction}>얼굴이 감지되면 자동으로 측정이 시작됩니다</Text>
            </View>

            <View style={styles.positioningGuidance}>
              <Text style={styles.guidanceText}>
                원 영역 안에 머리와 얼굴이 위치하도록 해주세요
              </Text>
            </View>
          </View>
        ) : (
          // 측정 중
          <View style={styles.measurementContainer}>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>측정 중</Text>
            </View>
            
            <View style={styles.cameraFrame}>
              <View style={styles.measurementCircle}>
                <Text style={styles.progressText}>{measurementProgress}%</Text>
              </View>
            </View>
            
            <View style={styles.instructionContainer}>
              <Text style={styles.mainInstruction}>얼굴이 감지되면 자동으로 측정이 시작됩니다</Text>
            </View>

            <View style={styles.positioningGuidance}>
              <Text style={styles.guidanceText}>
                원 영역 안에 머리와 얼굴이 위치하도록 해주세요
              </Text>
            </View>
          </View>
        )}
      </View>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.methodButton} onPress={handleViewMethodAgain}>
          <Text style={styles.methodButtonText}>측정 방법 다시 보기</Text>
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
  preDetectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  measurementContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusContainer: {
    marginBottom: 20,
  },
  statusText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
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
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  positioningGuidance: {
    alignItems: 'center',
  },
  guidanceText: {
    fontSize: 16,
    color: '#ff6b6b',
    textAlign: 'center',
    fontWeight: '600',
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
