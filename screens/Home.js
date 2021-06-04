import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';

const Home = () => {
    const imaget = { uri: "https://image.freepik.com/free-photo/low-angle-view-skyscrapers_1359-1105.jpg" }
    const recentImage = { uri: "https://www.komando.com/wp-content/uploads/2019/05/beach-vacation.jpg" }

    const [gallery, setGallery] = useState([
        {
            image: { uri: "https://traveology.com/wp-content/uploads/sites/7/2020/11/travel2.jpg" }, title: 'Switzerland', key: '1'
        },
        {
            image: { uri: "https://ds393qgzrxwzn.cloudfront.net/resize/m600x500/cat1/img/images/0/IEbCnA2BZy.jpg" }, title: 'Switzerland', key: '2'
        },
        {
            image: { uri: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjohnnyjet%2Ffiles%2F2017%2F10%2Ftraveling-alone.jpg" }, title: 'Switzerland', key: '3'
        },
        {
            image: { uri: "https://www.thestyleinspiration.com/wp-content/uploads/2019/07/inexpensive-travel-1024x538.jpg" }, title: 'Switzerland', key: '4'
        }
    ]);

    return (
        <View style={{flexGrow:1, height:'100%'}}>
            <View>
                <ImageBackground
                    source={imaget}
                    style={{ width: '100%', height: 270 }}
                    imageStyle={{ borderBottomRightRadius: 65 }}
                >
                    <View style={styles.DarkOverlay}></View>
                    <View style={styles.searchContainer}>
                        <Text style={styles.userGreet} >Hi Bijoy</Text>
                        <Text style={styles.userText}>Where would you like to go today?</Text>
                    </View>
                    <View>
                        <TextInput
                            style={styles.searchBox}
                            placeholder='Search Destination'
                            placeholderTextColor='#666'
                        >
                        </TextInput>
                        <Feather name='search' size={22} color='#666' style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6 }} />
                    </View>
                    <Feather name='menu' size={22} color='#fff' style={{ position: 'absolute', top: 40, left: 16 }} />
                    <Feather name='bell' size={22} color='#fff' style={{ position: 'absolute', top: 40, right: 30 }} />
                </ImageBackground>
            </View>

            <ScrollView>
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Top Tranding</Text>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                                    <TouchableOpacity>
                                        <Image source={item.image} style={{ width: 150, marginRight: 8, height: 250, borderRadius: 10 }} />
                                        <View style={styles.imageOverlay}></View>
                                        <Feather name='map-pin'size={16} color='white' style={styles.imageLocationIcon}/>
                                        <Text style={styles.imageText}>{item.title}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}

                    />
                </View>
                <View>
                    <View style={{padding: 20 , flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{fontSize:22, fontWeight:'bold'}}>Recently Viewed</Text>
                        <Text style={{fontSize:14, fontWeight:'bold', color:'#ff6200'}}>View All</Text>
                    </View>
                    <Image 
                    source={recentImage}
                    style={{width:'92%',height:250, borderRadius:10,alignSelf:'center'}}
                    />
                    <View style={{position:'absolute',bottom:0,padding:16}}>
                        <View style={{flexDirection:'row'}}>
                        <Feather name='map-pin'
                        color='white'
                        size={22}
                        style={{marginLeft:10,position:'relative', top:4}}
                        />
                        <Text style={{fontSize:20, color:'white',marginLeft:4, fontWeight:'normal' , marginBottom:10, marginHorizontal:10}}>Sea Bitch</Text>
                        </View>
                        <Text style={{fontSize:14, color:'white' , fontWeight:'normal',marginBottom:6 , opacity:0.8, marginLeft:16}}>
                           Bangladesh,Cox's Bazar 
                        </Text>
                    </View>
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
    DarkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white'
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%'
    },
    imageOverlay:{
        width:150,
        height:250,
        marginRight:8,
        borderRadius:10,
        position:'absolute',
        backgroundColor:'#000',
        opacity:0.2
    },
    imageLocationIcon:{
        position:'absolute',
        marginTop:4,
        left:10,
        bottom:10
    },
    imageText:{
        position:'absolute',
        color:'white',
        marginTop:4,
        fontSize:14,
        left:30,
        bottom:10
    }
});

export default Home;