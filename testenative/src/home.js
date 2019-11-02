import React, {Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,

} from 'react-native';
import { StackNavigator} from 'react-navigation';

export default class Home extends Component {
    static navigationOptions = {
        headerTitle:'home screen',
    }
    render(){
        return (
            <View>
                  <Text>
                  Home Screen
                </Text>
                <Button onPress={()=>this.props.navigation.navigate('Main')}
                title='Go to Main screen'/>
            </View>
              
              
           
        );
    }
}