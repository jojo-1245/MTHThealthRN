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

export default function HealthCheckupAuthScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleKakaoAuth = () => {
    console.log('카카오 간편인증');
    // 카카오 인증 로직
  };

  const handleCertificateAuth = () => {
    console.log('공동 인증서 인증');
    // 공동 인증서 인증 로직
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
            건강검진 결과를 불러오려면{'\n'}
            인증이 필요해요!
          </Text>
        </View>

        {/* 인증 버튼들 */}
        <View style={styles.authButtonsContainer}>
          {/* 카카오 인증 버튼 */}
          <TouchableOpacity style={styles.kakaoButton} onPress={handleKakaoAuth}>
            <View style={styles.kakaoIcon}>
              <Text style={styles.kakaoIconText}>K</Text>
            </View>
            <Text style={styles.kakaoButtonText}>카카오 간편인증하기</Text>
          </TouchableOpacity>

          {/* 공동 인증서 인증 버튼 */}
          <TouchableOpacity style={styles.certificateButton} onPress={handleCertificateAuth}>
            <Ionicons name="shield-checkmark" size={24} color="#fff" />
            <Text style={styles.certificateButtonText}>공동 인증서 인증하기</Text>
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
  authButtonsContainer: {
    width: '100%',
    gap: 16,
  },
  kakaoButton: {
    backgroundColor: '#FEE500',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  kakaoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#3C1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  kakaoIconText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FEE500',
  },
  kakaoButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  certificateButton: {
    backgroundColor: '#8B5CF6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  certificateButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 8,
  },
});
