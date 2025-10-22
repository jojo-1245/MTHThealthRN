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

export default function ObesityOverviewScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleDetail = () => {
    router.push('/obesity-detail');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>비만체지방</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 정보 텍스트 */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            비만이란 체지방이 비정상적으로 과다한 상태를 말하며, 이차성 비만(질병, 유전, 약물
            등으로 인한)과 일차성 비만(생활습관으로 인한)으로 나뉘며, 일차성 비만이 90% 이상을
            차지합니다. 2형 당뇨병, 고혈압, 고지혈증 등 여러 건강 문제를 야기할 수 있어 식이요법,
            운동, 행동조절을 통한 예방 및 개선이 필요합니다.
          </Text>
        </View>

        {/* 일러스트 영역 */}
        <View style={styles.illustrationContainer}>
          <View style={styles.illustration}>
            <Ionicons name="body" size={120} color="#F59E0B" />
            <Text style={styles.illustrationLabel}>인체 일러스트</Text>
          </View>
        </View>

        {/* 사용자 상태 요약 */}
        <View style={styles.statusSummary}>
          <Text style={styles.statusSummaryText}>
            Ted님의 비만체지방 상태는 위험단계로{'\n'}
            또래 남성 평균 미달입니다.
          </Text>
        </View>

        {/* 위험도 인디케이터 */}
        <View style={styles.riskIndicator}>
          <View style={styles.riskBar}>
            <View style={styles.riskBarFill} />
            <View style={styles.riskMarker} />
          </View>
          <View style={styles.riskLabels}>
            <Text style={styles.riskLabel}>위험</Text>
            <Text style={styles.averageLabel}>평균</Text>
            <Text style={styles.goodLabel}>양호</Text>
          </View>
          <Text style={styles.riskValue}>30</Text>
        </View>

        {/* 상태 분석 */}
        <View style={styles.analysisSection}>
          <Text style={styles.analysisTitle}>비만체지방 상태 분석</Text>
          
          <View style={styles.analysisItems}>
            <TouchableOpacity style={styles.analysisItem} onPress={handleDetail}>
              <Text style={styles.analysisItemLabel}>생활습관</Text>
              <View style={[styles.statusButton, styles.goodStatus]}>
                <Text style={[styles.statusButtonText, styles.goodStatusText]}>양호</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.analysisItem} onPress={handleDetail}>
              <Text style={styles.analysisItemLabel}>만성질환</Text>
              <View style={[styles.statusButton, styles.dangerStatus]}>
                <Text style={[styles.statusButtonText, styles.dangerStatusText]}>위험</Text>
              </View>
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
    paddingTop: 20,
  },
  infoSection: {
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 22,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationLabel: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 8,
  },
  statusSummary: {
    marginBottom: 20,
  },
  statusSummaryText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    textAlign: 'center',
  },
  riskIndicator: {
    marginBottom: 30,
  },
  riskBar: {
    height: 24,
    backgroundColor: '#E5E7EB',
    borderRadius: 12,
    position: 'relative',
    marginBottom: 12,
  },
  riskBarFill: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '30%',
    height: '100%',
    backgroundColor: '#EF4444走得',
    בו
