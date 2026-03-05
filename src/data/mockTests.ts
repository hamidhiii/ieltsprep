export const readingTests = [
    {
        id: 'r1',
        title: 'The Clipper Races: Ship Competition',
        duration: '60 mins',
        questions: 40,
        type: 'Reading',
        difficulty: 'Medium',
        sections: [
            {
                title: 'Passage 1: The Clipper Races',
                content: 'The history of clipper ships...',
                questions: '1-13'
            }
        ]
    },
    {
        id: 'r2',
        title: 'CDI IELTS Reading Test Simulation',
        duration: '60 mins',
        questions: 40,
        type: 'Reading',
        difficulty: 'Hard',
        sections: [
            {
                title: 'Passage 1: Orientation of birds',
                content: 'How birds find their way...',
                questions: '1-13'
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
    },
    {
        id: 'l2',
        title: 'CDI IELTS Listening Test Simulation',
        duration: '30 mins',
        questions: 40,
        type: 'Listening',
        difficulty: 'Medium',
        audioTranscript: 'Asia-Pacific Tours Activity Holidays...'
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
