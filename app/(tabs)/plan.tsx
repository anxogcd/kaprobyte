import { get5RandomMenusByDay, Menu } from "@/services/db.service";
import { primaryColor, primaryWhite } from "@/styles/colors";
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Plan() {
    const [menus, setMenus] = useState<{ lunch: Menu, dinner: Menu }[]>();
    const [day, setDay] = useState<number>();

    const newMenu = () => {
        if (day && day > 28) return alert("O día do ciclo non pode ser maior que 28");
        const randomMenus = get5RandomMenusByDay(day);
        setMenus(randomMenus)
    }

    const handleChange = (text: string) => {
        const numeric = text.replace(/[^0-9]/g, "");
        setDay(Number(numeric));
    };

    return (
        <View
            style={styles.container}
        >
            <Text>{JSON.stringify(menus, null, 2)}</Text>
            <Button variant="plain" color="black" style={styles.button} onPressOut={newMenu}>Obter plan para 5 días</Button>
            <TextInput
                style={styles.input}
                value={day ? day.toString() : ""}
                onChangeText={handleChange}
                keyboardType="numeric"
                placeholder="Fase do ciclo (1-28)"
                maxLength={2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: primaryWhite,
    },
    button: {
        backgroundColor: primaryColor,
    },
    input: {
        marginTop: 20,
        padding: 10,
    }
})
