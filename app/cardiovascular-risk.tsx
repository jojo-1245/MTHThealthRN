import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
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

export default function CardiovascularRiskScreen() {
  const [selectedDate, setSelectedDate] = useState(9); // 10월 9일 선택된 상태

  const handleBack = () => {
    router.back();
  };

  const handleAddSelfDiagnosis = () => {
    router.push('/cardiovascular-diagnosis-1');
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  const renderCalendar = () => {
    const days = [];
    const startDate = 1;
    const endDate = 31;

    for (let i = startDate; i <= endDate; i++) {
      const isSelected = i === selectedDate;
      const isToday = i === 9; // 예시로 9일을 오늘로 설정
      
      days.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.dateCell,
            isSelected && styles.selectedDate,
            isToday && styles.todayDate,
          ]}
          onPress={() => handleDateSelect(i)}
        >
          <Text style={[
            styles.dateText,
            isSelected && styles.selectedDateText,
            isToday && styles.todayDateText,
          ]}>
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    return days;
  };

  const renderWeekDays = () => {
    const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
    return weekDays.map((day, index) => (
      <View key={index} style={styles.weekDayCell}>
        <Text style={styles.weekDayText}>{day}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>심혈관 건강 위험도</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 달력 섹션 */}
        <View style={styles.calendarSection}>
          <View style={styles.calendarHeader}>
            <Text style={styles.monthYear}>2025년 10월</Text>
          </View>
          
          {/* 요일 헤더 */}
          <View style={styles.weekDaysContainer}>
            {renderWeekDays()}
          </View>
          
          {/* 날짜 그리드 */}
          <View style={styles.datesContainer}>
            {renderCalendar()}
          </View>
        </View>

        {/* 안내 메시지 */}
        <View style={styles.messageSection}>
          <View style={styles.messageContainer}>
            <Ionicons name="warning" size={24} color="#F59E0B" />
            <Text style={styles.messageText}>
              심혈관 건강 위험도를 정확히 측정하기 위해{'\n'}
              만성질환과 식/생활습관 항목을 자가진단해주세요
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addDiagnosisButton} onPress={handleAddSelfDiagnosis}>
          <Text style={styles.addDiagnosisText}>자가진단 추가</Text>
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
  calendarSection: {
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
  calendarHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  weekDayCell: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  weekDayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dateCell: {
    width: `${100/7}%`,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  selectedDate: {
    backgroundColor: '#8B5CF6',
    borderRadius: 20,
  },
  todayDate: {
    backgroundColor: '#F3E8FF',
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#374151',
  },
  selectedDateText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todayDateText: {
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  messageSection: {
    marginBottom: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    backgroundColor: '#FEF3C7',
    padding: 16,
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  messageText: {
    fontSize: 14,
    color: '#92400E',
    lineHeight: 20,
    marginLeft: 12,
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  addDiagnosisButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  addDiagnosisText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
