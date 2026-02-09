import { User, Mail, MapPin, Briefcase, Award } from "lucide-react";

export default function MentorProfilePage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-800 to-indigo-900"></div>
                <div className="relative flex items-end gap-6 pt-16">
                    <div className="w-32 h-32 rounded-full border-4 border-white bg-blue-100 flex items-center justify-center text-4xl font-bold text-blue-800 shadow-lg">
                        S
                    </div>
                    <div className="pb-2">
                        <h1 className="text-3xl font-bold text-slate-800">Sarah Wilson</h1>
                        <p className="text-slate-600 font-medium">Senior Engineering Mentor • 8 Years Exp</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4 text-lg">Bio</h3>
                        <p className="text-slate-600 leading-relaxed">
                            I help students bridge the gap between academic theory and production-grade engineering. My background consists of scaling systems at major tech companies and I love teaching distributed systems and clean code architecture.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4 text-lg">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2">
                            {['System Design', 'Backend Architecture', 'Go', 'Cloud Native', 'Career Guidance'].map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-lg text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4">Contact Info</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center gap-3 text-slate-600">
                                <Mail className="w-4 h-4" /> sarah.wilson@hustl.com
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <MapPin className="w-4 h-4" /> San Francisco, CA
                            </div>
                            <div className="flex items-center gap-3 text-slate-600">
                                <Briefcase className="w-4 h-4" /> Senior Staff Engineer
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
                        <h3 className="font-bold text-slate-800 mb-4">Impact</h3>
                        <div className="flex items-center gap-3 mb-2">
                            <Award className="w-5 h-5 text-amber-500" />
                            <span className="font-bold text-slate-800">45 Students Mentored</span>
                        </div>
                        <p className="text-xs text-slate-500">Since Joining in 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
