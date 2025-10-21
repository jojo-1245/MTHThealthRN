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

export default function WeightMeasurementScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleMeasure = () => {
    // 블루투스 체중계 측정 로직
    console.log('체중 측정 시작');
    // 측정 완료 후 결과 페이지로 이동하거나 메인 페이지로 돌아가기
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>체중 측정하기</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 아이콘 */}
        <View style={styles.iconContainer}>
          <View style={styles.checkIcon}>
            <Ionicons name="checkmark" size={60} color="#8B5CF6" />
          </View>
        </View>

        {/* 안내 텍스트 */}
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionText}>
            스마트폰의 블루투스를 켜고{'\n'}
            '측정하기' 버튼을 눌러주세요
          </Text>
        </View>

        {/* 추가 안내 */}
        <View style={styles.additionalInfoContainer}>
          <View style={styles.infoBox}>
            <Ionicons name="bluetooth" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              블루투스가 켜져 있는지 확인해주세요
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="scale" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              체중계가 켜져 있는지 확인해주세요
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="person" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              체중계 위에 올라가서 측정해주세요
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.measureButton} onPress={handleMeasure}>
          <Text style={styles.measureButtonText}>측정하기</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  checkIcon: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
    textAlign: 'center',
    lineHeight: 26,
  },
  additionalInfoContainer: {
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
    marginLeft: 12,
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 20,
  },
  measureButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  measureButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
