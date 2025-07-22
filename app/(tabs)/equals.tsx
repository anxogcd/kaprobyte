import { primaryColor } from "@/styles/colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Text } from "@react-navigation/elements";
import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Equals() {
    const month = new Date().getMonth();

    const seasonalFruits: string[][] = [
        // Xaneiro
        ["Kiwis", "Laranxas", "Mandarinas", "Limóns", "Mazás tardías"],
        // Febreiro
        ["Kiwis", "Laranxas", "Mandarinas", "Limóns", "Mazás tardías"],
        // Marzo
        ["Laranxas", "Mandarinas", "Limóns", "Mazás tardías"],
        // Abril
        ["Laranxas", "Limóns", "Amorodos", "Kiwi"],
        // Maio
        ["Amorodos", "Nísperos", "Cereixas"],
        // Xuño
        ["Amorodos", "Cereixas", "Albaricoques", "Peras", "Frambuesas", "Arandos"],
        // Xullo
        ["Cereixas", "Albaricoques", "Peras", "Frambuesas", "Arandos", "Pexegos", "Ciruelas", "Figos", "Mazás de verán"],
        // Agosto
        ["Pexegos", "Ciruelas", "Figos", "Frambuesas", "Arandos", "Uvas", "Mazás de verán", "Sandía", "Melón"],
        // Setembro
        ["Mazás", "Uvas", "Figos", "Pexegos", "Frambuesas", "Sandía", "Melón", "Peras"],
        // Outubro
        ["Mazás", "Peras", "Uvas", "Caquis", "Granadas", "Membrillo",],
        // Novembro
        ["Mazás", "Peras", "Kiwis", "Caquis", "Granadas", "Membrillo"],
        // Decembro
        ["Kiwis", "Laranxas", "Mandarinas", "Limóns", "Caquis", "Granadas", "Mazás tardías"],
    ];

    const seasonalBlueFish: string[][] = [
        // Xaneiro
        ["Xurelo", "Melgacho", "Palometa"],
        // Febreiro
        ["Xurelo", "Melgacho", "Palometa"],
        // Marzo
        ["Xurelo", "Melgacho", "Palometa", "Xarda"],
        // Abril
        ["Xurelo", "Melgacho", "Xarda", "Palometa"],
        // Maio
        ["Xurelo", "Melgacho", "Xarda", "Palometa"],
        // Xuño
        ["Sardiña", "Xurelo", "Xarda", "Palometa", "Melgacho", "Peixe espada"],
        // Xullo
        ["Sardiña", "Xurelo", "Xarda", "Palometa", "Melgacho", "Bonito do norte", "Atún", "Peixe espada"],
        // Agosto
        ["Sardiña", "Xurelo", "Xarda", "Palometa", "Bonito do norte", "Atún", "Melgacho", "Peixe espada"],
        // Setembro
        ["Sardiña", "Xurelo", "Xarda", "Palometa", "Bonito do norte", "Atún", "Peixe espada"],
        // Outubro
        ["Sardiña", "Xurelo", "Xarda", "Palometa"],
        // Novembro
        ["Xurelo", "Xarda", "Palometa", "Melgacho"],
        // Decembro
        ["Xurelo", "Xarda", "Palometa", "Melgacho"],
    ];

    const seasonalWhiteFish: string[][] = [
        // Xaneiro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "Robaliza", "Dourada"],
        // Febreiro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "Robaliza", "Dourada"],
        // Marzo
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Abril
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Maio
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Xuño
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Xullo
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Agosto
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Setembro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Outubro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "San Martiño", "Robaliza", "Dourada", "Rapante"],
        // Novembro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "Robaliza", "Dourada"],
        // Decembro
        ["Pescada", "Rape", "Linguado", "Rodaballo", "Maruca", "Bacallau", "Robaliza", "Dourada"],
    ];




    const monthlySeasonalGreens: string[][] = [
        // Xaneiro
        ["Escarola", "Endivia", "Leituga romana", "Leituga iceberg", "Canónigos"],
        // Febreiro
        ["Escarola", "Endivia", "Leituga romana", "Leituga iceberg", "Canónigos"],
        // Marzo
        ["Escarola", "Endivia", "Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula"],
        // Abril
        ["Escarola", "Endivia", "Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo"],
        // Maio
        ["Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo", "Leituga maruxa"],
        // Xuño
        ["Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo", "Leituga maruxa"],
        // Xullo
        ["Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo", "Leituga maruxa"],
        // Agosto
        ["Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo", "Leituga maruxa"],
        // Setembro
        ["Leituga romana", "Leituga iceberg", "Canónigos", "Rúcula", "Trocadero", "Folla de carballo", "Leituga maruxa"],
        // Outubro
        ["Leituga romana", "Leituga iceberg", "Escarola", "Endivia", "Canónigos", "Rúcula", "Folla de carballo"],
        // Novembro
        ["Leituga romana", "Leituga iceberg", "Escarola", "Endivia", "Canónigos", "Folla de carballo"],
        // Decembro
        ["Escarola", "Endivia", "Leituga romana", "Leituga iceberg", "Canónigos", "Folla de carballo"],
    ];

    const hortalizasTempadaPorMes: string[][] = [
        // Xaneiro
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola (conserva)"],
        // Febreiro
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola (conserva)"],
        // Marzo
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola nova", "Rabanete"],
        // Abril
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola nova", "Rabanete", "Ervilas", "Feixón verde", "Espárrago verde"],
        // Maio
        ["Cenoria", "Aipo", "Porro", "Rabanete", "Ervilas", "Feixón verde", "Espárrago verde", "Pataca nova"],
        // Xuño
        ["Cenoria", "Aipo", "Rabanete", "Ervilas", "Feixón verde", "Pataca nova", "Pepino", "Cabaciña", "Pemento", "Berenxena", "Tomate", "Cebola", "Remolacha"],
        // Xullo
        ["Cenoria", "Aipo", "Pepino", "Cabaciña", "Pemento", "Berenxena", "Tomate", "Cebola", "Remolacha", "Millón", "Cabaza"],
        // Agosto
        ["Cenoria", "Pepino", "Cabaciña", "Pemento", "Berenxena", "Tomate", "Cebola", "Remolacha", "Millón", "Cabaza"],
        // Setembro
        ["Cenoria", "Pepino", "Cabaciña", "Pemento", "Berenxena", "Tomate", "Cebola", "Remolacha", "Cabaza"],
        // Outubro
        ["Cenoria", "Pepino", "Cabaciña", "Pemento", "Berenxena", "Tomate", "Cebola", "Remolacha", "Cabaza", "Repolos", "Coliflor", "Brócoli", "Porro", "Nabo"],
        // Novembro
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola (conserva)", "Cabaza"],
        // Decembro
        ["Repolos", "Coliflor", "Brócoli", "Porro", "Cenoria", "Nabo", "Aipo", "Grelos", "Cebola (conserva)", "Cabaza"],
    ];



    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ marginBottom: 20 }}>
                <Text style={styles.title}><MaterialCommunityIcons name="fruit-cherries" size={24} color="black" /> Froita de tempada</Text>
                <FlatList
                    data={seasonalFruits[month]}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8, padding: 10 }}
                />

                <Text style={styles.title}><MaterialCommunityIcons name="carrot" size={24} color="black" /> Hortalizas de tempada</Text>
                <FlatList
                    data={hortalizasTempadaPorMes[month]}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8, padding: 10 }}
                />

                <Text style={styles.title}><Ionicons name="fish" size={24} color="black" /> Peixe azul de tempada</Text>
                <FlatList
                    data={seasonalBlueFish[month]}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8, padding: 10 }}
                />

                <Text style={styles.title}><Ionicons name="fish-outline" size={24} color="black" /> Peixe branco de tempada</Text>
                <FlatList
                    data={seasonalWhiteFish[month]}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8, padding: 10 }}
                />

                <Text style={styles.title}><Ionicons name="leaf" size={24} color="black" /> Follas verdes de tempada (ensalada)</Text>
                <FlatList
                    data={monthlySeasonalGreens[month]}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text>{item}</Text>
                        </View>
                    )}
                    numColumns={3}
                    contentContainerStyle={{ gap: 8, padding: 10 }}
                />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    item: {
        flex: 1,
        backgroundColor: primaryColor,
        margin: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 10,
    },
})