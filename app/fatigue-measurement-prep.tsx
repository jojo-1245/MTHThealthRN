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

export default function FatigueMeasurementPrepScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleStartMeasurement = () => {
    // 측정 시작 로직
    console.log('피로도 측정 시작');
    router.push('/fatigue-measurement-result');
  };

  const handleViewMethodAgain = () => {
    // 측정 방법 다시 보기 로직
    console.log('측정 방법 다시 보기');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>피로도 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 텍스트 */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionTitle}>측정 시작 전</Text>
          <Text style={styles.instructionText}>
            얼굴이 감지되면 자동으로 측정이 시작됩니다
          </Text>
        </View>

        {/* 측정 영역 */}
        <View style={styles.measurementArea}>
          <View style={styles.circleFrame}>
            <View style={styles.faceDetectionArea}>
              {/* 얼굴 감지 영역 */}
            </View>
          </View>
        </View>

        {/* 안내 메시지 */}
        <View style={styles.guidanceContainer}>
          <Text style={styles.guidanceText}>
            원 영역 안에 머리와 얼굴이 위치하도록 해주세요
          </Text>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.helpButton} onPress={handleViewMethodAgain}>
          <Text style={styles.helpButtonText}>측정 방법 다시 보기</Text>
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
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  instructionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  instructionText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  measurementArea: {
    alignItems: 'center',
    marginBottom: 40,
  },
  circleFrame: {
    width: 280,
    height: 280,
    borderRadius: 140,
    borderWidth: 3,
    borderColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F9FF',
  },
  faceDetectionArea: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  guidanceContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  guidanceText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  helpButton: {
    backgroundColor: '#F3E8FF',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  helpButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8B5CF6',
  },
});
