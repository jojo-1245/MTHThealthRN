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

export default function WeightMeasurementScreen() {
  const { t } = useTranslation();
  
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
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('weight.measurement.title')}</Text>
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
            {t('weight.measurement.instruction')}
          </Text>
        </View>

        {/* 추가 안내 */}
        <View style={styles.additionalInfoContainer}>
          <View style={styles.infoBox}>
            <Ionicons name="bluetooth" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              {t('weight.measurement.infoBluetooth')}
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="scale" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              {t('weight.measurement.infoScale')}
            </Text>
          </View>
          
          <View style={styles.infoBox}>
            <Ionicons name="person" size={24} color="#8B5CF6" />
            <Text style={styles.infoText}>
              {t('weight.measurement.infoStand')}
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.measureButton} onPress={handleMeasure}>
          <Text style={styles.measureButtonText}>{t('weight.measurement.measureButton')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    backgroundColor: '#000',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
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
    backgroundColor: '#1a1a1a',
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
    color: '#fff',
    textAlign: 'center',
    lineHeight: 26,
  },
  additionalInfoContainer: {
    marginBottom: 40,
  },
  infoBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  infoText: {
    fontSize: 16,
    color: '#fff',
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
