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
        flex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white'
    },
    menu_card: {
        height: '27%',
        width: '45%',
        display:'flex',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFF3E1',
        margin: '2%'
      
    },
    menu_image: {
        flex:1,
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
       marginBottom: '6%'
    },
    menu_details: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: '3%',
        marginRight: '3%',
        marginTop: '3%',
       marginBottom: '6%'
    },

    detail_name:{
        flex: 1,
        
    },

    detail_name:{
        flex:1
    },
     text_title:{
        fontSize: 18,
        fontWeight: 'bold'
     },

    detail_status:{
        flex: 1,
        color: 'green'
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
