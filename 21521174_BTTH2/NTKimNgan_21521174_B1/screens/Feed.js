import { ScrollView, StyleSheet } from "react-native";
import React, {useState} from "react";
import Post from "../components/Post";

const initialPost = [
    {
        id: 1,
        userName: "Kim Ngan",
        userAvatar: require('../assets/images/av1.jpg'),
        contentText: "It is beautifull",
        contentImage: require('../assets/images/england.jpg') ,
        likes: 1033,
        comments: 15,
        shares: 20,
        liked: false,
    },
    {
        id: 2,
        userName: "Allan Walker",
        userAvatar: require('../assets/images/av2.jpg'),
        contentText: "Ohhhh woowww, VietNamese people is so nice",
        contentImage: require('../assets/images/japan.jpg'),
        likes: 102,
        comments: 7,
        shares: 10,
        liked: false,
    },
    {
        id: 3,
        userName: "NTKN",
        userAvatar: require('../assets/images/av3.jpg'),
        contentText: "Hi everyone",
        contentImage: require('../assets/images/My-Khe-Beach-Da-Nang.jpg'),
        likes: 10,
        comments: 4,
        shares: 12,
        liked: false,
    },

]
export default function Feed() {
    const [posts, setPosts] = useState(initialPost);

    const onInteract = (postId, type) => {
        setPosts(prevPosts => prevPosts.map(post => {
            if (post.id === postId) {
                return{
                    ...post,
                    [type]: type === 'likes' 
                    ? (post.liked ? post.likes - 1 : post.likes + 1)  // Tăng hoặc giảm số like
                    : post[type] + 1,
                    liked: type === 'likes' ? !post.liked : post.liked  
                }
            }
            return post;
        })
    )}
    return(
        <ScrollView style={ styles.feed }>
            {posts.map(post => (
                <Post key={post.id} post={post} onInteract ={onInteract}/>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    feed: {
        padding: 10,
        backgroundColor: '#F2EED7',
    },
});