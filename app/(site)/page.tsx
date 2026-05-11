export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 to-zinc-900 px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-7xl font-bold tracking-tight mb-6">
            Hi, I&apos;m <span className="text-emerald-400">Corbin Lamplot</span>
          </h1>
          <p className="text-2xl text-zinc-400 mb-10">
            Versatile Software & Embedded Engineer | Full-Stack & IoT/Hardware Developer | Founder @ Garden Sync
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-emerald-400 transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/30 rounded-full font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-8">About Me</h2>
        <p className="text-lg text-zinc-800 leading-relaxed">
        I’m a versatile Software & Embedded Systems Engineer with a B.S. in Computer Science from the University of Nebraska-Lincoln (ABET-accredited) and 4+ years of hands-on development experience.
        Proficient in C#, C++, .NET, JavaScript/TypeScript, React, Docker, SQL/NoSQL, and AI, I build complete solutions from microcontroller firmware all the way to production-ready cloud applications.
        At Kage Innovation I delivered automation solutions with API integration and custom applications. This included C#/.NET tools that cut R&D-to-production time by 70%, a React Native Bluetooth app for hydraulic plow control, ESP32/STM32 microcontroller systems, PLC programming for industrial electrical solutions, and M-Files/M1 (ERP software) customizations for business workflows and automations.
        In parallel, I founded Garden Sync — an IoT web app that brings precision agriculture directly to home gardeners. I designed and developed the full MERN-stack application (React + Express + MongoDB), implemented secure JWT authentication, hosted an MQTT server for real-time device communication, containerized everything with Docker + nginx, and set up CI/CD with GitHub Actions, all while adding ESP32 support for effortless user device programming.
        I thrive on independent project execution and bridging embedded systems, modern web technologies, cloud infrastructure, and AI to ship real products quickly.
        Open to conversations about full-stack, IoT, embedded software, or versatile engineering roles. Feel free to reach out!
        </p>
      </section>

      {/* Projects Grid (placeholder) */}
      <section id="projects" className="py-24 px-6 bg-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Will be replaced with dynamic cards from Sanity later */}
            <div className="group bg-zinc-800 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
              <div className="h-64 bg-zinc-700 flex items-center justify-center">
                <span className="text-zinc-500">Project Image / Video</span>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium mb-2">Project Title</h3>
                <p className="text-zinc-400 mb-4">Short description goes here...</p>
                <div className="flex gap-2">
                  <span className="text-xs px-3 py-1 bg-zinc-700 rounded-full">Next.js</span>
                  <span className="text-xs px-3 py-1 bg-zinc-700 rounded-full">TypeScript</span>
                </div>
              </div>
            </div>
            
            {/* Duplicate the card above for more placeholders */}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-semibold mb-6">Let&apos;s Connect</h2>
          <p className="text-zinc-400 mb-8">
            Currently open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:you@email.com"
            className="inline-block px-10 py-4 bg-emerald-500 text-black font-medium rounded-full hover:bg-emerald-400 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>
    </main>
  );
}