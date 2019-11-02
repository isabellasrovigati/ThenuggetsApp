import React, {PropTypes,} from 'react';
import {View, Text, StyleSheet,TouchableHighlight,ScrollView,Image, Component, AppRegistry} from "react-native";

class mainview extends React.Component {
 constructor(props) {
      super(props);

  }

  render() {
    return(
      <View style={styles.mainviewStyle}>
        <ContainerView/>
          <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Informções</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Sustentabilidade</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Calendário</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Notificações</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>Funcionários</Text>
          </TouchableHighlight>
          </View>
      </View>
    );
  }
}

class ContainerView extends React.Component {
constructor(props) {
      super(props);
}

render() {
    return(
      <ScrollView style = {styles.scrollViewStyle}>
          <View>
            <Text style={styles.textStyle}></Text>
          </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  mainviewStyle: {
  flex: 1,
  flexDirection: 'column',
},
footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'darkorange',
  flexDirection:'row',
  height:80,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
footerText: {
  color:'white',
  fontWeight:'bold',
  alignItems:'center',
  fontSize:18,
},
textStyle: {
  alignSelf: 'center',
  color: 'dblack'
},

});

AppRegistry.registerComponent('TRYAPP', () => mainview) 