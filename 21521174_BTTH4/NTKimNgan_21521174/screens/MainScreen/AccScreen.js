import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AuthorizeContext } from "../../context/AuthorizePro";
import { jwtDecode } from "jwt-decode";
import Icon from 'react-native-vector-icons/MaterialIcons';
export default function AccScreen({ navigation }) {
    const { logout } = useContext(AuthorizeContext);
    const [userData, setUserData] = useState(null);
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjIsInVzZXIiOiJtb3JfMjMxNCIsImlhdCI6MTczNDk3MTIzNX0.kLsspHW1AwpOleimv5u-w-1r932zhA6ujJECzeH39Do";
    useEffect(() => {
        const decodeTokenAndFetchData = async () => {
            try {
                const decoded = jwtDecode(token);
                console.log("Decoded token: ", decoded);
                const userId = decoded.userId || decoded.sub || null; 
                console.log("User ID: ", userId);

                if (userId) {
                    const userInfo = await fetchUserData(userId, token);
                    setUserData(userInfo);
                } else {
                    console.error("User ID is missing in the token.");
                }
            } catch (error) {
                console.error("Error decoding token: ", error);
            }
        };
        decodeTokenAndFetchData();
    }, [token]);
    useEffect(() => {
        const fetchUpdatedData = async () => {
            const userInfo = await fetchUserData(userData.id, token);
            setUserData(userInfo);
        };
        const unsubscribe = navigation.addListener('focus', fetchUpdatedData);
        return unsubscribe;
    }, [navigation]);

    const fetchUserData = async (userId, token) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${userId}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (response.ok) {
                const userData = await response.json();
                console.log("User info: ", userData);
                return userData;
            } else {
                console.log("Error fetching user data: ", response.status);
            }
        } catch (error) {
            console.error("Error fetching user data: ", error);
        }
    };
    const handleUpdateUserData = (updatedData) => {
        setUserData(updatedData);
    };

    if (!userData) {
        return (
            <View style={styles.container}>
                <Text>Loading user data...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.headerUser}>
                    <Image
                    source={ require("../../assets/user1.png") }
                    style={styles.profileImage}
                    />
                    <Text style={styles.headerName}>{`${userData.name.firstname} ${userData.name.lastname}`}</Text>
                    <TouchableOpacity onPress={() =>
                    navigation.navigate("EditProfile", {
                        userData,
                        onUpdateUserData: handleUpdateUserData,
                    })
                }>
                        <Icon name="edit" size={30} color="black" style={styles.editIcon} />
                    </TouchableOpacity>
                </View>
            <Text style={styles.fields}>Name: </Text>
            <Text style={styles.text}>{`${userData.name.firstname} ${userData.name.lastname}`}</Text>
            <Text style={styles.fields}>Username: </Text>
            <Text  style={styles.text}>{userData.username || "N/A"}</Text>
            <Text style={styles.fields}>Email: </Text>
            <Text  style={styles.text}>{userData.email || "N/A"}</Text>
            <Text style={styles.fields}>Phone: </Text>
            <Text  style={styles.text}>{userData.phone || "N/A"}</Text>
            <Text style={styles.fields}> Address: </Text>
            <Text  style={styles.text}>{userData.address?.city || "N/A"}, {userData.address?.street || "N/A"}</Text>
            <Button title="Log Out" onPress={logout} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f9f9f9",
    },
    profileHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 15,
      borderWidth: 2,
      borderColor: "#4CAF50", 
      justifyContent: "center",
      alignItems: "center",

    },
    profileName: {
      fontSize: 22,
      fontWeight: "bold",
      color: "#333",
    },
    editIcon: {
      marginLeft: "auto",
      backgroundColor: "#e3f2fd",
      padding: 8,
      borderRadius: 8,
    },
    infoContainer: {
      marginVertical: 10,
      padding: 10,
      backgroundColor: "white",
      marginTop: 25,
    },
    logoutButton: {
      marginTop: 20,
      backgroundColor: "#FF5252",
      padding: 12,
      borderRadius: 8,
      alignItems: "center",
    },
    logoutText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    headerUser:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30
    },
    headerName:{
        fontSize: 25,
        fontWeight: "bold"
    },
    fields:{
        fontWeight: "bold",
        fontSize: 20,
    },
    text: {
        fontSize: 20,
    }
  });
  