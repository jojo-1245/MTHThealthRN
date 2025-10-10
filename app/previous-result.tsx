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

export default function PreviousResult() {
  const handleViewDetails = () => {
    // 상세 결과 페이지로 이동
    router.push('/custom-search-result');
  };

  const handleNewSearch = () => {
    // 새로운 검색으로 이동
    router.push('/nutrition-search');
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>이전 결과</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 이전 검색 결과 카드 */}
        <View style={styles.resultCard}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultDate}>2025-10-09</Text>
            <View style={styles.resultScore}>
              <Ionicons name="checkmark-circle" size={20} color="#8B5CF6" />
              <Text style={styles.scoreText}>80% 양호</Text>
            </View>
          </View>
          
          <View style={styles.resultInfo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>제품명</Text>
              <Text style={styles.infoValue}>락토빗</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>건강항목</Text>
              <Text style={styles.infoValue}>피지과다</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.detailsButton} onPress={handleViewDetails}>
            <Text style={styles.detailsButtonText}>상세 결과 보기</Text>
            <Ionicons name="chevron-forward" size={16} color="#8B5CF6" />
          </TouchableOpacity>
        </View>

        {/* 추가 정보 섹션 */}
        <View style={styles.infoSection}>
          <View style={styles.infoCard}>
            <View style={styles.infoCardHeader}>
              <Ionicons name="information-circle" size={20} color="#8B5CF6" />
              <Text style={styles.infoCardTitle}>결과 해석 가이드</Text>
            </View>
            
            <View style={styles.interpretationList}>
              <View style={styles.interpretationItem}>
                <View style={[styles.statusIndicator, styles.statusHigh]} />
                <View style={styles.interpretationContent}>
                  <Text style={styles.interpretationTitle}>높음 (80-100%)</Text>
                  <Text style={styles.interpretationDescription}>
                    개인 건강 상태와 매우 잘 맞는 제품입니다.
                  </Text>
                </View>
              </View>
              
              <View style={styles.interpretationItem}>
                <View style={[styles.statusIndicator, styles.statusGood]} />
                <View style={styles.interpretationContent}>
                  <Text style={styles.interpretationTitle}>양호 (60-79%)</Text>
                  <Text style={styles.interpretationDescription}>
                    개인 건강 상태와 잘 맞는 제품입니다.
                  </Text>
                </View>
              </View>
              
              <View style={styles.interpretationItem}>
                <View style={[styles.statusIndicator, styles.statusNormal]} />
                <View style={styles.interpretationContent}>
                  <Text style={styles.interpretationTitle}>보통 (40-59%)</Text>
                  <Text style={styles.interpretationDescription}>
                    개인 건강 상태와 보통 수준으로 맞는 제품입니다.
                  </Text>
                </View>
              </View>
              
              <View style={styles.interpretationItem}>
                <View style={[styles.statusIndicator, styles.statusLow]} />
                <View style={styles.interpretationContent}>
                  <Text style={styles.interpretationTitle}>낮음 (0-39%)</Text>
                  <Text style={styles.interpretationDescription}>
                    개인 건강 상태와 맞지 않는 제품입니다.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 추천 섹션 */}
        <View style={styles.recommendationSection}>
          <View style={styles.recommendationCard}>
            <View style={styles.recommendationHeader}>
              <Ionicons name="star" size={20} color="#ff9800" />
              <Text style={styles.recommendationTitle}>추천 사항</Text>
            </View>
            
            <View style={styles.recommendationList}>
              <View style={styles.recommendationItem}>
                <Ionicons name="checkmark-circle" size={16} color="#4caf50" />
                <Text style={styles.recommendationText}>
                  현재 제품은 피지과다 관리에 적합합니다.
                </Text>
              </View>
              
              <View style={styles.recommendationItem}>
                <Ionicons name="checkmark-circle" size={16} color="#4caf50" />
                <Text style={styles.recommendationText}>
                  정기적인 복용으로 효과를 극대화할 수 있습니다.
                </Text>
              </View>
              
              <View style={styles.recommendationItem}>
                <Ionicons name="information-circle" size={16} color="#2196f3" />
                <Text style={styles.recommendationText}>
                  3개월 후 재검사를 통해 효과를 확인해보세요.
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.newSearchButton} onPress={handleNewSearch}>
          <Ionicons name="search" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.newSearchButtonText}>새로운 검색하기</Text>
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
    marginBottom: 20,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  resultDate: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  resultScore: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  resultInfo: {
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginRight: 4,
  },
  infoSection: {
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  infoCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  interpretationList: {
    gap: 16,
  },
  interpretationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
    marginTop: 4,
  },
  statusHigh: {
    backgroundColor: '#4caf50',
  },
  statusGood: {
    backgroundColor: '#8B5CF6',
  },
  statusNormal: {
    backgroundColor: '#ff9800',
  },
  statusLow: {
    backgroundColor: '#f44336',
  },
  interpretationContent: {
    flex: 1,
  },
  interpretationTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  interpretationDescription: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  recommendationSection: {
    marginBottom: 20,
  },
  recommendationCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  recommendationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 8,
  },
  recommendationList: {
    gap: 12,
  },
  recommendationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recommendationText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginLeft: 8,
    flex: 1,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  newSearchButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  newSearchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  buttonIcon: {
    // 아이콘 스타일
  },
});
