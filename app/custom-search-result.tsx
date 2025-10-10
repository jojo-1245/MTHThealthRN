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

export default function CustomSearchResult() {
  const [activeTab, setActiveTab] = useState<'essential' | 'functional'>('essential');

  const handleViewDetails = () => {
    router.push('/custom-search-detail');
  };

  const handleViewAllNutrients = () => {
    router.push('/nutrient-list');
  };

  const handleClose = () => {
    router.back();
  };

  // 적합도 게이지를 위한 각도 계산 (80% = 144도)
  const getGaugeAngle = (percentage: number) => {
    return (percentage / 100) * 180; // 반원 게이지
  };

  const renderGauge = () => {
    const percentage = 80;
    const angle = getGaugeAngle(percentage);
    
    return (
      <View style={styles.gaugeContainer}>
        <View style={styles.gaugeBackground}>
          {/* 게이지 배경 */}
          <View style={styles.gaugeArc} />
          {/* 게이지 라벨들 */}
          <View style={styles.gaugeLabels}>
            <Text style={[styles.gaugeLabel, styles.gaugeLabelLow]}>낮음</Text>
            <Text style={[styles.gaugeLabel, styles.gaugeLabelNormal]}>보통</Text>
            <Text style={[styles.gaugeLabel, styles.gaugeLabelGood]}>양호</Text>
            <Text style={[styles.gaugeLabel, styles.gaugeLabelHigh]}>높음</Text>
          </View>
          {/* 게이지 포인터 */}
          <View style={[styles.gaugePointer, { transform: [{ rotate: `${angle}deg` }] }]} />
        </View>
        <View style={styles.gaugeResult}>
          <Ionicons name="checkmark-circle" size={24} color="#8B5CF6" />
          <Text style={styles.gaugePercentage}>80% 양호</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>맞춤형 검색</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 검색 결과 카드 */}
        <View style={styles.resultCard}>
          <Text style={styles.resultTitle}>맞춤 검색 결과</Text>
          
          {/* 사용자 정보 */}
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Ted님 우선 건강관리 항목</Text>
            <Text style={styles.healthItem}>피지과다</Text>
          </View>

          {/* 검색 제품 */}
          <View style={styles.productInfo}>
            <Text style={styles.productLabel}>검색제품</Text>
            <Text style={styles.productName}>락토빗</Text>
          </View>

          {/* 적합도 게이지 */}
          <View style={styles.compatibilitySection}>
            <Text style={styles.compatibilityLabel}>맞춤 적합도</Text>
            {renderGauge()}
          </View>

          {/* 성분평가 */}
          <View style={styles.ingredientSection}>
            <Text style={styles.ingredientTitle}>성분평가</Text>
            <View style={styles.ingredientGrid}>
              <View style={styles.ingredientItem}>
                <Text style={styles.ingredientLabel}>성분평가</Text>
                <Text style={styles.ingredientValue}>양호</Text>
              </View>
              <View style={styles.ingredientItem}>
                <Text style={styles.ingredientLabel}>성분개수</Text>
                <Text style={styles.ingredientValue}>1개</Text>
              </View>
              <View style={styles.ingredientItem}>
                <Text style={styles.ingredientLabel}>보충/주의</Text>
                <Text style={styles.ingredientValue}>0개</Text>
              </View>
            </View>
          </View>

          {/* 자세히 보기 버튼 */}
          <TouchableOpacity style={styles.detailsButton} onPress={handleViewDetails}>
            <Text style={styles.detailsButtonText}>자세히 보기</Text>
            <Ionicons name="chevron-forward" size={20} color="#8B5CF6" />
          </TouchableOpacity>
        </View>

        {/* 개인별 발생원인 */}
        <View style={styles.causesCard}>
          <View style={styles.causesHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
            <Text style={styles.causesTitle}>개인별 발생원인</Text>
          </View>
          
          <View style={styles.causesList}>
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>U존피지상태</Text>
              <View style={[styles.causeStatus, styles.causeStatusDanger]}>
                <Text style={styles.causeStatusText}>위험</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>T존피지상태</Text>
              <View style={[styles.causeStatus, styles.causeStatusCaution]}>
                <Text style={styles.causeStatusText}>주의</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>피부보습인자</Text>
              <View style={[styles.causeStatus, styles.causeStatusGood]}>
                <Text style={styles.causeStatusText}>양호</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
            
            <View style={styles.causeItem}>
              <Text style={styles.causeName}>피부 홍조</Text>
              <View style={[styles.causeStatus, styles.causeStatusGood]}>
                <Text style={styles.causeStatusText}>양호</Text>
              </View>
              <Ionicons name="help-circle-outline" size={16} color="#999" />
            </View>
          </View>
        </View>

        {/* 필요 영양 정보 */}
        <View style={styles.nutrientCard}>
          <View style={styles.nutrientHeader}>
            <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
            <Text style={styles.nutrientTitle}>필요 영양 정보</Text>
          </View>

          {/* 탭 버튼들 */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'essential' && styles.activeTabButton]}
              onPress={() => setActiveTab('essential')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'essential' && styles.activeTabButtonText]}>
                필수 영양소
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'functional' && styles.activeTabButton]}
              onPress={() => setActiveTab('functional')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'functional' && styles.activeTabButtonText]}>
                기능성 성분
              </Text>
            </TouchableOpacity>
          </View>

          {/* 영양소 목록 */}
          <View style={styles.nutrientList}>
            <TouchableOpacity style={styles.nutrientItem}>
              <Text style={styles.nutrientName}>비타민 A</Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.nutrientItem}>
              <Text style={styles.nutrientName}>비타민 E</Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.nutrientItem}>
              <Text style={styles.nutrientName}>비타민 C</Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.nutrientItem}>
              <Text style={styles.nutrientName}>비타민 B2</Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.nutrientItem}>
              <Text style={styles.nutrientName}>비타민 B6</Text>
              <Ionicons name="chevron-down" size={16} color="#999" />
            </TouchableOpacity>
          </View>

          {/* 전체보기 버튼 */}
          <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAllNutrients}>
            <Text style={styles.viewAllButtonText}>필수 영양소 전체보기</Text>
            <Ionicons name="chevron-forward" size={16} color="#8B5CF6" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 하단 닫기 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.closeButton} onPress={handleClose}>
          <Text style={styles.closeButtonText}>닫기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
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
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  userInfo: {
    marginBottom: 16,
  },
  userName: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  healthItem: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  productInfo: {
    marginBottom: 20,
  },
  productLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  compatibilitySection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  compatibilityLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  gaugeContainer: {
    alignItems: 'center',
  },
  gaugeBackground: {
    width: 120,
    height: 60,
    position: 'relative',
    marginBottom: 16,
  },
  gaugeArc: {
    width: 120,
    height: 60,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderWidth: 8,
    borderColor: '#e0e0e0',
    borderBottomWidth: 0,
  },
  gaugeLabels: {
    position: 'absolute',
    top: -10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gaugeLabel: {
    fontSize: 10,
    color: '#999',
  },
  gaugeLabelLow: {
    marginLeft: 5,
  },
  gaugeLabelNormal: {
    marginLeft: 15,
  },
  gaugeLabelGood: {
    marginRight: 15,
  },
  gaugeLabelHigh: {
    marginRight: 5,
  },
  gaugePointer: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: 2,
    height: 40,
    backgroundColor: '#8B5CF6',
    transformOrigin: 'bottom center',
  },
  gaugeResult: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gaugePercentage: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  ingredientSection: {
    marginBottom: 20,
  },
  ingredientTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  ingredientGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ingredientItem: {
    flex: 1,
    alignItems: 'center',
  },
  ingredientLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  ingredientValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginRight: 4,
  },
  causesCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  causesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  causesTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  causesList: {
    gap: 12,
  },
  causeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  causeName: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  causeStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  causeStatusDanger: {
    backgroundColor: '#ffebee',
  },
  causeStatusCaution: {
    backgroundColor: '#fff3e0',
  },
  causeStatusGood: {
    backgroundColor: '#e8f5e8',
  },
  causeStatusText: {
    fontSize: 12,
    fontWeight: '600',
  },
  nutrientCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  nutrientHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  nutrientTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 6,
  },
  activeTabButton: {
    backgroundColor: '#8B5CF6',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabButtonText: {
    color: '#fff',
  },
  nutrientList: {
    marginBottom: 16,
  },
  nutrientItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  nutrientName: {
    fontSize: 14,
    color: '#333',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  viewAllButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#8B5CF6',
    marginRight: 4,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  closeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
