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
                source={{uri: "data:image/png;base64," + menu.image}}/>
            <View style={style.menu_details}>
                <View style={style.detail_name}>
                <Text style={style.text_title}>{menu.name}</Text>
                <Text>Php {menu.price}</Text>
                    
                    
                </View>
                <Text style={style.detail_desc}>
                    {menu.description}
                </Text>
                <Text style={style.detail_status}>
                    {menu.status}  
                </Text>
            </View>
        </View>
    );
}