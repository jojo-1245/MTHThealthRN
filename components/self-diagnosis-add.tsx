import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface DiagnosisCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  durationColor: string;
}

interface SelfDiagnosisAddProps {
  onBack?: () => void;
  onNext?: (selectedCards: string[]) => void;
  initialSelectedCards?: string[];
}

export default function SelfDiagnosisAdd({ 
  onBack, 
  onNext,
  initialSelectedCards 
}: SelfDiagnosisAddProps) {
  const { t } = useTranslation();
  const [selectedCards, setSelectedCards] = useState<string[]>(
    initialSelectedCards || [t('selfDiagnosis.add.cards.skinHealth.title')]
  );

  const diagnosisCards: DiagnosisCard[] = [
    {
      id: t('selfDiagnosis.add.cards.basicHealth.title'),
      title: t('selfDiagnosis.add.cards.basicHealth.title'),
      description: t('selfDiagnosis.add.cards.basicHealth.description'),
      duration: t('selfDiagnosis.add.cards.basicHealth.duration'),
      durationColor: '#3B82F6',
    },
    {
      id: t('selfDiagnosis.add.cards.chronicDisease.title'),
      title: t('selfDiagnosis.add.cards.chronicDisease.title'),
      description: t('selfDiagnosis.add.cards.chronicDisease.description'),
      duration: t('selfDiagnosis.add.cards.chronicDisease.duration'),
      durationColor: '#EF4444',
    },
    {
      id: t('selfDiagnosis.add.cards.lifestyle.title'),
      title: t('selfDiagnosis.add.cards.lifestyle.title'),
      description: t('selfDiagnosis.add.cards.lifestyle.description'),
      duration: t('selfDiagnosis.add.cards.lifestyle.duration'),
      durationColor: '#3B82F6',
    },
    {
      id: t('selfDiagnosis.add.cards.symptoms.title'),
      title: t('selfDiagnosis.add.cards.symptoms.title'),
      description: t('selfDiagnosis.add.cards.symptoms.description'),
      duration: t('selfDiagnosis.add.cards.symptoms.duration'),
      durationColor: '#6B7280',
    },
    {
      id: t('selfDiagnosis.add.cards.skinHealth.title'),
      title: t('selfDiagnosis.add.cards.skinHealth.title'),
      description: t('selfDiagnosis.add.cards.skinHealth.description'),
      duration: t('selfDiagnosis.add.cards.skinHealth.duration'),
      durationColor: '#6B7280',
    },
    {
      id: t('selfDiagnosis.add.cards.scalpHealth.title'),
      title: t('selfDiagnosis.add.cards.scalpHealth.title'),
      description: t('selfDiagnosis.add.cards.scalpHealth.description'),
      duration: t('selfDiagnosis.add.cards.scalpHealth.duration'),
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
    if (onNext) {
      onNext(selectedCards);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('selfDiagnosis.add.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 문구 */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            {t('selfDiagnosis.add.infoText')}
          </Text>
        </View>

        {/* 진단 카드들 */}
        <View style={styles.cardsContainer}>
          {diagnosisCards.map((card) => {
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
          <Text style={styles.nextButtonText}>{t('selfDiagnosis.add.nextButton')}</Text>
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
    paddingTop: 20,
  },
  infoSection: {
    marginBottom: 24,
    paddingHorizontal: 4,
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
    textAlign: 'center',
  },
  cardsContainer: {
    gap: 12,
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333',
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
    color: '#fff',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#fff',
    lineHeight: 20,
    marginBottom: 12,
  },
  durationBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  durationText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '500',
  },
  cardRight: {
    alignItems: 'center',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#000',
    borderTopWidth: 1,
    borderTopColor: '#333',
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

