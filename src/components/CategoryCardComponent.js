import React from 'react';
import {
    Text , 
    Image,
    View,
    TouchableOpacity
    } from 'react-native';

import style from '../styles/MenuStyles';

export default function CategoryCardComponent(props) {
    const {
        category,
        retrieveMenu
    } = props;
    return (
        <TouchableOpacity
            style={style.category_card}
            onPress={()=>retrieveMenu(category.id)}>
            <Image
                style={style.category_image}
                source={{uri: "data:image/png;base64," + category.image}}/>
            <Text>{category.name}</Text>
        </TouchableOpacity>
    );
}
