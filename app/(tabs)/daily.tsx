import { CyclePhase, getRandomMenuByPhase, Menu } from "@/services/db.service";
import { primaryColor, primaryWhite } from "@/styles/colors";
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import MenuLayout from "../components/Menu";

export default function Daily() {
    const [menu, setMenu] = useState<{ lunch: Menu, dinner: Menu }>();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<CyclePhase>();
    const [items, setItems] = useState([
        { label: 'Menstrual', value: 'menstrual' },
        { label: 'Folicular', value: 'follicular' },
        { label: 'Ovulación', value: 'ovulation' },
        { label: 'Lútea', value: 'luteal' },
        { label: 'Ningún', value: 'none' }
    ]);

    const newMenu = () => {
        const randomMenu = getRandomMenuByPhase(selectedValue ?? CyclePhase.None);
        setMenu(randomMenu)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: primaryWhite }}>
            <ScrollView style={styles.menu}>
                {menu ? <MenuLayout lunch={menu.lunch} dinner={menu.dinner} /> : <Text style={{ ...styles.actions, fontWeight: 'bold' }}>Que che apetece comer hoxe?</Text>}
            </ScrollView>
            <Button variant="plain" color="black" style={styles.button} onPressOut={newMenu}>Xerar menú aleatorio</Button>
            <View style={styles.actions}>
                <DropDownPicker
                    style={styles.dropdown}
                    open={open}
                    value={selectedValue ?? null}
                    items={items}
                    setOpen={setOpen}
                    setValue={setSelectedValue}
                    setItems={setItems}
                    placeholder="Selecciona fase"
                    listMode="FLATLIST"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        padding: 10
    },
    actions: {
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        alignSelf: "center",
    },
    button: {
        marginTop: 20,
        backgroundColor: primaryColor,
        width: '50%',
        alignSelf: "center",
    },
    dropdown: {
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: primaryColor,
        width: '70%',

    }
});