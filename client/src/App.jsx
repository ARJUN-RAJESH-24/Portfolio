import React from 'react';

function App() {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-lg">
                <h1 className="text-2xl font-bold tracking-wider">Arjun Rajesh</h1>
                <ul className="flex gap-6 text-lg">
                    <li><a href="#about" className="hover:text-cyan-400">About</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400">Projects</a></li>
                    <li><a href="#projects" className="hover:text-cyan-400">Vision</a></li>
                    <li><a href="#contact" className="hover:text-cyan-400">Contact</a></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center px-8 py-24 text-center md:text-left">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Hey, I'm <span className="text-cyan-400">Arjun</span><br />
                        A Builder of Digital Worlds
                    </h2>
                    <p className="text-lg text-gray-400">
                        Rust backend • React frontend • Cybersecurity curious • Discipline = Freedom.
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="#projects" className="bg-cyan-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition">
                            View Work
                        </a>
                        <a href="#contact" className="border border-cyan-500 px-6 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition">
                            Contact Me
                        </a>
                    </div>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="https://i.imgur.com/2s9eJvr.png" alt="Hero Graphic" className="w-full rounded-xl shadow-lg" />
                </div>
            </section>
        </div>
    );
}

export default App;
