import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
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

export default function CardiovascularDietSurvey17Screen() {
  const [selectedOption, setSelectedOption] = useState('가끔 그렇다');

  const options = [
    '매일 그렇다',
    '자주 그렇다',
    '가끔 그렇다',
    '아니다',
  ];

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    router.push('/cardiovascular-diet-survey-18');
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
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
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 질문 이미지 */}
        <View style={styles.imageContainer}>
          <View style={styles.questionIcon}>
            <Ionicons name="bed" size={60} color="#8B5CF6" />
          </View>
        </View>

        {/* 질문 텍스트 */}
        <View style={styles.questionContainer}>
          <View style={styles.questionBox}>
            <Text style={styles.questionText}>
              Q 식사 후에 바로 누워있거나 잠을 잔다
            </Text>
            <Text style={styles.questionDescription}>
              식사 후에 바로 누워있거나 잠을 자시나요?
            </Text>
            <Text style={styles.questionNote}>
              *식후 30분~2시간 이내
            </Text>
          </View>
        </View>

        {/* 답변 옵션 */}
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOption === option && styles.selectedOption,
              ]}
              onPress={() => handleOptionSelect(option)}
            >
              <Text style={[
                styles.optionText,
                selectedOption === option && styles.selectedOptionText,
              ]}>
                {option}
              </Text>
              {selectedOption === option && (
                <Ionicons name="checkmark" size={20} color="#8B5CF6" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* 하단 네비게이션 */}
      <View style={styles.bottomContainer}>
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>17 / 34</Text>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.previousButton} onPress={handleBack}>
            <Text style={styles.previousButtonText}>이전</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>다음</Text>
          </TouchableOpacity>
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
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  questionIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionBox: {
    backgroundColor: '#F8F9FF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
    lineHeight: 24,
  },
  questionDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  questionNote: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 18,
    marginTop: 4,
  },
  optionsContainer: {
    marginBottom: 30,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  selectedOption: {
    backgroundColor: '#F3E8FF',
    borderColor: '#8B5CF6',
  },
  optionText: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  selectedOptionText: {
    color: '#8B5CF6',
    fontWeight: '500',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  pageIndicator: {
    alignItems: 'center',
    marginBottom: 20,
  },
  pageText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  previousButton: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    minWidth: 100,
  },
  previousButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  nextButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    alignItems: 'center',
    minWidth: 100,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});




