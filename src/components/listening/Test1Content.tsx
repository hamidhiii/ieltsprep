
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface TestContentProps {
    answers: Record<number, any>;
    saveAnswer: (id: number, value: any) => void;
    currentPart: number;
}

export const Test1Content: React.FC<TestContentProps> = ({ answers, saveAnswer, currentPart }) => {
    return (
        <div className="prose prose-slate max-w-none">
            {currentPart === 0 && (
                <div className="space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 1–10</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Complete the notes below. Write NO MORE THAN TWO WORDS AND/OR A NUMBER for each answer.
                        </p>
                    </div>

                    <div className="space-y-12">
                        <div className="bg-gray-50/50 p-10 rounded-[40px] border border-gray-100 space-y-8">
                            <h3 className="text-2xl font-black uppercase tracking-tighter">Customer complaint form: product return</h3>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 text-xl font-bold bg-white p-4 rounded-2xl border border-gray-100 shadow-sm w-fit">
                                    Type of product: <span className="text-primary">vacuum cleaner</span>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Name: Diane</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(1, e.target.value)}
                                            value={answers[1] || ''}
                                            placeholder="1"
                                        />
                                    </div>

                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Street address: 34</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(2, e.target.value)}
                                            value={answers[2] || ''}
                                            placeholder="2"
                                        />
                                    </div>

                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium opacity-40">
                                        <span>City: Hamilton</span>
                                    </div>

                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Telephone: 970 7520 (her</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-32 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(3, e.target.value)}
                                            value={answers[3] || ''}
                                            placeholder="3"
                                        />
                                        <span>number)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="font-black uppercase tracking-widest text-primary text-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Product details
                                </h4>
                                <div className="space-y-4">
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Date of purchase: on</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(4, e.target.value)}
                                            value={answers[4] || ''}
                                            placeholder="4"
                                        />
                                    </div>
                                    <div className="opacity-40 text-lg font-medium">Make and model: Volta Budget</div>
                                    <div className="opacity-40 text-lg font-medium">Power: 2000 watts</div>
                                    <div className="opacity-40 text-lg font-medium">Color: red</div>
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Purchase price: $</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-32 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(5, e.target.value)}
                                            value={answers[5] || ''}
                                            placeholder="5"
                                        />
                                        <span className="text-gray-400 italic">(in the sale)</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="font-black uppercase tracking-widest text-primary text-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Fault details
                                </h4>
                                <div className="space-y-4">
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Problem with: the</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(6, e.target.value)}
                                            value={answers[6] || ''}
                                            placeholder="6"
                                        />
                                    </div>
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>First solution: free</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(7, e.target.value)}
                                            value={answers[7] || ''}
                                            placeholder="7"
                                        />
                                        <span className="text-gray-400 italic">(not accepted by customer)</span>
                                    </div>
                                    <div className="opacity-40 text-lg font-medium">Action requested: exchange</div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="font-black uppercase tracking-widest text-primary text-sm flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    Customer requirements
                                </h4>
                                <div className="space-y-4">
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Special features needed: a reusable</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-56 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(8, e.target.value)}
                                            value={answers[8] || ''}
                                            placeholder="8"
                                        />
                                    </div>
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Price quoted: $</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-32 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(9, e.target.value)}
                                            value={answers[9] || ''}
                                            placeholder="9"
                                        />
                                    </div>
                                    <div className="group flex flex-wrap items-center gap-3 text-lg font-medium">
                                        <span>Preferred color:</span>
                                        <input
                                            className="bg-primary/5 border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary focus:bg-white transition-all text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(10, e.target.value)}
                                            value={answers[10] || ''}
                                            placeholder="10"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 1 && (
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 11–14</h2>
                        <p className="text-xl text-gray-400 font-bold uppercase tracking-widest">Multiple Choice</p>

                        <div className="space-y-8">
                            {[11, 12, 13, 14].map(qId => (
                                <div key={qId} className="bg-gray-50/50 p-8 rounded-[32px] border border-gray-100 space-y-4">
                                    <div className="text-xl font-bold text-secondary">
                                        {qId}. {qId === 11 && "When was the first apartment complex completed?"}
                                        {qId === 12 && "What does the manager say he enjoys most about the job?"}
                                        {qId === 13 && "Regarding restrictions in the complex, the manager says"}
                                        {qId === 14 && "What does the manager ask residents to do for the welcome party?"}
                                    </div>
                                    <div className="grid grid-cols-1 gap-2">
                                        {['A', 'B', 'C'].map(option => (
                                            <button
                                                key={option}
                                                onClick={() => saveAnswer(qId, option)}
                                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left font-bold ${answers[qId] === option ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-white text-gray-400 hover:bg-gray-50'}`}
                                            >
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs ${answers[qId] === option ? 'border-primary bg-primary text-white' : 'border-gray-200'}`}>
                                                    {option}
                                                </div>
                                                {qId === 11 && (option === 'A' ? "1 year ago" : option === 'B' ? "3 years ago" : "5 years ago")}
                                                {qId === 12 && (option === 'A' ? "resolving problems between residents" : option === 'B' ? "dealing with financial matters" : "organizing building maintenance")}
                                                {qId === 13 && (option === 'A' ? "only some types of flowers can be planted" : option === 'B' ? "only the interiors of apartments can be painted" : "only certain colors can be used on the walls")}
                                                {qId === 14 && (option === 'A' ? "bring food" : option === 'B' ? "prepare name tags" : "decorate the hall")}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 15–20</h2>
                        <p className="text-xl font-medium text-gray-500">Label the map below. Write the correct letter, A-K, next to questions 15-20.</p>

                        <div className="relative bg-white rounded-[40px] border border-gray-100 p-8 shadow-inner">
                            <img
                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DnXu8TgLt2hQCVELkz7qkWZINcU2p5.png"
                                alt="Map"
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[15, 16, 17, 18, 19, 20].map(qId => (
                                <div key={qId} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <span className="font-black text-secondary/40 w-8">{qId}</span>
                                    <div className="flex-1 font-bold text-secondary">
                                        {qId === 15 && "Shop"}
                                        {qId === 16 && "Barbecue area"}
                                        {qId === 17 && "Childcare center"}
                                        {qId === 18 && "Laundry"}
                                        {qId === 19 && "Recreation room"}
                                        {qId === 20 && "Hall"}
                                    </div>
                                    <input
                                        className="w-12 h-12 bg-white border-2 border-primary/20 rounded-xl outline-none focus:border-primary text-center font-black text-primary uppercase"
                                        maxLength={1}
                                        onChange={(e) => saveAnswer(qId, e.target.value)}
                                        value={answers[qId] || ''}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 2 && (
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 21–24</h2>
                        <p className="text-xl text-gray-400 font-bold uppercase tracking-widest">Multi-Select Checkbox</p>

                        <div className="grid grid-cols-1 gap-8">
                            <div className="bg-gray-50/50 p-10 rounded-[40px] border border-gray-100 space-y-6">
                                <div className="text-xl font-bold mb-4">Questions 21-22: Choose TWO reasons Alice and David decide to focus on cricket equipment?</div>
                                <div className="grid grid-cols-1 gap-3">
                                    {['A', 'B', 'C', 'D', 'E'].map(opt => (
                                        <label key={opt} className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${answers[21]?.includes(opt) ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={answers[21]?.includes(opt)}
                                                onChange={(e) => {
                                                    const curr = answers[21] || [];
                                                    if (e.target.checked) saveAnswer(21, [...curr, opt]);
                                                    else saveAnswer(21, curr.filter((c: string) => c !== opt));
                                                }}
                                            />
                                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center text-xs ${answers[21]?.includes(opt) ? 'border-primary bg-primary text-white' : 'border-gray-200'}`}>
                                                {answers[21]?.includes(opt) && <CheckCircle className="w-4 h-4" />}
                                            </div>
                                            <span className="font-bold flex-1">
                                                {opt === 'A' && "A. Women's cricket is growing in popularity"}
                                                {opt === 'B' && "B. The regulations have been changed"}
                                                {opt === 'C' && "C. The number of cricket injuries has been increasing"}
                                                {opt === 'D' && "D. The equipment has improved recently"}
                                                {opt === 'E' && "E. The quality of the equipment varies a lot"}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-50/50 p-10 rounded-[40px] border border-gray-100 space-y-6">
                                <div className="text-xl font-bold mb-4">Questions 23-24: Choose TWO things that surprised Alice and David about professional cricket bats?</div>
                                <div className="grid grid-cols-1 gap-3">
                                    {['A', 'B', 'C', 'D', 'E'].map(opt => (
                                        <label key={opt} className={`flex items-center gap-4 p-5 rounded-2xl border-2 cursor-pointer transition-all ${answers[23]?.includes(opt) ? 'border-primary bg-primary/5' : 'border-transparent bg-white hover:bg-gray-50'}`}>
                                            <input
                                                type="checkbox"
                                                className="hidden"
                                                checked={answers[23]?.includes(opt)}
                                                onChange={(e) => {
                                                    const curr = answers[23] || [];
                                                    if (e.target.checked) saveAnswer(23, [...curr, opt]);
                                                    else saveAnswer(23, curr.filter((c: string) => c !== opt));
                                                }}
                                            />
                                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center text-xs ${answers[23]?.includes(opt) ? 'border-primary bg-primary text-white' : 'border-gray-200'}`}>
                                                {answers[23]?.includes(opt) && <CheckCircle className="w-4 h-4" />}
                                            </div>
                                            <span className="font-bold flex-1">
                                                {opt === 'A' && "A. They are so expensive to make"}
                                                {opt === 'B' && "B. They differ depending on what they are used for"}
                                                {opt === 'C' && "C. They are made in so many different locations"}
                                                {opt === 'D' && "D. They have to be made of natural materials"}
                                                {opt === 'E' && "E. They require such a high standard of care"}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 pt-12">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 25–30</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            What decision do the students take for each of the following sections of their presentation?
                        </p>

                        <div className="bg-secondary p-8 rounded-[40px] shadow-2xl text-white space-y-6">
                            <div className="text-xs font-black uppercase tracking-widest text-white/40">Options Pool</div>
                            <div className="grid grid-cols-2 gap-3">
                                {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(opt => (
                                    <div key={opt} className="bg-white/10 p-4 rounded-2xl border border-white/10 text-sm font-bold flex items-center gap-3">
                                        <span className="text-primary">{opt}</span>
                                        {opt === 'A' && "Try out equipment"}
                                        {opt === 'B' && "Focus materials"}
                                        {opt === 'C' && "Include photos"}
                                        {opt === 'D' && "Make shorter"}
                                        {opt === 'E' && "Ask opinion"}
                                        {opt === 'F' && "Change order"}
                                        {opt === 'G' && "Show usage"}
                                        {opt === 'H' && "Unchanged"}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4 pt-12">
                            {[25, 26, 27, 28, 29, 30].map(qId => (
                                <div key={qId} className="flex items-center gap-6 p-6 bg-gray-50 rounded-3xl border border-gray-100 group">
                                    <span className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center font-black text-secondary/30 shadow-sm">{qId}</span>
                                    <div className="flex-1 font-black uppercase tracking-tight text-secondary">
                                        {qId === 25 && "Historical background"}
                                        {qId === 26 && "Bat design"}
                                        {qId === 27 && "Ball design"}
                                        {qId === 28 && "Helmet design"}
                                        {qId === 29 && "Protective gear"}
                                        {qId === 30 && "Advertising"}
                                    </div>
                                    <input
                                        className="w-16 h-16 bg-white border-2 border-primary/20 rounded-2xl outline-none focus:border-primary text-center font-black text-primary text-xl uppercase shadow-md group-hover:scale-105 transition-all"
                                        maxLength={1}
                                        onChange={(e) => saveAnswer(qId, e.target.value)}
                                        value={answers[qId] || ''}
                                        placeholder="?"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {currentPart === 3 && (
                <div className="space-y-16">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-black tracking-tight uppercase">Questions 31–40</h2>
                        <p className="p-4 bg-gray-50 border-l-4 border-primary rounded-r-xl text-lg font-medium text-gray-600">
                            Complete the notes below. Write ONE WORD ONLY for each answer.
                        </p>
                    </div>

                    <div className="bg-gray-50/50 p-12 rounded-[48px] border border-gray-100 space-y-12">
                        <h3 className="text-3xl font-black uppercase tracking-tighter text-center">Human babies and numerical ability</h3>

                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Interpreting a baby's thoughts</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- In the 19th century, William James said new-born babies were in a state of</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(31, e.target.value)}
                                            value={answers[31] || ''}
                                            placeholder="31"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Modern researchers can tell what babies are interested in by studying movements of their</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(32, e.target.value)}
                                            value={answers[32] || ''}
                                            placeholder="32"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Experiments</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- One-day-old babies were shown several cards with</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(33, e.target.value)}
                                            value={answers[33] || ''}
                                            placeholder="33"
                                        />
                                        <span>on</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- They were not interested when the</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(34, e.target.value)}
                                            value={answers[34] || ''}
                                            placeholder="34"
                                        />
                                        <span>changed</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Older babies were shown cards with</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(35, e.target.value)}
                                            value={answers[35] || ''}
                                            placeholder="35"
                                        />
                                        <span>of different things</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Animals and numbers</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Some birds can find food in a box by</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(36, e.target.value)}
                                            value={answers[36] || ''}
                                            placeholder="36"
                                        />
                                        <span>numbers, which involves counting</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- They can then decide whether or not to</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(37, e.target.value)}
                                            value={answers[37] || ''}
                                            placeholder="37"
                                        />
                                        <span>the other group</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8 border-t border-gray-100">
                                <h4 className="text-xl font-black text-primary uppercase tracking-widest">Humans and counting</h4>
                                <div className="space-y-4">
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Research concludes that</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(38, e.target.value)}
                                            value={answers[38] || ''}
                                            placeholder="38"
                                        />
                                        <span>is not essential for understanding numbers.</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Counting developed at the same time as people started</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(39, e.target.value)}
                                            value={answers[39] || ''}
                                            placeholder="39"
                                        />
                                    </div>
                                    <div className="flex flex-wrap items-center gap-3 text-lg font-medium leading-relaxed">
                                        <span>- Europeans may once have used fingers and</span>
                                        <input
                                            className="bg-white border-2 border-primary/20 w-48 px-4 py-2 rounded-xl outline-none focus:border-primary text-primary font-black uppercase"
                                            onChange={(e) => saveAnswer(40, e.target.value)}
                                            value={answers[40] || ''}
                                            placeholder="40"
                                        />
                                        <span>for counting.</span>
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
