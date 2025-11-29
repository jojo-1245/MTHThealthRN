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

export default function HealthStatusMainScreen() {
  const { t } = useTranslation();
  const handleBack = () => {
    router.back();
  };

  const handleHealthLevelDetail = () => {
    router.push('/health-status-results');
  };

  const handleManageItem = (item: string) => {
    console.log('관리 항목 선택:', item);
  };

  const handleAddHealthInfo = (type: string) => {
    if (type === 'self-diagnosis') {
      // 자가진단 완료 페이지로 이동 (진단 요약)
      router.push('/self-diagnosis-complete');
    } else if (type === 'health-checkup') {
      router.push('/health-checkup-load');
    } else if (type === 'detailed-analysis') {
      router.push('/analysis-service');
    }
  };

  const healthLevel = 4;
  const maxLevel = 10;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('health.statusMain.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 건강레벨 섹션 */}
        <View style={styles.healthLevelSection}>
          <Text style={styles.userName}>{t('health.statusMain.userLevel', { name: 'Ted' })}</Text>
          
          <View style={styles.levelContainer}>
            <View style={styles.levelProgress}>
              <View style={styles.progressCircleOuter}>
                <View style={[styles.progressCircleInner, { width: `${(healthLevel / maxLevel) * 100}%` }]} />
              </View>
              <View style={styles.levelTextContainer}>
                <Text style={styles.levelText}>{t('health.statusMain.levelText')}</Text>
                <Text style={styles.levelNumber}>{healthLevel}/{maxLevel}</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.levelBadge} 
              onPress={handleHealthLevelDetail}
            >
              <Text style={styles.levelBadgeText}>{t('health.statusMain.levelBadge', { level: healthLevel })}</Text>
              <Ionicons name="chevron-forward" size={20} color="#F59E0B" />
            </TouchableOpacity>
          </View>

          <Text style={styles.levelDescription}>
            {t('health.statusMain.levelDescription')}
          </Text>
        </View>

        {/* 무엇부터 관리하지? 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('health.statusMain.manageTitle')}</Text>
          
          <View style={styles.cardRow}>
            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('obesity')}
            >
              <View style={[styles.cardIcon, styles.orangeIcon]}>
                <Ionicons name="scale" size={32} color="#F59E0B" />
              </View>
              <Text style={styles.cardTitle}>{t('health.statusMain.items.obesity')}</Text>
              <Text style={styles.dangerLabel}>{t('health.statusMain.status.danger')}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('metabolism')}
            >
              <View style={[styles.cardIcon, styles.blueIcon]}>
                <Ionicons name="sync" size={32} color="#3B82F6" />
              </View>
              <Text style={styles.cardTitle}>{t('health.statusMain.items.metabolism')}</Text>
              <Text style={styles.cautionLabel}>{t('health.statusMain.status.caution')}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('scalp')}
            >
              <View style={[styles.cardIcon, styles.brownIcon]}>
                <Ionicons name="water" size={32} color="#92400E" />
              </View>
              <Text style={styles.cardTitle}>{t('health.statusMain.items.scalp')}</Text>
              <Text style={styles.cautionLabel}>{t('health.statusMain.status.caution')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 건강정보 추가해 볼까? 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('health.statusMain.addTitle')}</Text>
          
          <View style={styles.cardRow}>
            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('self-diagnosis')}
            >
              <Text style={styles.addCardTime}>{t('health.statusMain.timeRequired', { time: '1분' })}</Text>
              <View style={styles.addCardIcon}>
                <Ionicons name="bar-chart" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>{t('health.statusMain.addItems.selfDiagnosis')}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('health-checkup')}
            >
              <Text style={styles.addCardTime}>{t('health.statusMain.timeRequired', { time: '30초' })}</Text>
              <View style={styles.addCardIcon}>
                <Ionicons name="medical" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>{t('health.statusMain.addItems.healthCheckup')}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('detailed-analysis')}
            >
              <View style={styles.addCardIcon}>
                <Ionicons name="document-text" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>{t('health.statusMain.addItems.detailedAnalysis')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 건강 습관 만들기 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('health.statusMain.habitTitle')}</Text>
          <Text style={styles.habitDescription}>
            {t('health.statusMain.habitDescription')}
          </Text>
          <View style={styles.habitItemsContainer}>
            <TouchableOpacity 
              style={styles.habitItem}
              onPress={() => router.push('/with-event')}
            >
              <View style={[styles.habitStatusDot, { backgroundColor: '#10B981' }]} />
              <View style={styles.habitContent}>
                <Text style={styles.habitLabel}>{t('health.statusMain.habitItems.recruiting')}</Text>
                <Text style={styles.habitSubtitle}>{t('health.statusMain.habitItems.recruitingSubtitle')}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.habitItem}
              onPress={() => router.push('/with-event')}
            >
              <View style={[styles.habitStatusDot, { backgroundColor: '#EF4444' }]} />
              <View style={styles.habitContent}>
                <Text style={styles.habitLabel}>{t('health.statusMain.habitItems.ended')}</Text>
                <Text style={styles.habitSubtitle}>{t('health.statusMain.habitItems.endedSubtitle')}</Text>
              </View>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 30,
  },
  healthLevelSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  levelContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  levelProgress: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  progressCircleOuter: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 12,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCircleInner: {
    position: 'absolute',
    height: 12,
    backgroundColor: '#8B5CF6',
    borderRadius: 6,
    top: 0,
    left: 0,
  },
  levelTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  levelNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  levelBadgeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#92400E',
    marginRight: 4,
  },
  levelDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  manageCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  orangeIcon: {
    backgroundColor: '#FEF3C7',
  },
  blueIcon: {
    backgroundColor: '#DBEAFE',
  },
  brownIcon: {
    backgroundColor: '#FEF3C7',
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  dangerLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#EF4444',
  },
  cautionLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F59E0B',
  },
  addCard: {
    flex: 1,
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  addCardTime: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 8,
  },
  addCardIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addCardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
  },
  // 건강 습관 만들기 섹션
  habitDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  habitItemsContainer: {
    marginTop: 16,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  habitStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  habitContent: {
    flex: 1,
  },
  habitLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  habitSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
});
