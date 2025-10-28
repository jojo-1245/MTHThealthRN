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

export default function AnalysisServiceScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleServicePress = (serviceType: string) => {
    switch (serviceType) {
      case 'self-diagnosis':
        router.push('/self-diagnosis-complete');
        break;
      case 'health-checkup':
        router.push('/health-checkup-load');
        break;
      case 'genetic-test':
        router.push('/genetic-test');
        break;
      case 'microbiome-test':
        console.log('마이크로바이옴 검사');
        break;
      case 'blood-test':
        console.log('혈액 검사');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>분석 서비스</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 메인 콘텐츠 */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 기본 분석 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기본 분석</Text>
          
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => handleServicePress('self-diagnosis')}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="clipboard" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>자가진단</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => handleServicePress('health-checkup')}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="pulse" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>건강검진 결과 불러오기</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* 정밀 분석 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>정밀 분석</Text>
          
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => handleServicePress('genetic-test')}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="git-network" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>유전자 검사</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => handleServicePress('microbiome-test')}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="leaf" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>마이크로바이옴 검사</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => handleServicePress('blood-test')}
          >
            <View style={styles.serviceIcon}>
              <Ionicons name="flask" size={24} color="#8B5CF6" />
            </View>
            <Text style={styles.serviceName}>혈액 검사</Text>
            <Ionicons name="chevron-forward" size={20} color="#9CA3AF" />
          </TouchableOpacity>
        </View>

        {/* 안내 텍스트 */}
        <View style={styles.footerNote}>
          <Text style={styles.noteText}>*별도의 비용이 발생됩니다.</Text>
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
    paddingTop: 20,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3E8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  serviceName: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  footerNote: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  noteText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});
