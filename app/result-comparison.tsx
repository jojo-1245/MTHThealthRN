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
  const [activeTab, setActiveTab] = useState<TabType>('health');
  const [selectedComparison, setSelectedComparison] = useState<'previous' | 'recent'>('recent');

  const handleBack = () => {
    router.back();
  };

  // 헬스 데이터
  const healthData: HealthItem[] = [
    { name: '혈행개선', status: '주의', value: 0.4 },
    { name: '대사조절', status: '주의', value: 0.3 },
    { name: '면역항산화', status: '주의', value: 0.4 },
    { name: '비만체지방', status: '위험', value: 0.7 },
  ];

  // 피부 데이터
  const skinData: HealthItem[] = [
    { name: '지성피부', status: '주의', value: 0.5 },
    { name: '색소피부', status: '관심', value: 0.3 },
    { name: '민감피부', status: '주의', value: 0.4 },
    { name: '건성피부', status: '관심', value: 0.3 },
    { name: '노화피부', status: '관심', value: 0.3 },
  ];

  // 두피탈모 데이터
  const scalpData: HealthItem[] = [
    { name: '건성두피', status: '주의', value: 0.4 },
    { name: '탈모', status: '주의', value: 0.4 },
    { name: '지성두피', status: '주의', value: 0.4 },
    { name: '비듬두피', status: '주의', value: 0.4 },
    { name: '예민두피', status: '주의', value: 0.4 },
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
    switch (status) {
      case '위험': return '#EF4444';
      case '주의': return '#F59E0B';
      case '관심': return '#3B82F6';
      case '양호': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getRadarChartLabels = () => {
    switch (activeTab) {
      case 'health':
        return ['혈행개선', '대사조절', '면역항산화', '비만체지방'];
      case 'skin':
        return ['지성피부', '노화피부', '건성피부', '민감피부', '색소피부'];
      case 'scalp':
        return ['건성두피', '예민두피', '비듬두피', '지성두피', '탈모'];
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
        <Text style={styles.headerTitle}>결과비교</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'health' && styles.activeTab]}
          onPress={() => setActiveTab('health')}
        >
          <Text style={[styles.tabText, activeTab === 'health' && styles.activeTabText]}>
            헬스
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'skin' && styles.activeTab]}
          onPress={() => setActiveTab('skin')}
        >
          <Text style={[styles.tabText, activeTab === 'skin' && styles.activeTabText]}>
            피부
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'scalp' && styles.activeTab]}
          onPress={() => setActiveTab('scalp')}
        >
          <Text style={[styles.tabText, activeTab === 'scalp' && styles.activeTabText]}>
            두피탈모
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
            이전
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
            최근
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
              <Text style={styles.chartPlaceholderText}>레이더 차트</Text>
              <Text style={styles.chartPlaceholderSubtext}>
                {activeTab === 'health' && '혈행개선, 대사조절, 면역항산화, 비만체지방'}
                {activeTab === 'skin' && '지성피부, 색소피부, 민감피부, 건성피부, 노화피부'}
                {activeTab === 'scalp' && '건성두피, 탈모, 지성두피, 비듬두피, 예민두피'}
              </Text>
            </View>
          </View>
        </View>

        {/* 요약 테이블 */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>항목</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>이전</Text>
            </View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.tableHeaderText}>최근</Text>
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
