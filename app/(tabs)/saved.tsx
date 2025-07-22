import { Menu } from "@/services/db.service";
import { primaryColor, primaryWhite } from "@/styles/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MenuPlan from "../components/MenuPlan";

export default function Saved() {
    const [menus, setMenus] = useState<{ lunch: Menu, dinner: Menu }[]>();


    const getSavedPlan = async () => {
        try {
            const value = await AsyncStorage.getItem('savedPlan');
            if (value !== null) {
                const savedMenus: { lunch: Menu, dinner: Menu }[] = JSON.parse(value);
                setMenus(savedMenus);
            }
        } catch (e) {
            alert("Erro lendo o plan gardado");
        }
    };

    useFocusEffect(
        useCallback(() => {
            getSavedPlan();
        }, [])
    );

    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: primaryWhite }}>
            {(!menus || menus.length === 0) && (
                <Text style={styles.title}>
                    Non hai plans gardados. Crea un plan e gárdao para velo aquí.
                </Text>
            )}
            <MenuPlan menus={menus || []} />
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 40,
        width: '85%',
        alignSelf: "center",
        backgroundColor: primaryColor,
        padding: 10,
        borderRadius: 10,
    },
});