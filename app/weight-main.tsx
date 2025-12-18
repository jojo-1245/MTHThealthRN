import { useTranslation } from '@/i18n';
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

export default function WeightMainScreen() {
  const { t } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentWeight, setCurrentWeight] = useState(91); // kg

  const handleBack = () => {
    router.back();
  };

  const handleStatistics = () => {
    router.push('/weight-statistics');
  };

  const handleRecord = () => {
    router.push('/weight-measurement');
  };

  const handleEdit = () => {
    router.push('/weight-detail-record');
  };

  const handleWeightScaleConnect = () => {
    // 체중계 연결 로직
    console.log('체중계 연결');
  };

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return `${year}${t('weight.main.year')} ${month}${t('weight.main.month')}`;
  };

  const getDayOfWeek = (date: Date) => {
    const days = [
      t('weight.main.weekDays.sun'),
      t('weight.main.weekDays.mon'),
      t('weight.main.weekDays.tue'),
      t('weight.main.weekDays.wed'),
      t('weight.main.weekDays.thu'),
      t('weight.main.weekDays.fri'),
      t('weight.main.weekDays.sat')
    ];
    return days[date.getDay()];
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // 빈 날짜들
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // 실제 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const days = getDaysInMonth(selectedDate);
  const selectedDay = selectedDate.getDate();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('weight.main.title')}</Text>
        <TouchableOpacity style={styles.statisticsButton} onPress={handleStatistics}>
          <Ionicons name="bar-chart" size={24} color="#8B5CF6" />
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 달력 */}
        <View style={styles.calendarContainer}>
          <View style={styles.calendarHeader}>
            <TouchableOpacity style={styles.monthButton}>
              <Ionicons name="chevron-back" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.monthText}>{formatDate(selectedDate)}</Text>
            <TouchableOpacity style={styles.monthButton}>
              <Ionicons name="chevron-forward" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* 요일 헤더 */}
          <View style={styles.weekdayHeader}>
            {[
              t('weight.main.weekDays.sun'),
              t('weight.main.weekDays.mon'),
              t('weight.main.weekDays.tue'),
              t('weight.main.weekDays.wed'),
              t('weight.main.weekDays.thu'),
              t('weight.main.weekDays.fri'),
              t('weight.main.weekDays.sat')
            ].map((day, index) => (
              <Text key={index} style={styles.weekdayText}>{day}</Text>
            ))}
          </View>

          {/* 달력 그리드 */}
          <View style={styles.calendarGrid}>
            {days.map((day, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayButton,
                  day === selectedDay && styles.selectedDay,
                ]}
                onPress={() => day && setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day))}
              >
                <Text style={[
                  styles.dayText,
                  day === selectedDay && styles.selectedDayText,
                ]}>
                  {day}
                </Text>
                {day === 9 && (
                  <Text style={styles.weightIndicator}>91</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* 선택된 날짜 및 체중 정보 */}
        <View style={styles.weightInfoContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.selectedDateText}>
              {selectedDay}{t('weight.main.dayFormat')}({getDayOfWeek(selectedDate)})
            </Text>
            <TouchableOpacity style={styles.connectButton} onPress={handleWeightScaleConnect}>
              <Text style={styles.connectButtonText}>{t('weight.main.connectScale')}</Text>
            </TouchableOpacity>
          </View>

          {/* 체중 표시 */}
          <View style={styles.weightDisplayContainer}>
            <Text style={styles.weightValue}>{currentWeight} kg</Text>
            <View style={styles.weightScale}>
              <View style={styles.scaleLine} />
              <View style={[styles.weightIndicator, { left: `${(currentWeight - 60) / 40 * 100}%` }]} />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼들 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.editButtonText}>{t('weight.main.edit')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailButton} onPress={handleRecord}>
          <Text style={styles.detailButtonText}>{t('weight.main.measurementDetail')}</Text>
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
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  statisticsButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  calendarContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  monthButton: {
    padding: 8,
  },
  monthText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  weekdayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  weekdayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
    width: 40,
    textAlign: 'center',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dayButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  selectedDay: {
    backgroundColor: '#333',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#fff',
  },
  selectedDayText: {
    fontWeight: 'bold',
  },
  weightIndicator: {
    position: 'absolute',
    bottom: -2,
    fontSize: 10,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  weightInfoContainer: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
  },
  connectButton: {
    backgroundColor: '#8B5CF6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  connectButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  weightDisplayContainer: {
    alignItems: 'center',
  },
  weightValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  weightScale: {
    width: '100%',
    height: 20,
    position: 'relative',
    backgroundColor: '#333',
    borderRadius: 10,
  },
  scaleLine: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#666',
  },
  weightIndicator: {
    position: 'absolute',
    top: 0,
    width: 4,
    height: 20,
    backgroundColor: '#3B82F6',
    borderRadius: 2,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  editButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  detailButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
});
