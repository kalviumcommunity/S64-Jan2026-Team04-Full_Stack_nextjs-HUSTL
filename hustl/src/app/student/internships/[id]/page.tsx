import Link from "next/link";
import {
    ArrowLeft,
    MapPin,
    DollarSign,
    Clock,
    Calendar,
    CheckCircle,
    Zap,
    Lock
} from "lucide-react";

export default function InternshipDetailsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Back Button */}
            <Link href="/student/internships" className="inline-flex items-center gap-2 text-textSecondary hover:text-primary transition-colors font-medium">
                <ArrowLeft className="w-4 h-4" />
                Back to Internships
            </Link>

            {/* Header Card */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-blue-500/20">
                        S
                    </div>
                    <div className="flex-1">
                        <h1 className="text-3xl font-bold text-textPrimary mb-2">Backend Developer Intern</h1>
                        <div className="flex flex-wrap items-center gap-4 text-textSecondary text-sm font-medium">
                            <span className="flex items-center gap-1.5"><BriefcaseIcon className="w-4 h-4" /> Stripe</span>
                            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> Remote / San Francisco</span>
                            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> $40 - $50 / hr</span>
                            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 12 Weeks</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full md:w-auto">
                        <Link href="/student/internships/1/test" className="px-6 py-3 bg-yellow-400 text-yellow-900 hover:bg-yellow-500 rounded-xl font-bold text-center transition-all shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2">
                            Take Eligibility Test <Zap className="w-4 h-4" />
                        </Link>
                        <p className="text-xs text-center text-muted">Test required to unlock application</p>
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-8">
                    <section className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                        <h2 className="text-xl font-bold text-textPrimary mb-4">About the Role</h2>
                        <div className="prose prose-slate text-textSecondary">
                            <p className="mb-4">
                                Stripe is looking for a Backend Developer Intern to join our Core Payments team. You will work on building scalable APIs that power millions of transactions daily.
                            </p>
                            <h3 className="font-bold text-textPrimary mb-2">What you'll do:</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>Design and implement high-performance APIs in Ruby and Go.</li>
                                <li>Collaborate with frontend engineers to integrate payment flows.</li>
                                <li>Optimize database queries for low-latency responses.</li>
                                <li>Participate in code reviews and engineering design discussions.</li>
                            </ul>
                            <h3 className="font-bold text-textPrimary mb-2">Requirements:</h3>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Strong proficiency in at least one backend language (Java, Python, Go, Ruby).</li>
                                <li>Understanding of RESTful APIs and database concepts.</li>
                                <li>Currently dealing a BS or MS in Computer Science or related field.</li>
                            </ul>
                        </div>
                    </section>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-6">
                    <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-textPrimary mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-3">
                            {[
                                { label: "Minimum GPA: 3.5", status: "pass" },
                                { label: "Final Year Student", status: "pass" },
                                { label: "Advanced SQL Skills", status: "fail" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                                    {item.status === 'pass' ? (
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                    ) : (
                                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-300 flex-shrink-0">
                                            <Lock className="w-3 h-3" />
                                        </div>
                                    )}
                                    <span className={item.status === 'pass' ? 'text-textPrimary' : 'text-muted'}>{item.label}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                        <h3 className="font-bold text-textPrimary mb-4">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Ruby", "Go", "PostgreSQL", "API Design", "System Architecture"].map(skill => (
                                <span key={skill} className="px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-lg text-sm text-textSecondary font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

function BriefcaseIcon({ className }: { className?: string }) {
    return <Briefcase className={className} />;
}
