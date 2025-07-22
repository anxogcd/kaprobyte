import { dinners, lunchs } from '../assets/menus/menus_phase_gl.json';

export enum CyclePhase {
    Menstrual = 'menstrual',
    Follicular = 'follicular',
    Ovulation = 'ovulation',
    Luteal = 'luteal',
    None = 'none',
}

export interface Menu {
    title: string;
    ingredients: string[];
    cycle_phase: CyclePhase;
    type: 'lunch' | 'dinner';
}

export const getRandomMenuByPhase = (phase: CyclePhase): { lunch: Menu, dinner: Menu } => {
    let filteredLunchs;
    let filteredDinners;
    if (phase === CyclePhase.None) {
        filteredLunchs = lunchs;
        filteredDinners = dinners;
    } else {
        filteredLunchs = lunchs.filter((menu) => menu.cycle_phase === phase);
        filteredDinners = dinners.filter((menu) => menu.cycle_phase === phase);

    }
    const randomIndexLunchs = Math.floor(Math.random() * filteredLunchs.length);
    const randomIndexDinners = Math.floor(Math.random() * filteredDinners.length);

    const randomLunch = filteredLunchs[randomIndexLunchs];
    const randomDinner = filteredDinners[randomIndexDinners];

    return {
        lunch: {
            ...randomLunch as Menu,
        },
        dinner: {
            ...randomDinner as Menu
        }
    };
}

type DaysByPhase = {
    name: CyclePhase;
    days: Set<number>;
}[]

export const get5RandomMenusByDay = (dayOfCycle?: number): { lunch: Menu, dinner: Menu }[] => {
    const menus: { lunch: Menu, dinner: Menu }[] = [];
    const usedLunchTitles = new Set<string>();
    const usedDinnerTitles = new Set<string>();

    if (dayOfCycle) {
        const days = Array.from({ length: 5 }, (_, i) => ((dayOfCycle - 1 + i) % 28) + 1);
        const phases: DaysByPhase = [
            { name: CyclePhase.Menstrual, days: new Set([1, 2, 3, 4, 5]) },
            { name: CyclePhase.Follicular, days: new Set([6, 7, 8, 9, 10, 11, 12, 13]) },
            { name: CyclePhase.Ovulation, days: new Set([14, 15, 16]) },
            { name: CyclePhase.Luteal, days: new Set([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]) }
        ];
        for (const day of days) {
            const phase = phases.find(p => p.days.has(day))?.name ?? CyclePhase.None;

            // Filtra menús que no se hayan usado
            const availableLunchs = lunchs.filter(menu => menu.cycle_phase === phase && !usedLunchTitles.has(menu.title));
            const availableDinners = dinners.filter(menu => menu.cycle_phase === phase && !usedDinnerTitles.has(menu.title));

            // Si no hay suficientes menús únicos, vuelve a usar todos los disponibles
            const lunchPool = availableLunchs.length > 0 ? availableLunchs : lunchs.filter(menu => menu.cycle_phase === phase);
            const dinnerPool = availableDinners.length > 0 ? availableDinners : dinners.filter(menu => menu.cycle_phase === phase);

            const randomLunch = lunchPool[Math.floor(Math.random() * lunchPool.length)];
            const randomDinner = dinnerPool[Math.floor(Math.random() * dinnerPool.length)];

            usedLunchTitles.add(randomLunch.title);
            usedDinnerTitles.add(randomDinner.title);

            menus.push({
                lunch: { ...randomLunch } as Menu,
                dinner: { ...randomDinner } as Menu
            });
        }
    } else {
        for (let i = 0; i < 5; i++) {
            const availableLunchs = lunchs.filter(menu => !usedLunchTitles.has(menu.title));
            const availableDinners = dinners.filter(menu => !usedDinnerTitles.has(menu.title));

            const lunchPool = availableLunchs.length > 0 ? availableLunchs : lunchs;
            const dinnerPool = availableDinners.length > 0 ? availableDinners : dinners;

            const randomLunch = lunchPool[Math.floor(Math.random() * lunchPool.length)];
            const randomDinner = dinnerPool[Math.floor(Math.random() * dinnerPool.length)];

            usedLunchTitles.add(randomLunch.title);
            usedDinnerTitles.add(randomDinner.title);

            menus.push({
                lunch: { ...randomLunch } as Menu,
                dinner: { ...randomDinner } as Menu,
            });
        }
    }
    return menus;
}

export const getAllIngredients = ({ menus }: { menus: { lunch: Menu, dinner: Menu }[] }): [string, number][] => {
    const ingredientCount: { [key: string]: number } = {};

    menus.forEach(menu => {
        menu.lunch.ingredients.forEach(ingredient => {
            ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
        });
        menu.dinner.ingredients.forEach(ingredient => {
            ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
        });
    });

    return Object.entries(ingredientCount).sort((a, b) => b[1] - a[1]);
}