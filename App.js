import { useState } from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import WheelPickerExpo from 'react-native-wheel-picker-expo';
import Slider from "@react-native-community/slider";

export default function App() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [dateHour, setHour] = useState((new Date().getHours() % 12) - 1);
  const [sound, setSound] = useState(true);

  return (
    <View style={styles.container}>
      {/* <DateTimePicker
        value = {date}
        mode = 'time'
        display='spinner'
        onChange = {date => setDate(date)}
      /> */}

      <WheelPickerExpo
        height={300}
        width={150}
        initialSelectedIndex={dateHour}
        items={[1,2,3,4,5,6,7,8,9,10,11,12].map(name => ({ label: name, value: '' }))}
        onChange={({ item }) => setHour(item.label)}
      />


      <TextInput 
        style={{height:40}}
        placeholder="Enter alarm name"
        onChangeText={alarmName => setTitle(alarmName)}
      />

      <View style={{flexDirection:'row'}}>
        <Text style={{flex:1}}>Alarm Sound</Text>
        <Slider
          value = {1}
          style={{width: 60, height: 40, flex:2}}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000"
          onValueChange = {value => setSound(value)}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dtpicker: {

  }
});
