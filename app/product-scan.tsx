import ProductScan from '@/components/product-scan';
import { router } from 'expo-router';
import React from 'react';

export default function ProductScanScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleConfirm = () => {
    // 스캔 결과 확인 후 검색 결과로 이동
    router.push('/custom-search-result');
  };

  return (
    <ProductScan
      onBack={handleBack}
      onConfirm={handleConfirm}
    />
  );
}
