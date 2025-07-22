import { get5RandomMenusByDay, Menu } from "@/services/db.service";
import { primaryColor, primaryWhite } from "@/styles/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, View } from "react-native";
import MenuPlan from "../components/MenuPlan";

export default function Plan() {
    const [menus, setMenus] = useState<{ lunch: Menu, dinner: Menu }[]>();
    const [day, setDay] = useState<number>();

    const newPlan = () => {
        if (day && day > 28) return alert("O día do ciclo non pode ser maior que 28");
        const randomMenus = get5RandomMenusByDay(day);
        setMenus(randomMenus)
    }

    const savePlan = async () => {
        try {
            await AsyncStorage.setItem('savedPlan', JSON.stringify(menus));
        } catch (e) {
            alert("Erro gardando o plan");
        }
    }

    const handleChange = (text: string) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setDay(Number(numeric));
    };

    return (
        <SafeAreaView
            style={styles.container}
        >
            {menus && <MenuPlan menus={menus} />}
            <View style={styles.actions}>
                {menus && menus.length > 0 && (<Button variant="plain" color="black" style={{ ...styles.button, width: '75%', alignSelf: 'center' }} onPressOut={savePlan}>Gardar Plan</Button>
                )}
                <Button variant="plain" color="black" style={styles.button} onPressOut={newPlan}>Obter plan para 5 días</Button>
                <TextInput
                    style={styles.input}
                    value={day ? day.toString() : ""}
                    onChangeText={handleChange}
                    keyboardType="numeric"
                    placeholder="Día actual do ciclo (1-28)"
                    maxLength={2}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: primaryWhite,
        paddingTop: 20,
    },
    button: {
        backgroundColor: primaryColor,
        marginBottom: 10,
    },
    input: {
        marginTop: 20,
        padding: 10,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 15,
        color: '#333',
    },
    actions: {
        marginTop: 20,
        marginBottom: 10,
    }
})
