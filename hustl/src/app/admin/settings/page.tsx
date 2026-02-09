import { Shield, Lock, Bell, Server, ToggleLeft, ToggleRight } from "lucide-react";

export default function AdminSettingsPage() {
    return (
        <div className="max-w-3xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">System Settings</h2>
                <p className="text-slate-500">Configure platform-wide settings and security.</p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 space-y-8">
                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-slate-500" /> Platform Controls
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Maintenance Mode</p>
                                <p className="text-xs text-slate-500">Disable access for all non-admin users</p>
                            </div>
                            <ToggleLeft className="w-10 h-10 text-slate-300 cursor-pointer" />
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-slate-100">
                            <div>
                                <p className="font-bold text-slate-800 text-sm">New User Registration</p>
                                <p className="text-xs text-slate-500">Allow new students and mentors to sign up</p>
                            </div>
                            <ToggleRight className="w-10 h-10 text-emerald-500 cursor-pointer" />
                        </div>
                    </div>
                </section>

                <section>
                    <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-slate-500" /> Security Policies
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Password Policy</label>
                            <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
                                <option>Standard (Min 8 chars)</option>
                                <option>Strict (Symbols + Numbers)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-2">Session Timeout</label>
                            <select className="w-full border border-slate-200 rounded-lg px-3 py-2 text-sm">
                                <option>30 Minutes</option>
                                <option>1 Hour</option>
                                <option>4 Hours</option>
                            </select>
                        </div>
                    </div>
                </section>

                <div className="pt-4 flex justify-end">
                    <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                        Save Configuration
                    </button>
                </div>
            </div>
        </div>
    );
}
