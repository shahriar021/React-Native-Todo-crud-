import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, ScrollView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';

export default function App() {
  return (
    
      <SafeAreaView>
        <ScrollView>
      <View >
        <TodoScreen/>
      </View>
      </ScrollView>
    </SafeAreaView>
   
    
  );
}


