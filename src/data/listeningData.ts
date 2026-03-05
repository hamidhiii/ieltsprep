
import P1Audio from '../assets/P1.mp3';
import P2Audio from '../assets/P2.mp3';
import P3Audio from '../assets/P3.mp3';
import P4Audio from '../assets/P4.mp3';

// Test 2 Audio
import T2P1 from '../assets/1(1)(1).mp3';
import T2P2 from '../assets/2(1)(1).mp3';
import T2P3 from '../assets/3(1)(1).mp3';
import T2P4 from '../assets/4(1)(1).mp3';

export interface ListeningQuestion {
    id: number;
    type: 'input' | 'multiple-choice' | 'multi-select' | 'map' | 'flow-chart';
    label?: string;
    options?: string[]; // For multiple-choice or multi-select
    placeholder?: string;
}

export interface ListeningPart {
    id: number;
    title: string;
    instructions: string;
    description: string;
    audio: string;
    // We can either pass a component or a data-driven structure.
    // Given the complexity of IELTS layouts, maybe a custom renderer or 
    // simply splitting the component is better.
    // For now, let's keep the answers and basic metadata here.
}

export interface ListeningTest {
    id: string;
    title: string;
    correctAnswers: Record<number, any>;
    audio?: string[]; // Array of 4 audio file paths/imports
}

export const LISTENING_TESTS: Record<string, ListeningTest> = {
    'l1': {
        id: 'l1',
        title: 'Listening Test 1',
        audio: [P1Audio, P2Audio, P3Audio, P4Audio],
        correctAnswers: {
            1: "RUDDICK",
            2: "Garden Avenue",
            3: "home",
            4: "31st July",
            5: "104",
            6: "handle",
            7: "repair",
            8: "dust bag",
            9: "180",
            10: "silver",
            11: "A",
            12: "A",
            13: "B",
            14: "C",
            15: "F",
            16: "C",
            17: "D",
            18: "E",
            19: "H",
            20: "A",
            21: ["C", "D"],
            22: ["D", "C"],
            23: ["B", "A"],
            24: ["A", "B"],
            25: "D",
            26: "C",
            27: "G",
            28: "B",
            29: "H",
            30: "E",
            31: "confusion",
            32: "eyes",
            33: "dots",
            34: "arrangement",
            35: "pictures",
            36: "matching",
            37: "fight",
            38: "language",
            39: "farming",
            40: "toes"
        }
    },
    'l2': {
        id: 'l2',
        title: 'Listening Test 2',
        audio: [T2P1, T2P2, T2P3, T2P4],
        correctAnswers: {
            1: "diving",
            2: "jungle",
            3: "dance",
            4: "1,450",
            5: "birds",
            6: "dinner",
            7: "electronics",
            8: "Japan",
            9: "costume",
            10: "fish",
            11: ["A", "D"],
            12: ["A", "D"],
            13: ["C", "D"],
            14: ["C", "D"],
            15: "C",
            16: "E",
            17: "I",
            18: "F",
            19: "D",
            20: "B",
            21: "C",
            22: "C",
            23: "B",
            24: "C",
            25: "A",
            26: "H",
            27: "C",
            28: "E",
            29: "G",
            30: "D",
            31: "different",
            32: "meat",
            33: "tradition",
            34: "steam",
            35: "ice",
            36: "medicine",
            37: "tax",
            38: "insects",
            39: "competition",
            40: "healthy"
        }
    }
};
