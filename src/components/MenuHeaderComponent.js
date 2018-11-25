import React from 'react';
import {
    Text,
    Button, 
    View,
    } from 'react-native';

export default function MenuHeaderComponent(props) {
    const {
        back
    } = props;
    return (
        <View style={style.header}>
            <Button
                title={'back'}
                onPress={() => back()}/>
            <Text>
            Menu
            </Text>
      </View>
    );
}
