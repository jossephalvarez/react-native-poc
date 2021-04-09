import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { BiometricScreen, CameraScreen, LocationScreen, WebviewScreen } from './src/screens';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import basicStyles  from './src/styles/basicStyles';

const LOCATION='Location', CAMERA ='Camera', WEBVIEW='Webview', BIOMETRIC= 'Biometric';

const getToken = async () =>{
    const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    console.log('status',status);
    if(status !=="granted"){
        return;
    }
    const token= await Notifications.getExpoPushTokenAsync();
    console.log(token);

}

function HomeScreen({ navigation }) {
    return (
        <View style={basicStyles.container}>
            <Text>Welcome!!</Text>
            <Button
                title="Go to Location"
                onPress={() => navigation.navigate(LOCATION)}
            />
            <Button
                title="Go to CAM"
                onPress={() => navigation.navigate(CAMERA)}
            />
            <Button
                title="Go to Webview"
                onPress={() => navigation.navigate(WEBVIEW)}
            />
            <Button
                title="Go to Biometric"
                onPress={() => navigation.navigate(BIOMETRIC)}
            />
        </View>
    );
}

const Stack = createStackNavigator();

export default class App extends Component{
    componentDidMount() {
        getToken();
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name={LOCATION} component={LocationScreen}/>
                    <Stack.Screen name={CAMERA} component={CameraScreen}/>
                    <Stack.Screen name={WEBVIEW} component={WebviewScreen}/>
                    <Stack.Screen name={BIOMETRIC} component={BiometricScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

