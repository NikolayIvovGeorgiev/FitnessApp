// app/(tabs)/dailyLog.tsx
import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { View, Text, ScrollView, TouchableOpacity, Modal, Pressable } from "react-native";
import Hour from "../../components/Hour";
import FitTextInput from "@/components/forms/FitTextInput";
const dailyLogScreen = () => {
  const [entries, setEntries] = useState<{ [hour: number]: any[] }>({});
  const [mealFoodList, setMealFoodList] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleHourPress = (hour: number) => {
    console.log(`Hour pressed: ${hour}`, entries[hour]);
    //  modal
  };

  const hours = [];
  for (let i = 0; i < 24; i++) {
    hours.push(i);
  }

  const addDummyEntries = () => {
    setEntries({
      7: [{ type: "food", name: "Banana" }],
      9: [{ type: "activity", name: "30-minute Walk" }],
      12: [{ type: "food", name: "Salad" }],
      18: [{ type: "food", name: "Chicken Breast" }],
    });
  };

  

  

  return (
    <>
    <View className="flex-1  text-theme-primary bg-theme-primary pt-8 px-5">
      <View className="mb-5">
        <Text className=" text-2xl font-bold p-4 text-center">Daily Log</Text>
      </View>
      <ScrollView className="bg-theme-background border-4 border-theme-black ">
        {hours.map((hour) => (
          <Hour
            className={" border-b border-theme-black p-6"}
            key={hour}
            hour={hour}
            onPress= {() => (setModalVisible(true), handleHourPress) }
           
            entries={entries[hour] || []}
          />
        ))}
      </ScrollView>
      <View className="items-center my-3">
        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-2xl"
          onPress={addDummyEntries}
        >
          <Text>Add Dummy Data</Text>
        </TouchableOpacity>
      </View>
    </View>

    <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View 
           className="flex-1 justify-center align-middle m-5">
            <View className="w-full bg-theme-background rounded-3xl p-5 shadow-black shadow-xl gap-5">
              <View className="w-full flex-row space-x-4">
                <FitTextInput className="w-full border border-theme-black rounded-lg"
                value={mealFoodList} maxLength={40} numberOfLines={3}  placeholder="add food" placeholderTextColor='#a9a9a9'
                onChangeText={text => setMealFoodList(text)}></FitTextInput>
                <FitTextInput className="w-full border border-theme-black rounded-lg" 
                placeholder="add quantity" placeholderTextColor={'#a9a9a9'} 
                onChangeText={text => setMealFoodList(text)}></FitTextInput>

              </View>
              <View className="flex-row gap-3">
              <Pressable
                className="bottom-1 w-1/2"
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Add Meal</Text>
              </Pressable>
              <Pressable
                className="bottom-1 w-1/2"
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>

              </View>
            </View>
          </View>

          {/* <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                    <FFIcon icon="CloseX"></FFIcon>
          </Pressable> */}
        </Modal>
</>
  );
};

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // modalView: {
  //   padding: 55,
  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 5,
  //   },
  //   shadowOpacity: 0.55,
  //   shadowRadius: 5,
  //   elevation: 5,
  // },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default dailyLogScreen;
