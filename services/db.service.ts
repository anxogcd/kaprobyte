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

export function getRandomMenu(): { lunch: Menu, dinner: Menu } {
    const randomIndexLunchs = Math.floor(Math.random() * lunchs.length);
    const randomIndexDinners = Math.floor(Math.random() * dinners.length);
    return {
        lunch: {
            title: lunchs[randomIndexLunchs].title,
            ingredients: lunchs[randomIndexLunchs].ingredients,
            cycle_phase: lunchs[randomIndexLunchs].cycle_phase as CyclePhase,
            type: 'lunch',
        },
        dinner: {
            title: dinners[randomIndexDinners].title,
            ingredients: dinners[randomIndexDinners].ingredients,
            cycle_phase: dinners[randomIndexDinners].cycle_phase as CyclePhase,
            type: 'dinner',
        },
    };
}

export function getMenuByPhase(phase: string): { lunch: Menu, dinner: Menu } {
    const filteredLunchs = lunchs.filter((menu) => menu.cycle_phase === phase);
    const filteredDinners = dinners.filter((menu) => menu.cycle_phase === phase);

    const randomIndexLunchs = Math.floor(Math.random() * filteredLunchs.length);
    const randomIndexDinners = Math.floor(Math.random() * filteredDinners.length);

    return {
        lunch: {
            title: lunchs[randomIndexLunchs].title,
            ingredients: lunchs[randomIndexLunchs].ingredients,
            cycle_phase: lunchs[randomIndexLunchs].cycle_phase as CyclePhase,
            type: 'lunch',
        },
        dinner: {
            title: dinners[randomIndexDinners].title,
            ingredients: dinners[randomIndexDinners].ingredients,
            cycle_phase: dinners[randomIndexDinners].cycle_phase as CyclePhase,
            type: 'dinner',
        },
    };
}