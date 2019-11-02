/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import { screenWidth, screenHeight } from './src/components/dimensions';
import PropTypes from 'prop-types';






import React, {useState, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Textfield,
  StatusBar,
  TextInput,
  Body,
  Br,
  Image,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { interfaceDeclaration, stringLiteral } from '@babel/types';


function hello(props){
    
  const handlePress = () => false

  
  return (
    <>
    
        <ScrollView>
         
        <View style={{flexDirection: 'row',borderBottomColor:'darkorange', borderBottomWidth:1, paddingTop:screenHeight*0.005, backgroundColor:'darkorange', paddingBottom:screenHeight*0.01}}>
        <View style= {{backgroundColor:props.backgroundcolor, width:screenWidth * 0.2,paddingTop:screenHeight * 0.01}}>
       
       </View>
         <View style ={[styles.post, {backgroundColor:props.backgroundcolor}]}>
           <View style ={{flexDirection:'row'}}>
              <Text style ={{fontWeight:'bold', color:props.textcolor}}>
               {props.name}
         </Text>
           <Text style ={{color:'black', paddingLeft:5}}>
                        
            </Text>
        </View>
         <Text style ={[styles.texto, {color:'white'}]}>
           Thenuggets
       </Text>
         
       </View>
 
    </View>
    <View>
      
    <Text style ={{color:'black',marginTop:screenHeight * 0.08, marginHorizontal:screenWidth*0.43, fontFamily:'Verdana', fontSize:21}}>
  Login 
</Text>

  <TextInput placeholder='nome ou email'style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:18 }} >
  
  </TextInput>
  <TextInput placeholder='senha' style={{ height: 40, borderColor: 'gray', borderWidth: 0.8, marginTop:15, width:screenWidth*0.65, marginHorizontal:screenWidth*0.175, borderRadius:18 }} >

  </TextInput>

  <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text}>
              Login
            </Text>
         </TouchableOpacity>
      </View>
   </View>
   <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text3}>
              Não é cadastrado? Cadastre-se aqui.
            </Text>
         </TouchableOpacity>
      </View>
   <View style = {styles.container}>
         <TouchableOpacity>
            <Text style = {styles.text2}>
              Esqueceu a senha? Clique aqui.
            </Text>
         </TouchableOpacity>
      </View>
      <Image/>
      <Image style={{width:100, height:100, marginTop:screenHeight*0.065, marginLeft:screenWidth*0.39}} source={require('./src/assets/images/chickenlittle.png')}>
   
    </Image>
   
        </ScrollView>
      
    </>
  
  );
}



const styles= StyleSheet.create({
   texto:{
   marginLeft:screenWidth* 0.1,
   fontSize:30,
   fontFamily: 'Verdana',
   fontWeight:"500",
   },
   
   title: {
    
      textAlign: 'center',
      marginVertical: 8,

   },


    
  
  container: {
    alignItems: 'center',
 },
 text: {
   
   
    width:screenWidth*0.65,
    backgroundColor: 'darkorange',
    borderWidth:1,
    borderColor: 'orange',
    marginTop:screenHeight*0.02,
    paddingLeft:screenWidth*0.275,
    fontSize:15,
    color:'white',
    height:screenHeight*0.05,
    paddingTop:screenHeight*0.01,
    borderRadius:12
 },

 text2: {
   color:'darkorange',
   marginHorizontal:screenWidth*0.265,
   fontSize:11,
   fontFamily:'Verdana'
 },
 text3: {
  color:'darkorange',
  marginHorizontal:screenWidth*0.235,
  fontSize:11,
  fontFamily:'Verdana',
  marginTop:screenHeight*0.02
 },
})


export default hello;


