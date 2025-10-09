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

interface DiagnosisCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  durationColor: string;
}

export default function SelfDiagnosisAddScreen() {
  const [selectedCards, setSelectedCards] = useState<string[]>(['피부건강']);

  const diagnosisCards: DiagnosisCard[] = [
    {
      id: '기초건강',
      title: '기초건강',
      description: '기초건강상태부터 알아볼래요',
      duration: '약 30초 소요',
      durationColor: '#3B82F6',
    },
    {
      id: '만성질환',
      title: '만성질환',
      description: '현재 질환이 있어 약 복용 중 (관리중)이에요',
      duration: '약 15초 소요',
      durationColor: '#EF4444',
    },
    {
      id: '식/생활습관',
      title: '식/생활습관',
      description: '현재 식/생활습관 상태가 궁금해요',
      duration: '약 2분 30초 소요',
      durationColor: '#3B82F6',
    },
    {
      id: '자각증상',
      title: '자각증상',
      description: '현재 느끼고 있는 자각증상이 있어요',
      duration: '약 5분 소요',
      durationColor: '#6B7280',
    },
    {
      id: '피부건강',
      title: '피부건강',
      description: '현재 피부상태가 궁금해요',
      duration: '약 3분 소요',
      durationColor: '#6B7280',
    },
    {
      id: '두피건강',
      title: '두피건강',
      description: '현재 두피상태가 궁금해요',
      duration: '약 2분 소요',
      durationColor: '#6B7280',
    },
  ];

    const diagnosisCards2: DiagnosisCard2[] = [
    {
      id: '기초건강',
      title: '기초건강',
      description: '기초건강상태부터 알아볼래요',
      duration: '약 30초 소요',
      durationColor: '#3B82F6',
    },
    {
      id: '만성질환',
      title: '만성질환',
      description: '현재 질환이 있어 약 복용 중 (관리중)이에요',
      duration: '약 15초 소요',
      durationColor: '#EF4444',
    },
    {
      id: '식/생활습관',
      title: '식/생활습관',
      description: '현재 식/생활습관 상태가 궁금해요',
      duration: '약 2분 30초 소요',
      durationColor: '#3B82F6',
    },
    {
      id: '자각증상',
      title: '자각증상',
      description: '현재 느끼고 있는 자각증상이 있어요',
      duration: '약 5분 소요',
      durationColor: '#6B7280',
    },
    {
      id: '피부건강',
      title: '피부건강',
      description: '현재 피부상태가 궁금해요',
      duration: '약 3분 소요',
      durationColor: '#6B7280',
    },
    {
      id: '두피건강',
      title: '두피건강',
      description: '현재 두피상태가 궁금해요',
      duration: '약 2분 소요',
      durationColor: '#6B7280',
    },
  ];

  const handleCardToggle = (cardId: string) => {
    setSelectedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  const handleNext = () => {
    console.log('선택된 항목들:', selectedCards);
    // 다음 단계로 이동하는 로직
    router.back();
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>자가진단 추가</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 문구 */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            아래 항목을 추가 체크하면 더 정밀한 영양관리를 해드릴 수 있어요
          </Text>
        </View>

        {/* 진단 카드들 */}
        <View style={styles.cardsContainer}>
          {diagnosisCards.map((card, index) => {
            const isSelected = selectedCards.includes(card.id);
            return (
              <TouchableOpacity
                key={card.id}
                style={[
                  styles.card,
                  isSelected && styles.cardSelected
                ]}
                onPress={() => handleCardToggle(card.id)}
              >
                <View style={styles.cardContent}>
                  <View style={styles.cardLeft}>
                    <Text style={styles.cardTitle}>{card.title}</Text>
                    <Text style={styles.cardDescription}>{card.description}</Text>
                    <View style={[
                      styles.durationBadge,
                      { backgroundColor: card.durationColor }
                    ]}>
                      <Text style={styles.durationText}>{card.duration}</Text>
                    </View>
                  </View>
                  <View style={styles.cardRight}>
                    <View style={[
                      styles.checkbox,
                      isSelected && styles.checkboxSelected
                    ]}>
                      {isSelected && (
                        <Ionicons name="checkmark" size={16} color="#fff" />
                      )}
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* 하단 다음 버튼 */}
      <View style={styles.bottomButtonContainer}>
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
    backgroundColor: '#8B5CF6',
    paddingTop: 50, // 상태바 영역을 고려한 패딩
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
    width: 40, // 뒤로가기 버튼과 동일한 너비로 균형 맞춤
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  infoSection: {
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    textAlign: 'center',
  },
  cardsContainer: {
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardSelected: {
    borderColor: '#8B5CF6',
    borderWidth: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardLeft: {
    flex: 1,
    marginRight: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  durationBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  durationBadge2: {
    alignSelf: 'flex-ends',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 11,
  },
  durationText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  cardRight: {
    alignItems: 'center',
  },
  cardRight2: {
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox2: {
    width: 22,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#DDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  checkboxSelected2: {
    backgroundColor: '#85F',
    borderColor: '#85F',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },
  nextButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
