import Link from "next/link";
import {
    LayoutDashboard,
    Briefcase,
    BookOpen,
    MessageSquare,
    Settings,
    LogOut,
    Bell,
    User
} from "lucide-react";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-slate-200 fixed h-full hidden lg:flex flex-col">
                <div className="p-6 border-b border-slate-100 flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">H</span>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        HUSTL
                    </span>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="px-4 py-2 text-xs font-semibold text-muted uppercase tracking-wider">
                        Menu
                    </div>
                    <Link href="/student" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/student/internships" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
                        <Briefcase className="w-5 h-5" />
                        Internships
                    </Link>
                    <Link href="/student/applications" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
                        <BookOpen className="w-5 h-5" />
                        Applications
                    </Link>
                    <Link href="/student/feedback" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
                        <MessageSquare className="w-5 h-5" />
                        Feedback
                    </Link>

                    <div className="px-4 py-2 mt-8 text-xs font-semibold text-muted uppercase tracking-wider">
                        Account
                    </div>
                    <Link href="/student/profile" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
                        <User className="w-5 h-5" />
                        Profile
                    </Link>
                    <Link href="/student/settings" className="flex items-center gap-3 px-4 py-3 text-textSecondary hover:bg-slate-50 hover:text-textPrimary rounded-xl font-medium transition-colors">
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
                <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 sticky top-0 z-30">
                    <h1 className="text-xl font-bold text-textPrimary">Student Dashboard</h1>
                    <div className="flex items-center gap-4">
                        <button className="p-2 text-textSecondary hover:bg-slate-50 rounded-full relative">
                            <Bell className="w-5 h-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-purple-500 border-2 border-white shadow-sm"></div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
