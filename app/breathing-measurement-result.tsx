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

export default function BreathingMeasurementResultScreen() {
  const breathingRate = 18; // 측정된 호흡수 (예시)
  const targetRate = 16; // 목표 호흡수 (예시)

  const handleBack = () => {
    router.back();
  };

  const handleViewStatistics = () => {
    router.push('/breathing-statistics');
  };

  const handleComplete = () => {
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
        <Text style={styles.headerTitle}>호흡 운동 결과</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 그래프 섹션 */}
        <View style={styles.graphSection}>
          <Text style={styles.graphTitle}>얼마나 잘 따라했을까요?</Text>
          
          {/* 간단한 그래프 시뮬레이션 */}
          <View style={styles.graphContainer}>
            <View style={styles.graphArea}>
              {/* 목표 호흡선 (노란색) */}
              <View style={styles.targetLine} />
              {/* 실제 호흡선 (파란색) */}
              <View style={styles.actualLine} />
            </View>
            <View style={styles.graphLegend}>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#3B82F6' }]} />
                <Text style={styles.legendText}>나의 호흡</Text>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendColor, { backgroundColor: '#F59E0B' }]} />
                <Text style={styles.legendText}>목표 호흡</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 효과 목록 섹션 */}
        <View style={styles.effectsSection}>
          <View style={styles.effectsHeader}>
            <Ionicons name="person" size={24} color="#8B5CF6" />
            <Text style={styles.effectsTitle}>지속적인 호흡 관리의 효과</Text>
          </View>
          
          <View style={styles.effectsList}>
            <View style={styles.effectItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.effectText}>긴장 완화</Text>
            </View>
            <View style={styles.effectItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.effectText}>심장 기능 향상</Text>
            </View>
            <View style={styles.effectItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.effectText}>호흡기 건강 향상</Text>
            </View>
            <View style={styles.effectItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.effectText}>과호흡 예방</Text>
            </View>
            <View style={styles.effectItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.effectText}>스트레스 감소</Text>
            </View>
          </View>
        </View>

        {/* 측정 결과 정보 */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            측정 결과가 딥메디를 통해 95% 이상의 정확도로 분석되었으며{'\n'}
            KCL 공인시험 성적을 받았습니다.
          </Text>
          <Text style={styles.disclaimerText}>
            ※ 이 서비스는 의료기기가 아니며 질병의 진단, 치료, 예방 목적이 아닙니다.
          </Text>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.completeButton} onPress={handleComplete}>
          <Text style={styles.completeButtonText}>분석 완료</Text>
        </TouchableOpacity>
      </View>
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
  graphSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
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
  graphTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
  },
  graphContainer: {
    alignItems: 'center',
  },
  graphArea: {
    width: width - 80,
    height: 200,
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    marginBottom: 16,
    position: 'relative',
  },
  targetLine: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#F59E0B',
    transform: [{ translateY: -1 }],
  },
  actualLine: {
    position: 'absolute',
    top: '45%',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#3B82F6',
    transform: [{ translateY: -1 }],
  },
  graphLegend: {
    flexDirection: 'row',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#6B7280',
  },
  effectsSection: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
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
  effectsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  effectsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 12,
  },
  effectsList: {
    gap: 12,
  },
  effectItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  effectText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
  },
  infoSection: {
    backgroundColor: '#F8FAFC',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 18,
    marginBottom: 8,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 18,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  completeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  completeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});