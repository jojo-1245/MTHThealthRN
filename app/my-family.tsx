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

export default function MyFamilyScreen() {
  const [activeTab, setActiveTab] = useState<'parents' | 'friends'>('parents');

  const handleBack = () => {
    router.back();
  };

  const handleAddFamily = () => {
    console.log('패밀리 추가');
    // 패밀리 추가 로직
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>나의 패밀리</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'parents' && styles.activeTab]}
          onPress={() => setActiveTab('parents')}
        >
          <Text style={[styles.tabText, activeTab === 'parents' && styles.activeTabText]}>
            부모님
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'friends' && styles.activeTab]}
          onPress={() => setActiveTab('friends')}
        >
          <Text style={[styles.tabText, activeTab === 'friends' && styles.activeTabText]}>
            프렌즈
          </Text>
        </TouchableOpacity>
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 빈 상태 */}
        <View style={styles.emptyContainer}>
          <View style={styles.warningIconContainer}>
            <Ionicons name="warning" size={60} color="#F59E0B" />
          </View>
          
          <Text style={styles.emptyText}>아직 추가된 패밀리가 없어요</Text>
          
          <Text style={styles.descriptionText}>
            맞춤 건강관리부터 복약 중 영양관리까지{'\n'}
            데이터로 관리해보세요 😊
          </Text>
        </View>
      </ScrollView>

      {/* 하단 추가 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddFamily}>
          <Text style={styles.addButtonText}>추가하기</Text>
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#8B5CF6',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6B7280',
  },
  activeTabText: {
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
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  addButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
