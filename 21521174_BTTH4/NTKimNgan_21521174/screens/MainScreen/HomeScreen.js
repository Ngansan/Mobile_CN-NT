import { useEffect, useState } from "react"
import { StyleSheet, Text, View, Image, SectionList, ScrollView, FlatList, TouchableOpacity} from "react-native"
import { useCart } from "../../context/CartContext";
export default function HomeScreen({navigation}){
    const [products, setProducts] = useState([]);
    const [sections, setSections] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const { addToCart } = useCart();

    const bannerList = [
        require("../../assets/banner2.jpg"),
        require("../../assets/banner3.jpg"),
        require("../../assets/banner4.jpg"),
    ]
    useState(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then((json) => {
            setProducts(json);
            const hotDeals = json.filter((item) => item.rating && item.rating.rate > 4);
            const newArrivals = json.slice(0, 5);

            setSections([
                { title: 'Hot Deals', data: hotDeals },
                { title: 'New Arrivals', data: newArrivals },
            ]);
        });
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerList.length);
    }, 3000);
    return () => clearInterval(intervalId);
    }, [bannerList.length]);

    const renderGridItem = ({item}) => (
        <TouchableOpacity style={styles.gridItemContainer} onPress={() => navigationToDetailProduct(item)}>
                <Image source={{uri: item.image}} style={styles.itemImage} />
                <Text style={styles.itemTitle} numberOfLines={2}>{item.title}</Text>
                <Text style={styles.itemPrice}>${item.price}</Text>
                <View style={styles.itemFooter}>
                    <Text style={styles.itemRating}>{item.rating?.rate} ⭐ ({item.rating?.count})</Text>
                    <TouchableOpacity 
                    style={styles.addToCartButton}
                    onPress={() => addToCart(item)}>
                    <Text style={styles.addToCartText}>+</Text>
                    </TouchableOpacity>
                </View>
        </TouchableOpacity>
    )
    const renderSection = ({section: {title, data}}) => (
        <View>
            <Text style={styles.sectionHeader}>{title}</Text>
            <FlatList
                data={data}
                renderItem={renderGridItem}
                keyExtractor={(item, index) => item.id.toString() + index}
                numColumns={2}
                columnWrapperStyle={styles.row}
            />
        </View>
    )
    const navigationToDetailProduct = (item) => {
        navigation.navigate("DetailProduct", {product: item})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.screenName}>Home</Text>
            <Text style={styles.title}>Shop for quality, Shop for style</Text>
            <Image
            source={bannerList[currentBannerIndex]}
            style={styles.banner}
            />
            <ScrollView>
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.id.toString() + index}
                    renderItem={() => null}
                    renderSectionHeader={renderSection}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 10,
        backgroundColor: "white"
    },
    screenName:{
        fontSize: 28,
        color: 'black',
        textAlign: "center",
        fontWeight: "bold",

    }, 
    title:{ 
        fontSize: 25,
        fontStyle: "italic",
        fontWeight: "bold",
        color: "red",
        textAlign: "center",

    },
    homeBtn:{
        width: 200,
        height: 50,
    }, 
    banner: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        marginBottom: 20,
        marginTop: 10
      },
      sectionHeader: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
      },
      itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,

      },
      itemImage: {
        width: 100,
        height: 100,
        resizeMode: "contain",
        marginRight: 10,
      },
      itemTitle: {
        flex: 1,
        fontSize: 14,
        fontWeight: "bold"
      },
      itemPrice: {
        fontSize: 14,
        fontWeight: "bold",
      },
      gridItemContainer: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
      },
      itemFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
        width: "100%",
      },
      itemRating: {
        fontSize: 12,
        color: "#000",
        fontWeight: "bold"
      },
      addToCartButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#ff6347",
        justifyContent: "center",
        alignItems: "center",
      },
      addToCartText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
      },
})