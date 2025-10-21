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

export default function WeightStatisticsScreen() {
  const [activeTab, setActiveTab] = useState('일간');

  const handleBack = () => {
    router.back();
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Mock 데이터
  const weightData = {
    일간: [69.2, 67.3, 72.2, 68.2, 62.2, 66.5],
    주간: [68.5, 69.1, 67.8, 70.2, 69.5, 68.9, 69.3],
    월간: [69.2, 68.8, 69.5, 68.1, 69.0]
  };

  const currentData = weightData[activeTab as keyof typeof weightData] || [];

  const renderChart = () => {
    if (currentData.length === 0) {
      return (
        <View style={styles.emptyChartContainer}>
          <Ionicons name="warning" size={24} color="#F59E0B" />
          <Text style={styles.emptyText}>아직 기록이 없습니다.</Text>
          <Text style={styles.emptySubText}>체중기록을 시작해 보세요.</Text>
        </View>
      );
    }

    const maxWeight = Math.max(...currentData);
    const minWeight = Math.min(...currentData);
    const range = maxWeight - minWeight || 10;

    return (
      <View style={styles.chartContainer}>
        <View style={styles.chart}>
          {currentData.map((weight, index) => {
            const height = ((weight - minWeight) / range) * 100;
            return (
              <View key={index} style={styles.chartBar}>
                <View style={[styles.bar, { height: `${height}%` }]} />
                <Text style={styles.barValue}>{weight}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>체중기록 통계</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 탭 메뉴 */}
        <View style={styles.tabContainer}>
          {['일간', '주간', '월간'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => handleTabChange(tab)}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 체중 그래프 */}
        <View style={styles.chartSection}>
          <Text style={styles.chartTitle}>체중(kg)</Text>
          {renderChart()}
        </View>

        {/* 스마트 체중계 연결 안내 */}
        <View style={styles.smartScaleContainer}>
          <View style={styles.scaleIcon}>
            <Ionicons name="scale" size={40} color="#8B5CF6" />
          </View>
          <View style={styles.scaleTextContainer}>
            <Text style={styles.scaleTitle}>스마트 체중계를 연결해</Text>
            <Text style={styles.scaleSubtitle}>BMI, 체지방률, 체수분량도</Text>
            <Text style={styles.scaleSubtitle}>함께 관리하세요.</Text>
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
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
  chartSection: {
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  chartContainer: {
    height: 200,
    justifyContent: 'center',
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    height: 150,
  },
  chartBar: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 20,
    backgroundColor: '#8B5CF6',
    borderRadius: 10,
    marginBottom: 8,
  },
  barValue: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  emptyChartContainer: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 12,
    marginBottom: 4,
  },
  emptySubText: {
    fontSize: 14,
    color: '#9CA3AF',
  },
  smartScaleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8FF',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  scaleIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  scaleTextContainer: {
    flex: 1,
  },
  scaleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  scaleSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});
