// components/Hour.tsx
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

interface HourProps {
  hour: number;
  onPress: (hour: number) => void;
  entries: any[];
  className?: any;
}

const Hour: React.FC<HourProps> = ({
  hour,
  onPress,
  entries,
  className,
  ...rest
}) => {
  const displayHour = (hour % 12 || 12).toString();
  const ampm = hour < 12 || hour === 24 ? "AM" : "PM";

  return (
    <TouchableOpacity
      className={className}
      {...rest}
      onPress={() => onPress(hour)}
    >
      <View className="flex flex-row">
        <View className="w-1/6">
          <Text className="text-sm font-medium text-theme-text">
            {displayHour}:00 {ampm}
          </Text>
        </View>
        <View className="w-2/3 items-center">
          {entries.length === 0 ? (
          <AntDesign name="plus" size={24} color="black" />
            // <Ionicons name='checkmark-circle' size={32} color='green' />
            // <IconSymbol size={28} name="pluscircle" color={'blue'} />
          ) : (
            entries.map((entry, index) => (
              <Text key={index} className="text-sm text-theme-text">
                {entry.type === "food"
                  ? `Food: ${entry.name}`
                  : `Activity: ${entry.name}`}
              </Text>
            ))
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Hour;
