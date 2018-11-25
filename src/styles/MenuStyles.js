import {StyleSheet} from 'react-native';

export default  style = StyleSheet.create({
    container: { 
        height: '100%',
        width: '100%'
    },
    header: {
        height: '10%',
        width: '100%',
        backgroundColor: 'orange'
    },
    body: {
        height: '90%',
        width: '100%',
        display:'flex',
        flexDirection: 'row',
    },
    categories_container : {
        width: '25%',
        height: '100%',
        backgroundColor: 'red',
    },
    menu_container: {
        width: '75%',
        height: '100%',
        backgroundColor: 'blue'
    },
    menu_card: {
        height: '50%',
        width: '45%',
        display:'flex',
        flexDirection: 'row',
    },
    menu_image: {
        width: '30%',
        height: '100%'
    },
    menu_details: {
        width: '70%',
        height: '100%'
    },
    category_card: {
        width: '100%',
        height:'30%',
    },
    category_image: {
        width: '80%',
        height: '30%'
    }
});
