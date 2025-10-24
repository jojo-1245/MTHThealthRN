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

export default function SelfDiagnosisCompleteScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleAddModify = () => {
    router.push('/self-diagnosis-add-modify');
  };

  const handleDetailedResults = () => {
    router.push('/self-diagnosis-results');
  };

  const handleMonthChange = () => {
    console.log('진단 월 변경');
    // 월 선택 기능 구현 예정
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>자가진단</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 진단 결과 카드 */}
        <View style={styles.resultCard}>
          {/* 추가 및 수정 버튼 */}
          <TouchableOpacity 
            style={styles.addModifyButton}
            onPress={handleAddModify}
          >
            <Ionicons name="create-outline" size={16} color="#fff" />
            <Text style={styles.addModifyText}>추가 및 수정</Text>
          </TouchableOpacity>

          {/* 진단 월 */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>진단 월</Text>
            <TouchableOpacity 
              style={styles.monthContainer}
              onPress={handleMonthChange}
            >
              <Text style={styles.monthText}>2025-10</Text>
              <Ionicons name="chevron-up" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {/* 진단 항목 */}
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>진단항목</Text>
            <Text style={styles.diagnosisItem}>만성질환, 식/생활습관, 피부건강</Text>
          </View>

          {/* 상세결과 버튼 */}
          <TouchableOpacity 
            style={styles.detailedResultsButton}
            onPress={handleDetailedResults}
          >
            <Ionicons name="list-outline" size={20} color="#fff" />
            <Text style={styles.detailedResultsText}>상세결과</Text>
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
  headerRight: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultCard: {
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
  addModifyButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  addModifyText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 6,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  monthContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
    marginRight: 8,
  },
  diagnosisItem: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  detailedResultsButton: {
    backgroundColor: '#6B7280',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  detailedResultsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginLeft: 8,
  },
});
