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

interface AnswerOption {
  id: string;
  label: string;
  image: string;
}

export default function Asking15Screen() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>('normal');
  const currentPage = 15;
  const totalPages = 35;

  const answerOptions: AnswerOption[] = [
    {
      id: 'very_much',
      label: '매우 그렇다',
      image: 'skin_severe_inflammation',
    },
    {
      id: 'agree',
      label: '그렇다',
      image: 'skin_moderate_inflammation',
    },
    {
      id: 'normal',
      label: '보통이다',
      image: 'skin_light_inflammation',
    },
    {
      id: 'disagree',
      label: '아니다',
      image: 'skin_clear',
    },
  ];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const handleNext = () => {
    if (selectedAnswer) {
      console.log('선택된 답변:', selectedAnswer);
      // 다음 페이지로 이동 (askings-16.tsx)
      router.push('/askings-16');
    }
  };

  const handlePrevious = () => {
    router.back();
  };

  const handleBack = () => {
    router.back();
  };

  const renderAnswerOption = (option: AnswerOption) => {
    const isSelected = selectedAnswer === option.id;
    
    return (
      <TouchableOpacity
        key={option.id}
        style={[
          styles.answerOption,
          isSelected && styles.answerOptionSelected
        ]}
        onPress={() => handleAnswerSelect(option.id)}
      >
        <View style={[
          styles.imagePlaceholder,
          isSelected && styles.imagePlaceholderSelected
        ]}>
          <Ionicons 
            name="person" 
            size={60} 
            color={isSelected ? '#8B5CF6' : '#9CA3AF'} 
          />
          {isSelected && (
            <View style={styles.checkmarkContainer}>
              <Ionicons name="checkmark" size={16} color="#8B5CF6" />
            </View>
          )}
        </View>
        <Text style={[
          styles.optionLabel,
          isSelected && styles.optionLabelSelected
        ]}>
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>진단하기</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 질문 이미지 */}
        <View style={styles.questionImageContainer}>
          <View style={styles.questionImagePlaceholder}>
            <Ionicons name="person" size={120} color="#9CA3AF" />
            <Text style={styles.imageDescription}>U존 부위 홍반과 염증성 뾰루지 이미지</Text>
          </View>
        </View>

        {/* 질문 텍스트 */}
        <View style={styles.questionContainer}>
          <View style={styles.questionWrapper}>
            <View style={styles.qCircle}>
              <Text style={styles.qText}>Q</Text>
            </View>
            <Text style={styles.questionText}>
              U존 부위에 홍반을 동반한 염증성 뾰루지가 생긴다
            </Text>
          </View>
        </View>

        {/* 답변 옵션들 */}
        <View style={styles.answersContainer}>
          <View style={styles.answersGrid}>
            {answerOptions.map(renderAnswerOption)}
          </View>
        </View>
      </ScrollView>

      {/* 하단 영역 */}
      <View style={styles.bottomContainer}>
        {/* 페이지 인디케이터 */}
        <View style={styles.pageIndicator}>
          <Text style={styles.pageText}>{currentPage} / {totalPages}</Text>
        </View>

        {/* 버튼들 */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.previousButton}
            onPress={handlePrevious}
          >
            <Text style={styles.previousButtonText}>이전</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[
              styles.nextButton,
              selectedAnswer ? styles.nextButtonActive : styles.nextButtonInactive
            ]}
            onPress={handleNext}
            disabled={!selectedAnswer}
          >
            <Text style={[
              styles.nextButtonText,
              selectedAnswer ? styles.nextButtonTextActive : styles.nextButtonTextInactive
            ]}>
              다음
            </Text>
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
    backgroundColor: '#8B5CF6',
    paddingTop: 52,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  questionImageContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  questionImagePlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#F9FAFB',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  imageDescription: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 8,
    textAlign: 'center',
  },
  questionContainer: {
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  questionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  qCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  qText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  questionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
    lineHeight: 26,
    flex: 1,
  },
  answersContainer: {
    marginBottom: 40,
  },
  answersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  answerOption: {
    width: (width - 60) / 2,
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
  },
  answerOptionSelected: {
    backgroundColor: '#F3F4F6',
    borderColor: '#8B5CF6',
  },
  imagePlaceholder: {
    width: 80,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  imagePlaceholderSelected: {
    borderColor: '#8B5CF6',
    borderWidth: 2,
  },
  checkmarkContainer: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  optionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center',
  },
  optionLabelSelected: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  pageIndicator: {
    alignItems: 'center',
    marginBottom: 16,
  },
  pageText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  previousButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  previousButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  nextButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  nextButtonActive: {
    backgroundColor: '#8B5CF6',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonInactive: {
    backgroundColor: '#E5E7EB',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nextButtonTextActive: {
    color: '#fff',
  },
  nextButtonTextInactive: {
    color: '#9CA3AF',
  },
});
