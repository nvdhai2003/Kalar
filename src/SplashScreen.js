import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('OnboardingScreen');
        }, 3000);
    }, []);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo.png')}
                style={{ width: 217, height: 66, marginTop: 225 }} />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
})