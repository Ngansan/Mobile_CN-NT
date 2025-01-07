import {useState } from "react";
import { Button, StyleSheet, Text, View, Image, TouchableOpacity, Modal, FlatList } from "react-native";
import { useCart } from "../../context/CartContext";

export default function CartScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const { cartItems, totalPrice, updateItemQuantity, removeItemFromCart } = useCart();

  const handleIncreaseQuantity = (item) => {
    updateItemQuantity(item.id, item.quantity + 1);
  };
  const handleDecreaseQuantity = (item) => {
    if (item.quantity === 1) {
      setSelectedItem(item);
      setModalVisible(true);
    } else {
      updateItemQuantity(item.id, item.quantity - 1);
    }
  };
  const deleteItem = () => {
    removeItemFromCart(selectedItem.id);
    setModalVisible(false);
  };
  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCart}>
        <Text>No items in cart</Text>
        <Button title="Buy" onPress={() => navigation.navigate("Home")} />
      </View>
    );
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        
        <View style={styles.actions}>
          <TouchableOpacity onPress={() => handleDecreaseQuantity(item)}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => handleIncreaseQuantity(item)}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            setSelectedItem(item);
            setModalVisible(true);
          }}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
        <Text>Total: ${item && item.price ? item.price * (item.quantity || 0) : 0}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        renderEmptyCart()
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
            <Button title="Pay" onPress={() => alert("Proceed to payment")} />
          </View>
        </>
      )}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.smallModal}>
          <Text style={styles.textModal}>Are you sure you want to delete this product?</Text>
          <View style={styles.modalActions}>
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
            <Button title="Yes" onPress={deleteItem} />
          </View>
        </View>
      </Modal>
    </View>
  );

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    marginVertical: 8,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 5
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  productName: {
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  decrease: {
    fontSize: 24,
    marginRight: 8,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderTopWidth: 1,
  },
  smallModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "rgba(62, 53, 53, 0.5)",
  
  },
  textModal:{
    fontSize: 18,
    fontWeight: "bold"
  },
  modalActions: {
    flexDirection: "row",
    marginTop: 16,
  },
  emptyCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  delete: {
    color: "red",
  },
  price: {
    fontWeight: "bold"
  },
  quantityText:{
    color: "red"
  }
});
