import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-indigo-50/40 flex items-center justify-center p-4">
            {/* Back to Home */}
            <Link
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-medium"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
            </Link>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200/60 p-8">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryHover rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-bold text-2xl">H</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-textPrimary mb-2">Welcome back</h1>
                    <p className="text-textSecondary">Sign in to continue your hustle</p>
                </div>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="you@example.com"
                        />
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label htmlFor="password" className="block text-sm font-medium text-textPrimary">
                                Password
                            </label>
                            <a href="#" className="text-sm font-medium text-primary hover:text-primaryHover">
                                Forgot password?
                            </a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                            placeholder="••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3.5 bg-gradient-to-r from-primary to-primaryHover text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-textSecondary">
                        Don't have an account?{' '}
                        <Link href="/signup" className="font-bold text-primary hover:text-primaryHover transition-colors">
                            Create account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
