import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
const style = StyleSheet.create({
    user:{
        flexDirection:'row' , 
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal:10,
    },
    userContainer:{
        flexDirection:'row',
    },
    userTextContainer:{
        justifyContent:'center',
        marginLeft:10
    },
    username:{
        fontFamily:getFontFamily('Inter','600'),
        color:"#000",
        fontSize:16,
    },
    location:{
        fontFamily:getFontFamily('Inter','400'),
        color:"#79869F",
        fontSize:11,
    },
    image: {
        width: '100%',
        height: 400, 
        marginVertical:10,
    },
    userPostContainer:{
        marginVertical:20,
    },
    reactionIconContainer:{
        flexDirection:'row',
        marginVertical:10,
        alignItems:'center'
    },
    reactionChildContainer:{
        flexDirection:'row',
        alignItems:'center'
    },
    reactionText:{
        fontFamily:getFontFamily('Inter','500'),
        marginLeft:4,
        marginRight:10,
    },
    reactionContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:3,
    },
    footerContainer:{
        marginHorizontal:15,
    },
    caption:{
        fontFamily:getFontFamily('Inter','600'),
    },
    uploadedTime:{
        fontFamily:getFontFamily('Inter','400'),
        fontSize:13,
    },
    viewComment:{
        marginVertical:5,
        fontFamily:getFontFamily('Inter','300'),
        fontSize:13,
    }
});

export default style;
