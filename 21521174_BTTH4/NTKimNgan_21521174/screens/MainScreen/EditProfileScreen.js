import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, ScrollView, Alert } from "react-native";
export default function EditProfileScreen({ route, navigation }) {
    const { userData, onUpdateUserData } = route.params;
    const [updatedData, setUpdatedData] = useState({
        firstname: userData.name.firstname,
        lastname: userData.name.lastname,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        houseNumber: userData.address.number,
        street: userData.address.street,
        city: userData.address.city,
    });
    const handleSave = async () => {
        try {
            const response = await fetch(`https://fakestoreapi.com/users/${userData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: {
                        firstname: updatedData.firstname,
                        lastname: updatedData.lastname,
                    },
                    username: updatedData.username,
                    email: updatedData.email,
                    phone: updatedData.phone,
                    address: {
                        number: updatedData.houseNumber,
                        street: updatedData.street,
                        city: updatedData.city,
                    },
                }),
            });

            if (response.ok) {
                const updatedUser = {
                    id: userData.id,
                    name: {
                        firstname: updatedData.firstname,
                        lastname: updatedData.lastname,
                    },
                    username: updatedData.username,
                    email: updatedData.email,
                    phone: updatedData.phone,
                    address: {
                        number: updatedData.houseNumber,
                        street: updatedData.street,
                        city: updatedData.city,
                    },
                };

                onUpdateUserData(updatedUser);

                Alert.alert("Success", "Profile updated successfully");
                navigation.goBack();
            } else {
                Alert.alert("Error", "Failed to update profile");
            }
        } catch (error) {
            console.error(error);
            Alert.alert("Error", "An error occurred while updating the profile");
        }
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>First name</Text>
                <TextInput
                    value={updatedData.firstname}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, firstname: text })}
                    placeholder="First name"
                    style={styles.input}
                />

                <Text style={styles.title}>Last name</Text>
                <TextInput
                    value={updatedData.lastname}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, lastname: text })}
                    placeholder="Last name"
                    style={styles.input}
                />

                <Text style={styles.title}>Username</Text>
                <TextInput
                    value={updatedData.username}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, username: text })}
                    placeholder="Username"
                    style={styles.input}
                />

                <Text style={styles.title}>Email</Text>
                <TextInput
                    value={updatedData.email}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, email: text })}
                    placeholder="Email"
                    style={styles.input}
                />

                <Text style={styles.title}>Phone Number</Text>
                <TextInput
                    value={updatedData.phone}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, phone: text })}
                    placeholder="Phone Number"
                    style={styles.input}
                />

                <Text style={styles.title}>House Number</Text>
                <TextInput
                    value={updatedData.houseNumber}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, houseNumber: text })}
                    placeholder="House Number"
                    style={styles.input}
                />

                <Text style={styles.title}>Street</Text>
                <TextInput
                    value={updatedData.street}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, street: text })}
                    placeholder="Street"
                    style={styles.input}
                />

                <Text style={styles.title}>City</Text>
                <TextInput
                    value={updatedData.city}
                    onChangeText={(text) => setUpdatedData({ ...updatedData, city: text })}
                    placeholder="City"
                    style={styles.input}
                />
                <Button title="Save" onPress={handleSave} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
});
