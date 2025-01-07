import { StyleSheet, TouchableOpacity, Image, View, FlatList, Text, Alert} from "react-native"
import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
export default function CategoryScreen({navigation}){
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const {addToCart} = useCart();
    const categoryImages = [{
        "All": require("../../assets/all.png"),
        "Electronics": require("../../assets/electronics.png"),
        "Jewelry" : require("../../assets/jewelry.png"),
        "Men's Clothing": require("../../assets/menClothing.png"),
        "Women's Clothing": require("../../assets/womenClothing.png"),
    }]
    const API_URL = "https://fakestoreapi.com";
    useEffect(() => {
        fetchCategoriesAndProducts();
    }, []);
    const fetchCategoriesAndProducts = async () => {
        try{
            const categoryResponse = await fetch(`${API_URL}/products/categories`);
            const categoriesData = await categoryResponse.json();
            const productResponse = await fetch(`${API_URL}/products`);
            const productData = await productResponse.json();

            const updatedCategories = categoriesData.map((category) => ({
                id: category,
                name: category,
                image: categoryImages[category]
            }))

            setCategories([{id: "all", name: "All", image: categoryImages["All"] }, ...updatedCategories]);
            setProducts(productData);
            setFilterProducts(productData);
        }catch(error){
            console.error("Error when loading data", error);
        }
    };
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        if(category === "All"){
            setFilterProducts(products);
        }else {
            const filtered = products.filter((product) => product.category === category);
            setFilterProducts(filtered);
        }
    };
    const renderCategoryItem = ({item}) => (
        <TouchableOpacity
            style={[
                styles.categoryItem,
                selectedCategory === item.name && styles.categoryItemSelected,
            ]}
            onPress={() => handleCategorySelect(item.name)}>
                <Image source={{ uri: item.image }} style={styles.categoryImage}/>
                <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderProductItem = ({item}) => (
        <TouchableOpacity style={styles.productItem}
        onPress={() => navigation.navigate("DetailProduct", {product: item})}>
            <Image source={{ uri: item.image }} style={styles.productImage}/>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <View style={styles.productFooter}>
                <Text style={styles.productRating}>{item.rating?.rate} ⭐ ({item.rating?.count})</Text>
                <TouchableOpacity 
                     style={styles.addToCartButton}
                     onPress={() => addToCart(item)}>
                    <Text style={styles.addToCartText}>+</Text>
                </TouchableOpacity>
            </View>

        </TouchableOpacity>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={renderCategoryItem}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.categoryList}/>
            
            <FlatList
            data={filterProducts}
            renderItem={renderProductItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.productList}
            showsVerticalScrollIndicator={false}
      />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 10,
      },
      categoryList: {
        marginBottom: 10,
      },
      categoryItem: {
        alignItems: "center",
        marginHorizontal: 5,
      },
      categoryItemSelected: {
        borderBottomWidth: 2,
        borderBottomColor: "#000",
        fontWeight: "bold"
      },
      categoryImage: {
        width: 30,
        height: 30,
        borderRadius: 25,
      },
      categoryText: {
        fontSize: 18,
        // marginTop: 5,
      },
      productList: {
        justifyContent: "space-between",
      },
      productItem: {
        flex: 1,
        margin: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        backgroundColor: "#fff",
        alignItems: "center",
      },
      productImage: {
        width: "100%",
        height: 100,
        resizeMode: "contain",
      },
      productTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 5,
      },
      productPrice: {
        fontSize: 14,
        color: "#888",
      },
      productRating: {
        fontSize: 12,
        color: "#888",
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
      productFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 5,
        width: "100%",
      },
})