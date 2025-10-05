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

  const dailyContents = [
    {
      id: 1,
      title: '오늘의 스킨케어 팁',
      content: '수분 크림을 바르기 전에 토너로 피부를 충분히 촉촉하게 만들어보세요.',
    },
    {
      id: 2,
      title: '건강한 아침 루틴',
      content: '아침에 물 한 잔과 함께 간단한 스트레칭으로 하루를 시작해보세요.',
    },
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
          <View style={styles.dailySection}>
            <Text style={styles.dailyTitle}>매일매일 간편하게 ~</Text>
            <TouchableOpacity style={styles.qButton}>
              <Ionicons name="help-circle" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

          {/* 일일 콘텐츠 */}
          {dailyContents.map((content) => (
            <View key={content.id} style={styles.contentCard}>
              <Text style={styles.contentTitle}>{content.title}</Text>
              <Text style={styles.contentText}>{content.content}</Text>
            </View>
          ))}

          {/* 내 건강상태 알아보기 섹션 */}
          <View style={styles.healthSection}>
            <Text style={styles.sectionTitle}>내 건강상태 알아보기</Text>
            <View style={styles.healthLevelCard}>
              <View style={styles.healthLevelLeft}>
                <Text style={styles.healthLevelLabel}>건강레벨</Text>
                <View style={styles.progressCircle}>
                  <Text style={styles.progressText}>?/10</Text>
                </View>
              </View>
              <View style={styles.healthLevelRight}>
                <Text style={styles.levelText}>Level ? ? 단계</Text>
                <Text style={styles.levelSubText}>나의 건강레벨은?</Text>
              </View>
            </View>
          </View>

          {/* 무엇부터 관리하지 섹션 */}
          <View style={styles.managementSection}>
            <Text style={styles.sectionTitle}>무엇부터 관리하지?</Text>
            <View style={styles.addInfoCard}>
              <View style={styles.addIconContainer}>
                <Ionicons name="add" size={40} color="#9CA3AF" />
              </View>
              <Text style={styles.addInfoText}>나의 건강정보를 추가하시면</Text>
              <Text style={styles.addInfoSubText}>힌트 AI가 맞춤 영양 솔루션을 추천해줘요</Text>
            </View>
          </View>

          {/* 건강정보 추가해 볼까 섹션 */}
          <View style={styles.addHealthSection}>
            <Text style={styles.sectionTitle}>건강정보 추가해 볼까?</Text>
            <View style={styles.healthCardsContainer}>
              {/* 자가진단 카드 */}
              <TouchableOpacity 
                style={styles.healthCard}
                onPress={() => router.push('/self-diagnosis-add')}
              >
                <View style={styles.cardBadge}>
                  <Text style={styles.badgeText}>약 1분 소요</Text>
                </View>
                <View style={styles.cardIcon}>
                  <Ionicons name="analytics" size={24} color="#3B82F6" />
                </View>
                <Text style={styles.cardTitle}>자가진단</Text>
              </TouchableOpacity>

              {/* 건강검진결과 카드 */}
              <View style={styles.healthCard}>
                <View style={[styles.cardBadge, { backgroundColor: '#EF4444' }]}>
                  <Text style={styles.badgeText}>약 30초 소요</Text>
                </View>
                <View style={styles.cardIcon}>
                  <Ionicons name="medical" size={24} color="#3B82F6" />
                </View>
                <Text style={styles.cardTitle}>건강검진결과</Text>
              </View>

              {/* 기타 정밀분석 카드 */}
              <TouchableOpacity 
                style={styles.healthCard}
                onPress={() => router.push('/askings-1')}
              >
                <View style={styles.cardIcon}>
                  <Ionicons name="document-text" size={24} color="#3B82F6" />
                </View>
                <Text style={styles.cardTitle}>기타 정밀분석</Text>
              </TouchableOpacity>
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
  dailySection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dailyTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#374151',
  },
  qButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  contentCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#8B5CF6',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  contentText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
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
  // 새로운 섹션 스타일들
  healthSection: {
    marginTop: 30,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  healthLevelCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
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
  managementSection: {
    marginBottom: 20,
  },
  addInfoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    borderStyle: 'dashed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  addIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#F9FAFB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  addInfoText: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  addInfoSubText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  addHealthSection: {
    marginBottom: 20,
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
