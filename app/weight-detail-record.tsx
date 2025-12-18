import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('weight.detailRecord.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 텍스트 */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            {t('weight.detailRecord.instruction')}
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
              placeholderTextColor="#666"
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
            <Ionicons name="information-circle" size={20} color="#fff" />
            <Text style={styles.infoText}>
              {t('weight.detailRecord.infoMorning')}
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="information-circle" size={20} color="#fff" />
            <Text style={styles.infoText}>
              {t('weight.detailRecord.infoDecimal')}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼들 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>{t('weight.detailRecord.cancel')}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.saveButton, weight === '0.0' || weight === '' ? styles.disabledButton : null]} 
          onPress={handleSave}
          disabled={weight === '0.0' || weight === ''}
        >
          <Text style={[styles.saveButtonText, weight === '0.0' || weight === '' ? styles.disabledButtonText : null]}>{t('weight.detailRecord.save')}</Text>
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
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
    color: '#fff',
    textAlign: 'center',
  },
  inputContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  weightInputContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  weightInput: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    minWidth: 120,
  },
  unitText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 8,
  },
  additionalInfoContainer: {
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#fff',
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
    backgroundColor: '#1a1a1a',
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
    backgroundColor: '#333',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  disabledButtonText: {
    color: '#666',
  },
});
