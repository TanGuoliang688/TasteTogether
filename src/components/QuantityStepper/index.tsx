import React from 'react';
import { View, Text } from '@tarojs/components';
import styles from './index.module.scss';

interface QuantityStepperProps {
  value: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const QuantityStepper: React.FC<QuantityStepperProps> = ({ value, onDecrease, onIncrease }) => {
  return (
    <View className={styles.stepper}>
      <View className={styles.btn} onClick={onDecrease}>
        <Text className={styles.btnMinus}>-</Text>
      </View>
      <Text className={styles.value}>{value}</Text>
      <View className={styles.btn} onClick={onIncrease}>
        <Text className={styles.btnPlus}>+</Text>
      </View>
    </View>
  );
};

export default QuantityStepper;