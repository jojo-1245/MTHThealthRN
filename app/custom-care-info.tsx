import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function CustomCareInfo() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('customSearch.careInfo.headerTitle')}</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 소개 섹션 */}
        <View style={styles.section}>
          <View style={styles.iconContainer}>
            <Ionicons name="heart" size={48} color="#8B5CF6" />
          </View>
          <Text style={styles.title}>{t('customSearch.careInfo.mainTitle')}</Text>
          <Text style={styles.description}>
            {t('customSearch.careInfo.description')}
          </Text>
        </View>

        {/* 주요 기능 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('customSearch.careInfo.sectionTitle.features')}</Text>
          
          <View style={styles.featureList}>
            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="analytics" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{t('customSearch.careInfo.features.healthAnalysis.title')}</Text>
                <Text style={styles.featureDescription}>
                  {t('customSearch.careInfo.features.healthAnalysis.description')}
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="search" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{t('customSearch.careInfo.features.productSearch.title')}</Text>
                <Text style={styles.featureDescription}>
                  {t('customSearch.careInfo.features.productSearch.description')}
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark-circle" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{t('customSearch.careInfo.features.compatibility.title')}</Text>
                <Text style={styles.featureDescription}>
                  {t('customSearch.careInfo.features.compatibility.description')}
                </Text>
              </View>
            </View>

            <View style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="nutrition" size={24} color="#8B5CF6" />
              </View>
              <View style={styles.featureContent}>
                <Text style={styles.featureTitle}>{t('customSearch.careInfo.features.nutrientAnalysis.title')}</Text>
                <Text style={styles.featureDescription}>
                  {t('customSearch.careInfo.features.nutrientAnalysis.description')}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 사용 방법 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('customSearch.careInfo.sectionTitle.howToUse')}</Text>
          
          <View style={styles.stepList}>
            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>1</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{t('customSearch.careInfo.steps.1.title')}</Text>
                <Text style={styles.stepDescription}>
                  {t('customSearch.careInfo.steps.1.description')}
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>2</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{t('customSearch.careInfo.steps.2.title')}</Text>
                <Text style={styles.stepDescription}>
                  {t('customSearch.careInfo.steps.2.description')}
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>3</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{t('customSearch.careInfo.steps.3.title')}</Text>
                <Text style={styles.stepDescription}>
                  {t('customSearch.careInfo.steps.3.description')}
                </Text>
              </View>
            </View>

            <View style={styles.stepItem}>
              <View style={styles.stepNumber}>
                <Text style={styles.stepNumberText}>4</Text>
              </View>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>{t('customSearch.careInfo.steps.4.title')}</Text>
                <Text style={styles.stepDescription}>
                  {t('customSearch.careInfo.steps.4.description')}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 주의사항 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('customSearch.careInfo.sectionTitle.warnings')}</Text>
          
          <View style={styles.warningList}>
            <View style={styles.warningItem}>
              <Ionicons name="warning" size={20} color="#ff9800" />
              <Text style={styles.warningText}>
                {t('customSearch.careInfo.warnings.reference')}
              </Text>
            </View>
            
            <View style={styles.warningItem}>
              <Ionicons name="information-circle" size={20} color="#2196f3" />
              <Text style={styles.warningText}>
                {t('customSearch.careInfo.warnings.medication')}
              </Text>
            </View>
            
            <View style={styles.warningItem}>
              <Ionicons name="shield-checkmark" size={20} color="#4caf50" />
              <Text style={styles.warningText}>
                {t('customSearch.careInfo.warnings.productInfo')}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 버튼 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity 
          style={styles.startButton} 
          onPress={() => router.back()}
        >
          <Text style={styles.startButtonText}>{t('customSearch.careInfo.startButton')}</Text>
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
  headerRight: {
    width: 34,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
  },
  featureList: {
    gap: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f3f0ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  stepList: {
    gap: 24,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  stepNumberText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  warningList: {
    gap: 16,
  },
  warningItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  warningText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginLeft: 12,
    flex: 1,
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
