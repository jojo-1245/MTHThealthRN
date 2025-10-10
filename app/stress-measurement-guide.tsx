import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StressMeasurementGuide() {
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleStartMeasurement = () => {
    // 실제 측정 페이지로 이동
    router.push('/stress-measurement-active');
  };

  const handleDontShowAgain = () => {
    setDontShowAgain(true);
    // 바로 측정 페이지로 이동
    router.push('/stress-measurement-active');
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>스트레스 / 심박수 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 진행률 인디케이터 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressDots}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={styles.progressDot} />
        </View>
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        <View style={styles.instructionContainer}>
          <Text style={styles.mainInstruction}>검지로 후면 카메라 가리기</Text>
          <Text style={styles.subInstruction}>
            검지로 후면 카메라를 가리면 자동으로 측정이 시작돼요
          </Text>
        </View>

        {/* 일러스트레이션 */}
        <View style={styles.illustrationContainer}>
          <View style={styles.phoneIllustration}>
            {/* 스마트폰 일러스트레이션 */}
            <View style={styles.phoneBody}>
              <View style={styles.phoneScreen}>
                <View style={styles.phoneContent}>
                  <Text style={styles.phoneText}>📱</Text>
                </View>
              </View>
              <View style={styles.phoneBack}>
                <View style={styles.cameraLens}>
                  <View style={styles.cameraLensInner} />
                </View>
              </View>
            </View>
            
            {/* 손가락 일러스트레이션 */}
            <View style={styles.fingerIllustration}>
              <View style={styles.finger}>
                <View style={styles.fingerTip} />
                <View style={styles.fingerBody} />
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.dontShowButton} onPress={handleDontShowAgain}>
          <Text style={styles.dontShowButtonText}>다시 보지 않기</Text>
        </TouchableOpacity>
        
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
  progressContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  progressDots: {
    flexDirection: 'row',
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e0e0e0',
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
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 40,
  },
  mainInstruction: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  subInstruction: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneIllustration: {
    width: 200,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  phoneBody: {
    width: 80,
    height: 160,
    backgroundColor: '#333',
    borderRadius: 12,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneScreen: {
    width: 70,
    height: 120,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 24,
  },
  phoneBack: {
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: [{ translateX: -15 }],
  },
  cameraLens: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  cameraLensInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#000',
  },
  fingerIllustration: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  finger: {
    alignItems: 'center',
  },
  fingerTip: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ffb3ba',
    marginBottom: 5,
  },
  fingerBody: {
    width: 12,
    height: 40,
    backgroundColor: '#ffb3ba',
    borderRadius: 6,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  dontShowButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  dontShowButtonText: {
    fontSize: 16,
    color: '#666',
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
