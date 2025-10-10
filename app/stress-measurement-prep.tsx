import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StressMeasurementPrep() {
  const [currentStep, setCurrentStep] = useState(1);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    } else {
      // 측정 방법 안내 페이지로 이동
      router.push('/stress-measurement-guide');
    }
  };

  const handleDontShowAgain = () => {
    setDontShowAgain(true);
    // 바로 측정 방법 안내 페이지로 이동
    router.push('/stress-measurement-guide');
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
        <View style={styles.sittingIllustration}>
          {/* 앉은 사람 일러스트레이션 */}
          <View style={styles.personBody}>
            <View style={styles.personHead} />
            <View style={styles.personTorso} />
            <View style={styles.personArms}>
              <View style={styles.personArm} />
              <View style={styles.personArm} />
            </View>
            <View style={styles.personLegs}>
              <View style={styles.personLeg} />
              <View style={styles.personLeg} />
            </View>
          </View>
          <View style={styles.chair} />
        </View>
      </View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.mainInstruction}>자리에 앉기</Text>
        <Text style={styles.subInstruction}>
          측정하는 동안 자리에 앉아 차분하게 측정 해주세요
        </Text>
      </View>
    </View>
  );

  const renderStep2 = () => (
    <View style={styles.stepContainer}>
      <View style={styles.illustrationContainer}>
        <View style={styles.armPositionIllustration}>
          {/* 팔 위치 일러스트레이션 */}
          <View style={styles.desk} />
          <View style={styles.arm}>
            <View style={styles.upperArm} />
            <View style={styles.forearm} />
            <View style={styles.hand}>
              <View style={styles.phone} />
            </View>
          </View>
          <View style={styles.heartIndicator}>
            <Ionicons name="heart" size={20} color="#8B5CF6" />
            <View style={styles.heartArrow} />
          </View>
        </View>
      </View>
      
      <View style={styles.instructionContainer}>
        <Text style={styles.mainInstruction}>손을 올리고 팔꿈치를 책상에</Text>
        <Text style={styles.subInstruction}>
          팔의 자세를 그림처럼 만들고 손의 높이를 심장과 비슷하게 해주세요
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
        <Text style={styles.headerTitle}>스트레스 / 심박수 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 진행률 인디케이터 */}
      <View style={styles.progressContainer}>
        <View style={styles.progressDots}>
          <View style={[styles.progressDot, currentStep >= 1 && styles.progressDotActive]} />
          <View style={[styles.progressDot, currentStep >= 2 && styles.progressDotActive]} />
        </View>
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {currentStep === 1 ? renderStep1() : renderStep2()}
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.dontShowButton} onPress={handleDontShowAgain}>
          <Text style={styles.dontShowButtonText}>다시 보지 않기</Text>
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
    backgroundColor: '#8B5CF6',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationContainer: {
    marginBottom: 40,
  },
  sittingIllustration: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  personBody: {
    alignItems: 'center',
    zIndex: 2,
  },
  personHead: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    marginBottom: 10,
  },
  personTorso: {
    width: 60,
    height: 80,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    marginBottom: 10,
  },
  personArms: {
    flexDirection: 'row',
    gap: 20,
    marginBottom: 10,
  },
  personArm: {
    width: 8,
    height: 40,
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },
  personLegs: {
    flexDirection: 'row',
    gap: 20,
  },
  personLeg: {
    width: 8,
    height: 50,
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },
  chair: {
    position: 'absolute',
    bottom: 0,
    width: 120,
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  armPositionIllustration: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  desk: {
    position: 'absolute',
    bottom: 20,
    width: 160,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
  },
  arm: {
    alignItems: 'center',
    zIndex: 2,
  },
  upperArm: {
    width: 12,
    height: 60,
    backgroundColor: '#8B5CF6',
    borderRadius: 6,
    marginBottom: 5,
  },
  forearm: {
    width: 10,
    height: 50,
    backgroundColor: '#8B5CF6',
    borderRadius: 5,
    marginBottom: 5,
  },
  hand: {
    width: 40,
    height: 30,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phone: {
    width: 20,
    height: 30,
    backgroundColor: '#333',
    borderRadius: 4,
  },
  heartIndicator: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
  },
  heartArrow: {
    width: 2,
    height: 20,
    backgroundColor: '#8B5CF6',
    marginTop: 5,
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
  dontShowButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  dontShowButtonText: {
    fontSize: 16,
    color: '#666',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
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
