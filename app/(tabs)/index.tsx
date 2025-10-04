import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
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
        </View>
      </ScrollView>

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
});
