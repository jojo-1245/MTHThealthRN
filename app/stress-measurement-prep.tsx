import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();
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
        <Text style={styles.mainInstruction}>{t('stressHeartrate.measurement.prep.step1Title')}</Text>
        <Text style={styles.subInstruction}>
          {t('stressHeartrate.measurement.prep.step1Instruction')}
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
        <Text style={styles.mainInstruction}>{t('stressHeartrate.measurement.prep.step2Title')}</Text>
        <Text style={styles.subInstruction}>
          {t('stressHeartrate.measurement.prep.step2Instruction')}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
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
          <Text style={styles.dontShowButtonText}>{t('stressHeartrate.measurement.prep.dontShowAgain')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>{t('stressHeartrate.measurement.prep.next')}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#000',
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
  },
  progressDots: {
    flexDirection: 'row',
    gap: 8,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#666',
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
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  subInstruction: {
    fontSize: 16,
    color: '#fff',
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
    color: '#fff',
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
