import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function WeightDetailRecordScreen() {
  const [weight, setWeight] = useState('0.0');

  const handleBack = () => {
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  const handleSave = () => {
    // 체중 저장 로직
    console.log('체중 저장:', weight);
    router.back();
  };

  const handleWeightChange = (text: string) => {
    // 숫자와 소수점만 허용
    const numericValue = text.replace(/[^0-9.]/g, '');
    setWeight(numericValue);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>상세 기록</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 텍스트 */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            오늘 체중을 입력해 주세요.
          </Text>
        </View>

        {/* 체중 입력 필드 */}
        <View style={styles.inputContainer}>
          <View style={styles.weightInputContainer}>
            <TextInput
              style={styles.weightInput}
              value={weight}
              onChangeText={handleWeightChange}
              placeholder="0.0"
              placeholderTextColor="#9CA3AF"
              keyboardType="numeric"
              autoFocus={true}
              selectTextOnFocus={true}
            />
            <Text style={styles.unitText}>kg</Text>
          </View>
        </View>

        {/* 추가 정보 */}
        <View style={styles.additionalInfoContainer}>
          <View style={styles.infoBox}>
            <Ionicons name="information-circle" size={20} color="#6B7280" />
            <Text style={styles.infoText}>
              정확한 측정을 위해 아침에 측정하는 것을 권장합니다
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="information-circle" size={20} color="#6B7280" />
            <Text style={styles.infoText}>
              소수점 첫째 자리까지 입력 가능합니다
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼들 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>취소</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.saveButton, weight === '0.0' || weight === '' ? styles.disabledButton : null]} 
          onPress={handleSave}
          disabled={weight === '0.0' || weight === ''}
        >
          <Text style={[styles.saveButtonText, weight === '0.0' || weight === '' ? styles.disabledButtonText : null]}>저장</Text>
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
  instructionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  weightInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: '#F8F9FF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  weightInput: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    minWidth: 120,
  },
  unitText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#6B7280',
    marginLeft: 8,
  },
  additionalInfoContainer: {
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F8F9FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  infoText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    flex: 1,
    marginRight: 8,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  saveButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    flex: 1,
    marginLeft: 8,
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
});
