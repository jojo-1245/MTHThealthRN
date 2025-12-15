import { useTranslation } from '@/i18n';
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

export default function CardiovascularDietSurveyCompleteScreen() {
  const { t } = useTranslation();
  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // 설문 결과 저장 후 메인 페이지로 이동
    router.push('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('cardiovascular.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 완료 아이콘 */}
        <View style={styles.iconContainer}>
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={80} color="#8B5CF6" />
          </View>
        </View>

        {/* 완료 메시지 */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageTitle}>
            {t('cardiovascular.dietSurveyComplete.title')}
          </Text>
          <Text style={styles.messageDescription}>
            {t('cardiovascular.dietSurveyComplete.description')}
          </Text>
        </View>

        {/* 결과 요약 */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryBox}>
            <Text style={styles.summaryTitle}>{t('cardiovascular.dietSurveyComplete.summaryTitle')}</Text>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('cardiovascular.dietSurveyComplete.summaryItem')}</Text>
              <Text style={styles.summaryValue}>{t('cardiovascular.dietSurveyComplete.summaryValue')}</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('cardiovascular.dietSurveyComplete.summaryDate')}</Text>
              <Text style={styles.summaryValue}>2025-01-15</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryLabel}>{t('cardiovascular.dietSurveyComplete.summaryQuestions')}</Text>
              <Text style={styles.summaryValue}>{t('cardiovascular.dietSurveyComplete.summaryQuestionsValue')}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>{t('cardiovascular.dietSurveyComplete.saveButton')}</Text>
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
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  checkIcon: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  messageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 32,
  },
  messageDescription: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 24,
  },
  summaryContainer: {
    marginBottom: 40,
  },
  summaryBox: {
    backgroundColor: '#1a1a1a',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  summaryItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#fff',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  saveButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
