
export interface ReadingTest {
    id: string;
    title: string;
    correctAnswers: Record<string, string | string[]>;
}

export const READING_TESTS: Record<string, ReadingTest> = {
    'r1': {
        id: 'r1',
        title: 'Academic Reading Test 1',
        correctAnswers: {
            // Passage 1 – Clipper Races
            q1: "FALSE", q2: "TRUE", q3: "TRUE", q4: "NOT GIVEN", q5: "FALSE", q6: "FALSE",
            q7: "sails", q8: "storms", q9: "Challenger", q10: "ports", q11: "paperwork", q12: "tugs", q13: "money",

            // Passage 2 – Orientation of birds
            q14: "visual memory", q15: "migration direction", q16: "destination", q17: "landmarks", q18: "albatross",
            q19: "C", q20: "B", q21: "C", q22: "G", q23: "C", q24: "F", q25: "A", q26: "D",

            // Passage 3 – Accidents in business
            q27: "YES", q28: "NO", q29: "NO", q30: "YES", q31: "NOT GIVEN",
            q32: "F", q33: "G", q34: "C", q35: "A",
            q36: "B", q37: "D", q38: "A", q39: "C", q40: "B"
        }
    },
    'r2': {
        id: 'r2',
        title: 'Academic Reading Test 2',
        correctAnswers: {
            // Passage 1 – The Pyramid of Cestius
            q1: "FALSE", q2: "NOT GIVEN", q3: "TRUE", q4: "FALSE", q5: "NOT GIVEN", q6: "TRUE", q7: "FALSE",
            q8: "brick", q9: "shape", q10: "countryside", q11: "statues", q12: "tunnel", q13: "pollution",

            // Passage 2 – The conquest of malaria in Italy
            q14: "insects", q15: "miasma", q16: "hereditary", q17: "life expectancy",
            q18: "NOT GIVEN", q19: "TRUE", q20: "FALSE",
            q21: "E", q22: "C", q23: "F", q24: "H", q25: "B", q26: "D",

            // Passage 3 – Images and Places
            q27: "v", q28: "vi", q29: "i", q30: "iii", q31: "vii", q32: "ii",
            q33: "D", q34: "E", q35: "B", q36: "C", q37: "G", q38: "A",
            q39: "B", q40: "D"
        }
    }
};
