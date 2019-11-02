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

import Chicken from './src/components/Chicken';

export default function Chicken(props) {
    return (
        <Image  source = {require('./src/assests/images/chickenlittle.jpg')}/> 
    );
  }