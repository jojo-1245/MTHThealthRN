import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function StressHeartrate() {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(9); // 선택된 날짜

  // 현재 월의 날짜들을 생성하는 함수
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // 이전 달의 날짜들 (빈 칸 채우기)
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({
        date: prevDate.getDate(),
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // 현재 달의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      const today = new Date();
      days.push({
        date: day,
        isCurrentMonth: true,
        isToday: day === today.getDate() && month === today.getMonth() && year === today.getFullYear(),
      });
    }

    // 다음 달의 날짜들 (빈 칸 채우기)
    const remainingCells = 42 - days.length; // 6주 * 7일 = 42
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        date: day,
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = [
    t('stressHeartrate.main.months.1'), t('stressHeartrate.main.months.2'), t('stressHeartrate.main.months.3'), t('stressHeartrate.main.months.4'),
    t('stressHeartrate.main.months.5'), t('stressHeartrate.main.months.6'), t('stressHeartrate.main.months.7'), t('stressHeartrate.main.months.8'),
    t('stressHeartrate.main.months.9'), t('stressHeartrate.main.months.10'), t('stressHeartrate.main.months.11'), t('stressHeartrate.main.months.12')
  ];
  const dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const dayNamesKorean = [
    t('stressHeartrate.main.weekDays.sun'), t('stressHeartrate.main.weekDays.mon'), t('stressHeartrate.main.weekDays.tue'),
    t('stressHeartrate.main.weekDays.wed'), t('stressHeartrate.main.weekDays.thu'), t('stressHeartrate.main.weekDays.fri'),
    t('stressHeartrate.main.weekDays.sat')
  ];

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateSelect = (date: number) => {
    setSelectedDate(date);
  };

  const handleFingerMeasurement = () => {
    // 손가락 측정으로 이동
    router.push('/stress-measurement-prep');
  };

  const handleFaceMeasurement = () => {
    // 얼굴 측정으로 이동
    router.push('/face-measurement');
  };

  const handleStatistics = () => {
    // 통계 페이지로 이동
    router.push('/stress-heartrate-statistics');
  };

  const getSelectedDateInfo = () => {
    const selectedDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedDate).getDay();
    return t('stressHeartrate.main.dateInfo', { day: selectedDate, dayOfWeek: dayNamesKorean[selectedDayIndex] });
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('stressHeartrate.main.title')}</Text>
        <TouchableOpacity onPress={handleStatistics} style={styles.statsButton}>
          <Ionicons name="stats-chart" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 달력 섹션 */}
        <View style={styles.calendarSection}>
          {/* 월 네비게이션 */}
          <View style={styles.monthNavigation}>
            <TouchableOpacity onPress={goToPreviousMonth} style={styles.monthButton}>
              <Ionicons name="chevron-back" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.monthText}>
              {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
            </Text>
            <TouchableOpacity onPress={goToNextMonth} style={styles.monthButton}>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* 요일 헤더 */}
          <View style={styles.dayHeader}>
            {dayNames.map((day, index) => (
              <View key={index} style={styles.dayHeaderItem}>
                <Text style={[
                  styles.dayHeaderText,
                  index === 0 && styles.sundayText,
                  index === 6 && styles.saturdayText
                ]}>
                  {day}
                </Text>
              </View>
            ))}
          </View>

          {/* 달력 그리드 */}
          <View style={styles.calendarGrid}>
            {days.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.calendarDay,
                  day.isCurrentMonth && styles.currentMonthDay,
                  day.date === selectedDate && day.isCurrentMonth && styles.selectedDay,
                  day.isToday && styles.todayDay,
                ]}
                onPress={() => day.isCurrentMonth && handleDateSelect(day.date)}
              >
                <Text style={[
                  styles.calendarDayText,
                  !day.isCurrentMonth && styles.otherMonthText,
                  day.date === selectedDate && day.isCurrentMonth && styles.selectedDayText,
                  day.isToday && styles.todayText,
                ]}>
                  {day.date}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 선택된 날짜 정보 섹션 */}
        <View style={styles.selectedDateSection}>
          <Text style={styles.selectedDateText}>{getSelectedDateInfo()}</Text>
          
          {/* 측정 기록 표시 영역 */}
          <View style={styles.recordArea}>
            {selectedDate === 9 ? (
              <View style={styles.noRecordState}>
                <Ionicons name="warning" size={48} color="#666" />
                <Text style={styles.noRecordText}>{t('stressHeartrate.main.noRecord')}</Text>
              </View>
            ) : (
              <View style={styles.noRecordState}>
                <Ionicons name="warning" size={48} color="#666" />
                <Text style={styles.noRecordText}>{t('stressHeartrate.main.noRecord')}</Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>

      {/* 하단 측정 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.fingerButton} onPress={handleFingerMeasurement}>
          <Ionicons name="finger-print" size={24} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.fingerButtonText}>{t('stressHeartrate.main.fingerMeasurement')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.faceButton} onPress={handleFaceMeasurement}>
          <Ionicons name="camera" size={24} color="#8B5CF6" style={styles.buttonIcon} />
          <Text style={styles.faceButtonText}>{t('stressHeartrate.main.faceMeasurement')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    backgroundColor: '#000',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  statsButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  calendarSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  monthNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  monthButton: {
    padding: 10,
  },
  monthText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  dayHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  dayHeaderItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  dayHeaderText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  sundayText: {
    color: '#ff6b6b',
  },
  saturdayText: {
    color: '#4dabf7',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarDay: {
    width: '14.28%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  currentMonthDay: {
    // 현재 달 날짜 스타일
  },
  selectedDay: {
    backgroundColor: '#333',
    borderRadius: 20,
  },
  todayDay: {
    // 오늘 날짜 스타일 (필요시 추가)
  },
  calendarDayText: {
    fontSize: 16,
    color: '#fff',
  },
  otherMonthText: {
    color: '#666',
  },
  selectedDayText: {
    fontWeight: '600',
  },
  todayText: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
  selectedDateSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  selectedDateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
    marginBottom: 20,
  },
  recordArea: {
    minHeight: 200,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecordState: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  noRecordText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    gap: 12,
  },
  fingerButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fingerButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  faceButton: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  faceButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  buttonIcon: {
    // 아이콘 스타일
  },
});
