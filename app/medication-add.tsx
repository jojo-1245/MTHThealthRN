import DatePickerModal from '@/components/date-picker-modal';
import PeriodPickerModal from '@/components/period-picker-modal';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function MedicationAdd() {
  const [prescriptionDate, setPrescriptionDate] = useState('');
  const [medicationPeriod, setMedicationPeriod] = useState('');
  const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
  const [showDateModal, setShowDateModal] = useState(false);
  const [showPeriodModal, setShowPeriodModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'scan' | 'search'>('scan');

  const handleAdditionalScan = () => {
    setActiveTab('scan');
    Alert.alert('추가스캔', '추가스캔 기능을 구현해주세요.');
  };

  const handleMedicationSearch = () => {
    setActiveTab('search');
    router.push('/medication-search');
  };

  const handleDateSelect = () => {
    setShowDateModal(true);
  };

  const handlePeriodSelect = () => {
    setShowPeriodModal(true);
  };

  const handleDateConfirm = (date: { year: number; month: number; day: number }) => {
    const formattedDate = `${date.year}-${date.month.toString().padStart(2, '0')}-${date.day.toString().padStart(2, '0')}`;
    setPrescriptionDate(formattedDate);
  };

  const handlePeriodConfirm = (period: number) => {
    setMedicationPeriod(`${period}일`);
  };

  const handleMedicationRemove = () => {
    setSelectedMedication(null);
  };

  const handleSave = () => {
    if (!prescriptionDate || !medicationPeriod || !selectedMedication) {
      Alert.alert('입력 오류', '모든 필드를 입력해주세요.');
      return;
    }
    
    setShowSuccessModal(true);
  };

  const handleSuccessConfirm = () => {
    setShowSuccessModal(false);
    router.push('/medication-record');
  };

  const isFormValid = prescriptionDate && medicationPeriod && selectedMedication;

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>의약품 등록</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 상단 액션 버튼들 */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity 
            style={[styles.scanButton, activeTab === 'scan' && styles.activeButton]} 
            onPress={handleAdditionalScan}
          >
            <Ionicons name="scan" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.scanButtonText}>추가스캔</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.searchButton, activeTab === 'search' && styles.activeSearchButton]} 
            onPress={handleMedicationSearch}
          >
            <Ionicons name="search" size={20} color={activeTab === 'search' ? "#fff" : "#8B5CF6"} style={styles.buttonIcon} />
            <Text style={[styles.searchButtonText, activeTab === 'search' && styles.activeSearchButtonText]}>의약품 검색</Text>
          </TouchableOpacity>
        </View>

        {/* 선택된 의약품 표시 */}
        {selectedMedication && (
          <View style={styles.selectedMedicationContainer}>
            <Text style={styles.selectedMedicationLabel}>처방 받은 약</Text>
            <View style={styles.selectedMedicationItem}>
              <Text style={styles.selectedMedicationName}>타이론정</Text>
              <TouchableOpacity onPress={handleMedicationRemove} style={styles.removeButton}>
                <Ionicons name="close" size={16} color="#999" />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* 입력 폼 */}
        <View style={styles.formSection}>
          {/* 처방 일자 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>처방 일자</Text>
            <TouchableOpacity style={styles.dateInputContainer} onPress={handleDateSelect}>
              <TextInput
                style={styles.dateInput}
                value={prescriptionDate}
                onChangeText={setPrescriptionDate}
                placeholder="날짜를 선택하세요"
                placeholderTextColor="#999"
                editable={false}
              />
              <Ionicons name="calendar-outline" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* 복용 기간 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>복용 기간</Text>
            <TouchableOpacity style={styles.periodInputContainer} onPress={handlePeriodSelect}>
              <TextInput
                style={styles.periodInput}
                value={medicationPeriod}
                onChangeText={setMedicationPeriod}
                placeholder="복용 기간을 선택하세요"
                placeholderTextColor="#999"
                editable={false}
              />
              <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 하단 저장 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity
          style={[styles.saveButton, !isFormValid && styles.saveButtonDisabled]}
          onPress={handleSave}
          disabled={!isFormValid}
        >
          <Text style={[styles.saveButtonText, !isFormValid && styles.saveButtonTextDisabled]}>
            저장
          </Text>
        </TouchableOpacity>
      </View>

      {/* 날짜 선택 모달 */}
      <DatePickerModal
        visible={showDateModal}
        onClose={() => setShowDateModal(false)}
        onConfirm={handleDateConfirm}
      />

      {/* 복용 기간 선택 모달 */}
      <PeriodPickerModal
        visible={showPeriodModal}
        onClose={() => setShowPeriodModal(false)}
        onConfirm={handlePeriodConfirm}
      />

      {/* 성공 팝업 모달 */}
      <Modal
        visible={showSuccessModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successModalContainer}>
            <Text style={styles.successModalTitle}>알림</Text>
            <Text style={styles.successModalMessage}>정상 처리 되었습니다</Text>
            <TouchableOpacity 
              style={styles.successModalButton} 
              onPress={handleSuccessConfirm}
            >
              <Text style={styles.successModalButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  actionButtonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    gap: 12,
  },
  scanButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  searchButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  buttonIcon: {
    // 아이콘 스타일
  },
  formSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputGroup: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  dateInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  periodInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  periodInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
  },
  saveButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonDisabled: {
    backgroundColor: '#f5f5f5',
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  saveButtonTextDisabled: {
    color: '#999',
  },
  activeButton: {
    backgroundColor: '#8B5CF6',
  },
  activeSearchButton: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  activeSearchButtonText: {
    color: '#fff',
  },
  selectedMedicationContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  selectedMedicationLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  selectedMedicationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  selectedMedicationName: {
    fontSize: 16,
    color: '#000',
  },
  removeButton: {
    padding: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successModalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  successModalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  successModalMessage: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  successModalButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 8,
  },
  successModalButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
