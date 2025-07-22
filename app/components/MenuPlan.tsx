import { getAllIngredients, Menu } from "@/services/db.service";
import { primaryColor } from "@/styles/colors";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function MenuPlan({ menus }: { menus: { lunch: Menu, dinner: Menu }[] }) {
    return (
        menus && menus.length > 0 && <ScrollView style={styles.content}>
            {menus.length > 0 && menus.map((menu, index) => (
                <View key={index} style={styles.day}>
                    <Text style={styles.title}>
                        Día {index + 1} ({translateCyclePhase(menu.lunch.cycle_phase)})
                    </Text>
                    <View>
                        <Text style={styles.lunch}>
                            <b>Xantar:</b> {menu.lunch.title}
                        </Text>
                        <Text style={styles.lunch}>
                            <b>Cea:</b> {menu.dinner.title}
                        </Text>
                    </View>
                </View>
            ))}
            <View style={styles.ingredients}>
                <Text style={styles.title}>Ingredientes totais</Text>
                {menus.length > 0 && getAllIngredients({ menus }).map(([ingredient, count], index) => (
                    <Text key={index} style={styles.lunch}>
                        🌱 {index + 1} - {ingredient}   x{count}
                    </Text>
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
        marginBottom: 20,
        backgroundColor: primaryColor,
        padding: 20,
        borderRadius: 10,
        width: '85%',
        alignSelf: "center",
    }
});