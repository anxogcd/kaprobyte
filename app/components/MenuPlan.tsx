import { getAllIngredients, Menu } from "@/services/db.service";
import { primaryColor } from "@/styles/colors";
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MenuPlan({ menus }: { menus: { lunch: Menu, dinner: Menu }[] }) {
    if (!menus || menus.length === 0) return null;

    const [checked, setChecked] = useState(Array(getAllIngredients({ menus }).length).fill(false));

    const toggleChecked = (index: number) => {
        setChecked((prev) => {
            const copy = [...prev];
            copy[index] = !copy[index];
            return copy;
        });
    };
    return (
        <ScrollView style={styles.content}>
            {menus.map((menu, index) => (
                <View key={index} style={styles.day}>
                    <Text style={styles.title}>
                        Día {index + 1} ({translateCyclePhase(menu.lunch.cycle_phase)})
                    </Text>
                    <View>
                        <Text style={styles.lunch}>
                            <Text style={{ fontWeight: "bold" }}>Xantar:</Text> {menu.lunch.title}
                        </Text>
                        <Text style={styles.lunch}>
                            <Text style={{ fontWeight: "bold" }}>Cea:</Text> {menu.dinner.title}
                        </Text>
                    </View>
                </View>
            ))}
            <View style={styles.ingredients}>
                <Text style={styles.title}>Ingredientes totais</Text>
                {getAllIngredients({ menus }).map(([ingredient, count], index) => (
                    <View
                        key={index}
                        style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}
                    >
                        <Text
                            style={[
                                styles.lunch,
                                checked[index] && { textDecorationLine: "line-through", opacity: 0.5 },
                            ]}
                        >
                            🌱 {index + 1} - {ingredient} x{count}
                        </Text>
                        <TouchableOpacity
                            onPress={() => toggleChecked(index)}
                            style={{ marginLeft: 8 }}
                        >
                            <Feather
                                name={checked[index] ? "check-square" : "square"}
                                size={18}
                                color="black"
                            />
                        </TouchableOpacity>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
}

const translateCyclePhase = (phase: string): string => {
    switch (phase) {
        case 'menstrual':
            return 'Menstrual';
        case 'follicular':
            return 'Folicular';
        case 'ovulation':
            return 'Ovulación';
        case 'luteal':
            return 'Lútea';
        default:
            return 'Ningún';
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginTop: 20
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    day: {
        alignSelf: "center",
        width: '85%',
        padding: 20,
        marginBottom: 10,
        backgroundColor: primaryColor,
        borderRadius: 10,
    },
    lunch: {
        fontSize: 14,
        color: "#333",
        paddingLeft: 20,
    },
    ingredients: {
        marginTop: 10,
        marginBottom: 80,
        backgroundColor: primaryColor,
        padding: 20,
        borderRadius: 10,
        width: '85%',
        alignSelf: "center",
    }
});