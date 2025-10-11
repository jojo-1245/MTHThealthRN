import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function BreathingMeasurementResult() {
  const handleSave = () => {
    // 호흡 메인 페이지로 이동
    router.push('/breathing');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>호흡 측정</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 측정 완료 섹션 */}
        <View style={styles.completionSection}>
          <View style={styles.checkIconContainer}>
            <Ionicons name="checkmark-circle" size={80} color="#10B981" />
          </View>
          <Text style={styles.completionTitle}>호흡 체크가 완료되었습니다</Text>
        </View>

        {/* 호흡 상태 결과 섹션 */}
        <View style={styles.resultSection}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>호흡 상태</Text>
            <View style={styles.resultBadge}>
              <Text style={styles.resultBadgeText}>양호</Text>
            </View>
          </View>
          
          <View style={styles.resultDetails}>
            <View style={styles.resultItem}>
              <Text style={styles.resultItemLabel}>호흡수</Text>
              <Text style={styles.resultItemValue}>16회/분</Text>
            </View>
            <View style={styles.resultItem}>
              <Text style={styles.resultItemLabel}>정상 범위</Text>
              <Text style={styles.resultItemValue}>12-20회/분</Text>
            </View>
          </View>
        </View>

        {/* 호흡 증상 섹션 */}
        <View style={styles.symptomsSection}>
          <Text style={styles.sectionTitle}>호흡 증상</Text>
          <View style={styles.symptomsList}>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>호흡이 편안함</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>가슴 답답함 없음</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>숨이 차지 않음</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>기침이 없음</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>가래가 없음</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>흉통이 없음</Text>
            </View>
            <View style={styles.symptomItem}>
              <Ionicons name="checkmark-circle" size={20} color="#10B981" />
              <Text style={styles.symptomText}>호흡곤란이 없음</Text>
            </View>
          </View>
        </View>

        {/* 전문가 상담 안내 섹션 */}
        <View style={styles.consultationSection}>
          <View style={styles.consultationHeader}>
            <Ionicons name="medical" size={24} color="#10B981" />
            <Text style={styles.consultationTitle}>전문가 상담 안내</Text>
          </View>
          <Text style={styles.consultationText}>
            위 증상이 지속적으로 나타난다면 전문가와 상담해보세요
          </Text>
        </View>

        {/* 정확도 정보 섹션 */}
        <View style={styles.accuracySection}>
          <Text style={styles.accuracyTitle}>정확도</Text>
          <Text style={styles.accuracyText}>
            딥메디 KCL/KTL 인증
          </Text>
          <Text style={styles.disclaimerText}>
            본 측정 결과는 참고용이며, 의료기기가 아닙니다. 진단이나 치료 목적으로 사용할 수 없습니다.
          </Text>
        </View>
      </ScrollView>

      {/* 하단 저장 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>저장하기</Text>
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
  content: {
    flex: 1,
  },
  completionSection: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  checkIconContainer: {
    marginBottom: 20,
  },
  completionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  resultSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  resultBadge: {
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  resultBadgeText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fff',
  },
  resultDetails: {
    gap: 12,
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  resultItemLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultItemValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  symptomsSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  symptomsList: {
    gap: 12,
  },
  symptomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  symptomText: {
    fontSize: 16,
    color: '#000',
  },
  consultationSection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f0f9ff',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#10B981',
  },
  consultationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  consultationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  consultationText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  accuracySection: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
  },
  accuracyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  accuracyText: {
    fontSize: 14,
    color: '#10B981',
    marginBottom: 12,
  },
  disclaimerText: {
    fontSize: 12,
    color: '#999',
    lineHeight: 16,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  saveButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
