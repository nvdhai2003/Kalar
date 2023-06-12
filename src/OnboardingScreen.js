import { Image, Pressable, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native';
import { useState, useRef } from 'react';
import Swiper from 'react-native-swiper';
import { BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const OnboardingScreen = () => {
    const navigation = useNavigation();
    const onboardingData = [
        {
            image: require('../assets/img1.png'),
            title: 'Lorem Ipsum is simply\ndummy',
            description: 'Lorem Ipsum is simply dummy text of\nthe printing and typesetting industry.',
        },
        {
            image: require('../assets/img2.png'),
            title: 'Lorem Ipsum is simply\ndummy',
            description: 'Lorem Ipsum is simply dummy text of\nthe printing and typesetting industry.',
        },
        {
            image: require('../assets/img3.png'),
            title: 'Lorem Ipsum is simply\ndummy',
            description: 'Lorem Ipsum is simply dummy text of\nthe printing and typesetting industry.',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLastSlide, setIsLastSlide] = useState(false);
    const swiperRef = useRef(null);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
        setIsLastSlide(index === onboardingData.length - 1);
    };

    const handleNextSlide = () => {
        if (currentIndex < onboardingData.length - 1) {
            swiperRef.current.scrollBy(1);
        } else {
            navigation.navigate('Login'); 
        }
    };

    const handleBackButton = () => {
        if (currentIndex === onboardingData.length - 1) {
            BackHandler.exitApp();
        } else if (currentIndex > 0) {
            swiperRef.current.scrollBy(-1);
        }
        return true;
    };

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, [currentIndex]);
    return (
        <View style={styles.container}>
            <Swiper
                loop={false}
                showsPagination={false}
                onIndexChanged={handleSlideChange}
                ref={swiperRef}
            >
                {onboardingData.map((slide, index) => (
                    <View style={styles.slideContainer} key={index}>
                        <Image source={slide.image} style={styles.image} />
                        <Text style={styles.title}>{slide.title}</Text>
                        <Text style={styles.description}>{slide.description}</Text>
                        
                    </View>
                ))}
            </Swiper>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40, marginStart: 24, marginEnd: 24 }}>
                <View style={styles.dotsContainer}>
                    {onboardingData.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.dot,
                                index === currentIndex && styles.activeDot,
                            ]}
                        />
                    ))}
                </View>
                <View>
                    
                    {isLastSlide ? (
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity onPress={handleBackButton}>
                                <Text style={[styles.description, { color: '#B0B3B8', marginRight: 10}]}>Back</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={handleNextSlide}>
                                <Text style={styles.buttonText}>Get Started</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <TouchableOpacity
                            style={styles.buttonNext}
                            onPress={handleNextSlide}
                            disabled={currentIndex === onboardingData.length - 1}
                        >
                            <Text style={styles.buttonText}>Next</Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <StatusBar barStyle={'light-content'} />
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    image: {
        width: '100%',
        height: 480
    },

    slideContainer: {
        flex: 1,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 24,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'bold',
        marginLeft: 24
    },
    description: {
        fontSize: 16,
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight: 'normal',
        marginLeft: 24,
        fontWeight: 600,
        color: '#4E4B66'
    },
    dotsContainer: {
        flexDirection: 'row',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'gray',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#1877F2',
    },
    button: {
        width: 120,
        height: 40,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        padding: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },


    buttonNext: {
        width: 85,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1877F2',
        borderRadius: 6,
        padding: 10
    },

    textButton: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        fontStyle: 'normal',
        fontSize: 17,
        lineHeight: 24,
        letterSpacing: 0.12,
        color: '#FFFFFF'
    }
})