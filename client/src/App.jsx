import React, { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [backendMessage, setBackendMessage] = useState('');
    // New state to store projects fetched from the Rust backend
    const [githubProjects, setGithubProjects] = useState([]);

    // Effect to toggle dark mode class on the documentElement
    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]); // Re-run when darkMode changes

    // Effect to fetch initial backend message and GitHub projects
    useEffect(() => {
        // Function to fetch the simple message from the Rust backend
        const fetchBackendMessage = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const message = await response.text();
                setBackendMessage(message);
            } catch (error) {
                console.error("Failed to fetch backend message:", error);
                setBackendMessage("Failed to connect to backend.");
            }
        };

        // Function to fetch GitHub projects from the Rust backend
        const fetchGithubProjects = async () => {
            try {
                const response = await fetch('http://127.0.0.1:3000/github-repos'); // Your new backend endpoint
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const projects = await response.json();
                setGithubProjects(projects); // Update the state with fetched projects
            } catch (error) {
                console.error("Failed to fetch GitHub projects:", error);
                // Optionally, display an error message for the projects section
            }
        };

        // Call both fetch functions when the component mounts
        fetchBackendMessage();
        fetchGithubProjects();
    }, []); // Empty dependency array means this effect runs only once after the initial render

    // Your existing static projects. You can decide if you want to keep these
    // or rely entirely on GitHub. For now, they'll be combined.
    const staticProjects = [
        {
            title: "Java-Project-Amrita-Management-System-main",
            desc: "A management system built with Java.",
            tech: ["Java"],
            github: "https://github.com/ARJUN-RAJESH-24/Java-Project-Amrita-Management-System-main",
            demo: "#", // Replace with actual demo link if available
            image: "/project-images/java-project.png"
        },
        {
            title: "AI-Video-and-Image-Upscaler",
            desc: "An AI-powered application for upscaling video and image resolution.",
            tech: ["AI", "Python"],
            github: "https://github.com/ARJUN-RAJESH-24/AI-Video-and-Image-Upscaler",
            demo: "#", // Replace with actual demo link if available
            image: "/project-images/ai-upscaler.png"
        },
        {
            title: "Password-Vault",
            desc: "A secure, on-device password vault app built with Flutter, featuring AES-256 encryption and encrypted export/import.",
            tech: ["Flutter", "Dart", "AES-256"],
            github: "https://github.com/ARJUN-RAJESH-24/Password-Vault",
            demo: "#", // Replace with actual demo link if available
            image: "/project-images/password-vault.png"
        },
        {
            title: "Youtube-Video-Downloader-using-React-Vite-and-Flask",
            desc: "A YouTube video downloader with a React-Vite frontend and a Flask backend.",
            tech: ["React", "Vite", "Flask", "Python"],
            github: "https://github.com/ARJUN-RAJESH-24/Youtube-Video-Downloader-using-React-Vite-and-Flask",
            demo: "#",
            image: "/project-images/youtube-downloader.png"
        },
        {
            title: "WinKnight",
            desc: "An automated, self-healing Windows tool that proactively creates restore points, diagnoses system issues, and performs repairs using modules like 'RestoreGuard'.",
            tech: ["C#"],
            github: "https://github.com/ARJUN-RAJESH-24/WinKnight",
            demo: "#",
            image: "/project-images/winknight.png"
        },
        {
            title: "Semester-Planner",
            desc: "A web-based tool for planning and organizing academic semesters.",
            tech: ["Web Development"],
            github: "https://github.com/ARJUN-RAJESH-24/Semester-Planner",
            demo: "#",
            image: "/project-images/semester-planner.png"
        },
        {
            title: "F1_Discord_Bot",
            desc: "A Discord bot for Formula 1 fans to get race information, news, and more.",
            tech: ["Python", "Discord API"],
            github: "https://github.com/ARJUN-RAJESH-24/F1_Discord_Bot",
            demo: "#",
            image: "/project-images/f1-bot.png"
        },
        {
            title: "DemonModeProtocol-Android-App",
            desc: "An Android application related to the DemonModeProtocol.",
            tech: ["Android", "Java/Kotlin"],
            github: "https://github.com/ARJUN-RAJESH-24/DemonModeProtocol-Android-App",
            demo: "#",
            image: "/project-images/demonmode-android.png"
        },
        {
            title: "Portfolio",
            desc: "My portfolio site showcasing my projects in software development, web design, and open-source contributions.",
            tech: ["React", "Tailwind CSS"],
            github: "https://github.com/ARJUN-RAJESH-24/Portfolio",
            demo: "#",
            image: "/project-images/portfolio.png"
        },
        {
            title: "CBSE Exam Result Publisher & Student Viewing Site",
            desc: "A web-based application to streamline CBSE exam result publishing and student viewing, offering distinct functionalities for examiners and students.",
            tech: ["Node.js", "Express.js", "Handlebars.js", "MongoDB/SQL (Implied)", "Python"],
            github: "https://github.com/ARJUN-RAJESH-24/CBSE-Exam-Result-Publisher-and-Student-Viewing-Site",
            demo: "#", // Replace with actual demo link if available
            image: "/project-images/cbse-thumbnail.jpg"
        },
        {
            title: "Advanced Geometric Shape Generator",
            desc: "An enhanced console-based Java application with a graphical user interface (GUI) for generating and visualizing 2D and 3D geometric shapes.",
            tech: ["Java", "Java Swing"],
            github: "https://github.com/ARJUN-RAJESH-24/Advanced-Geometric-Shape-Generator",
            demo: "#",
            image: "/project-images/geometric-generator-thumbnail.png"
        },
        {
            title: "DemonModeProtocol (Mobile App)",
            desc: "An official mobile app for the Demon Mode Protocol lifestyle system, built with Flutter to log, track, and dominate physical, mental, and spiritual transformation.",
            tech: ["Flutter", "Dart", "Firebase", "SQLite"],
            github: "https://github.com/ARJUN-RAJESH-24/DemonModeProtocol_Git",
            demo: "#",
            image: "/project-images/demonmode-thumbnail.png"
        },
        {
            title: "Project Management Foundations",
            desc: "Completed comprehensive project management course from LinkedIn Learning covering fundamentals and best practices.",
            tech: ["Project Management", "Leadership", "Planning"],
            github: "https://github.com/ARJUN-RAJESH-24", // Link to your profile since this is a certification
            demo: "#",
            image: "/project-images/project-management.png"
        }
    ];

    // Combine static projects with dynamically fetched GitHub projects
    // You might want to remove duplicates if a static project also exists on GitHub,
    // or prioritize static projects if you want to override fetched data.
    // For simplicity, we'll just concatenate them.
    const allProjects = [...staticProjects, ...githubProjects];

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-50 font-sans transition-colors duration-500">
            {/* Navbar: Sticky, blurred background, subtle shadow, good padding. */}
            <nav className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-12 py-4 bg-neutral-50/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm">
                <h1 className="text-xl md:text-2xl font-light tracking-wider">ARJUN <span className="text-cyan-500 font-medium">RAJESH</span></h1>
                <div className="flex items-center space-x-4">
                    {/* Navigation links for smooth scrolling - hidden on small screens */}
                    <ul className="hidden md:flex space-x-6 text-sm uppercase font-light">
                        {['about', 'projects', 'contact'].map((item) => (
                            <li key={item}>
                                <a href={`#${item}`} className="hover:text-cyan-500 transition-colors duration-300">{item}</a>
                            </li>
                        ))}
                    </ul>
                    {/* Dark Mode Toggle Button */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="text-sm md:text-base border px-3 py-1.5 rounded-full border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                        aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {darkMode ? 'Light' : 'Dark'}
                    </button>
                </div>
            </nav>

            {/* Hero Section: Centered content, generous vertical padding. */}
            <section className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center max-w-3xl mx-auto py-16 px-4">
                {/* Profile Image with subtle shadow and transition effects */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 shadow-xl dark:shadow-cyan-500/20 group">
                    <img
                        src="/red kurtha.jpg" // This is your personal profile image from client/public.
                        alt="Arjun Rajesh Profile"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    {/* Subtle overlay for aesthetic effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Main Heading and Tagline */}
                <h2 className="text-4xl md:text-6xl font-extralight leading-tight tracking-tight mb-4">
                    Hey, I'm <span className="text-cyan-500 font-normal">Arjun</span>
                    <br />
                    <span className="block mt-2 text-2xl md:text-4xl font-light text-neutral-700 dark:text-neutral-300">Building Digital Worlds</span>
                </h2>
                {/* Short Bio/Skills */}
                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light max-w-xl mx-auto mb-10">
                    B.Tech CSE Student • Rust backend • React frontend • Cybersecurity Expert • National Olympiad Winner. 
                    Crafting secure, high-performance digital solutions with 15+ certifications from Oracle, Cisco, and Microsoft.
                </p>

                {/* Backend Message Display (Optional - keeps the connection proof) */}
                {backendMessage && (
                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-600 mb-6">
                        {backendMessage}
                    </p>
                )}

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#projects" className="bg-cyan-500 text-white px-7 py-3 rounded-full text-lg font-medium shadow-md hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300">
                        View My Work
                    </a>
                    <a href="#contact" className="border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-7 py-3 rounded-full text-lg font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-all duration-300">
                        Get In Touch &rarr;
                    </a>
                </div>
            </section>

            {/* About Section: Clean, centered, subtle background. */}
            <section id="about" className="py-20 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-500 px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-3xl font-light tracking-wide mb-12 text-center text-cyan-500">ABOUT ME</h3>
                    
                    {/* Bio */}
                    <div className="text-center mb-12">
                        <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-light leading-relaxed mb-6">
                            I'm a passionate B.Tech Computer Science student at <span className="font-medium text-cyan-600 dark:text-cyan-400">Amrita Vishwa Vidyapeetham</span> (2023-2027) with expertise in 
                            <span className="font-medium text-cyan-600 dark:text-cyan-400"> Rust</span> for high-performance backends and 
                            <span className="font-medium text-cyan-600 dark:text-cyan-400"> React</span> for engaging user interfaces.
                        </p>
                        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                            Fluent in <span className="font-medium">English, Hindi, and Malayalam</span>, I bring a diverse perspective to technology solutions. 
                            I'm constantly exploring cybersecurity and emerging technologies to deliver secure, scalable, and elegant digital experiences.
                        </p>
                    </div>

                    {/* Awards & Recognition */}
                    <div className="mb-12">
                        <h4 className="text-xl font-medium text-center mb-6 text-cyan-500">Awards & Recognition</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Bharath Scout & Guide Rajyapuraskar Award</h5>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Leadership Excellence</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Multiple National Cyber Olympiad</h5>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Cybersecurity Champion</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Certifications */}
                    <div className="mb-12">
                        <h4 className="text-xl font-medium text-center mb-6 text-cyan-500">Key Certifications</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Cisco CCST Cybersecurity</h5>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">Network Security Expert</p>
                            </div>
                            <div className="text-center bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Oracle Java Programming</h5>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">Enterprise Development</p>
                            </div>
                            <div className="text-center bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Microsoft Career Essentials</h5>
                                <p className="text-xs text-neutral-600 dark:text-neutral-400">Software Development</p>
                            </div>
                        </div>
                        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-4">
                            + 12 additional certifications from HackerRank, LinkedIn Learning, Infosys, and ISRO
                        </p>
                    </div>

                    {/* Community Service */}
                    <div>
                        <h4 className="text-xl font-medium text-center mb-6 text-cyan-500">Community Impact</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Hope Charitable Trust</h5>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Community Service Leader</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                                <h5 className="font-semibold text-neutral-800 dark:text-neutral-100">Amritavarsham 70</h5>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">Environmental Clean-up Drive</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section: Grid layout, aesthetic cards. */}
            <section id="projects" className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl font-light tracking-wide mb-12 text-center text-cyan-500">SELECTED WORK</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Iterate over allProjects (which now includes both static and fetched GitHub projects) */}
                        {allProjects.map((project, index) => (
                            <div key={project.github} className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl dark:shadow-neutral-700 dark:hover:shadow-neutral-600 transform hover:-translate-y-2 transition-all duration-500 group">
                                {/* Project Image */}
                                <div className="h-48 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center overflow-hidden">
                                    {project.image ? (
                                        <img src={project.image} alt={`${project.title} Thumbnail`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.target.onerror = null; e.target.src="/project-images/placeholder.png" }} />
                                    ) : (
                                        // Fallback to a generic placeholder image if no image path or image load fails
                                        <img src="/project-images/placeholder.png" alt="Project Placeholder" className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-100">{project.title}</h4>
                                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">{project.desc}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.map((tech, techIndex) => (
                                            <span key={`${project.github}-${techIndex}`} className="text-xs font-medium bg-cyan-100 text-cyan-800 px-2.5 py-1 rounded-full dark:bg-cyan-700 dark:text-cyan-100">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-end gap-4 text-sm font-medium">
                                        {/* Only show "Live Demo" if a valid demo link is available */}
                                        {project.demo && project.demo !== '#' && (
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200 transition-colors duration-300">Live Demo &rarr;</a>
                                        )}
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors duration-300">GitHub &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section: Clean form, centered. */}
            <section id="contact" className="py-20 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-500 px-6 md:px-12">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-3xl font-light tracking-wide mb-8 text-cyan-500">GET IN TOUCH</h3>
                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                    </p>
                    
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        <div className="text-center p-4 bg-white dark:bg-neutral-700 rounded-lg">
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Email</h4>
                            <a href="mailto:arjunrajesh59@gmail.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                                arjunrajesh59@gmail.com
                            </a>
                        </div>
                        <div className="text-center p-4 bg-white dark:bg-neutral-700 rounded-lg">
                            <h4 className="font-semibold text-neutral-800 dark:text-neutral-100 mb-2">Phone</h4>
                            <a href="tel:+919746917346" className="text-cyan-600 dark:text-cyan-400 hover:underline">
                                +91 97469 17346
                            </a>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-6 mb-10">
                        <a href="https://github.com/ARJUN-RAJESH-24" target="_blank" rel="noopener noreferrer" 
                           className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
                            GitHub →
                        </a>
                        <a href="https://linkedin.com/in/arjun-rajesh-30860728b" target="_blank" rel="noopener noreferrer" 
                           className="text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
                            LinkedIn →
                        </a>
                    </div>
                    
                    <form className="max-w-md mx-auto space-y-5">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" />
                        <input type="email" placeholder="Your Email" className="w-full p-4 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300" />
                        <textarea placeholder="Your Message" rows="5" className="w-full p-4 bg-neutral-50 dark:bg-neutral-700 border border-neutral-300 dark:border-neutral-600 rounded-lg text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all duration-300"></textarea>
                        <button type="submit" className="w-full sm:w-auto bg-cyan-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer: Simple copyright */}
            <footer className="text-center py-10 text-neutral-500 text-sm">
                © {new Date().getFullYear()} Arjun Rajesh.
            </footer>
        </div>
    );
}

export default App;