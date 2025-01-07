import { StyleSheet, Text, View, Image } from "react-native"
export default function DetailProductScreen({route}){
    const {product} = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.productImage}/>
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productDescription}>{product.description}</Text>
            <Text style={styles.productPrice}>Price: ${product.price}</Text>
            <Text style={styles.productRating}>
                Rating: ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff"
    },
    productTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center",
    },
    productImage: {
        width: "100%",
        height: 200,
        resizeMode: "contain",
        marginBottom: 20,
    },
    productPrice: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    productDescription: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: "justify"
    },
    productRating: {
        fontSize: 18, 
        color: "#000",
        fontWeight: "bold"
    }
})