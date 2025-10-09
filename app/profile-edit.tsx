import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function ProfileEdit() {
  const [formData, setFormData] = useState({
    phoneNumber: '010-2487-6746',
    birthDate: '1994-11-24',
    gender: 'female', // 'male' or 'female'
    nickname: 'Ted',
    height: '',
    weight: '',
    email: 'tn6746@gmail.com',
    address: '',
  });

  const [kakaoLinked, setKakaoLinked] = useState(true);
  const [appleLinked, setAppleLinked] = useState(false);

  const handleSave = () => {
    Alert.alert('저장 완료', '정보가 성공적으로 저장되었습니다.');
    router.back();
  };

  const handleGenderChange = (gender: 'male' | 'female') => {
    setFormData(prev => ({ ...prev, gender }));
  };

  const handleSNSLink = (type: 'kakao' | 'apple') => {
    if (type === 'kakao') {
      setKakaoLinked(!kakaoLinked);
    } else {
      setAppleLinked(!appleLinked);
    }
  };

  const handleFindPassword = () => {
    Alert.alert('비밀번호 찾기', '비밀번호 찾기 기능을 구현해주세요.');
  };

  const handleLogout = () => {
    Alert.alert('로그아웃', '정말 로그아웃하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      { text: '로그아웃', style: 'destructive', onPress: () => router.replace('/(tabs)') },
    ]);
  };

  const handleWithdrawal = () => {
    Alert.alert('회원탈퇴', '정말 회원탈퇴하시겠습니까?', [
      { text: '취소', style: 'cancel' },
      { text: '탈퇴', style: 'destructive', onPress: () => router.replace('/(tabs)') },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>내 정보 수정</Text>
        <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>저장</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 프로필 정보 섹션 */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
              <Ionicons name="person" size={40} color="#999" />
            </View>
            <TouchableOpacity style={styles.cameraButton}>
              <Ionicons name="camera" size={16} color="#fff" />
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>이민수</Text>
          <Text style={styles.userId}>(userd1251a708)</Text>
        </View>

        {/* 개인정보 입력 필드들 */}
        <View style={styles.formSection}>
          {/* 휴대폰 번호 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>휴대폰 번호</Text>
            <TextInput
              style={styles.input}
              value={formData.phoneNumber}
              onChangeText={(text) => setFormData(prev => ({ ...prev, phoneNumber: text }))}
              placeholder="휴대폰 번호를 입력하세요"
              keyboardType="phone-pad"
            />
          </View>

          {/* 생년월일 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>생년월일</Text>
            <TextInput
              style={styles.input}
              value={formData.birthDate}
              onChangeText={(text) => setFormData(prev => ({ ...prev, birthDate: text }))}
              placeholder="YYYY-MM-DD"
            />
          </View>

          {/* 성별 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>성별</Text>
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[styles.genderButton, formData.gender === 'male' && styles.genderButtonSelected]}
                onPress={() => handleGenderChange('male')}
              >
                <Text style={[styles.genderButtonText, formData.gender === 'male' && styles.genderButtonTextSelected]}>
                  남성
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.genderButton, formData.gender === 'female' && styles.genderButtonSelected]}
                onPress={() => handleGenderChange('female')}
              >
                <Text style={[styles.genderButtonText, formData.gender === 'female' && styles.genderButtonTextSelected]}>
                  여성
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 닉네임 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>닉네임</Text>
            <TextInput
              style={styles.input}
              value={formData.nickname}
              onChangeText={(text) => setFormData(prev => ({ ...prev, nickname: text }))}
              placeholder="닉네임을 입력하세요"
            />
            <Text style={styles.inputHint}>한글, 영문 2~6자리 이내로 입력해주세요.</Text>
          </View>

          {/* 신체정보 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>신체정보</Text>
            <View style={styles.bodyInfoContainer}>
              <View style={styles.bodyInfoItem}>
                <TextInput
                  style={styles.bodyInfoInput}
                  value={formData.height}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, height: text }))}
                  placeholder="키"
                  keyboardType="numeric"
                />
                <Text style={styles.bodyInfoUnit}>cm</Text>
              </View>
              <View style={styles.bodyInfoItem}>
                <TextInput
                  style={styles.bodyInfoInput}
                  value={formData.weight}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, weight: text }))}
                  placeholder="체중"
                  keyboardType="numeric"
                />
                <Text style={styles.bodyInfoUnit}>kg</Text>
              </View>
              <TouchableOpacity style={styles.changeButton}>
                <Text style={styles.changeButtonText}>변경</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 이메일 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>이메일</Text>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.emailInput}
                value={formData.email}
                onChangeText={(text) => setFormData(prev => ({ ...prev, email: text }))}
                placeholder="이메일을 입력하세요"
                keyboardType="email-address"
              />
              <TouchableOpacity style={styles.clearButton}>
                <Ionicons name="close" size={20} color="#999" />
              </TouchableOpacity>
            </View>
          </View>

          {/* 주소 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>주소</Text>
            <TouchableOpacity style={styles.addressContainer}>
              <TextInput
                style={styles.addressInput}
                value={formData.address}
                onChangeText={(text) => setFormData(prev => ({ ...prev, address: text }))}
                placeholder="주소를 입력하세요"
                editable={false}
              />
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* 채널설정 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>채널설정</Text>
            <TouchableOpacity style={styles.channelContainer}>
              <Text style={styles.channelText}>이정훈</Text>
              <Ionicons name="chevron-forward" size={20} color="#999" />
            </TouchableOpacity>
          </View>

          {/* SNS 계정 연동 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>SNS 계정 연동</Text>
            
            {/* 카카오 */}
            <View style={styles.snsContainer}>
              <View style={styles.snsInfo}>
                <View style={styles.kakaoIcon}>
                  <Text style={styles.kakaoText}>카카오</Text>
                </View>
                <Text style={styles.snsName}>카카오</Text>
              </View>
              <TouchableOpacity
                style={[styles.snsButton, kakaoLinked && styles.snsButtonLinked]}
                onPress={() => handleSNSLink('kakao')}
              >
                <Text style={[styles.snsButtonText, kakaoLinked && styles.snsButtonTextLinked]}>
                  {kakaoLinked ? '연동 완료' : '연결하기'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* 애플 */}
            <View style={styles.snsContainer}>
              <View style={styles.snsInfo}>
                <View style={styles.appleIcon}>
                  <Ionicons name="logo-apple" size={20} color="#fff" />
                </View>
                <Text style={styles.snsName}>애플</Text>
              </View>
              <TouchableOpacity
                style={[styles.snsButton, appleLinked && styles.snsButtonLinked]}
                onPress={() => handleSNSLink('apple')}
              >
                <Text style={[styles.snsButtonText, appleLinked && styles.snsButtonTextLinked]}>
                  {appleLinked ? '연동 완료' : '연결하기'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 하단 액션 버튼들 */}
        <View style={styles.bottomActions}>
          <TouchableOpacity onPress={handleFindPassword}>
            <Text style={styles.bottomActionText}>비밀번호 찾기</Text>
          </TouchableOpacity>
          <View style={styles.bottomActionDivider} />
          <TouchableOpacity onPress={handleLogout}>
            <Text style={styles.bottomActionText}>로그아웃</Text>
          </TouchableOpacity>
          <View style={styles.bottomActionDivider} />
          <TouchableOpacity onPress={handleWithdrawal}>
            <Text style={styles.bottomActionText}>회원탈퇴</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  saveButton: {
    padding: 5,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  profileImageContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  userId: {
    fontSize: 14,
    color: '#999',
  },
  formSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputGroup: {
    marginBottom: 25,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  inputHint: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 15,
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
  genderButtonSelected: {
    backgroundColor: '#8B5CF6',
    borderColor: '#8B5CF6',
  },
  genderButtonText: {
    fontSize: 14,
    color: '#666',
  },
  genderButtonTextSelected: {
    color: '#fff',
  },
  bodyInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  bodyInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bodyInfoInput: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flex: 1,
  },
  bodyInfoUnit: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  changeButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  changeButtonText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  emailInput: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    flex: 1,
  },
  clearButton: {
    padding: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  addressInput: {
    fontSize: 16,
    color: '#000',
    paddingVertical: 12,
    flex: 1,
  },
  channelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  channelText: {
    fontSize: 16,
    color: '#000',
  },
  snsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  snsInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kakaoIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FEE500',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  kakaoText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#000',
  },
  appleIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  snsName: {
    fontSize: 16,
    color: '#000',
  },
  snsButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#f5f5f5',
  },
  snsButtonLinked: {
    backgroundColor: '#e8f5e8',
  },
  snsButtonText: {
    fontSize: 12,
    color: '#666',
  },
  snsButtonTextLinked: {
    color: '#4CAF50',
  },
  bottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  bottomActionText: {
    fontSize: 14,
    color: '#666',
  },
  bottomActionDivider: {
    width: 1,
    height: 14,
    backgroundColor: '#e0e0e0',
    marginHorizontal: 15,
  },
});
