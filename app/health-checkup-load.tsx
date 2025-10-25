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

export default function HealthCheckupLoadScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleAddResults = () => {
    // 인증 페이지로 이동 또는 결과 추가 로직
    router.push('/health-checkup-auth');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>건강검진 결과 불러오기</Text>
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
          <Text style={styles.messageText}>
            건강검진 결과를 추가해주세요.
          </Text>
        </View>

        {/* 검진결과 추가 버튼 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.addButton} onPress={handleAddResults}>
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>검진결과 추가</Text>
          </TouchableOpacity>
        </View>
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
  },
  messageText: {
    fontSize: 16,
    color: '#6B7280',
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  addButton: {
    backgroundColor: '#3B82F6',
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
});
