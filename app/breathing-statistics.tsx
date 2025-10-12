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

type TabType = 'daily' | 'weekly' | 'monthly';

export default function BreathingStatisticsScreen() {
  const [activeTab, setActiveTab] = useState<TabType>('daily');

  const handleBack = () => {
    router.back();
  };

  const handleStartMeasurement = () => {
    router.push('/breathing-measurement-guide');
  };

  const renderTabButton = (tab: TabType, label: string) => {
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        key={tab}
        style={[styles.tabButton, isActive && styles.activeTabButton]}
        onPress={() => setActiveTab(tab)}
      >
        <Text style={[styles.tabText, isActive && styles.activeTabText]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyState = () => {
    return (
      <View style={styles.emptyStateContainer}>
        <View style={styles.emptyStateIcon}>
          <Ionicons name="warning" size={48} color="#F59E0B" />
        </View>
        <Text style={styles.emptyStateTitle}>
          최소 3일이상 호흡 측정을 해 주세요.
        </Text>
        <Text style={styles.emptyStateSubtitle}>
          정확한 통계를 위해 더 많은 데이터가 필요합니다.
        </Text>
        <TouchableOpacity style={styles.startMeasurementButton} onPress={handleStartMeasurement}>
          <Text style={styles.startMeasurementText}>측정 시작하기</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderStatistics = () => {
    // 실제 데이터가 있을 때의 통계 표시 (현재는 빈 상태만 구현)
    return renderEmptyState();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 통계</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        {renderTabButton('daily', '일간')}
        {renderTabButton('weekly', '주간')}
        {renderTabButton('monthly', '월간')}
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {renderStatistics()}
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
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  activeTabButton: {
    backgroundColor: '#8B5CF6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyStateIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  emptyStateSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  startMeasurementButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  startMeasurementText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});