import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BreathingStatistics() {
  const [selectedPeriod, setSelectedPeriod] = useState('일간');

  const periods = ['일간', '주간', '월간'];

  const handleBack = () => {
    router.back();
  };

  const renderDailyStats = () => (
    <View style={styles.statsContainer}>
      {/* 오늘의 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>오늘의 호흡수</Text>
        <Text style={styles.statValue}>16회/분</Text>
        <Text style={styles.statSubtext}>정상 범위: 12-20회/분</Text>
      </View>

      {/* 시간대별 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>시간대별 호흡수</Text>
        <View style={styles.timeChart}>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>06:00</Text>
            <View style={styles.timeBar}>
              <View style={[styles.timeBarFill, { height: '60%' }]} />
            </View>
            <Text style={styles.timeValue}>15</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>12:00</Text>
            <View style={styles.timeBar}>
              <View style={[styles.timeBarFill, { height: '80%' }]} />
            </View>
            <Text style={styles.timeValue}>16</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>18:00</Text>
            <View style={styles.timeBar}>
              <View style={[styles.timeBarFill, { height: '70%' }]} />
            </View>
            <Text style={styles.timeValue}>14</Text>
          </View>
          <View style={styles.timeItem}>
            <Text style={styles.timeLabel}>24:00</Text>
            <View style={styles.timeBar}>
              <View style={[styles.timeBarFill, { height: '50%' }]} />
            </View>
            <Text style={styles.timeValue}>12</Text>
          </View>
        </View>
      </View>

      {/* 평균 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>평균 호흡수</Text>
        <Text style={styles.statValue}>14.25회/분</Text>
        <Text style={styles.statSubtext}>정상 범위 내</Text>
      </View>
    </View>
  );

  const renderWeeklyStats = () => (
    <View style={styles.statsContainer}>
      {/* 주간 평균 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>주간 평균 호흡수</Text>
        <Text style={styles.statValue}>15.2회/분</Text>
        <Text style={styles.statSubtext}>정상 범위: 12-20회/분</Text>
      </View>

      {/* 요일별 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>요일별 호흡수</Text>
        <View style={styles.dayChart}>
          {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
            <View key={index} style={styles.dayItem}>
              <Text style={styles.dayLabel}>{day}</Text>
              <View style={styles.dayBar}>
                <View style={[styles.dayBarFill, { height: `${60 + index * 5}%` }]} />
              </View>
              <Text style={styles.dayValue}>{14 + index}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 주간 트렌드 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>주간 트렌드</Text>
        <View style={styles.trendContainer}>
          <Ionicons name="trending-up" size={24} color="#10B981" />
          <Text style={styles.trendText}>안정적인 호흡 패턴</Text>
        </View>
      </View>
    </View>
  );

  const renderMonthlyStats = () => (
    <View style={styles.statsContainer}>
      {/* 월간 평균 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>월간 평균 호흡수</Text>
        <Text style={styles.statValue}>15.8회/분</Text>
        <Text style={styles.statSubtext}>정상 범위: 12-20회/분</Text>
      </View>

      {/* 주간별 호흡수 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>주간별 호흡수</Text>
        <View style={styles.weekChart}>
          {[1, 2, 3, 4].map((week) => (
            <View key={week} style={styles.weekItem}>
              <Text style={styles.weekLabel}>{week}주차</Text>
              <View style={styles.weekBar}>
                <View style={[styles.weekBarFill, { height: `${50 + week * 10}%` }]} />
              </View>
              <Text style={styles.weekValue}>{14 + week}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 월간 분석 */}
      <View style={styles.statCard}>
        <Text style={styles.statTitle}>월간 분석</Text>
        <View style={styles.analysisContainer}>
          <View style={styles.analysisItem}>
            <Ionicons name="checkmark-circle" size={20} color="#10B981" />
            <Text style={styles.analysisText}>정상 범위 내 유지</Text>
          </View>
          <View style={styles.analysisItem}>
            <Ionicons name="trending-up" size={20} color="#10B981" />
            <Text style={styles.analysisText}>안정적인 패턴</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 통계</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 기간 선택 탭 */}
      <View style={styles.tabContainer}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.tabButton,
              selectedPeriod === period && styles.tabButtonActive
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text style={[
              styles.tabButtonText,
              selectedPeriod === period && styles.tabButtonTextActive
            ]}>
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 통계 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {selectedPeriod === '일간' && renderDailyStats()}
        {selectedPeriod === '주간' && renderWeeklyStats()}
        {selectedPeriod === '월간' && renderMonthlyStats()}
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
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
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 8,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  tabButtonActive: {
    backgroundColor: '#10B981',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  tabButtonTextActive: {
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  statsContainer: {
    padding: 20,
    gap: 20,
  },
  statCard: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderRadius: 12,
  },
  statTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#10B981',
    marginBottom: 4,
  },
  statSubtext: {
    fontSize: 14,
    color: '#666',
  },
  timeChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginTop: 16,
  },
  timeItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  timeLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  timeBar: {
    width: 20,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  timeBarFill: {
    width: '100%',
    backgroundColor: '#10B981',
    borderRadius: 10,
  },
  timeValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
  },
  dayChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginTop: 16,
  },
  dayItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 2,
  },
  dayLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  dayBar: {
    width: 16,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  dayBarFill: {
    width: '100%',
    backgroundColor: '#10B981',
    borderRadius: 8,
  },
  dayValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
  },
  trendContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  trendText: {
    fontSize: 14,
    color: '#10B981',
    fontWeight: '500',
  },
  weekChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 120,
    marginTop: 16,
  },
  weekItem: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  weekLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  weekBar: {
    width: 20,
    height: 80,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  weekBarFill: {
    width: '100%',
    backgroundColor: '#10B981',
    borderRadius: 10,
  },
  weekValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    marginTop: 8,
  },
  analysisContainer: {
    gap: 12,
    marginTop: 8,
  },
  analysisItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  analysisText: {
    fontSize: 14,
    color: '#000',
  },
});
