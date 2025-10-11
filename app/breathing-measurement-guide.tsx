import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BreathingMeasurementGuide() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // 실제 측정 페이지로 이동
      router.push('/breathing-measurement-active');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };

  const renderStep1 = () => (
    <View style={styles.stepContainer}>
      <View style={styles.illustrationContainer}>
        <View style={styles.facePositionIllustration}>
          {/* 얼굴 위치 일러스트레이션 */}
          <View style={styles.personHead}>
            <View style={styles.personFace}>
              <View style={styles.personEyes}>
                <View style={styles.personEye} />
                <View style={styles.personEye} />
              </View>
              <View style={styles.personMouth} />
            </View>
          </View>
          <View style={styles.phoneFrame}>
            <View style={styles.phoneScreen}>
              <View style={styles.cameraFrame}>
                <View style={styles.cameraCircle} />
                <Text style={styles.cameraText}>📱</Text>
              </View>
            </View>
          </View>
          <View style={styles.positionIndicator}>
            <Ionicons name="leaf" size={20} color="#10B981" />
            <View style={styles.positionArrow} />
          </View>
        </View>
      </View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.mainInstruction}>얼굴을 원 안에 위치시키기</Text>
        <Text style={styles.subInstruction}>
          얼굴을 원 안에 위치시키고 측정을 시작해주세요
        </Text>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContainer}>
      <View style={styles.illustrationContainer}>
        <View style={styles.breathingIllustration}>
          {/* 호흡 일러스트레이션 */}
          <View style={styles.personHead}>
            <View style={styles.personFace}>
              <View style={styles.personEyes}>
                <View style={styles.personEye} />
                <View style={styles.personEye} />
              </View>
              <View style={styles.personMouth} />
            </View>
          </View>
          <View style={styles.breathingCircles}>
            <View style={[styles.breathingCircle, styles.breathingCircle1]} />
            <View style={[styles.breathingCircle, styles.breathingCircle2]} />
            <View style={[styles.breathingCircle, styles.breathingCircle3]} />
          </View>
        </View>
      </View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.mainInstruction}>자연스럽게 호흡하기</Text>
        <Text style={styles.subInstruction}>
          자연스럽게 호흡하고 측정을 시작해주세요
        </Text>
      </View>
    </View>
  );

  const renderStep3 = () => (
    <View style={styles.stepContainer}>
      <View style={styles.illustrationContainer}>
        <View style={styles.measurementIllustration}>
          {/* 측정 일러스트레이션 */}
          <View style={styles.personHead}>
            <View style={styles.personFace}>
              <View style={styles.personEyes}>
                <View style={styles.personEye} />
                <View style={styles.personEye} />
              </View>
              <View style={styles.personMouth} />
            </View>
          </View>
          <View style={styles.measurementWaves}>
            <View style={styles.wave} />
            <View style={styles.wave} />
            <View style={styles.wave} />
          </View>
          <View style={styles.measurementIndicator}>
            <Ionicons name="leaf" size={24} color="#10B981" />
            <Text style={styles.measurementText}>측정 중</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.mainInstruction}>측정이 완료될 때까지 기다리기</Text>
        <Text style={styles.subInstruction}>
          측정이 완료될 때까지 기다려주세요
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 진행률 인디케이터 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressDots}>
          <View style={[styles.progressDot, currentStep >= 1 && styles.progressDotActive]} />
          <View style={[styles.progressDot, currentStep >= 2 && styles.progressDotActive]} />
          <View style={[styles.progressDot, currentStep >= 3 && styles.progressDotActive]} />
        </View>
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {currentStep === 1 ? renderStep1() : 
         currentStep === 2 ? renderStep2() : renderStep3()}
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.skipButton} onPress={() => router.push('/breathing-measurement-active')}>
          <Text style={styles.skipButtonText}>건너뛰기</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
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
    backgroundColor: '#10B981',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    marginBottom: 40,
  },
  facePositionIllustration: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  personHead: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
  phoneFrame: {
    position: 'absolute',
    bottom: 20,
    width: 80,
    height: 120,
    backgroundColor: '#333',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneScreen: {
    width: 70,
    height: 100,
    backgroundColor: '#000',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraFrame: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#10B981',
    opacity: 0.3,
  },
  cameraText: {
    position: 'absolute',
    fontSize: 16,
  },
  positionIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
  },
  positionArrow: {
    width: 2,
    height: 20,
    backgroundColor: '#10B981',
    marginTop: 5,
  },
  breathingIllustration: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  breathingCircles: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  breathingCircle: {
    position: 'absolute',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#10B981',
  },
  breathingCircle1: {
    width: 100,
    height: 100,
    opacity: 0.3,
  },
  breathingCircle2: {
    width: 120,
    height: 120,
    opacity: 0.2,
  },
  breathingCircle3: {
    width: 140,
    height: 140,
    opacity: 0.1,
  },
  measurementIllustration: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  measurementWaves: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wave: {
    width: 80,
    height: 2,
    backgroundColor: '#10B981',
    marginVertical: 4,
    borderRadius: 1,
  },
  measurementIndicator: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  measurementText: {
    fontSize: 12,
    color: '#10B981',
    marginTop: 4,
  },
  instructionContainer: {
    alignItems: 'center',
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
  bottomButtonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  skipButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  skipButtonText: {
    fontSize: 16,
    color: '#666',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#10B981',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
