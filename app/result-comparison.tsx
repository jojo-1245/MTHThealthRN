import { useTranslation } from '@/i18n';
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

type TabType = 'health' | 'skin' | 'scalp';

interface HealthItem {
  name: string;
  status: string;
  value: number;
}

export default function ResultComparisonScreen() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<TabType>('health');
  const [selectedComparison, setSelectedComparison] = useState<'previous' | 'recent'>('recent');

  const handleBack = () => {
    router.back();
  };

  // 헬스 데이터
  const healthData: HealthItem[] = [
    { name: t('resultComparison.healthItems.circulation'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.healthItems.metabolism'), status: t('resultComparison.status.caution'), value: 0.3 },
    { name: t('resultComparison.healthItems.immunity'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.healthItems.obesity'), status: t('resultComparison.status.danger'), value: 0.7 },
  ];

  // 피부 데이터
  const skinData: HealthItem[] = [
    { name: t('resultComparison.skinItems.oily'), status: t('resultComparison.status.caution'), value: 0.5 },
    { name: t('resultComparison.skinItems.pigment'), status: t('resultComparison.status.interest'), value: 0.3 },
    { name: t('resultComparison.skinItems.sensitive'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.skinItems.dry'), status: t('resultComparison.status.interest'), value: 0.3 },
    { name: t('resultComparison.skinItems.aging'), status: t('resultComparison.status.interest'), value: 0.3 },
  ];

  // 두피탈모 데이터
  const scalpData: HealthItem[] = [
    { name: t('resultComparison.scalpItems.dry'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.scalpItems.hairLoss'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.scalpItems.oily'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.scalpItems.dandruff'), status: t('resultComparison.status.caution'), value: 0.4 },
    { name: t('resultComparison.scalpItems.sensitive'), status: t('resultComparison.status.caution'), value: 0.4 },
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case 'health':
        return healthData;
      case 'skin':
        return skinData;
      case 'scalp':
        return scalpData;
      default:
        return [];
    }
  };

  const getStatusColor = (status: string) => {
    if (status === t('resultComparison.status.danger')) return '#EF4444';
    if (status === t('resultComparison.status.caution')) return '#F59E0B';
    if (status === t('resultComparison.status.interest')) return '#3B82F6';
    if (status === t('resultComparison.status.good')) return '#10B981';
    return '#6B7280';
  };

  const getRadarChartLabels = () => {
    switch (activeTab) {
      case 'health':
        return [
          t('resultComparison.healthItems.circulation'),
          t('resultComparison.healthItems.metabolism'),
          t('resultComparison.healthItems.immunity'),
          t('resultComparison.healthItems.obesity')
        ];
      case 'skin':
        return [
          t('resultComparison.skinItems.oily'),
          t('resultComparison.skinItems.aging'),
          t('resultComparison.skinItems.dry'),
          t('resultComparison.skinItems.sensitive'),
          t('resultComparison.skinItems.pigment')
        ];
      case 'scalp':
        return [
          t('resultComparison.scalpItems.dry'),
          t('resultComparison.scalpItems.sensitive'),
          t('resultComparison.scalpItems.dandruff'),
          t('resultComparison.scalpItems.oily'),
          t('resultComparison.scalpItems.hairLoss')
        ];
      default:
        return [];
    }
  };

  const currentData = getCurrentData();
  const chartLabels = getRadarChartLabels();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('resultComparison.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'health' && styles.activeTab]}
          onPress={() => setActiveTab('health')}
        >
          <Text style={[styles.tabText, activeTab === 'health' && styles.activeTabText]}>
            {t('resultComparison.tabs.health')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'skin' && styles.activeTab]}
          onPress={() => setActiveTab('skin')}
        >
          <Text style={[styles.tabText, activeTab === 'skin' && styles.activeTabText]}>
            {t('resultComparison.tabs.skin')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'scalp' && styles.activeTab]}
          onPress={() => setActiveTab('scalp')}
        >
          <Text style={[styles.tabText, activeTab === 'scalp' && styles.activeTabText]}>
            {t('resultComparison.tabs.scalp')}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 비교 선택기 */}
      <View style={styles.comparisonSelector}>
        <TouchableOpacity
          style={[
            styles.comparisonOption,
            selectedComparison === 'previous' && styles.activeComparisonOption,
          ]}
          onPress={() => setSelectedComparison('previous')}
        >
          <Text
            style={[
              styles.comparisonOptionText,
              selectedComparison === 'previous' && styles.activeComparisonOptionText,
            ]}
          >
            {t('resultComparison.comparison.previous')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.comparisonOption,
            selectedComparison === 'recent' && styles.activeComparisonOption,
          ]}
          onPress={() => setSelectedComparison('recent')}
        >
          <Text
            style={[
              styles.comparisonOptionText,
              selectedComparison === 'recent' && styles.activeComparisonOptionText,
            ]}
          >
            {t('resultComparison.comparison.recent')}
          </Text>
          {selectedComparison === 'recent' && (
            <Text style={styles.comparisonDate}>2025-10-09</Text>
          )}
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 레이더 차트 영역 */}
        <View style={styles.chartContainer}>
          <View style={styles.radarChart}>
            {/* 레이더 차트는 이미지로 대체 가능 */}
            <View style={styles.chartPlaceholder}>
              <Ionicons name="pie-chart" size={60} color="#8B5CF6" />
              <Text style={styles.chartPlaceholderText}>{t('resultComparison.chartPlaceholder')}</Text>
              <Text style={styles.chartPlaceholderSubtext}>
                {activeTab === 'health' && t('resultComparison.chartDescriptions.health')}
                {activeTab === 'skin' && t('resultComparison.chartDescriptions.skin')}
                {activeTab === 'scalp' && t('resultComparison.chartDescriptions.scalp')}
              </Text>
            </View>
          </View>
        </View>

        {/* 요약 테이블 */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>{t('resultComparison.table.item')}</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>{t('resultComparison.table.previous')}</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>{t('resultComparison.table.recent')}</Text>
            </View>
          </View>
          
          {currentData.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={[styles.tableCell, styles.tableCellFirst]}>
                <Text style={styles.tableCellText}>{item.name}</Text>
              </View>
              <View style={styles.tableCell}>
                {/* 이전 데이터는 비어있음 */}
              </View>
              <View style={styles.tableCell}>
                <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
                  <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                    {item.status}
                  </Text>
                </View>
              </View>
            </View>
          ))}
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#8B5CF6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#fff',
  },
  comparisonSelector: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  comparisonOption: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    marginHorizontal: 4,
  },
  activeComparisonOption: {
    backgroundColor: '#8B5CF6',
  },
  comparisonOptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeComparisonOptionText: {
    color: '#fff',
  },
  comparisonDate: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  chartContainer: {
    marginBottom: 30,
  },
  radarChart: {
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chartPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartPlaceholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginTop: 12,
    marginBottom: 8,
  },
  chartPlaceholderSubtext: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  tableContainer: {
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 40,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  tableHeaderCell: {
    flex: 1,
  },
  tableHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: 16,
    paddingHorizontal: 16,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tableCell: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableCellFirst: {
    alignItems: 'flex-start',
  },
  tableCellText: {
    fontSize: 14,
    color: '#000',
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
