import React from 'react';
import {
    Text , 
    View,
    Image,
    } from 'react-native';
import style from '../styles/MenuStyles';
export default function MenuCardComponent(props) {
    const {
        menu,
    } = props;
    return (
        <View style={style.menu_card}>
            <Image
                style={style.menu_image}
                source={{uri: 'data:image/png;base64,' + menu.image}}/>
            <View style={style.menu_details}>
                <Text>
                    {menu.name}
                    {menu.description}
                    {menu.status}
                    {menu.price}
                </Text>
            </View>
        </View>
    );
}