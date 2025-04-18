import React, { useState, useEffect } from 'react';

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
            {/* Navbar */}
            <nav className="sticky top-0 z-10 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
                <h1 className="text-2xl font-light tracking-wider">ARJUN<span className="text-cyan-400 font-medium">RAJESH</span></h1>
                <ul className="flex space-x-6 text-sm uppercase tracking-wide font-light">
                    {['about', 'projects', 'vision', 'contact'].map((item) => (
                        <li key={item}>
                            <a href={`#${item}`} className="hover:text-cyan-400 transition-colors">{item}</a>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setDarkMode(!darkMode)} className="ml-4 text-sm border px-3 py-1 rounded-md border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition">
                    {darkMode ? 'Light' : 'Dark'} Mode
                </button>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-8 py-32 max-w-6xl mx-auto">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-wide">
                        Hey, I'm <span className="text-cyan-400 font-normal">Arjun</span>
                        <br className="hidden md:block" />
                        <span className="text-3xl md:text-4xl block mt-2 font-extralight">Builder of Digital Worlds</span>
                    </h2>
                    <p className="text-base text-gray-600 dark:text-gray-400 font-light tracking-wide">
                        Rust backend • React frontend • Cybersecurity curious • Discipline = Freedom.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start pt-4">
                        <a href="#projects" className="border border-cyan-500 text-cyan-400 px-6 py-3 rounded-md font-light tracking-wide hover:bg-cyan-500 hover:text-gray-900 transition">
                            View Work
                        </a>
                        <a href="#contact" className="text-gray-600 dark:text-gray-400 px-6 py-3 rounded-md hover:text-white transition-colors">
                            Contact Me →
                        </a>
                    </div>
                </div>

                <div className="md:w-1/2 mt-16 md:mt-0 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-cyan-400 rounded-md blur-md opacity-20 translate-x-2 translate-y-2"></div>
                        <img
                            src="/red kurtha.jpg"
                            alt="Profile"
                            className="w-64 h-64 object-cover rounded-md shadow-2xl grayscale hover:grayscale-0 transition duration-500"
                        />
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="px-8 py-32 bg-gray-100 dark:bg-gray-800/30 transition-colors">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-light tracking-wider mb-8 text-cyan-400">ABOUT ME</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                        I'm a passionate software developer focused on building scalable applications. I specialize in Rust and React, combining
                        efficient backends with sleek user interfaces.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="px-8 py-32">
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-2xl font-light tracking-wider mb-12 text-center text-cyan-400">SELECTED WORK</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group bg-gray-100 dark:bg-gray-800/30 rounded-md overflow-hidden hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                                <div className="p-6">
                                    <h4 className="text-lg font-medium mb-2">Project {item}</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Brief description and tech stack.</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision */}
            <section id="vision" className="px-8 py-32 bg-gray-100 dark:bg-gray-800/30 transition-colors">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-light tracking-wider mb-8 text-cyan-400">MY VISION</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                        I believe technology should be both powerful and accessible. My mission is to solve real problems with secure, high-performance, and elegant digital solutions.
                    </p>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="px-8 py-32">
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-2xl font-light tracking-wider mb-8 text-cyan-400">GET IN TOUCH</h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 font-light leading-relaxed mb-12">
                        Let's collaborate or have a conversation about tech!
                    </p>
                    <form className="max-w-lg mx-auto space-y-6">
                        <input type="text" placeholder="Name" className="w-full p-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-cyan-400 outline-none transition" />
                        <input type="email" placeholder="Email" className="w-full p-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-cyan-400 outline-none transition" />
                        <textarea placeholder="Message" rows="4" className="w-full p-4 bg-transparent border-b border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:border-cyan-400 outline-none transition"></textarea>
                        <button type="submit" className="mt-8 border border-cyan-500 text-cyan-400 px-8 py-3 rounded-md font-light tracking-wide hover:bg-cyan-500 hover:text-gray-900 transition">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white dark:bg-gray-900 text-center py-12 text-gray-500 text-sm">
                © {new Date().getFullYear()} Arjun Rajesh. All rights reserved.
            </footer>
        </div>
    );
}

export default App;