
import React from 'react';

interface TestContentProps {
    answers: Record<number, any>;
    saveAnswer: (id: number, value: any) => void;
    currentPart: number;
}

export const Test2Content: React.FC<TestContentProps> = ({ answers, saveAnswer, currentPart }) => {
    const saveMultipleAnswer = (questionId: number, option: string, checked: boolean) => {
        const currentAnswers = answers[questionId] || [];
        let newAnswers = [...currentAnswers];
        if (checked) {
            if (!newAnswers.includes(option)) newAnswers.push(option);
        } else {
            newAnswers = newAnswers.filter(item => item !== option);
        }
        saveAnswer(questionId, newAnswers);
    };

    return (
        <div className="prose prose-slate max-w-none">
            {currentPart === 0 && (
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 1–10</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-black uppercase tracking-tighter">Asia-Pacific Tours Activity Holidays</h3>

                        <div className="overflow-x-auto rounded-[32px] border border-gray-100 shadow-sm bg-white">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-gray-50 border-b border-gray-100 font-black uppercase text-secondary tracking-widest text-sm">
                                        <th className="p-8">Tour</th>
                                        <th className="p-8">Details</th>
                                        <th className="p-8">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50">
                                    <tr>
                                        <td className="p-8 font-bold text-gray-600">VIETNAM (Example)</td>
                                        <td className="p-8 space-y-4">
                                            <div className="text-gray-500">• a cookery course at a 5-star hotel</div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• either</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(1, e.target.value)}
                                                    value={answers[1] || ''}
                                                    placeholder="1"
                                                />
                                                <span className="font-bold text-gray-700">lessons</span>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">or a one-day trek in the</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(2, e.target.value)}
                                                    value={answers[2] || ''}
                                                    placeholder="2"
                                                />
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• attend a</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(3, e.target.value)}
                                                    value={answers[3] || ''}
                                                    placeholder="3"
                                                />
                                                <span className="font-bold text-gray-700">performance</span>
                                            </div>
                                        </td>
                                        <td className="p-8">
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-700">£</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(4, e.target.value)}
                                                    value={answers[4] || ''}
                                                    placeholder="4"
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="bg-gray-50/30">
                                        <td className="p-8 font-bold text-gray-600">Hong Kong</td>
                                        <td className="p-8 space-y-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• go to the hills to look at</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(5, e.target.value)}
                                                    value={answers[5] || ''}
                                                    placeholder="5"
                                                />
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">in a country park, followed by</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(6, e.target.value)}
                                                    value={answers[6] || ''}
                                                    placeholder="6"
                                                />
                                            </div>
                                            <div className="text-gray-500">in a monastery</div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• visit a museum of traditional</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(7, e.target.value)}
                                                    value={answers[7] || ''}
                                                    placeholder="7"
                                                />
                                            </div>
                                        </td>
                                        <td className="p-8 font-black text-secondary">£1,320</td>
                                    </tr>
                                    <tr>
                                        <td className="p-8">
                                            <input
                                                className="bg-primary/5 border-2 border-primary/20 w-40 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                onChange={(e) => saveAnswer(8, e.target.value)}
                                                value={answers[8] || ''}
                                                placeholder="8"
                                            />
                                        </td>
                                        <td className="p-8 space-y-4">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• visit a museum of traditional</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(9, e.target.value)}
                                                    value={answers[9] || ''}
                                                    placeholder="9"
                                                />
                                            </div>
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="font-bold text-gray-700">• tour of a big</span>
                                                <input
                                                    className="bg-primary/5 border-2 border-primary/20 w-32 px-3 py-1.5 rounded-xl text-primary font-black uppercase"
                                                    onChange={(e) => saveAnswer(10, e.target.value)}
                                                    value={answers[10] || ''}
                                                    placeholder="10"
                                                />
                                                <span className="font-bold text-gray-700">market</span>
                                            </div>
                                        </td>
                                        <td className="p-8 font-black text-secondary">£1,800</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 1 && (
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 11–20</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Choose TWO letters for questions 11-14. Label the plan for questions 15-20.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-8 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                            <div className="space-y-4">
                                <h3 className="text-xl font-black text-secondary uppercase">Questions 11 and 12</h3>
                                <p className="font-bold text-gray-500">Which TWO items will participants on the dancing course receive when they check in?</p>
                                <div className="space-y-3">
                                    {['A a class list', 'B a face towel', 'C a name tag', 'D a shoe bag', 'E a water bottle'].map(opt => {
                                        const letter = opt[0];
                                        return (
                                            <label key={letter} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${(answers[11] || []).includes(letter) ? 'border-primary bg-primary/5' : 'border-gray-50 hover:border-gray-100'}`}>
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 accent-primary"
                                                    checked={(answers[11] || []).includes(letter)}
                                                    onChange={(e) => saveMultipleAnswer(11, letter, e.target.checked)}
                                                />
                                                <span className="font-bold text-gray-700">{opt}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8 bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm">
                            <div className="space-y-4">
                                <h3 className="text-xl font-black text-secondary uppercase">Questions 13 and 14</h3>
                                <p className="font-bold text-gray-500">Which TWO activities will take place on the first afternoon and evening?</p>
                                <div className="space-y-3">
                                    {['A costume making', 'B a musical show', 'C an informal dance', 'D a talk on dance history', 'E dancing tests'].map(opt => {
                                        const letter = opt[0];
                                        return (
                                            <label key={letter} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${(answers[13] || []).includes(letter) ? 'border-primary bg-primary/5' : 'border-gray-50 hover:border-gray-100'}`}>
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 accent-primary"
                                                    checked={(answers[13] || []).includes(letter)}
                                                    onChange={(e) => saveMultipleAnswer(13, letter, e.target.checked)}
                                                />
                                                <span className="font-bold text-gray-700">{opt}</span>
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-12 space-y-8">
                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-8">
                            <h3 className="text-2xl font-black uppercase text-secondary tracking-tighter">Questions 15–20: Community Centre Plan</h3>
                            <div className="relative group">
                                <img
                                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mGvYNMwyBB5eNoOjT5bPCyKHJlFYeT.png"
                                    className="w-full rounded-[32px] border border-gray-100 shadow-2xl"
                                    alt="Community Centre map"
                                />
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-[32px]" />
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                                {[
                                    { id: 15, label: 'the bathrooms' },
                                    { id: 16, label: 'the bunkrooms' },
                                    { id: 17, label: 'the games room' },
                                    { id: 18, label: 'the hall' },
                                    { id: 19, label: 'the medical room' },
                                    { id: 20, label: 'the reception office' }
                                ].map(q => (
                                    <div key={q.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                        <span className="font-bold text-gray-600 w-8">{q.id}.</span>
                                        <span className="font-bold text-gray-800 flex-1">{q.label}</span>
                                        <input
                                            className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary uppercase focus:border-primary outline-none"
                                            onChange={(e) => saveAnswer(q.id, e.target.value.toUpperCase())}
                                            value={answers[q.id] || ''}
                                            maxLength={1}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 2 && (
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 21–30</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Choose the correct letter for 21-25. Complete the flow-chart for 26-30.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h3 className="text-2xl font-black uppercase tracking-tighter">Innovative Environmental Solutions</h3>

                        <div className="space-y-6">
                            {[
                                {
                                    id: 21,
                                    q: '21. According to Dominic, what is surprising about the supermarket garden project?',
                                    opts: ['A At first, it was unpopular with customers.', 'B It has gained a lot of interest from chefs.', 'C Many shops are using the idea now.']
                                },
                                {
                                    id: 22,
                                    q: '22. What do the speakers identify as a possible problem with the solar carpark idea?',
                                    opts: ['A The technology might not be well developed.', 'B The cost could be too high.', 'C There may not be enough room.']
                                },
                                {
                                    id: 23,
                                    q: '23. According to the speakers, the unexpected benefit of wildlife crossings is that',
                                    opts: ['A they are much cheaper to build than was predicted.', 'B animal populations become more genetically diverse.', 'C they greatly reduce the number of car accidents.']
                                },
                                {
                                    id: 24,
                                    q: '24. What is impressive about the 100% renewable energy campaign?',
                                    opts: ['A how many countries the movement has spread to', 'B how fast cities can convert to 100% renewable energy', 'C how much help is given to participating communities']
                                },
                                {
                                    id: 25,
                                    q: '25. What positive point about "carrot-mobbing" does Ella describe?',
                                    opts: ['A It helps businesses undertake eco-friendly projects.', 'B It encourages people to buy sustainable products.', 'C It creates a sense of community in the people who participate.']
                                }
                            ].map(q => (
                                <div key={q.id} className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-4">
                                    <p className="text-xl font-black text-secondary leading-tight">{q.q}</p>
                                    <div className="grid gap-3">
                                        {q.opts.map(opt => {
                                            const letter = opt[0];
                                            return (
                                                <label key={letter} className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all cursor-pointer ${answers[q.id] === letter ? 'border-primary bg-primary/5' : 'border-gray-50 hover:border-gray-100'}`}>
                                                    <input
                                                        type="radio"
                                                        name={`q${q.id}`}
                                                        className="w-5 h-5 accent-primary"
                                                        checked={answers[q.id] === letter}
                                                        onChange={() => saveAnswer(q.id, letter)}
                                                    />
                                                    <span className="font-bold text-gray-700">{opt}</span>
                                                </label>
                                            );
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pt-12 space-y-8">
                        <div className="bg-primary/5 p-10 rounded-[40px] border border-primary/10 space-y-8">
                            <h3 className="text-2xl font-black uppercase text-primary tracking-tighter">Questions 26–30: Aerial Reforestation Process</h3>

                            <div className="bg-white p-8 rounded-3xl border border-primary/10 shadow-sm space-y-4 mb-8">
                                <h4 className="font-black text-secondary tracking-widest uppercase text-sm">Options</h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {['A land', 'B plants', 'C seeds', 'D nutrients', 'E compost', 'F insecticide', 'G clay', 'H light'].map(opt => (
                                        <div key={opt} className="bg-gray-50 px-4 py-2 rounded-xl text-sm font-black text-gray-600 border border-gray-100">{opt}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-secondary">
                                    <span>Choose a reforestation area with plenty of</span>
                                    <input
                                        className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary focus:border-primary outline-none"
                                        onChange={(e) => saveAnswer(26, e.target.value.toUpperCase())}
                                        value={answers[26] || ''}
                                        maxLength={1}
                                    />
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-secondary">
                                    <span>Take a lot of suitable</span>
                                    <input
                                        className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary focus:border-primary outline-none"
                                        onChange={(e) => saveAnswer(27, e.target.value.toUpperCase())}
                                        value={answers[27] || ''}
                                        maxLength={1}
                                    />
                                    <span>, appropriate to your purposes.</span>
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-secondary">
                                    <span>Mix with long-lasting</span>
                                    <input
                                        className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary focus:border-primary outline-none"
                                        onChange={(e) => saveAnswer(28, e.target.value.toUpperCase())}
                                        value={answers[28] || ''}
                                        maxLength={1}
                                    />
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-secondary">
                                    <span>Press into lumps of</span>
                                    <input
                                        className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary focus:border-primary outline-none"
                                        onChange={(e) => saveAnswer(29, e.target.value.toUpperCase())}
                                        value={answers[29] || ''}
                                        maxLength={1}
                                    />
                                </div>

                                <div className="flex flex-wrap items-center gap-3 text-lg font-bold text-secondary">
                                    <span>Apply an outer coating, e.g. paper, to provide appropriate levels of</span>
                                    <input
                                        className="w-16 h-12 bg-white border-2 border-primary/20 rounded-xl text-center font-black text-primary focus:border-primary outline-none"
                                        onChange={(e) => saveAnswer(30, e.target.value.toUpperCase())}
                                        value={answers[30] || ''}
                                        maxLength={1}
                                    />
                                    <span>and protection.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 3 && (
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 31–40</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Complete the notes below. Write ONE WORD ONLY for each answer.
                        </p>
                    </div>

                    <div className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm space-y-12">
                        <h3 className="text-3xl font-black uppercase text-secondary tracking-tighter">Canadian maple syrup</h3>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Description and History</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>The production of sap needs a climate where night and day temperatures are very</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(31, e.target.value)}
                                            value={answers[31] || ''}
                                            placeholder="31"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Folk stories claim that maple syrup was first used to cook</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(32, e.target.value)}
                                            value={answers[32] || ''}
                                            placeholder="32"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Sap collection in spring developed into a First Nations</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(33, e.target.value)}
                                            value={answers[33] || ''}
                                            placeholder="33"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Processing and Uses</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Using hot stones to produce</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(34, e.target.value)}
                                            value={answers[34] || ''}
                                            placeholder="34"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Leaving sap outside at night and removing the layer of</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(35, e.target.value)}
                                            value={answers[35] || ''}
                                            placeholder="35"
                                        />
                                        <span>on top.</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>European settlers put the syrup in various types of</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(36, e.target.value)}
                                            value={answers[36] || ''}
                                            placeholder="36"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Use declined after 1880, when the</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(37, e.target.value)}
                                            value={answers[37] || ''}
                                            placeholder="37"
                                        />
                                        <span>on Caribbean sugar was removed.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Threats and Optimism</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Harvests may be affected by storms and destructive</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(38, e.target.value)}
                                            value={answers[38] || ''}
                                            placeholder="38"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>Expensive and faces considerable</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(39, e.target.value)}
                                            value={answers[39] || ''}
                                            placeholder="39"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span className="text-gray-400">•</span>
                                        <span>It is quite</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl text-primary font-black uppercase outline-none focus:border-primary"
                                            onChange={(e) => saveAnswer(40, e.target.value)}
                                            value={answers[40] || ''}
                                            placeholder="40"
                                        />
                                        <span>compared with other sweeteners.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
