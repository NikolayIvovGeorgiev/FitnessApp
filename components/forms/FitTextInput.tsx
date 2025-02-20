import React, { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native';

export interface FitTextInputProps extends TextInputProps{
    numeric? : boolean,
    className?: string;
}

const FitTextInput = ({numeric = false, onChangeText, value, className, ...rest}: FitTextInputProps) => {
    const [inputValue, setInputValue] = useState(value);
    const handleChangeText = (text: string) => {
        if (numeric) {
          const numericText = text.replace(/[^0-9]/g, "");
          setInputValue(numericText);
          onChangeText && onChangeText(numericText);
        } else {
          setInputValue(text);
          onChangeText && onChangeText(text);
        }
      };



  return (
    <View>
        <TextInput value={inputValue}
        className={`text-center ${className}`}
        {...rest}
        keyboardType={numeric ? "numeric" : rest.keyboardType}
        onChangeText={handleChangeText}
        ></TextInput>
    </View>
  )
}

export default FitTextInput