import { useTranslation } from '@/i18n';
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
  const { t } = useTranslation();
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
        <Text style={styles.headerTitle}>{t('family.healthMain.title')}</Text>
        <TouchableOpacity style={styles.notificationButton}>
          <Ionicons name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={[styles.tabText, styles.activeTabText]}>{t('family.healthMain.tabs.selfDiagnosis')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>{t('family.healthMain.tabs.healthCheckup')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>{t('family.healthMain.tabs.otherAnalysis')}</Text>
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 액션 버튼들 */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton} onPress={handleAcceptFamily}>
            <Ionicons name="people" size={24} color="#8B5CF6" />
            <Text style={styles.actionButtonText}>{t('family.healthMain.actions.acceptFamily')}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton} onPress={handleCareGift}>
            <Ionicons name="gift" size={24} color="#8B5CF6" />
            <Text style={styles.actionButtonText}>{t('family.healthMain.actions.careGift')}</Text>
          </TouchableOpacity>
        </View>

        {/* 패밀리 목록 영역 */}
        <View style={styles.familySection}>
          <Text style={styles.emptyText}>{t('family.healthMain.emptyText')}</Text>
          
          <TouchableOpacity style={styles.addFamilyButton} onPress={handleAddFamily}>
            <View style={styles.addFamilyCircle}>
              <Ionicons name="add" size={48} color="#8B5CF6" />
            </View>
            <Text style={styles.addFamilyText}>{t('family.healthMain.addFamily')}</Text>
          </TouchableOpacity>
        </View>

        {/* 건강 습관 만들기 섹션 */}
        <View style={styles.habitSection}>
          <Text style={styles.habitTitle}>{t('family.healthMain.habit.title')}</Text>
          <Text style={styles.habitDescription}>
            {t('family.healthMain.habit.description')}
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