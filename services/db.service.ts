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

export function getRandomMenuByPhase(phase: CyclePhase): { lunch: Menu, dinner: Menu } {
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