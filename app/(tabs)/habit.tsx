import { Ionicons } from '@expo/vector-icons';
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

export default function HabitScreen() {
  const [mainTab, setMainTab] = useState<'public' | 'members'>('public');
  const [publicSubTab, setPublicSubTab] = useState<'before' | 'ongoing' | 'ended'>('ended');

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={32} color="#8B5CF6" />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications" size={24} color="#000" />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>
      </View>

      {/* 메인 탭 메뉴 */}
      <View style={styles.mainTabContainer}>
        <TouchableOpacity
          style={[styles.mainTab, mainTab === 'public' && styles.activeMainTab]}
          onPress={() => setMainTab('public')}
        >
          <Text style={[styles.mainTabText, mainTab === 'public' && styles.activeMainTabText]}>
            퍼블릭
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mainTab, mainTab === 'members' && styles.activeMainTab]}
          onPress={() => setMainTab('members')}
        >
          <Text style={[styles.mainTabText, mainTab === 'members' && styles.activeMainTabText]}>
            멤버스
          </Text>
        </TouchableOpacity>
      </View>

      {/* 서브 탭 메뉴 (퍼블릭일 때만 표시) */}
      {mainTab === 'public' && (
        <View style={styles.subTabContainer}>
          <TouchableOpacity
            style={[styles.subTab, publicSubTab === 'before' && styles.activeSubTab]}
            onPress={() => setPublicSubTab('before')}
          >
            <Text style={[styles.subTabText, publicSubTab === 'before' && styles.activeSubTabText]}>
              시작전
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subTab, publicSubTab === 'ongoing' && styles.activeSubTab]}
            onPress={() => setPublicSubTab('ongoing')}
          >
            <Text style={[styles.subTabText, publicSubTab === 'ongoing' && styles.activeSubTabText]}>
              진행중
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.subTab, publicSubTab === 'ended' && styles.activeSubTab]}
            onPress={() => setPublicSubTab('ended')}
          >
            <Text style={[styles.subTabText, publicSubTab === 'ended' && styles.activeSubTabText]}>
              종료된
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {mainTab === 'public' ? (
          // 퍼블릭 탭 콘텐츠
          <View style={styles.emptyContainer}>
            <View style={styles.warningIconContainer}>
              <Ionicons name="warning" size={60} color="#F59E0B" />
            </View>
            <Text style={styles.emptyText}>
              {publicSubTab === 'before' && '시작전 위드가 없어요'}
              {publicSubTab === 'ongoing' && '진행중인 위드가 없어요'}
              {publicSubTab === 'ended' && '종료된 위드가 없어요'}
            </Text>
          </View>
        ) : (
          // 멤버스 탭 콘텐츠
          <View style={styles.membersContent}>
            {/* 챌린지 금액 카드 */}
            <TouchableOpacity style={styles.challengeAmountCard}>
              <View style={styles.challengeAmountHeader}>
                <Text style={styles.challengeAmountLabel}>챌린지 가능 금액</Text>
                <Ionicons name="chevron-forward" size={20} color="#6B7280" />
              </View>
              <Text style={styles.challengeAmount}>0 원</Text>
            </TouchableOpacity>

            {/* 버튼들 */}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.challengeButton}>
                <Text style={styles.challengeButtonText}>챌린지 내역</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.challengeButton}>
                <Text style={styles.challengeButtonText}>챌린지 시작</Text>
              </TouchableOpacity>
            </View>

            {/* 안내 문구 */}
            <Text style={styles.noticeText}>* 상품 구매회원 전용 서비스입니다.</Text>

            {/* 멤버스 챌린지 알아보기 버튼 */}
            <TouchableOpacity style={styles.learnMoreButton}>
              <Text style={styles.learnMoreButtonText}>멤버스 챌린지 알아보기</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>

      {/* 하단 내비게이션 바 */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="people" size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>힌트몰</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble" size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>Ai</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="checkmark-circle" size={24} color="#8B5CF6" />
          <Text style={[styles.navLabel, { color: '#8B5CF6' }]}>습관</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="menu" size={24} color="#9CA3AF" />
          <Text style={styles.navLabel}>더보기</Text>
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
  profileButton: {
    padding: 4,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationButton: {
    padding: 8,
    position: 'relative',
  },
  notificationDot: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EF4444',
  },
  mainTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  mainTab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeMainTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  mainTabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeMainTabText: {
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  subTabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  subTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeSubTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  subTabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeSubTabText: {
    color: '#8B5CF6',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  warningIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
  },
  membersContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 120,
  },
  challengeAmountCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  challengeAmountHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  challengeAmountLabel: {
    fontSize: 14,
    color: '#6B7280',
    fontWeight: '500',
  },
  challengeAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  challengeButton: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  challengeButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#374151',
  },
  noticeText: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    marginBottom: 30,
  },
  learnMoreButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: 'center',
  },
  learnMoreButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
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
    paddingBottom: 30,
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
    color: '#9CA3AF',
  },
});


