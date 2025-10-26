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

interface CategoryItem {
  name: string;
  progress: number;
  status: '위험' | '주의' | '관심' | '양호';
}

interface Category {
  name: string;
  overallStatus: '위험' | '주의' | '관심' | '양호';
  items: CategoryItem[];
}

export default function SelfDiagnosisResultsScreen() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['식습관', '생활습관', '피부건강']);

  const handleBack = () => {
    router.back();
  };

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName)
        ? prev.filter((name) => name !== categoryName)
        : [...prev, categoryName]
    );
  };

  const handleItemPress = (categoryName: string, itemName: string) => {
    console.log('항목 선택:', categoryName, itemName);
    // 각 항목별 상세 페이지로 이동
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '위험': return '#EF4444';
      case '주의': return '#F59E0B';
      case '관심': return '#10B981';
      case '양호': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const categories: Category[] = [
    {
      name: '식습관',
      overallStatus: '위험',
      items: [
        { name: '탄수화물 식이', progress: 0.2, status: '위험' },
        { name: '트랜스지방 식이', progress: 0.2, status: '위험' },
        { name: '포화지방 식이', progress: 0.2, status: '위험' },
        { name: '당 식이', progress: 0.2, status: '위험' },
        { name: '식사 속도 습관', progress: 0.2, status: '위험' },
        { name: '식후 간식 습관', progress: 0.2, status: '위험' },
        { name: '과식 습관', progress: 0.2, status: '위험' },
        { name: '나트륨 식이', progress: 0.2, status: '위험' },
        { name: '야식 습관', progress: 0.2, status: '위험' },
        { name: '필수지방산 식이', progress: 0.8, status: '양호' },
        { name: '영양 식이', progress: 0.8, status: '양호' },
        { name: '단백질 식이', progress: 0.8, status: '양호' },
      ],
    },
    {
      name: '생활습관',
      overallStatus: '관심',
      items: [
        { name: '흡연 상태', progress: 0.2, status: '위험' },
        { name: '활동대사량', progress: 0.5, status: '주의' },
        { name: '두뇌 활동', progress: 0.7, status: '관심' },
        { name: '수면생체리듬', progress: 0.7, status: '관심' },
        { name: '수분 섭취', progress: 0.8, status: '양호' },
        { name: '자외선 노출', progress: 0.8, status: '양호' },
        { name: '기초대사량', progress: 0.8, status: '양호' },
        { name: '카페인 섭취', progress: 0.8, status: '양호' },
        { name: '관절 기능', progress: 0.8, status: '양호' },
        { name: '알코올 섭취', progress: 0.8, status: '양호' },
      ],
    },
    {
      name: '피부건강',
      overallStatus: '양호',
      items: [
        { name: 'U존피지상태', progress: 0.5, status: '주의' },
        { name: 'T존피지상태', progress: 0.5, status: '주의' },
        { name: '피부장벽기능', progress: 0.5, status: '주의' },
        { name: '피부피지상태', progress: 0.8, status: '양호' },
        { name: '자외선피부손상', progress: 0.8, status: '양호' },
        { name: '피부 손상', progress: 0.8, status: '양호' },
        { name: '피부보습인자', progress: 0.8, status: '양호' },
        { name: '피부각질주기', progress: 0.8, status: '양호' },
        { name: '눈주위 근육', progress: 0.8, status: '양호' },
        { name: '피부 홍조', progress: 0.8, status: '양호' },
        { name: '멜라닌 색소', progress: 0.8, status: '양호' },
        { name: '피부 밀도', progress: 0.8, status: '양호' },
        { name: '광노화', progress: 0.8, status: '양호' },
        { name: '표정주름', progress: 0.8, status: '양호' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>자가진단 결과</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {categories.map((category, categoryIndex) => {
          const isExpanded = expandedCategories.includes(category.name);
          
          return (
            <View key={categoryIndex} style={styles.categoryContainer}>
              {/* 카테고리 헤더 */}
              <TouchableOpacity
                style={styles.categoryHeader}
                onPress={() => toggleCategory(category.name)}
              >
                <View style={styles.categoryHeaderLeft}>
                  <Text style={styles.categoryName}>{category.name}</Text>
                  <View style={[styles.statusBadge, { backgroundColor: getStatusColor(category.overallStatus) + '20' }]}>
                    <Text style={[styles.statusBadgeText, { color: getStatusColor(category.overallStatus) }]}>
                      {category.overallStatus}
                    </Text>
                  </View>
                </View>
                <Ionicons
                  name={isExpanded ? 'chevron-up' : 'chevron-down'}
                  size={24}
                  color="#6B7280"
                />
              </TouchableOpacity>

              {/* 카테고리 아이템들 */}
              {isExpanded && (
                <View style={styles.categoryItems}>
                  {category.items.map((item, itemIndex) => (
                    <TouchableOpacity
                      key={itemIndex}
                      style={styles.itemRow}
                      onPress={() => handleItemPress(category.name, item.name)}
                    >
                      <View style={styles.itemContent}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <View style={styles.progressBarContainer}>
                          <View style={styles.progressBarBackground}>
                            <View
                              style={[
                                styles.progressBarFill,
                                {
                                  width: `${item.progress * 100}%`,
                                  backgroundColor: getStatusColor(item.status),
                                },
                              ]}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.itemRight}>
                        <View style={[styles.itemStatusBadge, { backgroundColor: getStatusColor(item.status) + '20' }]}>
                          <Text style={[styles.itemStatusText, { color: getStatusColor(item.status) }]}>
                            {item.status}
                          </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          );
        })}
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
  categoryContainer: {
    marginBottom: 12,
    backgroundColor: '#F8F9FF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    overflow: 'hidden',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },
  categoryHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 12,
  },
  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusBadgeText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  categoryItems: {
    padding: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  itemContent: {
    flex: 1,
    marginRight: 12,
  },
  itemName: {
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  progressBarContainer: {
    width: '100%',
  },
  progressBarBackground: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemStatusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  itemStatusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
