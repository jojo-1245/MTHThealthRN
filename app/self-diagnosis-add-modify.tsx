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
  isSelected: boolean;
  isCurrent: boolean;
}

export default function SelfDiagnosisAddModifyScreen() {
  const [selectedCards, setSelectedCards] = useState<string[]>([
    '만성질환',
    '식/생활습관',
    '피부건강',
  ]);

  const currentCards: DiagnosisCard[] = [
    {
      id: '만성질환',
      title: '만성질환',
      description: '현재 질환이 있어 약 복용 중 (관리중)이에요',
      duration: '약 15초 소요',
      durationColor: '#EF4444',
      isSelected: true,
      isCurrent: true,
    },
    {
      id: '식/생활습관',
      title: '식/생활습관',
      description: '현재 식/생활습관 상태가 궁금해요',
      duration: '약 2분 30초 소요',
      durationColor: '#3B82F6',
      isSelected: true,
      isCurrent: true,
    },
    {
      id: '피부건강',
      title: '피부건강',
      description: '현재 피부상태가 궁금해요',
      duration: '약 3분 소요',
      durationColor: '#6B7280',
      isSelected: true,
      isCurrent: true,
    },
  ];

  const additionalCards: DiagnosisCard[] = [
    {
      id: '기초건강',
      title: '기초건강',
      description: '기초건강상태부터 알아볼래요',
      duration: '약 30초 소요',
      durationColor: '#3B82F6',
      isSelected: false,
      isCurrent: false,
    },
    {
      id: '자각증상',
      title: '자각증상',
      description: '현재 느끼고 있는 자각증상이 있어요',
      duration: '약 5분 소요',
      durationColor: '#6B7280',
      isSelected: false,
      isCurrent: false,
    },
  ];

  const handleCardToggle = (cardId: string) => {
    setSelectedCards((prev) =>
      prev.includes(cardId)
        ? prev.filter((id) => id !== cardId)
        : [...prev, cardId]
    );
  };

  const handleNext = () => {
    console.log('선택된 항목들:', selectedCards);
    // 다음 단계로 이동
    router.back();
  };

  const handleBack = () => {
    router.back();
  };

  const renderCard = (card: DiagnosisCard) => {
    const isSelected = selectedCards.includes(card.id);
    
    return (
      <TouchableOpacity
        key={card.id}
        style={[
          styles.card,
          isSelected && styles.selectedCard,
        ]}
        onPress={() => handleCardToggle(card.id)}
      >
        {isSelected && (
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={20} color="#fff" />
          </View>
        )}
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
          <View style={[styles.durationBadge, { backgroundColor: card.durationColor + '20' }]}>
            <Text style={[styles.durationText, { color: card.durationColor }]}>
              {card.duration}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>자가진단 추가 및 수정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.instructionText}>수정할 항목을 선택해주세요</Text>

        {/* 현재 항목들 */}
        <View style={styles.cardsContainer}>
          {currentCards.map((card) => renderCard(card))}
        </View>

        {/* 추가 항목 안내 */}
        <Text style={styles.additionalInstructionText}>
          아래 항목을 추가 체크하면 더 정밀한 영양관리를 해드릴 수 있어요
        </Text>

        {/* 추가 항목들 */}
        <View style={styles.cardsContainer}>
          {additionalCards.map((card) => renderCard(card))}
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[styles.nextButton, selectedCards.length === 0 && styles.disabledButton]}
          onPress={handleNext}
          disabled={selectedCards.length === 0}
        >
          <Text style={[styles.nextButtonText, selectedCards.length === 0 && styles.disabledButtonText]}>
            다음
          </Text>
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
    paddingTop: 20,
  },
  instructionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    position: 'relative',
  },
  selectedCard: {
    borderColor: '#8B5CF6',
    borderWidth: 2,
  },
  checkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContent: {
    marginTop: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 12,
  },
  durationBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 10,
    fontWeight: '500',
  },
  additionalInstructionText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  nextButton: {
    backgroundColor: '#6B7280',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#E5E7EB',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  disabledButtonText: {
    color: '#9CA3AF',
  },
});
