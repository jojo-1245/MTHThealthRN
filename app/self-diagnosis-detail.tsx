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

interface SkinIndicator {
  id: string;
  name: string;
  progress: number;
  status: 'warning' | 'good';
}

export default function SelfDiagnosisDetailScreen() {
  const skinIndicators: SkinIndicator[] = [
    { id: 't_zone_sebum', name: 'T존피지상태', progress: 40, status: 'warning' },
    { id: 'u_zone_sebum', name: 'U존피지상태', progress: 40, status: 'warning' },
    { id: 'skin_barrier', name: '피부장벽기능', progress: 40, status: 'warning' },
    { id: 'eye_muscles', name: '눈주위 근육', progress: 60, status: 'good' },
    { id: 'skin_exfoliation', name: '피부각질주기', progress: 60, status: 'good' },
    { id: 'skin_moisture', name: '피부보습인자', progress: 60, status: 'good' },
    { id: 'skin_damage', name: '피부 손상', progress: 60, status: 'good' },
    { id: 'uv_damage', name: '자외선피부손상', progress: 60, status: 'good' },
    { id: 'skin_sebum', name: '피부피지상태', progress: 60, status: 'good' },
    { id: 'skin_density', name: '피부 밀도', progress: 60, status: 'good' },
    { id: 'melanin', name: '멜라닌 색소', progress: 60, status: 'good' },
    { id: 'skin_redness', name: '피부 홍조', progress: 60, status: 'good' },
    { id: 'neck_muscles', name: '목 근육', progress: 60, status: 'good' },
    { id: 'expression_wrinkles', name: '표정주름', progress: 60, status: 'good' },
  ];

  const handleBack = () => {
    router.back();
  };

  const handleIndicatorDetail = (indicatorId: string) => {
    console.log('지표 상세보기:', indicatorId);
    // 개별 지표 상세 페이지로 이동 예정
  };

  const renderProgressBar = (progress: number) => {
    return (
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarBackground}>
          <View 
            style={[
              styles.progressBarFill, 
              { width: `${progress}%` }
            ]} 
          />
        </View>
      </View>
    );
  };

  const renderStatusButton = (status: 'warning' | 'good') => {
    const isWarning = status === 'warning';
    return (
      <View style={[
        styles.statusButton,
        isWarning ? styles.warningButton : styles.goodButton
      ]}>
        <Text style={[
          styles.statusText,
          isWarning ? styles.warningText : styles.goodText
        ]}>
          {isWarning ? '주의' : '양호'}
        </Text>
      </View>
    );
  };

  const renderIndicator = (indicator: SkinIndicator) => {
    return (
      <TouchableOpacity
        key={indicator.id}
        style={styles.indicatorRow}
        onPress={() => handleIndicatorDetail(indicator.id)}
      >
        <Text style={styles.indicatorName}>{indicator.name}</Text>
        {renderProgressBar(indicator.progress)}
        {renderStatusButton(indicator.status)}
        <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
      </TouchableOpacity>
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
        <Text style={styles.headerTitle}>자가진단 결과</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 피부건강 섹션 */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>피부건강</Text>
            <TouchableOpacity style={styles.sectionStatusButton}>
              <Text style={styles.sectionStatusText}>양호</Text>
              <Ionicons name="chevron-up" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* 지표 목록 */}
          <View style={styles.indicatorsContainer}>
            {skinIndicators.map(renderIndicator)}
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
  sectionContainer: {
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
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  sectionStatusButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionStatusText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginRight: 4,
  },
  indicatorsContainer: {
    gap: 16,
  },
  indicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  indicatorName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    width: 100,
    marginRight: 12,
  },
  progressBarContainer: {
    flex: 1,
    marginRight: 12,
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#3B82F6',
    borderRadius: 4,
  },
  statusButton: {
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  warningButton: {
    backgroundColor: '#FEF3C7',
  },
  goodButton: {
    backgroundColor: '#8B5CF6',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  warningText: {
    color: '#000',
  },
  goodText: {
    color: '#fff',
  },
});
