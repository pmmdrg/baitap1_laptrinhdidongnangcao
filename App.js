import React, {useEffect} from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Introduce" component={IntroduceScreen} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'Welcome'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
    );
}

const IntroduceScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Home');
        }, 10000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={style.containerStyle}>
            <Text style={style.text}>Name: Pham Minh Man</Text>
            <Text style={style.text}>MSSV: 19110397</Text>
        </View>
    );
}

const HomeScreen = ({navigation}) => {
    return (
        <View style={style.containerStyle}>
            <Text style={style.text}>This is homepage screen!!!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    }
})

export default App;
