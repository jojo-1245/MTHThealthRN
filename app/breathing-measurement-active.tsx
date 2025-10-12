import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function BreathingMeasurementActiveScreen() {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [breathingRate, setBreathingRate] = useState(0);

  useEffect(() => {
    if (isMeasuring) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            setIsMeasuring(false);
            // 측정 완료 후 결과 페이지로 이동
            setTimeout(() => {
              router.push('/breathing-measurement-result');
            }, 1000);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isMeasuring]);

  const handleStartMeasurement = () => {
    setIsMeasuring(true);
    setCountdown(3);
  };

  const handleStopMeasurement = () => {
    setIsMeasuring(false);
    setCountdown(3);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡수 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {/* 측정 상태 표시 */}
        <View style={styles.statusContainer}>
          {isMeasuring ? (
            <View style={styles.measuringContainer}>
              <View style={styles.measuringIcon}>
                <Ionicons name="pulse" size={40} color="#8B5CF6" />
              </View>
              <Text style={styles.measuringText}>측정 중...</Text>
              <Text style={styles.countdownText}>{countdown}</Text>
            </View>
          ) : (
            <View style={styles.readyContainer}>
              <View style={styles.readyIcon}>
                <Ionicons name="play-circle" size={60} color="#8B5CF6" />
              </View>
              <Text style={styles.readyText}>측정 준비 완료</Text>
              <Text style={styles.instructionText}>
                얼굴을 원형 프레임 안에 맞추고{'\n'}자연스럽게 호흡하세요
              </Text>
            </View>
          )}
        </View>

        {/* 얼굴 프레임 */}
        <View style={styles.faceFrameContainer}>
          <View style={styles.faceFrame}>
            <Ionicons name="person" size={80} color="#8B5CF6" />
          </View>
        </View>

        {/* 측정 결과 표시 */}
        {breathingRate > 0 && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultLabel}>현재 호흡수</Text>
            <Text style={styles.resultValue}>{breathingRate}회/분</Text>
          </View>
        )}

        {/* 측정 버튼 */}
        <View style={styles.buttonContainer}>
          {!isMeasuring ? (
            <TouchableOpacity style={styles.startButton} onPress={handleStartMeasurement}>
              <Text style={styles.startButtonText}>측정 시작</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.stopButton} onPress={handleStopMeasurement}>
              <Text style={styles.stopButtonText}>측정 중지</Text>
            </TouchableOpacity>
          )}
        </View>
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
    alignItems: 'center',
  },
  statusContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  measuringContainer: {
    alignItems: 'center',
  },
  measuringIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  measuringText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 8,
  },
  countdownText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  readyContainer: {
    alignItems: 'center',
  },
  readyIcon: {
    marginBottom: 16,
  },
  readyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  instructionText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  faceFrameContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  faceFrame: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#8B5CF6',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  resultLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  resultValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  stopButton: {
    backgroundColor: '#EF4444',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  stopButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});