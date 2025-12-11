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

interface SkinIndicator {
  id: string;
  name: string;
  progress: number;
  status: 'warning' | 'good';
}

export default function SelfDiagnosisDetailScreen() {
  const { t } = useTranslation();
  const skinIndicators: SkinIndicator[] = [
    { id: 't_zone_sebum', name: t('selfDiagnosis.detail.indicators.tZoneSebum'), progress: 40, status: 'warning' },
    { id: 'u_zone_sebum', name: t('selfDiagnosis.detail.indicators.uZoneSebum'), progress: 40, status: 'warning' },
    { id: 'skin_barrier', name: t('selfDiagnosis.detail.indicators.skinBarrier'), progress: 40, status: 'warning' },
    { id: 'eye_muscles', name: t('selfDiagnosis.detail.indicators.eyeMuscles'), progress: 60, status: 'good' },
    { id: 'skin_exfoliation', name: t('selfDiagnosis.detail.indicators.skinExfoliation'), progress: 60, status: 'good' },
    { id: 'skin_moisture', name: t('selfDiagnosis.detail.indicators.skinMoisture'), progress: 60, status: 'good' },
    { id: 'skin_damage', name: t('selfDiagnosis.detail.indicators.skinDamage'), progress: 60, status: 'good' },
    { id: 'uv_damage', name: t('selfDiagnosis.detail.indicators.uvDamage'), progress: 60, status: 'good' },
    { id: 'skin_sebum', name: t('selfDiagnosis.detail.indicators.skinSebum'), progress: 60, status: 'good' },
    { id: 'skin_density', name: t('selfDiagnosis.detail.indicators.skinDensity'), progress: 60, status: 'good' },
    { id: 'melanin', name: t('selfDiagnosis.detail.indicators.melanin'), progress: 60, status: 'good' },
    { id: 'skin_redness', name: t('selfDiagnosis.detail.indicators.skinRedness'), progress: 60, status: 'good' },
    { id: 'neck_muscles', name: t('selfDiagnosis.detail.indicators.neckMuscles'), progress: 60, status: 'good' },
    { id: 'expression_wrinkles', name: t('selfDiagnosis.detail.indicators.expressionWrinkles'), progress: 60, status: 'good' },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleIndicatorDetail = (indicatorId: string) => {
    console.log('지표 상세보기:', indicatorId);
    // 개별 지표 상세 페이지로 이동 예정
  };

  const renderProgressBar = (progress: number) => {
    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBarFill, 
              { width: `${progress}%` }
            ]} 
          />
        </View>
      </View>
    );
  };

  const renderStatusButton = (status: 'warning' | 'good') => {
    const isWarning = status === 'warning';
    return (
      <View style={[
        styles.statusButton,
        isWarning ? styles.warningButton : styles.goodButton
      ]}>
        <Text style={[
          styles.statusText,
          isWarning ? styles.warningText : styles.goodText
        ]}>
          {isWarning ? t('selfDiagnosis.detail.status.warning') : t('selfDiagnosis.detail.status.good')}
        </Text>
      </View>
    );
  };

  const renderIndicator = (indicator: SkinIndicator) => {
    return (
      <TouchableOpacity
        key={indicator.id}
        style={styles.indicatorRow}
        onPress={() => handleIndicatorDetail(indicator.id)}
      >
        <Text style={styles.indicatorName}>{indicator.name}</Text>
        {renderProgressBar(indicator.progress)}
        {renderStatusButton(indicator.status)}
        <Ionicons name="chevron-forward" size={16} color="#fff" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('selfDiagnosis.detail.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 피부건강 섹션 */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{t('selfDiagnosis.detail.skinHealth')}</Text>
            <TouchableOpacity style={styles.sectionStatusButton}>
              <Text style={styles.sectionStatusText}>{t('selfDiagnosis.detail.status.good')}</Text>
              <Ionicons name="chevron-up" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* 지표 목록 */}
          <View style={styles.indicatorsContainer}>
            {skinIndicators.map(renderIndicator)}
          </View>
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
    paddingTop: 20,
  },
  sectionContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionStatusButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionStatusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginRight: 4,
  },
  indicatorsContainer: {
    gap: 16,
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  indicatorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    width: 100,
    marginRight: 12,
  },
  progressBarContainer: {
    flex: 1,
    marginRight: 12,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  statusButton: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  warningButton: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  goodButton: {
    backgroundColor: '#8B5CF6',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  warningText: {
    color: '#F59E0B',
  },
  goodText: {
    color: '#fff',
  },
});
