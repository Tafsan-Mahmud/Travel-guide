import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, } from 'react-native';
import { Feather } from '@expo/vector-icons';

const image = { uri: "https://www.komando.com/wp-content/uploads/2019/05/beach-vacation.jpg" }

const Post = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
            >
                <Text style={styles.tagLine}>Discover Switzerland</Text>
                <Text style={styles.placeName}>Explore the scenic beauty of Switzerland</Text>
                <TouchableOpacity style={{ position: 'absolute', left: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40 }}>
                    <Feather name='arrow-left' size={24} color='#fff' />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40 }}>
                    <Feather name='heart' size={24} color='#fff' />
                </TouchableOpacity>

            </ImageBackground>
            
                <TouchableOpacity style={styles.bookTicketBtn}>
                    <Text style={styles.bookTicketText}>Book Now</Text>
                </TouchableOpacity>
                <ScrollView style={{backgroundColor:'white'}}>
                    <Text style={{padding:14,fontSize:20, fontWeight:'bold'}}>
                        About the place
                    </Text>
                    <Text style={{paddingHorizontal:14, fontSize:14, fontWeight:'normal', opacity:0.5, justifyContent:'flex-start', textAlign:'justify',lineHeight:26}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta illum ipsam autem, distinctio nisi aliquid ullam eaque, non neque ut! At reiciendis illo esse, culpa maxime cupiditate nobis. Dolorem eveniet veritatis odio atque cumque? Nulla id tempore, sint repellat at deserunt ratione, doloremque quam corrupti cum porro iste ducimus!
                    </Text>
                    <Text style={{paddingHorizontal:14, fontSize:14, fontWeight:'normal', opacity:0.5, justifyContent:'flex-start', textAlign:'justify',lineHeight:26}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta illum ipsam autem, distinctio nisi aliquid ullam eaque, non neque ut! At reiciendis illo esse, culpa maxime cupiditate nobis.
                    </Text>
                    <Text style={{paddingHorizontal:14, fontSize:14, fontWeight:'normal', opacity:0.5, justifyContent:'flex-start', textAlign:'justify',lineHeight:26}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta illum ipsam autem, distinctio nisi aliquid ullam eaque, non neque ut! At reiciendis illo esse, culpa maxime cupiditate nobis. Dolorem eveniet veritatis odio atque cumque? Nulla id tempore, sint repellat at deserunt ratione, doloremque quam corrupti cum porro iste ducimus!
                    </Text>
                    <Text style={{paddingHorizontal:14, fontSize:14, fontWeight:'normal', opacity:0.5, justifyContent:'flex-start', textAlign:'justify',lineHeight:26}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta illum ipsam autem, distinctio nisi aliquid ullam eaque, non neque ut! At reiciendis illo esse, culpa maxime cupiditate nobis. Dolorem eveniet veritatis odio atque cumque? Nulla id tempore, sint repellat at deserunt ratione, doloremque quam corrupti cum porro iste ducimus!
                    </Text>
                    <View>
                     <Text style={{padding:14,fontSize:20,fontWeight:'bold'}}> Suggested Place  </Text>
                     <FlatList 
                     
                     />
                    </View>
                </ScrollView>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 380,
        justifyContent: 'flex-end',
        backgroundColor: 'tr'
    },
    tagLine: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginVertical: 6
    },
    placeName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    bookTicketBtn:{
        position:'absolute',
        right:12,
        top:350,
        backgroundColor:'#ff6200',
        padding:14,
        borderRadius:40,
        elevation:5,
        zIndex:20
    },
    bookTicketText:{
        color:'white',
        fontSize:14,
        fontWeight:'600'
    }
    
});

export default Post;