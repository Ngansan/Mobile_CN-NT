import { View, Text, Image, StyleSheet } from "react-native";
import InteractionButton from "./InteractionButton";
import React, {useState} from "react";
import CountClick from "./CountClick";

export default function Post({post, onInteract}){
    return (
        <View style={styles.post}>
            <View style={styles.userInfo}>
                <Image source={post.userAvatar} style={styles.userAvatar}/>
                <Text style={styles.userName}>{post.userName}</Text>
            </View>
            <Text style={styles.contentText}>{post.contentText}</Text>
            <Image source={post.contentImage} style={styles.contentImage}/>
            <View style={styles.countClickRow}>
                <CountClick
                type="likes"
                count={post.likes}
                />
                <CountClick
                type="comments"
                count={post.comments}
                />
                <CountClick
                type="shares"
                count={post.shares}
                />
            </View>  
            <View style={styles.separator}/>
            <View style={styles.interactionRow}>
                    <InteractionButton
                    type="likes"
                    count={post.likes}
                    onPress={()=> onInteract(post.id, "likes")}
                    liked={post.liked}
                    />
                    <InteractionButton
                    type="comments"
                    count={post.comments}
                    onPress={()=>onInteract(post.id, "comments")}
                    />
                    <InteractionButton
                    type="shares"
                    count={post.shares}
                    onPress={()=>onInteract(post.id, "shares")}                
                    />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    post:{
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userName: {
        fontWeight: 'bold',
    },
    contentText: {
        marginTop: 10,
    },
    contentImage: {
        width: '100%',
        height: 200,
        marginTop: 10,
        borderRadius: 10,
    },
    interactionRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    countClickRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    separator: {  // Thêm đường phân cách
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 10,
    },
});