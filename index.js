import Fire from "./Entities/Fire.js";

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  NativeModules,
  VrButton
} from 'react-360';


const { VideoModule } = NativeModules;

export default class demo extends React.Component {
  
  playSurface() {
    VideoModule.play("myplayer", {
      source: {
        url: "static_assets/SampleVideo.mp4"
      },
      muted: true
    });
  
    Environment.setScreen("default", "myplayer", "default", 200, 0, 900, 400);
  }
  
  componentDidMount() {
    VideoModule.createPlayer("myplayer");
    console.log("video created");
  }


  render() {
    return (
      <View style={styles.panel}>
        <VrButton onClick={() => this.playSurface()}>
          <Text style={styles.greeting}>
            play
          </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    //backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('demo', () => demo);
AppRegistry.registerComponent("Fire", () => Fire);

