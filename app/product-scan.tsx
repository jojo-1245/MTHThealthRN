import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ProductScan() {
  const [showInstructions, setShowInstructions] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleNext = () => {
    setShowInstructions(false);
  };

  const handleDontShowAgain = () => {
    setDontShowAgain(true);
    setShowInstructions(false);
  };

  const handleCapture = () => {
    // 실제로는 카메라 촬영 로직이 들어가겠지만, 여기서는 시뮬레이션
    Alert.alert(
      '스캔 완료',
      '제품이 인식되었습니다.',
      [
        { text: '취소', style: 'cancel' },
        { text: '확인', onPress: () => setShowResult(true) }
      ]
    );
  };

  const handleClose = () => {
    if (showResult) {
      setShowResult(false);
    } else {
      router.back();
    }
  };

  const handleConfirm = () => {
    // 스캔 결과 확인 후 검색 결과로 이동
    router.push('/custom-search-result');
  };

  // 스캔 결과 모달
  const renderScanResult = () => (
    <Modal
      visible={showResult}
      transparent={true}
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.resultModal}>
          <View style={styles.resultHeader}>
            <Text style={styles.resultTitle}>스캔 결과</Text>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="#999" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.productInfo}>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>제품명</Text>
              <Text style={styles.productInfoValue}>이*********정</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>식품의 유형</Text>
              <Text style={styles.productInfoValue}>곡류 가공품</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>품목 보고번호</Text>
              <Text style={styles.productInfoValue}>*********</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>유통전문 판매원</Text>
              <Text style={styles.productInfoValue}>*********</Text>
            </View>
          </View>

          <View style={styles.resultButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelButtonText}>취소</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>제품명 스캔</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 카메라 뷰 영역 */}
      <View style={styles.cameraView}>
        {/* 스캔 가이드 */}
        <View style={styles.scanGuide}>
          <View style={styles.scanBrackets}>
            <View style={styles.leftBracket}>
              <View style={styles.bracketCorner} />
              <View style={styles.bracketCorner} />
            </View>
            <View style={styles.rightBracket}>
              <View style={styles.bracketCorner} />
              <View style={styles.bracketCorner} />
            </View>
          </View>
          
          <Text style={styles.scanInstruction}>
            제품 포장의 [제품명] 글자를 꼭 포함하여 촬영해주세요.
          </Text>
        </View>

        {/* 촬영 버튼 */}
        <View style={styles.captureContainer}>
          <TouchableOpacity style={styles.captureButton} onPress={handleCapture}>
            <View style={styles.captureButtonInner} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.helpButton}>
            <Ionicons name="help-circle" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 하단 버튼들 */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.dontShowButton} onPress={handleDontShowAgain}>
          <Text style={styles.dontShowButtonText}>다시 보지 않기</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>다음</Text>
        </TouchableOpacity>
      </View>

      {/* 스캔 결과 모달 */}
      {renderScanResult()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  headerRight: {
    width: 34,
  },
  cameraView: {
    flex: 1,
    position: 'relative',
  },
  scanGuide: {
    position: 'absolute',
    top: '30%',
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1,
  },
  scanBrackets: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  leftBracket: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  rightBracket: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  bracketCorner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: '#fff',
    borderWidth: 3,
  },
  scanInstruction: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    paddingHorizontal: 40,
    lineHeight: 24,
  },
  captureContainer: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  captureButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  captureButtonInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  helpButton: {
    position: 'absolute',
    right: 40,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  dontShowButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  dontShowButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultModal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 20,
    width: '90%',
    maxWidth: 400,
  },
  resultHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  productInfo: {
    marginBottom: 20,
  },
  productInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  productInfoLabel: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  productInfoValue: {
    fontSize: 14,
    color: '#000',
    flex: 1,
    textAlign: 'right',
  },
  resultButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});
