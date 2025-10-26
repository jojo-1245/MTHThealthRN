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

export default function HealthStatusResultsScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleStatistics = () => {
    router.push('/result-comparison');
  };

  const handleServiceDetail = () => {
    router.push('/self-diagnosis-complete');
  };

  // 항목별 분석 결과 데이터
  const healthItems = [
    { name: '비만체지방', status: '위험', size: 'large' },
    { name: '대사조절', status: '주의', size: 'large' },
    { name: '비듬두피', status: '주의', size: 'large' },
    { name: '간건강', status: '주의', size: 'medium' },
    { name: '뼈관절건강', status: '관심', size: 'medium' },
    { name: '수면·스트레스', status: '관심', size: 'medium' },
    { name: '혈행개선', status: '주의', size: 'medium' },
    { name: '면역항산화', status: '주의', size: 'medium' },
    { name: '화농성여드름', status: '주의', size: 'medium' },
    { name: '소화장건강', status: '주의', size: 'medium' },
    { name: '눈건강', status: '주의', size: 'medium' },
    { name: '근육대사', status: '관심', size: 'medium' },
    { name: '뇌기억력', status: '양호', size: 'small' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '위험': return '#EF4444';
      case '주의': return '#F59E0B';
      case '관심': return '#3B82F6';
      case '양호': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getBubbleSize = (size: string) => {
    switch (size) {
      case 'large': return 80;
      case 'medium': return 60;
      case 'small': return 40;
      default: return 50;
    }
  };

  const userLevel = 4;
  const averageLevel = 3;

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>전체결과</Text>
        <TouchableOpacity style={styles.graphButton} onPress={handleStatistics}>
          <Ionicons name="bar-chart" size={24} color="#8B5CF6" />
        </TouchableOpacity>
      </View>

      {/* 페이지 인디케이터 */}
      <View style={styles.indicatorContainer}>
        <View style={[styles.indicator, styles.activeIndicator]} />
        <View style={styles.indicator} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 건강레벨 요약 */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryText}>
            Ted님의 건강레벨은 Level {userLevel}단계로,
          </Text>
          <Text style={styles.summaryHighlight}>
            내 또래 남성 평균이상입니다
          </Text>
        </View>

        {/* 평균 비교 바 차트 */}
        <View style={styles.comparisonSection}>
          <View style={styles.comparisonBarContainer}>
            <View style={styles.comparisonBar}>
              <View style={[styles.comparisonBarFill, { width: `${(userLevel / 10) * 100}%` }]} />
            </View>
            <View style={styles.comparisonLabels}>
              <Text style={styles.comparisonLabel}>0</Text>
              <View style={styles.averageMarker}>
                <View style={styles.averageTriangle} />
                <Text style={styles.averageLabel}>평균</Text>
              </View>
              <Text style={styles.userLevelLabel}>{userLevel}</Text>
              <Text style={styles.comparisonLabel}>10</Text>
            </View>
          </View>
        </View>

        {/* 항목별 분석결과 */}
        <View style={styles.itemsSection}>
          <Text style={styles.sectionTitle}>항목별 분석결과</Text>
          
          {/* 버블 차트 */}
          <View style={styles.bubbleChart}>
            {healthItems.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.bubble,
                  {
                    width: getBubbleSize(item.size),
                    height: getBubbleSize(item.size),
                    borderRadius: getBubbleSize(item.size) / 2,
                    backgroundColor: getStatusColor(item.status) + '20',
                    borderColor: getStatusColor(item.status),
                    borderWidth: 2,
                  },
                ]}
              >
                <Text style={[styles.bubbleText, { fontSize: item.size === 'large' ? 12 : item.size === 'medium' ? 10 : 8 }]}>
                  {item.name}
                </Text>
                <Text style={[styles.bubbleStatus, { color: getStatusColor(item.status), fontSize: item.size === 'large' ? 10 : 8 }]}>
                  {item.status}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* 서비스별 분석결과 */}
        <View style={styles.serviceSection}>
          <Text style={styles.sectionTitle}>서비스별 분석결과</Text>
          
          <TouchableOpacity 
            style={styles.serviceCard}
            onPress={handleServiceDetail}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="document-text" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>자가진단</Text>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </TouchableOpacity>
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
  graphButton: {
    padding: 8,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#D1D5DB',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: '#8B5CF6',
    width: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  summarySection: {
    marginBottom: 30,
  },
  summaryText: {
    fontSize: 18,
    color: '#000',
    lineHeight: 26,
    marginBottom: 4,
  },
  summaryHighlight: {
    fontSize: 18,
    color: '#8B5CF6',
    fontWeight: 'bold',
    lineHeight: 26,
  },
  comparisonSection: {
    marginBottom: 40,
  },
  comparisonBarContainer: {
    marginTop: 20,
  },
  comparisonBar: {
    width: '100%',
    height: 24,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    overflow: 'hidden',
  },
  comparisonBarFill: {
    height: '100%',
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
  },
  comparisonLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 8,
    position: 'relative',
  },
  comparisonLabel: {
    fontSize: 12,
    color: '#6B7280',
  },
  averageMarker: {
    position: 'absolute',
    left: '30%',
    alignItems: 'center',
  },
  averageTriangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#6B7280',
    marginBottom: 2,
  },
  averageLabel: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  userLevelLabel: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  itemsSection: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  bubbleChart: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
  },
  bubble: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  bubbleText: {
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    marginBottom: 2,
  },
  bubbleStatus: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceSection: {
    marginBottom: 40,
  },
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  serviceName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});
