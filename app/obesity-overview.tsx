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

export default function ObesityOverviewScreen() {
  const { t } = useTranslation();
  const handleBack = () => {
    router.back();
  };

  const handleDetail = () => {
    router.push('/obesity-detail');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('obesity.overview.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 정보 텍스트 */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            {t('obesity.overview.info')}
          </Text>
        </View>

        {/* 일러스트 영역 */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <Ionicons name="body" size={120} color="#F59E0B" />
            <Text style={styles.illustrationLabel}>{t('obesity.overview.illustrationLabel')}</Text>
          </View>
        </View>

        {/* 사용자 상태 요약 */}
        <View style={styles.statusSummary}>
          <Text style={styles.statusSummaryText}>
            {t('obesity.overview.statusSummary', { name: 'Ted' })}
          </Text>
        </View>

        {/* 위험도 인디케이터 */}
        <View style={styles.riskIndicator}>
          <View style={styles.riskBar}>
            <View style={styles.riskBarFill} />
            <View style={styles.riskMarker} />
          </View>
          <View style={styles.riskLabels}>
            <Text style={styles.riskLabel}>{t('obesity.overview.riskLabels.danger')}</Text>
            <Text style={styles.averageLabel}>{t('obesity.overview.riskLabels.average')}</Text>
            <Text style={styles.goodLabel}>{t('obesity.overview.riskLabels.good')}</Text>
          </View>
          <Text style={styles.riskValue}>30</Text>
        </View>

        {/* 상태 분석 */}
        <View style={styles.analysisSection}>
          <Text style={styles.analysisTitle}>{t('obesity.overview.analysisTitle')}</Text>
          
          <View style={styles.analysisItems}>
            <TouchableOpacity style={styles.analysisItem} onPress={handleDetail}>
              <Text style={styles.analysisItemLabel}>{t('obesity.overview.analysisItems.lifestyle')}</Text>
              <View style={[styles.statusButton, styles.goodStatus]}>
                <Text style={[styles.statusButtonText, styles.goodStatusText]}>{t('obesity.overview.riskLabels.good')}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.analysisItem} onPress={handleDetail}>
              <Text style={styles.analysisItemLabel}>{t('obesity.overview.analysisItems.chronicDisease')}</Text>
              <View style={[styles.statusButton, styles.dangerStatus]}>
                <Text style={[styles.statusButtonText, styles.dangerStatusText]}>{t('obesity.overview.riskLabels.danger')}</Text>
              </View>
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
    paddingTop: 20,
  },
  infoSection: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  statusSummary: {
    marginBottom: 20,
  },
  statusSummaryText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
  },
  riskIndicator: {
    marginBottom: 30,
  },
  riskBar: {
    height: 24,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    position: 'relative',
    marginBottom: 12,
  },
  riskBarFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '30%',
    height: '100%',
    backgroundColor: '#EF4444',
    borderRadius: 12,
  },
  riskMarker: {
    position: 'absolute',
    left: '30%',
    top: -4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#6B7280',
  },
  riskLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  riskLabel: {
    fontSize: 12,
    color: '#EF4444',
    fontWeight: '500',
  },
  averageLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  goodLabel: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '500',
  },
  riskValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#EF4444',
    textAlign: 'center',
  },
  analysisSection: {
    marginBottom: 40,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  analysisItems: {
    gap: 12,
  },
  analysisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  analysisItemLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  statusButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  goodStatus: {
    backgroundColor: '#D1FAE5',
  },
  dangerStatus: {
    backgroundColor: '#FEE2E2',
  },
  statusButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  goodStatusText: {
    color: '#10B981',
  },
  dangerStatusText: {
    color: '#EF4444',
  },
});
