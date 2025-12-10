import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function MedicationDetail() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('medication.detail.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 등록된 의약품 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('medication.detail.registeredTitle')}</Text>
          
          {/* 복용 기간 정보 */}
          <View style={styles.periodInfo}>
            <Text style={styles.periodText}>{t('medication.detail.period')} 2025.10.09~2025.10.09</Text>
          </View>

          {/* 의약품 정보 */}
          <View style={styles.medicationInfo}>
            <Text style={styles.medicationName}>타이론정</Text>
          </View>
        </View>

        {/* 상세 설명 */}
        <View style={styles.section}>
          <Text style={styles.description}>
            {t('medication.detail.description')}
          </Text>
        </View>

        {/* 출처 정보 */}
        <View style={styles.section}>
          <Text style={styles.sourceText}>
            {t('medication.detail.source')}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#000',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  headerRight: {
    width: 34, // 뒤로가기 버튼과 동일한 너비로 중앙 정렬
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 16,
  },
  periodInfo: {
    marginBottom: 16,
  },
  periodText: {
    fontSize: 14,
    color: '#fff',
  },
  medicationInfo: {
    marginBottom: 20,
  },
  medicationName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    lineHeight: 24,
  },
  sourceText: {
    fontSize: 12,
    color: '#fff',
    lineHeight: 18,
  },
});
