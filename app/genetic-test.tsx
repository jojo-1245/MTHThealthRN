import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    Dimensions,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function GeneticTestScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleAddTest = () => {
    console.log('검사 추가');
    // 검사 추가 로직
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>유전자 검사</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <View style={styles.content}>
        {/* 경고 아이콘 */}
        <View style={styles.iconContainer}>
          <View style={styles.warningIcon}>
            <Ionicons name="warning" size={60} color="#F59E0B" />
          </View>
        </View>

        {/* 안내 메시지 */}
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>검사 정보가 없습니다.</Text>
          <Text style={styles.subMessageText}>
            유전자 검사 결과를 추가해주세요.
          </Text>
        </View>

        {/* 검사 추가 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddTest}>
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>검사 추가</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 하단 안내 */}
      <View style={styles.footerNote}>
        <Text style={styles.noteText}>
          ※ 해당 서비스는 힌트 파트너사 회원 대상으로 제공하고 있습니다.{'\n'}
          추후 일반 회원 대상으로 서비스 제공 예정입니다.
        </Text>
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
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 30,
  },
  warningIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    marginBottom: 8,
    textAlign: 'center',
  },
  subMessageText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 20,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
  footerNote: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  noteText: {
    fontSize: 12,
    color: '#9CA3AF',
    lineHeight: 18,
    textAlign: 'center',
  },
});
