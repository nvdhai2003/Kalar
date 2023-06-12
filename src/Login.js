import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native';
import CheckBox from 'react-native-check-box'


const Home = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello</Text>
            <Text style={styles.textAgain}>Again!</Text>
            <Text style={styles.textDes}>Welcome back you’ve {'\n'}
                been missed</Text>
            <Text style={styles.textTitle}>
                Username
            </Text>
            <TextInput style={styles.input} />
            <Text style={[styles.textTitle, { marginTop: 16 }]}>
                Password
            </Text>
            <TextInput style={styles.input} />
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: 8}}>
                <View style={{ flexDirection: 'row'}}>
                    <CheckBox
                        style={{ flex: 1, borderRadius: 6, borderColor: '4E4B66' }}
                        onClick={() => {

                        }}
                        isChecked={true}
                        checkedCheckBoxColor='#1877F2'
                    />
                    <Text style={[styles.textTitle, {marginTop: 0, marginLeft: 30, fontSize: 15}]}>
                        Remember me
                    </Text>
                </View>
                <Text style={[styles.textTitle, { marginTop: 0, marginLeft: 10, fontSize: 15, color: '#5890FF' }]}>
                    Forgot the password ?
                </Text>
            </View>
            
            <StatusBar barStyle={'dark-content'} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginLeft: 25,
        marginRight: 25
    },

    text: {
        fontFamily: 'Poppins',
        fontSize: 48,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: '#050505',
        marginTop: 100,
        fontWeight: 'bold',
    },
    textAgain: {
        fontFamily: 'Poppins',
        fontSize: 48,
        lineHeight: 72,
        letterSpacing: 0.12,
        color: '#1877F2',
        fontWeight: 'bold',
    },
    textDes: {
        fontFamily: 'Poppins',
        fontSize: 20,
        lineHeight: 30,
        letterSpacing: 0.12,
        color: '#4E4B66',
        fontWeight: 400,

        marginTop: 4,
        marginBottom: 50
    },
    textTitle: {
        fontFamily: 'Poppins',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.12,
        color: '#4E4B66',
        fontWeight: 400,
        marginTop: 4
    },
    input: {
        width: '100%',
        height: 48,
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: '#4E4B66',
        borderRadius: 6,
        padding: 10,
        fontFamily: 'Poppins',
        fontSize: 17
    },
    checkbox: {
        width: 64,
        height: 64
    }
})