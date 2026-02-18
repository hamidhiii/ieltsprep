export const readingTests = [
    {
        id: 'r1',
        title: 'The Evolution of Computing',
        duration: '60 mins',
        questions: 40,
        type: 'Reading',
        difficulty: 'Medium',
        sections: [
            {
                title: 'Passage 1: From Abacus to AI',
                content: 'The history of computing is a fascinating journey that spans millennia...',
                questions: '1. Why did the abacus remain popular? 2. How did the Turing machine change logic?'
            }
        ]
    },
    {
        id: 'r2',
        title: 'Marine Biodiversity in the Pacific',
        duration: '60 mins',
        questions: 40,
        type: 'Reading',
        difficulty: 'Hard',
        sections: [
            {
                title: 'Passage 1: The Great Barrier Reef',
                content: 'Coral reefs are some of the most diverse ecosystems on Earth...',
                questions: '1. What are the main threats to the reef? 2. Describe the impact of rising temperatures.'
            }
        ]
    }
];

export const listeningTests = [
    {
        id: 'l1',
        title: 'University Campus Tour',
        duration: '30 mins',
        questions: 40,
        type: 'Listening',
        difficulty: 'Easy',
        audioTranscript: 'Welcome to the Central University campus tour. On your left is the historic library...'
    }
];

export const writingTests = [
    {
        id: 'w1',
        title: 'Economic Trends Analysis',
        type: 'Writing',
        task1: 'The graph below shows global oil prices from 2010 to 2024. Summarize the information.',
        task2: 'Technology has made us more lonely. To what extent do you agree or disagree?'
    }
];

export const fullMockTests = [
    {
        id: 'fm1',
        title: 'IELTS Academic Full Mock #1',
        duration: '180 mins',
        questions: 82,
        type: 'Full Mock',
        difficulty: 'Realistic',
        sections: {
            listening: listeningTests[0],
            reading: readingTests[0],
            writing: writingTests[0]
        }
    },
    {
        id: 'fm2',
        title: 'IELTS General Training Full Mock #1',
        duration: '180 mins',
        questions: 82,
        type: 'Full Mock',
        difficulty: 'Realistic',
        sections: {
            listening: listeningTests[0],
            reading: readingTests[1],
            writing: writingTests[0]
        }
    }
];
