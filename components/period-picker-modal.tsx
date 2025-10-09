import React, { useState } from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface PeriodPickerModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (period: number) => void;
  initialPeriod?: number;
}

export default function PeriodPickerModal({ 
  visible, 
  onClose, 
  onConfirm, 
  initialPeriod = 7 
}: PeriodPickerModalProps) {
  const [selectedPeriod, setSelectedPeriod] = useState(initialPeriod);

  // 복용 기간 옵션 (1일부터 30일까지)
  const periods = Array.from({ length: 30 }, (_, i) => i + 1);

  const handleConfirm = () => {
    onConfirm(selectedPeriod);
    onClose();
  };

  const renderPickerColumn = () => (
    <View style={styles.pickerColumn}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pickerContent}
      >
        {periods.map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.pickerItem,
              selectedPeriod === period && styles.pickerItemSelected,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text
              style={[
                styles.pickerItemText,
                selectedPeriod === period && styles.pickerItemTextSelected,
              ]}
            >
              {period}일
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* 헤더 */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>복용 기간</Text>
            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>

          {/* 기간 선택기 */}
          <View style={styles.pickerContainer}>
            {renderPickerColumn()}
          </View>

          {/* 선택된 기간 미리보기 */}
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              {selectedPeriod}일
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  confirmButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  pickerContainer: {
    height: 200,
    paddingVertical: 20,
    alignItems: 'center',
  },
  pickerColumn: {
    width: 200,
  },
  pickerContent: {
    paddingHorizontal: 10,
  },
  pickerItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 2,
    borderRadius: 8,
    alignItems: 'center',
  },
  pickerItemSelected: {
    backgroundColor: '#8B5CF6',
  },
  pickerItemText: {
    fontSize: 16,
    color: '#666',
  },
  pickerItemTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  previewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  previewText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
});
