import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Terminal, Cpu, Database, Shield, Zap, Flame, Trophy, MapPin, Target } from 'lucide-react';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [githubProjects, setGithubProjects] = useState([]);

    // Effect to toggle dark mode class on the documentElement
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    // Effect to fetch GitHub projects directly
    useEffect(() => {
        const fetchGithubProjects = async () => {
            try {
                // Fetch repositories directly from GitHub API
                const response = await fetch('https://api.github.com/users/ARJUN-RAJESH-24/repos');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const repos = await response.json();

                // Process repositories to match the previous backend format
                const formattedProjects = repos
                    .filter(repo => !repo.fork) // Filter out forks
                    .map(repo => {
                        // Convert kebab-case to Title Case
                        const title = repo.name.replace(/-/g, ' ')
                            .split(' ')
                            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ');

                        return {
                            title: title,
                            desc: repo.description || "No description provided.",
                            tech: repo.language ? [repo.language] : [],
                            github: repo.html_url,
                            demo: repo.homepage || "#",
                            // Assume image path convention matches repo name
                            image: `/project-images/${repo.name.toLowerCase()}-thumbnail.png`,
                            originalName: repo.name
                        };
                    });

                setGithubProjects(formattedProjects);
            } catch (error) {
                console.error("Failed to fetch GitHub projects:", error);
            }
        };

        fetchGithubProjects();
    }, []);

    // Resume Data
    const professionalSummary = "Third-year Computer Science student with strong foundation in systems programming, software development, and machine learning. Built 15+ production-ready projects including diagnostic tools, custom Linux distributions, ML pipelines, and mobile applications. Proficient in C, C++, Rust, Python with expertise in low-level systems programming and algorithm optimization. Achieved measurable results: 70% efficiency improvements, 3.2x speedup in heterogeneous computing, 98% reduction in diagnostic time. Seeking Software Engineering Internship or Developer role.";

    const experience = [
        {
            role: "Independent Developer & Technical Researcher",
            company: "Self-Employed",
            period: "Aug 2023–Present",
            details: [
                "Built 15+ system utilities across Windows and Linux, reducing troubleshooting time by 70%.",
                "Deployed home server infrastructure using TrueNAS and Proxmox with RAID configuration from recycled hardware, achieving 99.5% uptime and 5TB storage.",
                "Benchmarked CPU performance across 6 architectures (AMD Zen, Intel Core) using stress-ng and perf, documenting 25+ optimization strategies.",
                "Prototyped heterogeneous computing workflows (CPU/GPU/NPU) using CUDA, achieving 3.2x speedup.",
                "Tested 50+ Windows applications on Linux using Proton/Wine, achieving 92% compatibility rate."
            ]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Technology in Computer Science and Engineering",
            institution: "Amrita Vishwa Vidyapeetham, Kerala, India",
            period: "Aug 2023–May 2027",
            details: "Relevant Coursework: Data Structures & Algorithms, Operating Systems, DBMS, Computer Organization & Architecture, Software Engineering."
        },
        {
            degree: "Higher Secondary Education (Class 12)",
            institution: "Kendriya Vidyalaya, Payyanur",
            period: "2022",
            details: "CBSE: 76.4% — JEE Main: 90th percentile"
        }
    ];

    const skills = {
        "Programming": ["C", "C++", "Rust", "Python", "Java", "C#", "JavaScript", "Dart", "SQL", "Bash", "PowerShell"],
        "Development": ["OOP", "Data Structures", "Algorithms", "Design Patterns", "Debugging", "Git/GitHub", "Agile", "RESTful APIs"],
        "Web & Mobile": ["HTML", "CSS", "React", "Node.js", "Flutter", "Android SDK", "Firebase"],
        "Systems": ["Windows Internals", "Linux (Arch, Ubuntu, Debian)", "Kernel Optimization", "Virtualization (Proxmox)", "TrueNAS", "RAID"],
        "Machine Learning": ["NumPy", "Pandas", "Scikit-learn", "PyTorch", "TensorFlow", "GNNs"]
    };

    const certifications = [
        "Cisco CCST — IT Support & Cybersecurity (2024)",
        "Microsoft/LinkedIn — Software Development Essentials (2024)",
        "Oracle Academy — Java Fundamentals & Advanced Java (2023)",
        "HackerRank: Java & Python (5-star)",
        "ISRO IIRS — AI/ML for Geodata Analysis (2024)"
    ];

    const leadership = [
        "Contributed to Indian Sign Language Awareness documentary (5,000+ viewers)",
        "Volunteer: Amritavarsham 70 Clean-up Drive, Hope Charitable Trust (5+ hours)",
        "Rajyapuraskar Award — Bharat Scouts & Guides (Top 1% nationally)"
    ];

    // Priority Projects from Resume with Enhanced Descriptions
    const highlightProjects = {
        "WinKnight": {
            desc: "Architected diagnostic system with 4 modules processing 100+ checks, automatically resolving 85% of Windows issues. Integrated 5+ Windows APIs (WMI, Event Log, VSS) using OOP, reducing diagnostic time from 2 hours to 2 minutes (98% improvement).",
            tech: ["C#", "PowerShell", "Windows API"],
            github: "https://github.com/ARJUN-RAJESH-24/WinKnight"
        },
        "Arcade-OS": {
            desc: "Created 850MB bootable Linux distribution supporting 12+ emulators and 8 gaming platforms with web-based ROM manager. Optimized kernel achieving 25% reduction in input latency and 40% memory savings through zram compression.",
            tech: ["Bash", "Python", "C", "Linux"],
            github: "https://github.com/ARJUN-RAJESH-24/Arcade-OS"
        },
        "Material-Discovery-with-AI": {
            desc: "Built ML pipeline processing 75,000+ crystal structures from Materials Project database for property prediction. Trained CGCNN achieving 0.92 R² score, outperforming baseline models by 18%.",
            tech: ["Python", "PyTorch", "PyG", "GNN"],
            github: "https://github.com/ARJUN-RAJESH-24/Material-Discovery-with-AI"
        },
        "Machine-Learning-Case-Study": {
            title: "ML Text Classification System",
            desc: "Designed evaluation framework analyzing 50,000+ text samples across 4 datasets for content moderation. Implemented TF-IDF vectorization with 100,000+ features; achieved 89% F1-score.",
            tech: ["Python", "Scikit-learn", "XGBoost", "NLP"],
            github: "https://github.com/ARJUN-RAJESH-24/Machine-Learning-Case-Study"
        },
        "DemonModeProtocol": {
            desc: "Developed Android app with GPS tracking processing 1,000+ location points per session with 95% accuracy. Engineered offline-first SQLite architecture enabling zero data loss; serving 100+ beta users.",
            tech: ["Flutter", "Dart", "Firebase", "SQLite"],
            github: "https://github.com/ARJUN-RAJESH-24/DemonModeProtocol"
        }
    };

    return (
        <div className="min-h-screen bg-cyber-dark text-gray-200 font-mono transition-colors duration-500 selection:bg-cyber-cyan selection:text-black">
            {/* Navbar - Racing Header */}
            <nav className="sticky top-0 z-50 bg-cyber-dark/90 backdrop-blur-xl border-b border-cyber-border">
                {/* Racing Track Animation */}
                <div className="h-1 w-full bg-cyber-gray overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent w-1/2 animate-slide-fast"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Terminal size={20} className="text-cyber-cyan animate-pulse" />
                        <h1 className="text-xl tracking-wider font-bold">
                            <span className="text-cyber-cyan">PLAYER:</span> ARJUN RAJESH
                        </h1>
                        <span className="hidden md:block text-xs text-cyber-purple border border-cyber-purple px-2 py-0.5 rounded ml-4">
                            LEVEL 21
                        </span>
                    </div>

                    <div className="flex items-center gap-6 text-sm">
                        <ul className="hidden md:flex space-x-6">
                            {['MISSIONS', 'SKILL_TREE', 'ARMORY', 'COMMS'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="hover:text-cyber-cyan transition-colors tracking-widest">
                                        [{item}]
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 bg-cyber-cyan text-black px-4 py-1.5 font-bold hover:bg-white transition-all transform hover:skew-x-12"
                        >
                            <ExternalLink size={16} />
                            RESUME_V3.0
                        </a>
                    </div>
                </div>
            </nav>

            {/* Hero Section - Demon Mode Protocol */}
            <section className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 overflow-hidden">
                {/* Background Grid Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(13,17,23,0.9),rgba(13,17,23,0.9)),url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-block mb-6 animate-float">
                        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full p-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-fire animate-spin-slow">
                            <div className="w-full h-full rounded-full bg-cyber-dark p-1 overflow-hidden">
                                <img
                                    src="/red kurtha.jpg"
                                    alt="Arjun Rajesh"
                                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 font-mono text-cyber-cyan/80 text-sm tracking-[0.2em] animate-pulse">
                        &lt; SYSTEM_ONLINE /&gt;
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            BUILDING THE
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple filter drop-shadow-[0_0_10px_rgba(0,247,255,0.3)]">
                            FUTURE
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed font-sans">
                        Systems Architect & Full-Stack Developer specialized in
                        <span className="text-cyber-fire"> high-performance computing</span>,
                        <span className="text-cyber-purple"> AI pipelines</span>, and
                        <span className="text-cyber-cyan"> robust infrastructure</span>.
                    </p>

                    {/* ASCII Box */}
                    <div className="hidden md:block mb-12 text-xs md:text-sm text-cyber-cyan/60 font-mono whitespace-pre overflow-x-auto border border-cyber-border p-4 bg-cyber-gray/30 rounded">
                        {`╔═══════════════════════════════════════════════╗
║  [WARNING] DEMON MODE PROTOCOL ACTIVATED      ║
║  -------------------------------------------  ║
║  > CURRENT MISSION:   COMPLETE OVERHAUL       ║
║  > STACK EFFICIENCY:  98.5%                   ║
║  > COFFEE LEVEL:      CRITICAL                ║
╚═══════════════════════════════════════════════╝`}
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="#armory" className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-none border border-cyber-cyan text-cyber-cyan font-bold hover:text-black transition-colors">
                            <div className="absolute inset-0 w-0 bg-cyber-cyan transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span className="relative flex items-center gap-2">
                                <Code size={20} /> VIEW PROJECTS
                            </span>
                        </a>
                        <a href="#comms" className="px-8 py-3 border border-gray-700 text-gray-300 hover:border-cyber-purple hover:text-cyber-purple transition-colors flex items-center gap-2">
                            <Mail size={20} /> CONTACT ME
                        </a>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="missions" className="py-20 px-6 border-t border-cyber-border bg-cyber-gray/20">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Trophy className="text-cyber-fire" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                            MISSION_LOG
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-cyber-border hover:border-cyber-cyan transition-colors duration-300">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyber-dark border-2 border-cyber-cyan"></div>
                                <div className="mb-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                                    <span className="text-cyber-cyan font-mono text-sm border border-cyber-cyan/30 px-2 py-0.5 rounded bg-cyber-cyan/10">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-xl text-cyber-purple mb-4 font-medium">{exp.company}</h4>
                                <ul className="space-y-3 mb-6">
                                    {exp.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-400 group">
                                            <span className="text-cyber-cyan mt-1.5 text-xs group-hover:translate-x-1 transition-transform">➤</span>
                                            <span>{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skill_tree" className="py-20 px-6 bg-cyber-dark">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Zap className="text-cyber-cyan" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                            SKILL_TREE
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(skills).map(([category, items], idx) => (
                            <div key={idx} className="bg-cyber-gray/30 border border-cyber-border p-6 hover:border-cyber-cyan/50 transition-colors group">
                                <h3 className="text-xl font-bold text-cyber-fire mb-6 flex items-center gap-2">
                                    <Shield size={18} /> {category.toUpperCase()}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-cyber-dark border border-gray-700 text-sm text-gray-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-colors cursor-crosshair">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="armory" className="py-20 px-6 border-t border-cyber-border bg-cyber-gray/20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-16">
                        <Database className="text-cyber-purple" size={32} />
                        <h2 className="text-3xl md:text-4xl font-bold tracking-widest text-white">
                            THE_ARMORY
                        </h2>
                    </div>

                    {/* Highlight Projects */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {Object.entries(highlightProjects).map(([key, project], idx) => (
                            <div key={idx} className="group relative bg-cyber-dark border border-cyber-border overflow-hidden hover:border-cyber-cyan transition-all duration-300">
                                {/* Image Placeholder or Actual Image */}
                                <div className="h-48 overflow-hidden bg-cyber-gray relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-transparent opacity-60 z-10"></div>
                                    <img
                                        src={`/project-images/${key.toLowerCase()}-thumbnail.png`}
                                        alt={key}
                                        onError={(e) => { e.target.src = 'https://placehold.co/600x400/0d1117/00F7FF?text=PROJECT_CLASSIFIED' }}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">{project.title || key}</h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-400 mb-6 font-light leading-relaxed">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-xs font-mono text-cyber-purple border border-cyber-purple/30 px-2 py-1">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a href={project.github || `https://github.com/ARJUN-RAJESH-24/${key}`} target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyber-cyan transition-colors">
                                            <Github size={16} /> REPO
                                        </a>
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyber-fire transition-colors">
                                                <ExternalLink size={16} /> DEMO
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* GitHub Fetched Projects */}
                    {githubProjects.length > 0 && (
                        <>
                            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                                <Terminal size={24} /> OTHER_DEPLOYMENTS
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {githubProjects.map((project, idx) => (
                                    <div key={idx} className="bg-cyber-dark/50 border border-cyber-border p-6 hover:border-gray-500 transition-colors">
                                        <div className="flex justify-between items-start mb-4">
                                            <h4 className="text-lg font-bold text-gray-200 truncate pr-4">{project.title}</h4>
                                            <a href={project.github} className="text-gray-500 hover:text-white"><Github size={18} /></a>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-4 line-clamp-3 h-16">
                                            {project.desc}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map((t, i) => (
                                                <span key={i} className="text-[10px] text-cyber-cyan border border-cyber-cyan/20 px-1.5 py-0.5">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer id="comms" className="bg-black py-12 border-t border-cyber-fire/30">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-8 tracking-[0.5em] animate-pulse">BOX BOX BOX</h2>

                    <div className="flex justify-center gap-8 mb-12">
                        <a href="https://github.com/ARJUN-RAJESH-24" className="text-gray-400 hover:text-white hover:scale-125 transition-all transform">
                            <Github size={32} />
                        </a>
                        <a href="https://linkedin.com/in/arjun-rajesh-30860728b" className="text-gray-400 hover:text-[#0A66C2] hover:scale-125 transition-all transform">
                            <Linkedin size={32} />
                        </a>
                        <a href="mailto:arjunrajesh2005@gmail.com" className="text-gray-400 hover:text-cyber-fire hover:scale-125 transition-all transform">
                            <Mail size={32} />
                        </a>
                    </div>

                    <div className="font-mono text-sm text-gray-500">
                        <p className="mb-2">SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span></p>
                        <p>© 2025 ARJUN RAJESH // ALL SYSTEMS GO</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;