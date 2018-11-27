import {StyleSheet} from 'react-native';

export default  style = StyleSheet.create({
    container: { 
        height: '100%',

    },

    body: {
        flex: 1
    },

    header: {
        flex: 0.5,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#E2957E'
    },

    header_back:{
        flex:1,  
    },

    image_back:{
        width: 30, 
        height: 30,
        marginLeft: 15,
    },

    header_title:{
        flex: 1,
        alignItems: 'flex-start',
    },

    content: {
        flex: 5,
        flexDirection: 'row',

    },
   

    
    categories_container : {
        flex: 1,

        
    },

    text_style:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center'    
    }, 
    menu_container: {
        flex: 5
        // backgroundColor: 'green'
    },
    menu_card: {
        height: '50%',
        width: '45%',
        display:'flex',
        flexDirection: 'row',
        backgroundColor: 'yellow',
        margin: '2%'
      
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
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height:'10%',

    },
    category_image: {
        width: 100,
        height: 100
    }
});
