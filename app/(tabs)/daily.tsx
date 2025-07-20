import { CyclePhase, getMenuByPhase, getRandomMenu, Menu } from "@/services/db.service";
import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from "react-native-safe-area-context";
import MenuLayout from "../components/Menu";

export default function Daily() {
    const [menu, setMenu] = useState<{ lunch: Menu, dinner: Menu }>();

    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<CyclePhase>(CyclePhase.Menstrual);
    const [items, setItems] = useState([
        { label: 'Menstrual', value: 'menstrual' },
        { label: 'Folicular', value: 'follicular' },
        { label: 'Ovulación', value: 'ovulation' },
        { label: 'Lútea', value: 'luteal' },
        { label: 'Ningún', value: 'none' }
    ]);

    const newMenu = () => {
        const menu = selectedValue === 'none' ? getRandomMenu() : getMenuByPhase(selectedValue);
        setMenu(menu)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={styles.container}
            >
                <View style={styles.content}>
                    <View style={styles.menu}>
                        {menu ? <MenuLayout lunch={menu.lunch} dinner={menu.dinner} /> : <Text style={{ ...styles.actions, color: 'red' }}>Preme xerar menú aleatorio</Text>}
                    </View>
                    <Button style={styles.actions} onPressOut={newMenu}>Xerar menú aleatorio</Button>
                    <View style={styles.actions}>
                        <DropDownPicker
                            style={styles.dropdown}
                            open={open}
                            value={selectedValue}
                            items={items}
                            setOpen={setOpen}
                            setValue={setSelectedValue}
                            setItems={setItems}
                            placeholder="Selecciona fase"
                            listMode="FLATLIST"
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        flex: 1,
        padding: 10,
    },
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
    dropdown: {
        width: '90%',
        justifyContent: "center",
        alignSelf: "center",
    }
});