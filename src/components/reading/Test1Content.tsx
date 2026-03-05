
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

const Test1Content: React.FC<TestContentProps> = ({
    currentPassage,
    answers,
    handleAnswer,
    splitWidth,
    startResizing
}) => {
    return (
        <main className="flex-1 flex overflow-hidden relative">
            <PassageView id="r1" currentPassage={currentPassage} splitWidth={splitWidth} />

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
                                    Questions 1–6
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">TRUE / FALSE / NOT GIVEN</p>
                                </div>
                                <div className="space-y-8">
                                    {[
                                        { id: 1, text: "In the seventeenth and eighteenth centuries, the British East India Company faced a lot of competition." },
                                        { id: 2, text: "Before 1800, cargo size was the most important consideration for the East India Company." },
                                        { id: 3, text: "At best, voyages of the East Indiamen to China and back took nearly two years to complete." },
                                        { id: 4, text: "Before 1834, voyages to and from China were considered to be highly dangerous." },
                                        { id: 5, text: "After 1834, the ships which had served the East India Company stopped being used for commercial purposes." },
                                        { id: 6, text: "In the nineteenth century, British drinkers preferred tea made from mature leaves to that made from younger leaves." }
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
                                    Questions 7–13
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">ONE WORD ONLY</p>
                                </div>
                                <div className="space-y-8 text-gray-600 bg-white border border-gray-100 p-8 rounded-[32px] shadow-sm">
                                    <div className="space-y-4">
                                        <h4 className="font-black text-secondary uppercase text-sm tracking-widest">Clipper races</h4>
                                        <p>Clipper ships were first used for trading by American merchants.</p>
                                        <ul className="space-y-6 list-disc pl-5">
                                            <li className="leading-loose">
                                                The ships were remarkable for the number of {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q7 || ''}
                                                    onChange={(e) => handleAnswer('q7', e.target.value)}
                                                /> (7) they had.
                                            </li>
                                            <li className="leading-loose">
                                                The performance of British tea clippers was particularly affected when there were {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q8 || ''}
                                                    onChange={(e) => handleAnswer('q8', e.target.value)}
                                                /> (8) at sea.
                                            </li>
                                            <li className="leading-loose">
                                                It was in a ship called {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q9 || ''}
                                                    onChange={(e) => handleAnswer('q9', e.target.value)}
                                                /> (9) that the British first competed successfully against the Americans.
                                            </li>
                                            <li className="leading-loose">
                                                Competition increased when additional Chinese trading {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q10 || ''}
                                                    onChange={(e) => handleAnswer('q10', e.target.value)}
                                                /> (10) were established.
                                            </li>
                                            <li className="leading-loose">
                                                Merchants were occasionally in such a hurry that they failed to complete the {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q11 || ''}
                                                    onChange={(e) => handleAnswer('q11', e.target.value)}
                                                /> (11) before leaving China.
                                            </li>
                                            <li className="leading-loose">
                                                At the end of their journey, the ships needed the help of {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q12 || ''}
                                                    onChange={(e) => handleAnswer('q12', e.target.value)}
                                                /> (12).
                                            </li>
                                            <li className="leading-loose">
                                                The crews were motivated by both {" "}
                                                <input
                                                    type="text"
                                                    className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent transition-colors"
                                                    value={answers.q13 || ''}
                                                    onChange={(e) => handleAnswer('q13', e.target.value)}
                                                /> (13) and their enthusiasm for the competition.
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
                                    Questions 14–18
                                </h3>
                                <div className="bg-gray-50/50 p-6 rounded-3xl border border-gray-100 mb-8 leading-relaxed text-gray-600">
                                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest mb-4">Summary completion</p>
                                    <p className="mb-4"><em>First type:</em> Birds rely on their sophisticated {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent"
                                            value={answers.q14 || ''}
                                            onChange={(e) => handleAnswer('q14', e.target.value)}
                                        /> (14). However, they are generally most successful if they are released within their feeding territory.</p>
                                    <p className="mb-4"><em>Second type:</em> Birds select their accustomed {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent"
                                            value={answers.q15 || ''}
                                            onChange={(e) => handleAnswer('q15', e.target.value)}
                                        /> (15), no matter where they are released. As a result, they may miss their {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent"
                                            value={answers.q16 || ''}
                                            onChange={(e) => handleAnswer('q16', e.target.value)}
                                        /> (16).</p>
                                    <p><em>Third type:</em> Birds orientate correctly, even when they are released in an unfamiliar place and have no {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent"
                                            value={answers.q17 || ''}
                                            onChange={(e) => handleAnswer('q17', e.target.value)}
                                        /> (17) to make use of. One bird with this type of skill is the {" "}
                                        <input
                                            type="text"
                                            className="border-b-2 border-gray-200 focus:border-primary outline-none px-2 w-32 font-bold text-primary text-center bg-transparent"
                                            value={answers.q18 || ''}
                                            onChange={(e) => handleAnswer('q18', e.target.value)}
                                        /> (18).</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">2</span>
                                    Questions 19–22
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { id: 19, text: "The effects of distance on some birds' ability to find their nests" },
                                        { id: 20, text: "A methodology for testing the general ability of birds to find their nests" },
                                        { id: 21, text: "One aspect of physical ability in humans and birds" },
                                        { id: 22, text: "How some birds' migration was delayed for experimental purposes" }
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

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                                    Questions 23–26
                                </h3>
                                <div className="space-y-6">
                                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        A = orientation without previous training | C = ability to remember | D = effect of age | F = high success rate
                                    </p>
                                    {[
                                        { id: 23, text: "Domestic pigeon" },
                                        { id: 24, text: "Alpine swift" },
                                        { id: 25, text: "European stork" },
                                        { id: 26, text: "Starling" }
                                    ].map(q => (
                                        <div key={q.id} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                            <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                            <div className="flex gap-2">
                                                {["A", "C", "D", "F"].map(p => (
                                                    <button
                                                        key={p}
                                                        onClick={() => handleAnswer(`q${q.id}`, p)}
                                                        className={`w-10 h-10 rounded-lg font-bold text-xs flex items-center justify-center transition-all ${answers[`q${q.id}`] === p ? 'bg-primary text-white shadow-lg' : 'bg-gray-50 text-gray-400 hover:bg-gray-100'}`}
                                                    >
                                                        {p}
                                                    </button>
                                                ))}
                                            </div>
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
                                    Questions 27–31
                                </h3>
                                <div className="space-y-8">
                                    {[
                                        { id: 27, text: "The delay in the process used by the Kellogg brothers affected the final product." },
                                        { id: 28, text: "Sir Alan Hodgkin is an example of someone whose work proceeded in a logical and systematic way." },
                                        { id: 29, text: "Daguerre is an exception to the general rule of innovation." },
                                        { id: 30, text: "The discovery of saccharin occurred by accident during drug research." },
                                        { id: 31, text: "The company 3M should have supported Art Fry by funding his idea of Post-It Notes." }
                                    ].map(q => (
                                        <div key={q.id} className="space-y-4">
                                            <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                            <div className="flex gap-4">
                                                {["YES", "NO", "NOT GIVEN"].map(opt => (
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
                                    Questions 32–35
                                </h3>
                                <div className="space-y-6 bg-gray-50/50 p-8 rounded-[40px] border border-gray-100">
                                    <div className="grid gap-6">
                                        {[
                                            { id: 32, text: "The usual business environment …" },
                                            { id: 33, text: "Geroski and Markides's book …" },
                                            { id: 34, text: "Microsoft is an example of a company which …" },
                                            { id: 35, text: "The origin of useful accidents …" }
                                        ].map(q => (
                                            <div key={q.id} className="flex flex-col gap-3">
                                                <p className="font-bold text-secondary">{q.id}. {q.text}</p>
                                                <select
                                                    className="w-full bg-white border border-gray-200 rounded-2xl px-4 py-3 text-sm font-bold text-primary outline-none shadow-sm focus:border-primary transition-all"
                                                    value={answers[`q${q.id}`] || ''}
                                                    onChange={(e) => handleAnswer(`q${q.id}`, e.target.value)}
                                                >
                                                    <option value="">Select Endpoint</option>
                                                    <option value="A">A: can be found in unusual thoughts and chance events.</option>
                                                    <option value="C">C: has made a success from someone else's invention.</option>
                                                    <option value="E">E: is unlikely to lead to creative innovation.</option>
                                                    <option value="G">G: shows that businesses are good at either inventing or selling.</option>
                                                </select>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-black text-secondary uppercase tracking-tight mb-6 flex items-center gap-3">
                                    <span className="bg-secondary text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm">3</span>
                                    Questions 36–40
                                </h3>
                                <div className="space-y-12">
                                    {[
                                        { id: 36, text: "How do Austin and Devin advise companies to get out of the 'cone of expectation'?", options: ["A. by decreasing company systems", "B. by forming teams of different types of people", "C. by hiring creative people", "D. by holding regular meetings"] },
                                        { id: 37, text: "In recommending 'counter-intuitive' thinking, what do Austin and Devin imply?", options: ["A. failing is bad for morale", "B. innovation cannot be planned", "C. avoiding mistakes is priority", "D. cost of mistakes is important"] },
                                        { id: 38, text: "The writer describes the Empire Lager disaster in order to show that …", options: ["A. success can come out of failure", "B. companies value risk-taking", "C. TV ads work on older people", "D. youngsters dislike sweet taste"] },
                                        { id: 39, text: "Pure Blonde has been more successful than Empire Lager because …", options: ["A. digital media was used", "B. different brand name was used", "C. launched with very little ads", "D. larger budget was used"] },
                                        { id: 40, text: "The writer concludes that creating a culture that learns from mistakes …", options: ["A. brings short-term gains", "B. can be very difficult", "C. holds no risk for workers", "D. is popular with shareholders"] }
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

export default Test1Content;
