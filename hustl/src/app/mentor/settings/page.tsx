import { Bell, Lock, Eye, Globe } from "lucide-react";

export default function MentorSettingsPage() {
    return (
        <div className="max-w-3xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
                <p className="text-slate-500">Manage your mentor account preferences.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Bell className="w-5 h-5 text-slate-400" /> Notifications
                    </h3>
                    <div className="space-y-4">
                        {['New Student Assignments', 'Test Review Requests', 'Feedback Reminders'].map(item => (
                            <div key={item} className="flex items-center justify-between py-2">
                                <span className="text-slate-700 font-medium">{item}</span>
                                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <hr className="border-slate-100" />

                <section>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-slate-400" /> Availability
                    </h3>
                    <div className="flex items-center gap-4">
                        <select className="px-4 py-2 border border-slate-200 rounded-lg text-slate-700 focus:outline-none focus:border-blue-500">
                            <option>Active (Accepting Students)</option>
                            <option>Busy (No New Students)</option>
                            <option>On Leave</option>
                        </select>
                    </div>
                </section>

                <div className="pt-4">
                    <button className="px-6 py-2.5 bg-blue-800 text-white font-bold rounded-lg hover:bg-blue-900 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
