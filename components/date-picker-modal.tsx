import React, { useState } from 'react';
import {
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface DatePickerModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: (date: { year: number; month: number; day: number }) => void;
  initialDate?: { year: number; month: number; day: number };
}

export default function DatePickerModal({ 
  visible, 
  onClose, 
  onConfirm, 
  initialDate 
}: DatePickerModalProps) {
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState(initialDate?.year || currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(initialDate?.month || currentDate.getMonth() + 1);
  const [selectedDay, setSelectedDay] = useState(initialDate?.day || currentDate.getDate());

  // 년도 배열 (현재 년도 기준 ±2년)
  const years = Array.from({ length: 5 }, (_, i) => currentDate.getFullYear() - 2 + i);
  
  // 월 배열
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  
  // 일 배열 (선택된 월의 마지막 날까지)
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate();
  };
  const days = Array.from({ length: getDaysInMonth(selectedYear, selectedMonth) }, (_, i) => i + 1);

  const handleConfirm = () => {
    onConfirm({
      year: selectedYear,
      month: selectedMonth,
      day: selectedDay,
    });
    onClose();
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}년 ${month}월 ${day}일`;
  };

  const renderPickerColumn = (
    data: number[],
    selectedValue: number,
    onSelect: (value: number) => void,
    unit: string
  ) => (
    <View style={styles.pickerColumn}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.pickerContent}
      >
        {data.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.pickerItem,
              selectedValue === item && styles.pickerItemSelected,
            ]}
            onPress={() => onSelect(item)}
          >
            <Text
              style={[
                styles.pickerItemText,
                selectedValue === item && styles.pickerItemTextSelected,
              ]}
            >
              {item}{unit}
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
            <Text style={styles.modalTitle}>처방 일자</Text>
            <TouchableOpacity onPress={handleConfirm} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>

          {/* 날짜 선택기 */}
          <View style={styles.pickerContainer}>
            {renderPickerColumn(years, selectedYear, setSelectedYear, '년')}
            {renderPickerColumn(months, selectedMonth, setSelectedMonth, '월')}
            {renderPickerColumn(days, selectedDay, setSelectedDay, '일')}
          </View>

          {/* 선택된 날짜 미리보기 */}
          <View style={styles.previewContainer}>
            <Text style={styles.previewText}>
              {formatDate(selectedYear, selectedMonth, selectedDay)}
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
    flexDirection: 'row',
    height: 200,
    paddingVertical: 20,
  },
  pickerColumn: {
    flex: 1,
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
