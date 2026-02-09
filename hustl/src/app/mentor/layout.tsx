import Link from "next/link";
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    ClipboardCheck,
    User,
    Settings,
    LogOut,
    Bell
} from "lucide-react";

export default function MentorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 fixed h-full hidden lg:flex flex-col z-20">
                <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-800 rounded-lg flex items-center justify-center shadow-lg shadow-blue-900/10">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>
                    <span className="text-xl font-bold text-slate-800">
                        HUSTL <span className="text-blue-600 text-sm font-medium">Mentor</span>
                    </span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Overview
                    </div>
                    <Link href="/mentor" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/mentor/students" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <Users className="w-5 h-5" />
                        My Students
                    </Link>
                    <Link href="/mentor/reviews" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <ClipboardCheck className="w-5 h-5" />
                        Test Reviews
                    </Link>

                    <div className="px-4 py-2 mt-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Mentorship
                    </div>
                    <Link href="/mentor/feedback" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        Feedback History
                    </Link>

                    <div className="px-4 py-2 mt-8 text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Account
                    </div>
                    <Link href="/mentor/profile" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <User className="w-5 h-5" />
                        Profile
                    </Link>
                    <Link href="/mentor/settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 hover:bg-blue-50 hover:text-blue-800 rounded-xl font-medium transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-slate-100">
                    <button className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors">
                        <LogOut className="w-5 h-5" />
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 lg:ml-64">
                {/* Top Header */}
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30 shadow-sm">
                    <h1 className="text-xl font-bold text-slate-800">Mentor Dashboard</h1>
                    <div className="flex items-center gap-6">
                        <button className="relative text-slate-500 hover:text-blue-800 transition-colors">
                            <Bell className="w-5 h-5" />
                            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="flex items-center gap-3 pl-6 border-l border-slate-200">
                            <div className="text-right hidden md:block">
                                <p className="text-sm font-bold text-slate-800">Dr. Sarah Wilson</p>
                                <p className="text-xs text-slate-500">Senior Engineering Mentor</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold border-2 border-blue-100 shadow-sm">
                                SW
                            </div>
                        </div>
                    </div>
                </header>

                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
