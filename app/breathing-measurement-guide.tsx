import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function BreathingMeasurementGuideScreen() {
  const [showAgain, setShowAgain] = useState(true);

  const handleClose = () => {
    router.back();
  };

  const handleDontShowAgain = () => {
    setShowAgain(false);
    router.back();
  };

  const handleStartMeasurement = () => {
    router.push('/breathing-measurement-active');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleClose}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡수 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {/* 안내 텍스트 */}
        <View style={styles.guideContainer}>
          <Text style={styles.guideTitle}>측정 시 움직임 자제하기</Text>
          <Text style={styles.guideSubtitle}>
            원 영역 안에 얼굴을 위치시키고{'\n'}밝은 곳에서 측정 해주세요
          </Text>
        </View>

        {/* 얼굴 위치 가이드 */}
        <View style={styles.faceGuideContainer}>
          <View style={styles.faceFrame}>
            <Ionicons name="person" size={80} color="#8B5CF6" />
          </View>
        </View>

        {/* 주의사항 */}
        <View style={styles.warningContainer}>
          <Ionicons name="warning" size={20} color="#F59E0B" />
          <Text style={styles.warningText}>
            카메라와 얼굴이 너무 가까우면 측정 되지 않을 수 있어요
          </Text>
        </View>

        {/* 측정 시작 버튼 */}
        <TouchableOpacity style={styles.startButton} onPress={handleStartMeasurement}>
          <Text style={styles.startButtonText}>측정 시작</Text>
        </TouchableOpacity>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.dontShowButton} onPress={handleDontShowAgain}>
          <Text style={styles.dontShowText}>다시 보지 않기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeText}>닫기</Text>
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
    alignItems: 'center',
  },
  guideContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  guideTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  guideSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  faceGuideContainer: {
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
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 40,
    maxWidth: width - 40,
  },
  warningText: {
    fontSize: 14,
    color: '#92400E',
    marginLeft: 8,
    flex: 1,
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginBottom: 40,
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 12,
  },
  dontShowButton: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  dontShowText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  closeButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  closeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});