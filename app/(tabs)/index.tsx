import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const [activeTab, setActiveTab] = useState('홈');

  const navigationTabs = [
    { id: '홈', label: '홈', icon: 'home', isActive: true },
    { id: '힌트몰', label: '힌트몰', icon: 'people', isActive: false },
    { id: 'Ai', label: 'Ai', icon: 'chatbubble', isActive: false },
    { id: '습관', label: '습관', icon: 'checkmark-circle', isActive: false },
    { id: '더보기', label: '더보기', icon: 'menu', isActive: false },
  ];

  // 매일매일 간편하게 섹션 데이터
  const dailyItems = [
    { id: 'medication', label: '의약품', icon: 'medical', color: '#8B5CF6' },
    { id: 'nutrition', label: '영양제', icon: 'nutrition', color: '#8B5CF6' },
    { id: 'food', label: '음식품', icon: 'restaurant', color: '#8B5CF6' },
  ];

  // 활력징후 측정 데이터
  const vitalSigns = [
    { id: 'stress', label: '스트레스', subtitle: '오늘의 스트레스 지수는?', icon: 'heart', color: '#EF4444' },
    { id: 'heartrate', label: '심박수', subtitle: '나는 1분에 몇 회 뛸까?', icon: 'pulse', color: '#EF4444' },
    { id: 'breathing', label: '호흡', subtitle: '신호음으로 잠시 쉬이 가기', icon: 'leaf', color: '#10B981' },
    { id: 'cardiovascular', label: '심혈관 건강', subtitle: '나의 심혈관 건강 상태는?', icon: 'heart-circle', color: '#EF4444' },
    { id: 'bmi', label: 'BMI', subtitle: '31.1', status: '위험', color: '#EF4444' },
    { id: 'fatigue', label: '피로도', subtitle: '오늘 나의 피로도는?', icon: 'battery-half', color: '#F59E0B' },
  ];

  // 건강정보 추가 섹션 데이터
  const healthInfoItems = [
    { id: 'self-diagnosis', label: '자가진단', subtitle: '약 1분 소요', icon: 'analytics', color: '#3B82F6' },
    { id: 'health-check', label: '건강검진결과', subtitle: '약 30초 소요', icon: 'medical', color: '#3B82F6' },
    { id: 'detailed-analysis', label: '기타 정밀분석', subtitle: '', icon: 'document-text', color: '#3B82F6' },
  ];

  // 가족 건강 섹션 데이터
  const familyItems = [
    { id: 'family-accept', label: '패밀리 수락', icon: 'people', color: '#8B5CF6' },
    { id: 'care-gift', label: '케어 기프트', icon: 'gift', color: '#8B5CF6' },
  ];

  // 건강 습관 만들기 데이터
  const habitItems = [
    { id: 'recruiting', label: '모집중 위드', subtitle: '무료로 참여하고 리워드 받기', status: 'recruiting', color: '#10B981' },
    { id: 'ended', label: '종료된 위드', subtitle: '결과 확인하고 리워드 받기', status: 'ended', color: '#EF4444' },
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8B5CF6" />
      
      {/* 상단 헤더 */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <TouchableOpacity style={styles.profileIcon}>
            <Ionicons name="person-circle" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications" size={24} color="#fff" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 메인 콘텐츠 영역 */}
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        {/* 그라데이션 배경 */}
        <LinearGradient
          colors={['#8B5CF6', '#A78BFA', '#C4B5FD']}
          style={styles.gradientBackground}
        >
          {/* 자가진단 배너 */}
          <View style={styles.diagnosisBanner}>
            <Ionicons name="warning" size={20} color="#F59E0B" />
            <Text style={styles.bannerText}>이번 달 자가진단을 추가해보세요!</Text>
            <Ionicons name="chevron-forward" size={20} color="#6B7280" />
          </View>

          {/* AI 비서 섹션 */}
          <View style={styles.aiSection}>
            <Text style={styles.greeting}>안녕하세요</Text>
            <Text style={styles.aiDescription}>사용자님의 Ai 건강비서 힌트입니다</Text>
            
            {/* AI 로봇 이미지 */}
            <View style={styles.robotContainer}>
              <Image 
                source={require('@/assets/images/main-robots.png')}
                style={styles.robotImage}
                resizeMode="contain"
              />
            </View>

            {/* 검색 바 */}
            <View style={styles.searchBar}>
              <TextInput
                style={styles.searchInput}
                placeholder="맞춤형 건강관리의 궁금한 점을 물어보세요"
                placeholderTextColor="#9CA3AF"
              />
              <TouchableOpacity style={styles.micButton}>
                <Ionicons name="mic" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        {/* 하단 콘텐츠 영역 */}
        <View style={styles.bottomContent}>
          {/* 매일매일 간편하게 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>매일매일 간편하게~</Text>
            <Text style={styles.sectionSubtitle}>먹기 전에 확인하자!</Text>
            <View style={styles.dailyItemsContainer}>
              {dailyItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.dailyItem}
                  onPress={() => {
                    if (item.id === 'medication') router.push('/medication-record');
                    if (item.id === 'nutrition') router.push('/nutrition-search');
                    if (item.id === 'food') router.push('/food-search');
                  }}
                >
                  <View style={[styles.dailyItemIcon, { backgroundColor: item.color }]}>
                    <Ionicons name={item.icon as any} size={24} color="#fff" />
                  </View>
                  <Text style={styles.dailyItemLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 활력징후 측정하자 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>활력징후 측정하자!</Text>
            <View style={styles.vitalSignsGrid}>
              {vitalSigns.map((item) => (
                <TouchableOpacity 
                  key={item.id} 
                  style={styles.vitalSignCard}
                  onPress={() => {
                    if (item.id === 'stress') router.push('/stress-heartrate');
                    if (item.id === 'breathing') router.push('/breathing');
                  }}
                >
                  <View style={styles.vitalSignIconContainer}>
                    <Ionicons name={item.icon as any} size={20} color={item.color} />
                  </View>
                  <Text style={styles.vitalSignLabel}>{item.label}</Text>
                  <Text style={styles.vitalSignSubtitle}>{item.subtitle}</Text>
                  {item.status && (
                    <View style={[styles.statusBadge, { backgroundColor: item.color }]}>
                      <Text style={styles.statusText}>{item.status}</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </View>
            <TouchableOpacity style={styles.periodCheckButton}>
              <Text style={styles.periodCheckText}>활력징후 주이 확인하기</Text>
              <Ionicons name="bar-chart" size={16} color="#8B5CF6" />
            </TouchableOpacity>
          </View>

          {/* 내 건강상태 알아보기 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>내 건강상태 알아보기</Text>
            <Text style={styles.sectionSubtitle}>Ted님의 건강레벨</Text>
            <View style={styles.healthLevelCard}>
              <View style={styles.healthLevelLeft}>
                <Text style={styles.healthLevelLabel}>건강레벨</Text>
                <View style={styles.progressCircle}>
                  <Text style={styles.progressText}>9/10</Text>
                </View>
              </View>
              <View style={styles.healthLevelRight}>
                <Text style={styles.levelText}>Level 9 양호단계</Text>
                <Text style={styles.levelSubText}>상태 유지를 위한 지속적 관리 필요</Text>
              </View>
            </View>
          </View>

          {/* 무엇부터 관리하지 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>무엇부터 관리하지?</Text>
            <View style={styles.managementCardsContainer}>
              <View style={styles.managementCard}>
                <View style={styles.managementIconContainer}>
                  <Ionicons name="warning" size={20} color="#F59E0B" />
                </View>
                <Text style={styles.managementLabel}>피지과다</Text>
                <Text style={styles.managementStatus}>주의</Text>
              </View>
              <TouchableOpacity style={styles.addManagementCard}>
                <Ionicons name="add" size={24} color="#9CA3AF" />
                <Text style={styles.addManagementText}>진단추가</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 건강정보 추가해 볼까 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>건강정보 추가해 볼까?</Text>
            <View style={styles.healthCardsContainer}>
              {healthInfoItems.map((item) => (
                <TouchableOpacity
                  key={item.id}
                  style={styles.healthCard}
                  onPress={() => {
                    if (item.id === 'self-diagnosis') router.push('/self-diagnosis-add');
                    if (item.id === 'detailed-analysis') router.push('/askings-1');
                  }}
                >
                  {item.subtitle && (
                    <View style={styles.cardBadge}>
                      <Text style={styles.badgeText}>{item.subtitle}</Text>
                    </View>
                  )}
                  <View style={styles.cardIcon}>
                    <Ionicons name={item.icon as any} size={24} color={item.color} />
                  </View>
                  <Text style={styles.cardTitle}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* 내 가족 건강도 챙겨보기 섹션 */}
          <TouchableOpacity 
            style={styles.section}
            onPress={() => router.push('/family-health-main')}
          >
            <Text style={styles.sectionTitle}>내 가족 건강도 챙겨보기</Text>
            <View style={styles.familyButtonsContainer}>
              {familyItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.familyButton}>
                  <Ionicons name={item.icon as any} size={20} color={item.color} />
                  <Text style={styles.familyButtonText}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.familyEmptyState}>
              <Text style={styles.familyEmptyText}>아직 추가된 패밀리가 없어요</Text>
              <TouchableOpacity style={styles.addFamilyButton}>
                <Ionicons name="add" size={20} color="#8B5CF6" />
                <Text style={styles.addFamilyText}>패밀리 추가</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          {/* 건강 습관 만들기 섹션 */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>건강 습관 만들기</Text>
            <Text style={styles.habitDescription}>
              위드 (with)는 건강습관 만들기 도전 이벤트입니다
            </Text>
            <View style={styles.habitItemsContainer}>
              {habitItems.map((item) => (
                <TouchableOpacity key={item.id} style={styles.habitItem}>
                  <View style={[styles.habitStatusDot, { backgroundColor: item.color }]} />
                  <View style={styles.habitContent}>
                    <Text style={styles.habitLabel}>{item.label}</Text>
                    <Text style={styles.habitSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 플로팅 액션 버튼 */}
      <TouchableOpacity style={styles.floatingActionButton}>
        <Text style={styles.fabText}>Q</Text>
      </TouchableOpacity>

      {/* 하단 내비게이션 바 */}
      <View style={styles.bottomNavigation}>
        {navigationTabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={styles.navItem}
            onPress={() => setActiveTab(tab.id)}
          >
            <Ionicons
              name={tab.icon as any}
              size={24}
              color={tab.isActive ? '#8B5CF6' : '#9CA3AF'}
            />
            <Text
              style={[
                styles.navLabel,
                { color: tab.isActive ? '#8B5CF6' : '#9CA3AF' },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
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
    backgroundColor: '#8B5CF6',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    // 프로필 아이콘 스타일
  },
  notificationIcon: {
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  mainContent: {
    flex: 1,
  },
  gradientBackground: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  diagnosisBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 16,
    borderRadius: 12,
    marginBottom: 30,
    gap: 12,
  },
  bannerText: {
    flex: 1,
    fontSize: 14,
    color: '#374151',
    fontWeight: '500',
  },
  aiSection: {
    alignItems: 'center',
  },
  greeting: {
    fontSize: width > 400 ? 32 : 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
    textAlign: 'center',
  },
  aiDescription: {
    fontSize: width > 400 ? 18 : 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  robotContainer: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  robotImage: {
    width: width > 400 ? 160 : 140,
    height: width > 400 ? 160 : 140,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
  },
  micButton: {
    marginLeft: 12,
  },
  bottomContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120, // 하단 네비게이션 공간 확보 (안드로이드 네비게이션 바 고려)
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  // 매일매일 간편하게 섹션
  dailyItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  dailyItem: {
    alignItems: 'center',
    flex: 1,
  },
  dailyItemIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  dailyItemLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
  // 활력징후 측정 섹션
  vitalSignsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  vitalSignCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  vitalSignIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  vitalSignLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
    textAlign: 'center',
  },
  vitalSignSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 8,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '600',
  },
  periodCheckButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    paddingVertical: 12,
  },
  periodCheckText: {
    fontSize: 14,
    color: '#8B5CF6',
    marginRight: 8,
  },
  // 무엇부터 관리하지 섹션
  managementCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  managementCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginRight: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  managementIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEF3C7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  managementLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  managementStatus: {
    fontSize: 12,
    color: '#F59E0B',
    fontWeight: '500',
  },
  addManagementCard: {
    flex: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    marginLeft: 8,
  },
  addManagementText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 4,
  },
  // 가족 건강 섹션
  familyButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    marginBottom: 20,
  },
  familyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  familyButtonText: {
    fontSize: 14,
    color: '#8B5CF6',
    marginLeft: 8,
    fontWeight: '500',
  },
  familyEmptyState: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  familyEmptyText: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  addFamilyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 20,
  },
  addFamilyText: {
    fontSize: 14,
    color: '#8B5CF6',
    marginLeft: 8,
    fontWeight: '500',
  },
  // 건강 습관 만들기 섹션
  habitDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    lineHeight: 20,
  },
  habitItemsContainer: {
    marginTop: 16,
  },
  habitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  habitStatusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 12,
  },
  habitContent: {
    flex: 1,
  },
  habitLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 4,
  },
  habitSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  bottomNavigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 30, // 안드로이드 네비게이션 바를 위한 추가 패딩
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  navLabel: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  // 건강레벨 카드 스타일
  healthLevelCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  healthLevelLeft: {
    alignItems: 'center',
    marginRight: 20,
  },
  healthLevelLabel: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#8B5CF6',
  },
  progressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  healthLevelRight: {
    flex: 1,
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  levelSubText: {
    fontSize: 14,
    color: '#6B7280',
  },
  healthCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  healthCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: '500',
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    textAlign: 'center',
  },
  floatingActionButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  fabText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
