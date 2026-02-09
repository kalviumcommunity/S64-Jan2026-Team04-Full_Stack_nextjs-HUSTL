import Link from 'next/link';
import { ArrowLeft, User, Mail, Lock, ShieldCheck } from 'lucide-react';

export default function SignupPage() {
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

            <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl shadow-blue-500/10 border border-slate-200/60 p-8 lg:p-10">
                <div className="text-center mb-8">
                    <div className="flex justify-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primaryHover rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                            <span className="text-white font-bold text-2xl">H</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold text-textPrimary mb-2">Create your account</h1>
                    <p className="text-textSecondary">Start tracking your journey today</p>
                </div>

                <form className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-textPrimary mb-2">
                                First Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="John"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-textPrimary mb-2">
                                Last Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-textPrimary mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="email"
                                id="email"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-textPrimary mb-2">
                            I am a...
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="relative cursor-pointer">
                                <input type="radio" name="role" className="peer sr-only" defaultChecked />
                                <div className="p-3 rounded-xl border-2 border-slate-200 peer-checked:border-primary peer-checked:bg-blue-50/50 flex items-center gap-2 transition-all">
                                    <div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:border-primary peer-checked:bg-primary" />
                                    <span className="font-medium text-textPrimary">Student</span>
                                </div>
                            </label>
                            <label className="relative cursor-pointer">
                                <input type="radio" name="role" className="peer sr-only" />
                                <div className="p-3 rounded-xl border-2 border-slate-200 peer-checked:border-primary peer-checked:bg-blue-50/50 flex items-center gap-2 transition-all">
                                    <div className="w-4 h-4 rounded-full border border-slate-300 peer-checked:border-primary peer-checked:bg-primary" />
                                    <span className="font-medium text-textPrimary">Mentor</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-textPrimary mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                            <input
                                type="password"
                                id="password"
                                className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-textPrimary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                placeholder="Create a strong password"
                            />
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                type="checkbox"
                                className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary"
                            />
                        </div>
                        <label htmlFor="terms" className="text-sm text-textSecondary">
                            I agree to the <a href="#" className="text-primary font-medium hover:underline">Terms of Service</a> and <a href="#" className="text-primary font-medium hover:underline">Privacy Policy</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-primary to-primaryHover text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        Create Account
                        <ShieldCheck className="w-5 h-5 opacity-80" />
                    </button>
                </form>

                <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                    <p className="text-textSecondary">
                        Already have an account?{' '}
                        <Link href="/login" className="font-bold text-primary hover:text-primaryHover transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
