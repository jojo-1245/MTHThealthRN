import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CardiovascularCompleteScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleContinueDiagnosis = () => {
    // 식/생활습관 진단으로 이동 (추후 구현 예정)
    router.push('/self-diagnosis-add');
  };

  const handleSaveAndExit = () => {
    // 저장하고 메인 페이지로 이동
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>진단하기</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {/* 완료 아이콘 */}
        <View style={styles.completionIcon}>
          <Ionicons name="checkmark-circle" size={80} color="#8B5CF6" />
        </View>

        {/* 완료 메시지 */}
        <Text style={styles.completionText}>
          만성질환 체크가 완료되었어요
        </Text>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={handleContinueDiagnosis}
        >
          <Text style={styles.continueButtonText}>
            식/생활습관 항목 계속 진단하기
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.saveButton} 
          onPress={handleSaveAndExit}
        >
          <Text style={styles.saveButtonText}>저장하고 종료하기</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  completionIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  completionText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    lineHeight: 28,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
    gap: 16,
  },
  continueButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  saveButton: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3B82F6',
  },
});
