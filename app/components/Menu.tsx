import { Menu } from "@/services/db.service";
import { primaryColor } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";

export default function MenuLayout({ lunch, dinner }: { lunch: Menu, dinner: Menu }) {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>Xantar</Text>
            <View style={styles.section}>
                <Text style={styles.title}>{lunch.title} - {lunch.cycle_phase}</Text>
                {lunch.ingredients.length > 0 ? lunch.ingredients.map((ingredient, index) => (
                    <Text style={styles.ingredients} key={index}>{index + 1} - {ingredient}</Text>
                )) : <Text>Non figuran ingredientes</Text>}
            </View>

            <Text style={styles.title}>Cea</Text>
            <View style={styles.section}>
                <Text style={styles.title}>{dinner.title} - {dinner.cycle_phase}</Text>
                {dinner.ingredients.length > 0 ? dinner.ingredients.map((ingredient, index) => (
                    <Text style={styles.ingredients} key={index}>{index + 1} - {ingredient}</Text>
                )) : <Text>Non figuran ingredientes</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        marginBottom: 20,
        marginTop: 20,
    },
    section: {
        marginBottom: 30,
        textAlign: "center",
        backgroundColor: primaryColor,
        borderRadius: 10,
        padding: 10,
        width: '85%',
        alignSelf: "flex-end"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 10,
    },
    ingredients: {
        fontSize: 16,
        color: "#333",
        paddingLeft: 20
    }
});