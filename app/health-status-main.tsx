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
      console.log('건강검진결과 추가');
    } else if (type === 'detailed-analysis') {
      router.push('/askings-1');
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
        <Text style={styles.headerTitle}>내 건강상태 알아보기</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 건강레벨 섹션 */}
        <View style={styles.healthLevelSection}>
          <Text style={styles.userName}>Ted님의 건강레벨?</Text>
          
          <View style={styles.levelContainer}>
            <View style={styles.levelProgress}>
              <View style={styles.progressCircleOuter}>
                <View style={[styles.progressCircleInner, { width: `${(healthLevel / maxLevel) * 100}%` }]} />
              </View>
              <View style={styles.levelTextContainer}>
                <Text style={styles.levelText}>건강레벨</Text>
                <Text style={styles.levelNumber}>{healthLevel}/{maxLevel}</Text>
              </View>
            </View>
            
            <TouchableOpacity 
              style={styles.levelBadge} 
              onPress={handleHealthLevelDetail}
            >
              <Text style={styles.levelBadgeText}>Level {healthLevel} 주의단계</Text>
              <Ionicons name="chevron-forward" size={20} color="#F59E0B" />
            </TouchableOpacity>
          </View>

          <Text style={styles.levelDescription}>
            상태 개선을 위한 주의 깊은 관리 필요
          </Text>
        </View>

        {/* 무엇부터 관리하지? 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>무엇부터 관리하지?</Text>
          
          <View style={styles.cardRow}>
            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('obesity')}
            >
              <View style={[styles.cardIcon, styles.orangeIcon]}>
                <Ionicons name="scale" size={32} color="#F59E0B" />
              </View>
              <Text style={styles.cardTitle}>비만체지방</Text>
              <Text style={styles.dangerLabel}>위험</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('metabolism')}
            >
              <View style={[styles.cardIcon, styles.blueIcon]}>
                <Ionicons name="sync" size={32} color="#3B82F6" />
              </View>
              <Text style={styles.cardTitle}>대사조절</Text>
              <Text style={styles.cautionLabel}>주의</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.manageCard}
              onPress={() => handleManageItem('scalp')}
            >
              <View style={[styles.cardIcon, styles.brownIcon]}>
                <Ionicons name="water" size={32} color="#92400E" />
              </View>
              <Text style={styles.cardTitle}>비듬두피</Text>
              <Text style={styles.cautionLabel}>주의</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 건강정보 추가해 볼까? 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>건강정보 추가해 볼까?</Text>
          
          <View style={styles.cardRow}>
            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('self-diagnosis')}
            >
              <Text style={styles.addCardTime}>약 1분 소요</Text>
              <View style={styles.addCardIcon}>
                <Ionicons name="bar-chart" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>자가진단</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('health-checkup')}
            >
              <Text style={styles.addCardTime}>약 30초 소요</Text>
              <View style={styles.addCardIcon}>
                <Ionicons name="medical" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>건강검진결과</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.addCard}
              onPress={() => handleAddHealthInfo('detailed-analysis')}
            >
              <View style={styles.addCardIcon}>
                <Ionicons name="document-text" size={32} color="#8B5CF6" />
              </View>
              <Text style={styles.addCardTitle}>기타 정밀분석</Text>
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
});
