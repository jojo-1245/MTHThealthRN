import { useTranslation } from '@/i18n';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface ProductScanProps {
  onBack?: () => void;
  onConfirm?: () => void;
  onScanComplete?: (scanData?: any) => void;
}

export default function ProductScan({ onBack, onConfirm, onScanComplete }: ProductScanProps) {
  const { t } = useTranslation();
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
      t('productScan.scanComplete'),
      t('productScan.scanCompleteMessage'),
      [
        { text: t('productScan.cancel'), style: 'cancel' },
        { 
          text: t('productScan.confirm'), 
          onPress: () => {
            setShowResult(true);
            // 스캔 데이터가 있다면 콜백 호출
            if (onScanComplete) {
              onScanComplete({
                productName: '이*********정',
                foodType: '곡류 가공품',
                reportNumber: '*********',
                distributor: '*********',
              });
            }
          }
        }
      ]
    );
  };

  const handleClose = () => {
    if (showResult) {
      setShowResult(false);
    } else if (onBack) {
      onBack();
    }
  };

  const handleConfirm = () => {
    setShowResult(false);
    if (onConfirm) {
      onConfirm();
    }
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
            <Text style={styles.resultTitle}>{t('productScan.resultTitle')}</Text>
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close" size={24} color="#999" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.productInfo}>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>{t('productScan.productName')}</Text>
              <Text style={styles.productInfoValue}>이*********정</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>{t('productScan.foodType')}</Text>
              <Text style={styles.productInfoValue}>곡류 가공품</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>{t('productScan.reportNumber')}</Text>
              <Text style={styles.productInfoValue}>*********</Text>
            </View>
            <View style={styles.productInfoRow}>
              <Text style={styles.productInfoLabel}>{t('productScan.distributor')}</Text>
              <Text style={styles.productInfoValue}>*********</Text>
            </View>
          </View>

          <View style={styles.resultButtons}>
            <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
              <Text style={styles.cancelButtonText}>{t('productScan.cancel')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>{t('productScan.confirm')}</Text>
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
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t('productScan.title')}</Text>
        <View style={styles.headerRight} />
      </View>

      {/* 카메라 뷰 영역 */}
      <View style={styles.cameraView}>
        {/* 스캔 가이드 */}
        {showInstructions && (
          <View style={styles.scanGuide}>
            <View style={styles.scanBrackets}>
              <View style={styles.leftBracket}>
                <View style={[styles.bracketCorner, { top: 0, left: 0, borderRightWidth: 0, borderBottomWidth: 0 }]} />
                <View style={[styles.bracketCorner, { bottom: 0, left: 0, borderRightWidth: 0, borderTopWidth: 0 }]} />
              </View>
              <View style={styles.rightBracket}>
                <View style={[styles.bracketCorner, { top: 0, right: 0, borderLeftWidth: 0, borderBottomWidth: 0 }]} />
                <View style={[styles.bracketCorner, { bottom: 0, right: 0, borderLeftWidth: 0, borderTopWidth: 0 }]} />
              </View>
            </View>
            
            <Text style={styles.scanInstruction}>
              {t('productScan.instruction')}
            </Text>
          </View>
        )}

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
      {showInstructions && (
        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.dontShowButton} onPress={handleDontShowAgain}>
            <Text style={styles.dontShowButtonText}>{t('productScan.dontShowAgain')}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>{t('productScan.next')}</Text>
          </TouchableOpacity>
        </View>
      )}

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

