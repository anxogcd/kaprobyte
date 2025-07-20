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

const getDaysOfEachPhaseByDay = (dayOfCycle: number): { phase: CyclePhase, days: number }[] => {
    const phases: DaysByPhase = [
        { name: CyclePhase.Menstrual, days: new Set([1, 2, 3, 4, 5]) },
        { name: CyclePhase.Follicular, days: new Set([6, 7, 8, 9, 10, 11, 12, 13]) },
        { name: CyclePhase.Ovulation, days: new Set([14, 15, 16]) },
        { name: CyclePhase.Luteal, days: new Set([17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]) }
    ];


    const actualCycle = new Set<number>(
        Array.from({ length: 5 }, (_, i) => dayOfCycle + i)
    );

    const result = phases.map(phase => {
        const days = [...actualCycle].filter(day => phase.days.has(day));
        return {
            phase: phase.name,
            daysIntersection: days.length,
            days: days,
        };
    });

    return result.filter(item => item.daysIntersection > 0).map(item => ({
        phase: item.phase,
        days: item.daysIntersection,
    }));
}

export const get5RandomMenusByDay = (dayOfCycle?: number): { lunch: Menu, dinner: Menu }[] => {
    const menus: { lunch: Menu, dinner: Menu }[] = [];
    if (dayOfCycle) {
        const daysByPhase = getDaysOfEachPhaseByDay(dayOfCycle);
        for (const day of daysByPhase) {
            const randomMenu = getRandomMenuByPhase(day.phase);
            menus.push(randomMenu);
        }
    }
    else {
        for (let i = 0; i < 5; i++) {
            const randomMenu = getRandomMenuByPhase(CyclePhase.None);
            menus.push(randomMenu);
        }
    }

    return menus;
}