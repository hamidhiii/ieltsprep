
import React from 'react';
import { Columns } from 'lucide-react';
import PassageView from './PassageView';

interface TestContentProps {
    currentPassage: number;
    answers: Record<string, any>;
    handleAnswer: (qId: string, value: any) => void;
    splitWidth: number;
    startResizing: (e: React.MouseEvent) => void;
}

const Test2Content: React.FC<TestContentProps> = ({
    currentPassage,
    answers,
    handleAnswer,
    splitWidth,
    startResizing
}) => {
    return (
        <main className="flex-1 flex overflow-hidden relative">
            <PassageView id="r2" currentPassage={currentPassage} splitWidth={splitWidth} />

            {/* Resizer */}
            <div
                className="w-1.5 bg-gray-100 cursor-col-resize hover:bg-primary/50 transition-colors relative"
                onMouseDown={startResizing}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                    <Columns className="w-3 h-3 text-gray-400" />
                </div>
            </div>

            {/* Questions Column */}
            <div
                className="overflow-y-auto px-8 py-12 bg-white"
                style={{ width: `${100 - splitWidth}%` }}
            >
                <div className="max-w-2xl mx-auto space-y-12">
                    {currentPassage === 0 && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                                    Questions 1–7
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">TRUE / FALSE / NOT GIVEN</p>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { id: 1, text: "The Pyramid of Cestius has always been one of Rome's most popular tourist attractions." },
                                        { id: 2, text: "The construction of the Pyramid was completed before Cestius' death." },
                                        { id: 3, text: "In the Middle Ages, people thought an original founder of Rome was buried in the Pyramid of Cestius." },
                                        { id: 4, text: "Today the height of the Pyramid is something that tourists and residents immediately notice." },
                                        { id: 5, text: "Japanese businessman Yuzo Yagi was an admirer of both Italian and Egyptian architecture." },
                                        { id: 6, text: "The restoration of the Pyramid of Cestius, which was funded by Yuzo Yagi, finished earlier than expected." },
                                        { id: 7, text: "Most of the original frescoes inside Cestius' tomb have survived to this day." }
                                    ].map(q => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                            <div className="flex gap-4">
                                                {["TRUE", "FALSE", "NOT GIVEN"].map(opt => (
                                                    <label key={opt} className={`flex-1 cursor-pointer group`}>
                                                        <input
                                                            type="radio"
                                                            name={`q${q.id}`}
                                                            value={opt}
                                                            checked={answers[`q${q.id}`] === opt}
                                                            onChange={() => handleAnswer(`q${q.id}`, opt)}
                                                            className="hidden"
                                                        />
                                                        <div className={`py-3 px-4 rounded-xl text-center font-bold text-xs uppercase tracking-widest border transition-all ${answers[`q${q.id}`] === opt ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white border-gray-100 text-gray-400 hover:border-primary/30 group-hover:text-primary'}`}>
                                                            {opt}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                                    Questions 8–13
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">ONE WORD ONLY</p>
                                </div>
                                <div className="space-y-8 text-gray-600 bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm">
                                    <div className="space-y-4">
                                        <h4 className="font-black text-secondary uppercase text-sm tracking-widest text-center mb-6">History of the Pyramid of Cestius</h4>
                                        <p className="font-bold text-secondary uppercase text-xs tracking-widest border-b border-gray-100 pb-2">Construction of Cestius' pyramid</p>
                                        <ul className="space-y-6 list-disc pl-5">
                                            <li className="leading-loose">
                                                it was made from {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q8 || ''}
                                                    onChange={(e) => handleAnswer('q8', e.target.value)}
                                                /> (8), marble and cement
                                            </li>
                                            <li className="leading-loose">
                                                its {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q9 || ''}
                                                    onChange={(e) => handleAnswer('q9', e.target.value)}
                                                /> (9) is different to the pyramids found in Egypt
                                            </li>
                                            <li className="leading-loose">
                                                it was originally built in the {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q10 || ''}
                                                    onChange={(e) => handleAnswer('q10', e.target.value)}
                                                /> (10) as building tombs in the city was forbidden
                                            </li>
                                        </ul>
                                        <p className="font-bold text-secondary uppercase text-xs tracking-widest border-b border-gray-100 pb-2 pt-4">Restoration of Cestius' pyramid in the 1660s</p>
                                        <ul className="space-y-6 list-disc pl-5">
                                            <li className="leading-loose">
                                                in the 1660s, some broken {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q11 || ''}
                                                    onChange={(e) => handleAnswer('q11', e.target.value)}
                                                /> (11) were found next to it
                                            </li>
                                            <li className="leading-loose">
                                                the {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q12 || ''}
                                                    onChange={(e) => handleAnswer('q12', e.target.value)}
                                                /> (12) inside the tomb suggests that robbers had been there
                                            </li>
                                        </ul>
                                        <p className="font-bold text-secondary uppercase text-xs tracking-widest border-b border-gray-100 pb-2 pt-4">Restoration of Cestius' pyramid today</p>
                                        <ul className="space-y-6 list-disc pl-5">
                                            <li className="leading-loose">
                                                climbers are helping to get rid of signs of {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q13 || ''}
                                                    onChange={(e) => handleAnswer('q13', e.target.value)}
                                                /> (13)
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    )}

                    {currentPassage === 1 && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                                    Questions 14–17
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8 leading-relaxed text-gray-600">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-4">Summary completion</p>
                                    <h4 className="font-black text-secondary uppercase text-sm tracking-widest mb-4">Malaria in 19th-century Italy</h4>
                                    <p className="mb-4">Up until the late nineteenth century, experts failed to make the connection between malaria and {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-48 font-bold text-primary text-center bg-transparent"
                                            value={answers.q14 || ''}
                                            onChange={(e) => handleAnswer('q14', e.target.value)}
                                        /> (14). The most popular belief at the time was the {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-48 font-bold text-primary text-center bg-transparent"
                                            value={answers.q15 || ''}
                                            onChange={(e) => handleAnswer('q15', e.target.value)}
                                        /> (15) theory, which upheld the idea that diseases were carried by unclean air. Another common idea was that malaria was a {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-48 font-bold text-primary text-center bg-transparent"
                                            value={answers.q16 || ''}
                                            onChange={(e) => handleAnswer('q16', e.target.value)}
                                        /> (16) disease, and as a result people from certain parts of the country were often held responsible for the spread of epidemics.</p>
                                    <p>Malaria was particularly widespread in rural regions, where {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-48 font-bold text-primary text-center bg-transparent"
                                            value={answers.q17 || ''}
                                            onChange={(e) => handleAnswer('q17', e.target.value)}
                                        /> (17) could be extremely short.</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                                    Questions 18–20
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { id: 18, text: "The volunteers in Giovanni Battista Grassi's research came from all parts of Italy." },
                                        { id: 19, text: "Experiments in Italy proved that it was possible to remain healthy despite being in malarial zones." },
                                        { id: 20, text: "In the early twentieth century, quinine was successfully administered to all inhabitants of vulnerable regions." }
                                    ].map(q => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                            <div className="flex gap-4">
                                                {["TRUE", "FALSE", "NOT GIVEN"].map(opt => (
                                                    <label key={opt} className={`flex-1 cursor-pointer group`}>
                                                        <input
                                                            type="radio"
                                                            name={`q${q.id}`}
                                                            value={opt}
                                                            checked={answers[`q${q.id}`] === opt}
                                                            onChange={() => handleAnswer(`q${q.id}`, opt)}
                                                            className="hidden"
                                                        />
                                                        <div className={`py-3 px-4 rounded-xl text-center font-bold text-xs uppercase tracking-widest border transition-all ${answers[`q${q.id}`] === opt ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white border-gray-100 text-gray-400 hover:border-primary/30 group-hover:text-primary'}`}>
                                                            {opt}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                                    Questions 21–26
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { id: 21, text: "a figure showing the dramatic results of an anti-malarial drug programme" },
                                        { id: 22, text: "an important discovery about how malaria is spread" },
                                        { id: 23, text: "mention of an expert's decision not to halt the spread of the disease" },
                                        { id: 24, text: "the significance of the malaria story for today's readers" },
                                        { id: 25, text: "examples of false assumptions which held back scientific understanding of malaria" },
                                        { id: 26, text: "reference to legislation to support the fight against malaria" }
                                    ].map(q => (
                                        <div key={q.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                            <p className="font-bold text-secondary text-sm">{q.id}. {q.text}</p>
                                            <select
                                                className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold text-primary outline-none"
                                                value={answers[`q${q.id}`] || ''}
                                                onChange={(e) => handleAnswer(`q${q.id}`, e.target.value)}
                                            >
                                                <option value="">Select</option>
                                                {["A", "B", "C", "D", "E", "F", "G", "H"].map(p => (
                                                    <option key={p} value={p}>{p}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}

                    {currentPassage === 2 && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-right-4 duration-500">
                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">1</span>
                                    Questions 27–32
                                </h3>
                                <div className="space-y-6">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        i The relevance of time to the sense of belonging to a place | ii Making sense of photographic studies | iii The advantages of photography in sense-of-place research | iv Reasons for weak attachments | v A new approach to sense-of-place research | vi Defining the significance of places | vii Important considerations when using VEP | viii Local residents' feelings towards visitors
                                    </p>
                                    {[
                                        { id: 27, text: "Section A" },
                                        { id: 28, text: "Section B" },
                                        { id: 29, text: "Section C" },
                                        { id: 30, text: "Section D" },
                                        { id: 31, text: "Section E" },
                                        { id: 32, text: "Section F" }
                                    ].map(q => (
                                        <div key={q.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                            <select
                                                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold text-primary outline-none"
                                                value={answers[`q${q.id}`] || ''}
                                                onChange={(e) => handleAnswer(`q${q.id}`, e.target.value)}
                                            >
                                                <option value="">Select Heading</option>
                                                {["i", "ii", "iii", "iv", "v", "vi", "vii", "viii"].map(h => (
                                                    <option key={h} value={h}>{h}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                                    Questions 33–38
                                </h3>
                                <div className="space-y-6">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        A Meinig | B Grieder and Garkovich | C Ryden | D Tuan | E Haywood | F Markwell | G Yamashita
                                    </p>
                                    {[
                                        { id: 33, text: "Our attachment to a place can happen quickly." },
                                        { id: 34, text: "Limiting the amount of time for taking photographs may produce a narrow range of images." },
                                        { id: 35, text: "Members of a group will hold a similar view about a place." },
                                        { id: 36, text: "Given time, a place can have the same impact on us as people do." },
                                        { id: 37, text: "Tourists should keep a written account of their photographs." },
                                        { id: 38, text: "Each place means something different to each visitor." }
                                    ].map(q => (
                                        <div key={q.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <p className="font-bold text-secondary text-sm">{q.id}. {q.text}</p>
                                            <select
                                                className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm font-bold text-primary outline-none"
                                                value={answers[`q${q.id}`] || ''}
                                                onChange={(e) => handleAnswer(`q${q.id}`, e.target.value)}
                                            >
                                                <option value="">Select Person</option>
                                                {["A", "B", "C", "D", "E", "F", "G"].map(p => (
                                                    <option key={p} value={p}>{p}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                                    Questions 39–40
                                </h3>
                                <div className="space-y-12">
                                    {[
                                        { id: 39, text: "The 2002 study by Yamashita shows that local residents", options: ["A appreciate the beauty of their surroundings.", "B know their surroundings too well to appreciate them.", "C consider water the most important aspect of their surroundings.", "D dislike the negative impact of visitors on their surroundings."] },
                                        { id: 40, text: "In the final paragraph, the writer states that photographs present", options: ["A a factual account of a visit.", "B an unreliable source for research.", "C a clear picture of the feelings.", "D an image that needs to be explained to others."] }
                                    ].map(q => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-black text-secondary text-lg">{q.id}. {q.text}</p>
                                            <div className="grid gap-3">
                                                {q.options.map((opt, idx) => {
                                                    const val = ["A", "B", "C", "D"][idx];
                                                    return (
                                                        <label key={val} className={`cursor-pointer group flex items-center gap-4 p-4 rounded-2xl border transition-all ${answers[`q${q.id}`] === val ? 'bg-primary/5 border-primary ring-1 ring-primary/20' : 'bg-white border-gray-100 hover:border-primary/30'}`}>
                                                            <input
                                                                type="radio"
                                                                name={`q${q.id}`}
                                                                value={val}
                                                                checked={answers[`q${q.id}`] === val}
                                                                onChange={() => handleAnswer(`q${q.id}`, val)}
                                                                className="hidden"
                                                            />
                                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${answers[`q${q.id}`] === val ? 'border-primary bg-primary text-white' : 'border-gray-200 group-hover:border-primary/50'}`}>
                                                                {answers[`q${q.id}`] === val && <div className="w-2 h-2 bg-white rounded-full" />}
                                                            </div>
                                                            <span className={`font-bold text-sm ${answers[`q${q.id}`] === val ? 'text-primary' : 'text-gray-500 group-hover:text-secondary'}`}>
                                                                {opt}
                                                            </span>
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Test2Content;
