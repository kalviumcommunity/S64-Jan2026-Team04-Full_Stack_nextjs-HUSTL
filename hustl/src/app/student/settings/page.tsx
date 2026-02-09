import { Bell, Lock, User, Eye, Moon, Globe } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-4xl space-y-8">
            <div>
                <h2 className="text-2xl font-bold text-textPrimary">Settings</h2>
                <p className="text-textSecondary">Manage your account preferences and security.</p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="grid md:grid-cols-4">
                    {/* Settings Sidebar */}
                    <div className="bg-slate-50 border-r border-slate-200 p-4">
                        <nav className="space-y-1">
                            {['General', 'Notifications', 'Security', 'Privacy'].map((item, i) => (
                                <button key={item} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors text-left ${i === 0 ? 'bg-white shadow-sm text-primary' : 'text-textSecondary hover:bg-slate-100'}`}>
                                    {i === 0 && <User className="w-4 h-4" />}
                                    {i === 1 && <Bell className="w-4 h-4" />}
                                    {i === 2 && <Lock className="w-4 h-4" />}
                                    {i === 3 && <Eye className="w-4 h-4" />}
                                    {item}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Settings Content */}
                    <div className="md:col-span-3 p-8 space-y-8">
                        {/* Profile Section */}
                        <section>
                            <h3 className="text-lg font-bold text-textPrimary mb-4">Profile Information</h3>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" defaultValue="Kartik" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-textPrimary mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-textPrimary mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-slate-50" defaultValue="kartik@example.com" disabled />
                                </div>
                            </div>
                        </section>

                        <hr className="border-slate-100" />

                        {/* Preferences */}
                        <section>
                            <h3 className="text-lg font-bold text-textPrimary mb-4">Preferences</h3>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-textSecondary">
                                            <Moon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-textPrimary text-sm">Dark Mode</p>
                                            <p className="text-xs text-textSecondary">Switch between light and dark themes</p>
                                        </div>
                                    </div>
                                    <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-slate-200 rounded-full cursor-pointer">
                                        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ease-in-out"></span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between p-4 border border-slate-200 rounded-xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-textSecondary">
                                            <Globe className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-textPrimary text-sm">Language</p>
                                            <p className="text-xs text-textSecondary">Select your preferred language</p>
                                        </div>
                                    </div>
                                    <select className="px-3 py-1.5 border border-slate-200 rounded-lg text-sm focus:outline-none">
                                        <option>English</option>
                                        <option>Hindi</option>
                                        <option>Spanish</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        <div className="flex justify-end pt-4">
                            <button className="px-6 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primaryHover transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
