import { View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <>
    <View style = {styles.container}> 

    
    <View style={{backgroundColor: "yellow", display:"flex", justifyContent: "center"}}>
      <Text style={{color:"red"}}>
        first box
      </Text>
    </View>
    <View style={styles.box2}>
      <Text style={styles.text2}>
      second box
    </Text>
    </View>
    </View>
    </>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
    border : "1px solid red",
    // display : "flex",
    flex : 1,
    justifyContent : "center"
  },

  box2 : {
    color : "blue"
  },

  text2 : {
    border : "1px solid red",
    color:"green"
  }
})

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{backgroundColor: "green ", padding: 170}}>hi im react native home page!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
