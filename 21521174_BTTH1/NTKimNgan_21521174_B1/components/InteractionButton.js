import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function InteractionButton({type, onPress, liked}){
    /*Create Icon */ 
    const getIconName = (interactionType) => {
        switch (interactionType) {
            case 'likes':
                return 'thumbs-up';
            case 'comments':
                return 'comment';
            case 'shares':
                return 'share';
            default:
                return 'question-circle';
        }
    };
    const iconColor = liked ? '#0000FF' : '#666'; // Thay đổi màu nếu liked
    const textColor = liked ? '#0000FF' : '#000';
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Icon name={getIconName(type)} size={20} color={iconColor}/>
                    <Text style={[styles.text, { color: textColor }]}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}
const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        marginLeft: 5,
        fontSize: 14,
        color: 'black',
    },
    count: {
        fontSize: 14,
        color: '#333',
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
    },
});
  