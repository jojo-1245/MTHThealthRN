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

export default function MedicationDetail() {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>상세 정보</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 등록된 의약품 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>등록된 의약품</Text>
          
          {/* 복용 기간 정보 */}
          <View style={styles.periodInfo}>
            <Text style={styles.periodText}>복용 기간 2025.10.09~2025.10.09</Text>
          </View>

          {/* 의약품 정보 */}
          <View style={styles.medicationInfo}>
            <Text style={styles.medicationName}>타이론정</Text>
          </View>
        </View>

        {/* 상세 설명 */}
        <View style={styles.section}>
          <Text style={styles.description}>
            해당 의약품은 영양소 상호작용에 대한 정보가 없는 약물입니다
          </Text>
        </View>

        {/* 출처 정보 */}
        <View style={styles.section}>
          <Text style={styles.sourceText}>
            (출처: NIH, Drugs.com, 영영제 처별 가이드, 비타민 치료)
          </Text>
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
    width: 34, // 뒤로가기 버튼과 동일한 너비로 중앙 정렬
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  periodInfo: {
    marginBottom: 16,
  },
  periodText: {
    fontSize: 14,
    color: '#666',
  },
  medicationInfo: {
    marginBottom: 20,
  },
  medicationName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  description: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  sourceText: {
    fontSize: 12,
    color: '#999',
    lineHeight: 18,
  },
});
