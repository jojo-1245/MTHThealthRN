import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
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

export default function FamilyHealthMainScreen() {
  const handleAcceptFamily = () => {
    router.push('/family-health-access');
  };

  const handleCareGift = () => {
    console.log('케어 기프트');
    // 케어 기프트 로직
  };

  const handleAddFamily = () => {
    router.push('/my-family');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={32} color="#8B5CF6" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>내 가족 건강도 챙겨보기</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>자가진단</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>건강검진결과</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>기타 정밀분석</Text>
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 액션 버튼들 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={handleAcceptFamily}>
            <Ionicons name="people" size={24} color="#8B5CF6" />
            <Text style={styles.actionButtonText}>패밀리 수락</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleCareGift}>
            <Ionicons name="gift" size={24} color="#8B5CF6" />
            <Text style={styles.actionButtonText}>케어 기프트</Text>
          </TouchableOpacity>
        </View>

        {/* 패밀리 목록 영역 */}
        <View style={styles.familySection}>
          <Text style={styles.emptyText}>아직 추가된 패밀리가 없어요</Text>
          
          <TouchableOpacity style={styles.addFamilyButton} onPress={handleAddFamily}>
            <View style={styles.addFamilyCircle}>
              <Ionicons name="add" size={48} color="#8B5CF6" />
            </View>
            <Text style={styles.addFamilyText}>패밀리추가</Text>
          </TouchableOpacity>
        </View>

        {/* 건강 습관 만들기 섹션 */}
        <View style={styles.habitSection}>
          <Text style={styles.habitTitle}>건강 습관 만들기</Text>
          <Text style={styles.habitDescription}>
            위드 (with)는 건강습관 만들기 도전 이벤트입니다
          </Text>
          <View style={styles.habitIcons}>
            <Ionicons name="chatbubbles" size={24} color="#8B5CF6" />
            <Ionicons name="happy" size={24} color="#8B5CF6" />
          </View>
        </View>
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
  profileButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  notificationButton: {
    padding: 8,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FF',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#8B5CF6',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 30,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3E8FF',
    paddingVertical: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  familySection: {
    alignItems: 'center',
    paddingVertical: 40,
    marginBottom: 30,
  },
  emptyText: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 30,
  },
  addFamilyButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFamilyCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#8B5CF6',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  addFamilyText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#8B5CF6',
    marginTop: 16,
  },
  habitSection: {
    backgroundColor: '#F8F9FF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  habitTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  habitDescription: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  habitIcons: {
    flexDirection: 'row',
    gap: 12,
  },
});