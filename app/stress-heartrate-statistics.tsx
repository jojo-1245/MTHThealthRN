import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function StressHeartrateStatistics() {
  const [activeTab, setActiveTab] = useState<'daily' | 'weekly' | 'monthly'>('daily');

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Ionicons name="warning" size={48} color="#ccc" />
      <Text style={styles.emptyStateTitle}>최소 3일이상</Text>
      <Text style={styles.emptyStateText}>스트레스 / 심박수 측정을 해 주세요.</Text>
    </View>
  );

  const renderDailyStats = () => (
    <View style={styles.statsContainer}>
      {renderEmptyState()}
    </View>
  );

  const renderWeeklyStats = () => (
    <View style={styles.statsContainer}>
      {renderEmptyState()}
    </View>
  );

  const renderMonthlyStats = () => (
    <View style={styles.statsContainer}>
      {renderEmptyState()}
    </View>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'daily':
        return renderDailyStats();
      case 'weekly':
        return renderWeeklyStats();
      case 'monthly':
        return renderMonthlyStats();
      default:
        return renderDailyStats();
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>스트레스 / 심박수 통계</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 버튼들 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'daily' && styles.activeTabButton]}
          onPress={() => setActiveTab('daily')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'daily' && styles.activeTabButtonText]}>
            일간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'weekly' && styles.activeTabButton]}
          onPress={() => setActiveTab('weekly')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'weekly' && styles.activeTabButtonText]}>
            주간
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'monthly' && styles.activeTabButton]}
          onPress={() => setActiveTab('monthly')}
        >
          <Text style={[styles.tabButtonText, activeTab === 'monthly' && styles.activeTabButtonText]}>
            월간
          </Text>
        </TouchableOpacity>
      </View>

      {/* 탭 콘텐츠 */}
      <View style={styles.content}>
        {renderTabContent()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 34,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  tabButton: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  tabButtonText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabButtonText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    lineHeight: 24,
  },
});
