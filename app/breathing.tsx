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

export default function BreathingScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleStartMeasurement = () => {
    router.push('/breathing-measurement-guide');
  };

  const handleViewStatistics = () => {
    router.push('/breathing-statistics');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 측정</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 호흡 측정 소개 */}
        <View style={styles.introSection}>
          <View style={styles.introIcon}>
            <Ionicons name="pulse" size={60} color="#8B5CF6" />
          </View>
          <Text style={styles.introTitle}>호흡수 측정</Text>
          <Text style={styles.introDescription}>
            얼굴 인식을 통해 정확한 호흡수를 측정하고{'\n'}
            건강한 호흡 패턴을 관리해보세요
          </Text>
        </View>

        {/* 기능 카드들 */}
        <View style={styles.cardsContainer}>
          {/* 측정 시작 카드 */}
          <TouchableOpacity style={styles.card} onPress={handleStartMeasurement}>
            <View style={styles.cardHeader}>
              <Ionicons name="play-circle" size={32} color="#8B5CF6" />
              <Text style={styles.cardTitle}>호흡 측정 시작</Text>
            </View>
            <Text style={styles.cardDescription}>
              얼굴을 인식하여 실시간으로 호흡수를 측정합니다
            </Text>
            <View style={styles.cardArrow}>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>

          {/* 통계 보기 카드 */}
          <TouchableOpacity style={styles.card} onPress={handleViewStatistics}>
            <View style={styles.cardHeader}>
              <Ionicons name="bar-chart" size={32} color="#8B5CF6" />
              <Text style={styles.cardTitle}>호흡 통계</Text>
            </View>
            <Text style={styles.cardDescription}>
              일간, 주간, 월간 호흡 패턴을 확인하고 분석합니다
            </Text>
            <View style={styles.cardArrow}>
              <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        </View>

        {/* 주의사항 */}
        <View style={styles.warningSection}>
          <View style={styles.warningHeader}>
            <Ionicons name="information-circle" size={20} color="#3B82F6" />
            <Text style={styles.warningTitle}>측정 시 주의사항</Text>
          </View>
          <View style={styles.warningList}>
            <Text style={styles.warningItem}>• 측정 중에는 움직임을 자제해주세요</Text>
            <Text style={styles.warningItem}>• 밝은 곳에서 측정해주세요</Text>
            <Text style={styles.warningItem}>• 카메라와 얼굴 사이의 거리를 적절히 유지해주세요</Text>
            <Text style={styles.warningItem}>• 이 서비스는 의료기기가 아닙니다</Text>
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
  introSection: {
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 20,
  },
  introIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  introDescription: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  cardsContainer: {
    gap: 16,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
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
    borderColor: '#E5E7EB',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
  },
  cardDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  cardArrow: {
    alignSelf: 'flex-end',
  },
  warningSection: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  warningHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  warningList: {
    gap: 8,
  },
  warningItem: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
});