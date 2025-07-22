import { Menu } from "@/services/db.service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
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
        <MenuPlan menus={menus || []} />
    )
}