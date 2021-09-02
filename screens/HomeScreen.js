import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageBackground,
  Image,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/stars.gif')}
          style={styles.backgroundImage}>
          <View style={styles.titleBar}>
           <Image
              source={require('../assets/main-icon.png')}
              style={{width:200,height:200, marginTop:150}}
            />
            <Text style={styles.titleText}>Stelar App</Text>
          </View>
      

           <TouchableOpacity style={styles.routeCard}
                              onPress={()=>{this.props.navigation.navigate("SpaceCraft")}}>>
            <Image
              source={require('../assets/space_crafts.png')}
              style={styles.iconImage}
            />
            <Text style={styles.routeText}>Space Craft</Text>
  
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.routeCard2}
                              onPress={()=>{this.props.navigation.navigate("StarMap")}}>>
            <Image
              source={require('../assets/star_map.png')}
              style={styles.iconImage}
            />
            <Text style={styles.routeText}>Star Map</Text>
  
            
          </TouchableOpacity>

           <TouchableOpacity style={styles.routeCard3}
                              onPress={()=>{this.props.navigation.navigate("DailyPic")}}>>
            <Image
              source={require('../assets/daily_pictures.png')}
              style={styles.iconImage}
            />
            <Text style={styles.routeText}>Daily Picture</Text>
  
            
          </TouchableOpacity>

          
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    marginLeft:30,
    marginRight:30,
   marginTop:250,
   backgroundColor:'white',
    borderRadius:50,
    
  },
  routeCard2: {
    
   marginTop:25,
    backgroundColor:'white',
     borderRadius:50,
     marginLeft:30,
    marginRight:30,
  },
  routeCard3: {
    
   marginTop:15,
    backgroundColor:'white',
    borderRadius:50,
    marginLeft:30,
    marginRight:30,
  },

  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 0,
    paddingLeft: 30,
    color:'purple',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  knowMore: {
    paddingLeft: 40,
    color: 'red',
    fontSize: 13,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgba(183, 183, 183, 0.5)',
    fontSize: 115,
    right: 20,
    bottom: -25,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 75,
    width: 75,
    resizeMode: 'contain',
    marginTop:0,
     marginLeft:170
  },
});
