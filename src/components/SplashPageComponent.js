import React from 'react';
import {Fumi }  from 'react-native-textinput-effects';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    Text , 
    View,
    Image,
    TouchableOpacity,
    Modal,
    Button
    } from 'react-native';

import style from '../styles/SplashPageStyles';

import logo from '../assets/logo.png';
import bg from '../assets/background.png';
import add from '../assets/btnAdd.png';
import settings from '../assets/modal/settings.png';
import warning from '../assets/modal/warning.png';
import btn_change from '../assets/modal/btnChange.png';

export default function SplashPageComponent(props) {
    const {
            modal_visible,
            closeModal,
            openModal,
            onIPAddressChange,
            handleSetIPAddress,
            handleOpenMenu
            } = props;
    
    return (
        <View style={style.container}>
        <Image 
            style={style.background}
            source={bg}></Image>
            <View style={style.body}> 
            
            <View style={style.viewStyleOne}>
                <TouchableOpacity 
                    onPress={() => {openModal();}}>
                    <Image
                        style = {style.buttonSettings}
                        source = {settings}>
                    </Image>
                </TouchableOpacity>
            </View> 
            <View style={style.viewStyleTwo}>
                <Image source={logo}></Image>
            </View>
            <View style={style.viewStyleThree}>
            <TouchableOpacity 
                    onPress={() => {handleOpenMenu();}}>
                    <Image
                        source = {add}>
                    </Image>
                </TouchableOpacity>
                
            </View>

            
                <Modal
                    visible={modal_visible}
                    animationType={'fade'}
                    onRequestClose={() => closeModal()}
                    transpaprent={true}
                    cancelable={true}
                    >
                    <View style={style.modalContent}>
                        <View style={style.innerContainer}>
                            <Image style={style.imagewarning}
                                source = {warning}>
                            </Image>
                            
                            <Text style={style.textStyle}>Please enter the IP Address to change.</Text>
                            <Text style={style.textStyle}>(e.g. 10.0.1.1)</Text>

                            <Fumi
                                style={style.text_input}
                                label={'IP Address'}
                                iconClass={MaterialIcons}
                                iconName={'settings'}
                                iconColor={'black'}
                                iconSize={20}
                                onChangeText ={(text) => onIPAddressChange(text)}/>
                            <TouchableOpacity onPress={() => handleSetIPAddress()}>
                                <Image
                                    style={style.buttonModal}
                                    source={btn_change}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}
