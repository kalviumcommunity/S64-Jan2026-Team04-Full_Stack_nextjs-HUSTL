import { User, Mail, Link as LinkIcon, MapPin, UploadCloud, Edit3, Briefcase, GraduationCap } from "lucide-react";

export default function ProfilePage() {
    return (
        <div className="space-y-8">
            {/* Profile Header */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-100 to-indigo-100"></div>

                <div className="relative flex flex-col md:flex-row items-end gap-6 pt-12">
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg bg-orange-100 flex items-center justify-center text-4xl font-bold text-orange-500">
                        K
                    </div>
                    <div className="flex-1 mb-2">
                        <h1 className="text-2xl font-bold text-textPrimary">Kartik</h1>
                        <p className="text-textSecondary font-medium">Full Stack Developer • Computer Science Student</p>
                        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted">
                            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3" /> Mumbai, India</span>
                            <span className="flex items-center gap-1.5"><LinkIcon className="w-3 h-3" /> github.com/kartik</span>
                            <span className="flex items-center gap-1.5"><Mail className="w-3 h-3" /> kartik@example.com</span>
                        </div>
                    </div>
                    <button className="mb-4 px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
                        <Edit3 className="w-4 h-4" /> Edit Profile
                    </button>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    {/* About */}
                    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-bold text-textPrimary mb-4">About Me</h2>
                        <p className="text-textSecondary leading-relaxed">
                            Passionate full-stack developer with a keen interest in building scalable web applications. Currently exploring distributed systems and cloud native technologies. I love solving complex problems and contributing to open source.
                        </p>
                    </section>

                    {/* Education */}
                    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-primary" /> Education
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-textPrimary">B.Tech in Computer Science</h3>
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-muted">2023 - 2027</span>
                                </div>
                                <p className="text-sm text-textSecondary">Kalvium University</p>
                                <p className="text-sm text-muted mt-1">CGPA: 3.8/4.0</p>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-bold text-textPrimary mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-primary" /> Experience
                        </h2>
                        <div className="space-y-6">
                            <div className="relative pl-6 border-l-2 border-slate-100">
                                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-white"></div>
                                <h3 className="font-bold text-textPrimary">Web Development Intern</h3>
                                <p className="text-sm text-textSecondary">TechStart Inc.</p>
                                <p className="text-xs text-muted mt-1 mb-2">Jun 2024 - Aug 2024</p>
                                <p className="text-sm text-textSecondary">
                                    Built the admin dashboard using React and Tailwind CSS. Improved page load performance by 30%.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="space-y-8">
                    {/* Resume Section */}
                    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-bold text-textPrimary mb-4">Resume</h2>
                        <div className="border border-slate-200 rounded-xl p-4 flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center font-bold text-xs">PDF</div>
                            <div className="flex-1 overflow-hidden">
                                <p className="text-sm font-bold text-textPrimary truncate">Kartik_Resume_v2.pdf</p>
                                <p className="text-xs text-muted">Added 2 days ago</p>
                            </div>
                        </div>
                        <button className="w-full py-2 border-2 border-dashed border-slate-300 rounded-xl text-textSecondary font-medium hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2 text-sm">
                            <UploadCloud className="w-4 h-4" /> Upload New Version
                        </button>
                    </section>

                    {/* Skills */}
                    <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                        <h2 className="text-lg font-bold text-textPrimary mb-4">Skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Git", "Docker"].map(skill => (
                                <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-sm text-textSecondary font-medium">
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
