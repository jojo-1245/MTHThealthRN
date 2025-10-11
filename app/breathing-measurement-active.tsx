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

export default function BreathingMeasurementActive() {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [progress, setProgress] = useState(0);
  const [faceDetected, setFaceDetected] = useState(false);
  const [measurementStatus, setMeasurementStatus] = useState('측정 시작 전');
  
  const pulseAnim = new Animated.Value(1);
  const breathingAnim = new Animated.Value(1);

  useEffect(() => {
    // 펄스 애니메이션
    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );

    // 호흡 애니메이션
    const breathingAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(breathingAnim, {
          toValue: 1.1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(breathingAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    );

    if (isMeasuring) {
      pulseAnimation.start();
      breathingAnimation.start();
    }

    return () => {
      pulseAnimation.stop();
      breathingAnimation.stop();
    };
  }, [isMeasuring]);

  const startMeasurement = () => {
    setIsMeasuring(true);
    setMeasurementStatus('측정 중');
    setFaceDetected(true);
    
    // 진행률 시뮬레이션
    let currentProgress = 0;
    const progressInterval = setInterval(() => {
      currentProgress += 2;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          router.push('/breathing-measurement-result');
        }, 1000);
      }
    }, 100);
  };

  const stopMeasurement = () => {
    setIsMeasuring(false);
    setMeasurementStatus('측정 시작 전');
    setProgress(0);
    setFaceDetected(false);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 카메라 인터페이스 */}
      <View style={styles.cameraContainer}>
        {/* 카메라 배경 */}
        <View style={styles.cameraBackground}>
          <Text style={styles.cameraPlaceholder}>📱</Text>
        </View>

        {/* 얼굴 감지 원형 프레임 */}
        <View style={styles.faceFrame}>
          <View style={styles.faceFrameCircle}>
            {faceDetected && (
              <Animated.View 
                style={[
                  styles.faceDetectedIndicator,
                  {
                    transform: [{ scale: pulseAnim }]
                  }
                ]}
              />
            )}
          </View>
        </View>

        {/* 측정 상태 표시 */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{measurementStatus}</Text>
          {isMeasuring && (
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress}%` }]} />
              </View>
              <Text style={styles.progressText}>{progress}%</Text>
            </View>
          )}
        </View>

        {/* 호흡 가이드 */}
        {isMeasuring && (
          <View style={styles.breathingGuide}>
            <Animated.View 
              style={[
                styles.breathingCircle,
                {
                  transform: [{ scale: breathingAnim }]
                }
              ]}
            >
              <Ionicons name="leaf" size={40} color="#10B981" />
            </Animated.View>
            <Text style={styles.breathingText}>자연스럽게 호흡하세요</Text>
          </View>
        )}

        {/* 위치 안내 텍스트 */}
        <View style={styles.positionGuide}>
          <Text style={styles.positionText}>
            원 영역 안에 머리와 얼굴이 위치하도록 해주세요
          </Text>
        </View>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        {!isMeasuring ? (
          <TouchableOpacity style={styles.startButton} onPress={startMeasurement}>
            <Ionicons name="play" size={24} color="#fff" />
            <Text style={styles.startButtonText}>측정 시작</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.stopButton} onPress={stopMeasurement}>
            <Ionicons name="stop" size={24} color="#fff" />
            <Text style={styles.stopButtonText}>측정 중지</Text>
          </TouchableOpacity>
        )}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
  cameraContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  cameraBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraPlaceholder: {
    fontSize: 100,
    opacity: 0.3,
  },
  faceFrame: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceFrameCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  faceDetectedIndicator: {
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#10B981',
    opacity: 0.3,
  },
  statusContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
  },
  statusText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressBar: {
    width: 200,
    height: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#10B981',
    borderRadius: 2,
  },
  progressText: {
    fontSize: 14,
    color: '#fff',
    marginTop: 8,
  },
  breathingGuide: {
    position: 'absolute',
    bottom: 150,
    alignItems: 'center',
  },
  breathingCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  breathingText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  positionGuide: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  positionText: {
    fontSize: 14,
    color: '#ff6b6b',
    textAlign: 'center',
    fontWeight: '500',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  startButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  stopButton: {
    backgroundColor: '#ff6b6b',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  stopButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
});
