import SelfDiagnosisAdd from '@/components/self-diagnosis-add';
import { router } from 'expo-router';
import React from 'react';

export default function SelfDiagnosisAddScreen() {
  const handleBack = () => {
    router.back();
  };

  const handleNext = (selectedCards: string[]) => {
    console.log('선택된 항목들:', selectedCards);
    // 다음 단계로 이동하는 로직
    router.back();
  };

  return (
    <SelfDiagnosisAdd
      onBack={handleBack}
      onNext={handleNext}
    />
  );
}
