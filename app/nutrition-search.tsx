import { useTranslation } from '@/i18n';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import DropdownModal from '@/components/dropdown-modal';

export default function NutritionSearch() {
  const { t } = useTranslation();
  
  // 관리 필요 항목 옵션
  const managementOptions = [
    { id: '1', label: t('nutrition.search.managementOptions.oilySkin'), value: 'oily_skin' },
    { id: '2', label: t('nutrition.search.managementOptions.redness'), value: 'redness' },
    { id: '3', label: t('nutrition.search.managementOptions.dryness'), value: 'dryness' },
    { id: '4', label: t('nutrition.search.managementOptions.sensitivity'), value: 'sensitivity' },
    { id: '5', label: t('nutrition.search.managementOptions.trouble'), value: 'trouble' },
    { id: '6', label: t('nutrition.search.managementOptions.antiAging'), value: 'anti_aging' },
  ];

  // 분석할 제품/서비스 카테고리 옵션
  const categoryOptions = [
    { id: '1', label: t('nutrition.search.categoryOptions.healthFood'), value: 'health_food' },
    { id: '2', label: t('nutrition.search.categoryOptions.cosmetics'), value: 'cosmetics' },
    { id: '3', label: t('nutrition.search.categoryOptions.medicalDevice'), value: 'medical_device' },
    { id: '4', label: t('nutrition.search.categoryOptions.food'), value: 'food' },
    { id: '5', label: t('nutrition.search.categoryOptions.dailyGoods'), value: 'daily_goods' },
  ];
  
  const [selectedManagement, setSelectedManagement] = useState(managementOptions[0]);
  const [selectedCategory, setSelectedCategory] = useState(categoryOptions[0]);
  const [showManagementModal, setShowManagementModal] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const handleManagementSelect = (option: any) => {
    setSelectedManagement(option);
  };

  const handleCategorySelect = (option: any) => {
    setSelectedCategory(option);
  };

  const handleScanProduct = () => {
    // 제품명 스캔하기 기능
    router.push('/product-scan');
  };

  const handleSearchProduct = () => {
    // 제품명 검색하기 기능
    router.push('/product-search');
  };

  const handleCustomCareInfo = () => {
    // 맞춤형 케어 검색 정보 페이지
    router.push('/custom-care-info');
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('nutrition.search.title')}</Text>
        <TouchableOpacity style={styles.refreshButton}>
          <Ionicons name="refresh" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 안내 문구 */}
        <View style={styles.guideSection}>
          <View style={styles.guideIcon}>
            <Ionicons name="checkmark-circle" size={48} color="#8B5CF6" />
          </View>
          <Text style={styles.guideText}>
            {t('nutrition.search.guideText')}
          </Text>
          <TouchableOpacity onPress={handleCustomCareInfo}>
            <Text style={styles.infoLink}>{t('nutrition.search.infoLink')}</Text>
          </TouchableOpacity>
        </View>

        {/* 폼 섹션 */}
        <View style={styles.formSection}>
          {/* 관리 필요 항목 선택 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t('nutrition.search.managementLabel')}</Text>
            <TouchableOpacity 
              style={styles.dropdownContainer}
              onPress={() => setShowManagementModal(true)}
            >
              <Text style={styles.dropdownText}>{selectedManagement.label}</Text>
              <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>
            <Text style={styles.inputHint}>{t('nutrition.search.managementHint')}</Text>
          </View>

          {/* 분석할 제품 / 서비스 카테고리 */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>{t('nutrition.search.categoryLabel')}</Text>
            <TouchableOpacity 
              style={styles.dropdownContainer}
              onPress={() => setShowCategoryModal(true)}
            >
              <Text style={styles.dropdownText}>{selectedCategory.label}</Text>
              <Ionicons name="chevron-down" size={20} color="#999" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoButtonText}>{t('nutrition.search.categoryInfo')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* 하단 액션 버튼들 */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.scanButton} onPress={handleScanProduct}>
          <Ionicons name="scan" size={20} color="#fff" style={styles.buttonIcon} />
          <Text style={styles.scanButtonText}>{t('nutrition.search.scanButton')}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.searchButton} onPress={handleSearchProduct}>
          <Ionicons name="search" size={20} color="#8B5CF6" style={styles.buttonIcon} />
          <Text style={styles.searchButtonText}>{t('nutrition.search.searchButton')}</Text>
        </TouchableOpacity>
      </View>

      {/* 관리 필요 항목 선택 모달 */}
      <DropdownModal
        visible={showManagementModal}
        onClose={() => setShowManagementModal(false)}
        onSelect={handleManagementSelect}
        title={t('nutrition.search.managementModalTitle')}
        options={managementOptions}
        selectedValue={selectedManagement.value}
      />

      {/* 분석할 제품 / 서비스 카테고리 모달 */}
      <DropdownModal
        visible={showCategoryModal}
        onClose={() => setShowCategoryModal(false)}
        onSelect={handleCategorySelect}
        title={t('nutrition.search.categoryModalTitle')}
        options={categoryOptions}
        selectedValue={selectedCategory.value}
      />
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
  refreshButton: {
    padding: 5,
  },
  content: {
    flex: 1,
  },
  guideSection: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  guideIcon: {
    marginBottom: 20,
  },
  guideText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  infoLink: {
    fontSize: 14,
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
  formSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputGroup: {
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
  },
  dropdownText: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },
  inputHint: {
    fontSize: 12,
    color: '#999',
  },
  infoButton: {
    alignSelf: 'flex-start',
  },
  infoButtonText: {
    fontSize: 12,
    color: '#4A90E2',
  },
  bottomButtonContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    gap: 12,
  },
  scanButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  scanButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    marginLeft: 8,
  },
  searchButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8B5CF6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#8B5CF6',
    marginLeft: 8,
  },
  buttonIcon: {
    // 아이콘 스타일
  },
});
