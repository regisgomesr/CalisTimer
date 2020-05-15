import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'


const HomeScreen = ({navigation}) => {
    return (
        <View style={{ backgroundColor: '#D6304A' }}>
            <TouchableHighlight onPress={() => navigation.navigate('EMOM') }>
                <Text>Home Screen</Text>
            </TouchableHighlight>
            
        </View>
    )
}

HomeScreen.navigationOptions = {
    header: null
}

export default HomeScreen;