import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Sreelesh Kunnath. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}
