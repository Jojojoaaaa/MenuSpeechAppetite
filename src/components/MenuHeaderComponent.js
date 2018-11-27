import React from 'react';
import {
    Text,
    Button, 
    View,
    TouchableOpacity,
    Image
    } from 'react-native';

    import style from '../styles/MenuStyles';
    import btnback from '../assets/btnBack.png';
export default function MenuHeaderComponent(props) {
    const {
        back
    } = props;
    return (
        <View style={style.header}>
            <View style={style.header_back}>
            <TouchableOpacity
            onPress={() => back()}>
                <Image
                style={style.image_back}
                source={btnback}></Image>
            </TouchableOpacity>
            </View>
            <View style={style.header_title}>
            <Text style={style.text_style}>
            MENU
            </Text>
            </View>
      </View>
    );
}
