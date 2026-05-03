import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import RotatingText from '../components/text.jsx';
import profileImg from '../assets/circle_profile.png';
import {
  GraduationCap,
  MapPin,
  Briefcase,
  Trophy,
  Mail,
  Cloud,
  BarChart3,
  Code
} from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const techStackIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", alt: "C++" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", alt: "C" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", alt: "Express.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", alt: "MongoDB" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", alt: "Bootstrap" },
  ];

  const stats = [
    { value: "8.6", label: "CGPA" },
    { value: "4+", label: "Projects Built" },
    { value: "3+", label: "Certifications" },
    { value: "85%", label: "ML Accuracy" },
  ];

  return (
    <div
      className="min-h-screen font-sans"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      {/* ── Hero ─────────────────────────────────────────────── */}
      <main className="max-w-4xl mx-auto px-6 pt-16 pb-20">

        {/* ── Hero: two-column layout ── */}
        <div
          className={`flex flex-col-reverse sm:flex-row items-center sm:items-start gap-10 sm:gap-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: "0ms" }}
        >
          {/* LEFT — Text */}
          <div className="flex-1 min-w-0">

            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-10"
              style={{
                backgroundColor: "rgba(0, 200, 83, 0.08)",
                border: "1px solid rgba(0, 200, 83, 0.2)",
                color: "#00a844",
                fontFamily: "var(--font-body)",
              }}
            >
              <span
                className="glow-dot rounded-full"
                style={{ width: "7px", height: "7px", backgroundColor: "#00C853", flexShrink: 0 }}
              />
              Open to internships &amp; collaborations
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              hi, I'm{" "}
              <span style={{ color: "var(--accent)" }}>Sukumar</span>
            </h1>

            {/* Rotating Tag */}
            <div className="mt-4 mb-6">
              <RotatingText
                texts={["Software Engineer", "Full-Stack Developer", "Problem Solver", "ML Enthusiast"]}
                mainClassName="inline-flex px-4 py-2 rounded-lg text-white text-2xl sm:text-3xl font-bold items-center justify-center rotating-text"
                style={{ backgroundColor: "var(--accent)" }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={2200}
              />
            </div>

            <p
              className="text-lg max-w-2xl leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
            >
              I build scalable, user-centric applications by combining full-stack engineering with machine learning.
              Currently a Computer Science undergraduate at{" "}
              <span style={{ color: "var(--text-color)", fontWeight: 500 }}>MGIT, Hyderabad</span>, focused on
              solving real-world problems through clean, efficient systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-85 active:scale-95"
                style={{
                  backgroundColor: "var(--button-bg)",
                  color: "var(--button-text)",
                  fontFamily: "var(--font-body)",
                  border: "none",
                }}
              >
                Get in touch
              </button>

              <Link
                to="/projects"
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--text-color)",
                  border: "1px solid var(--border-color)",
                  fontFamily: "var(--font-body)",
                  textDecoration: "none",
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "var(--link-bg-hover)"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = "transparent"}
              >
                View projects →
              </Link>
            </div>
          </div>

          {/* RIGHT — Profile Art */}
          <div
            className="flex-shrink-0"
            style={{ width: "220px", height: "220px", position: "relative" }}
          >
            {/* Decorative spinning rings */}
            <div className="profile-ring ring-outer-2" />
            <div className="profile-ring ring-outer-1" />

            {/* Radial glow blob behind image */}
            <div className="profile-glow" />

            {/* Orbit dot 1 — accent color */}
            <div className="orbit-dot orbit-dot-1" />
            {/* Orbit dot 2 — green */}
            <div className="orbit-dot orbit-dot-2" />

            {/* Floating accent squares */}
            <div className="deco-sq deco-sq-1" />
            <div className="deco-sq deco-sq-2" />

            {/* Grid-dot cluster top-right */}
            <div className="dot-grid" aria-hidden="true">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="dot-grid-cell" />
              ))}
            </div>

            {/* Image circle */}
            <div className="profile-img-wrap">
              <img
                src={profileImg}
                alt="Sukumar Erugadindla"
                className="profile-img"
              />
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-4 gap-4 mt-12 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: "300ms" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card p-4 text-center"
              style={{ backgroundColor: "var(--bg-card)" }}
            >
              <div
                className="text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs mt-1"
                style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── Tech Stack Scroll ──────────────────────────────── */}
        <section
          className={`mt-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: "400ms" }}
        >
          <span className="section-label">Tech Stack</span>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-color)" }}
          >
            Tools &amp; Technologies
          </h2>
          <div className="relative overflow-hidden w-full">
            <div
              className="absolute left-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
              style={{ background: "linear-gradient(to right, var(--bg-color), transparent)" }}
            />
            <div
              className="absolute right-0 top-0 bottom-0 z-10 w-12 pointer-events-none"
              style={{ background: "linear-gradient(to left, var(--bg-color), transparent)" }}
            />
            <div className="flex gap-4 animate-infinite-scroll">
              {[...techStackIcons, ...techStackIcons].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl min-w-[76px] transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <img
                    src={tech.src}
                    alt={tech.alt}
                    className="w-10 h-10 transition-all duration-300"
                    style={{ filter: "grayscale(0.2)" }}
                    onMouseEnter={e => { e.currentTarget.style.filter = "grayscale(0)"; }}
                    onMouseLeave={e => { e.currentTarget.style.filter = "grayscale(0.2)"; }}
                  />
                  <span
                    className="text-xs mt-2 text-center"
                    style={{ color: "var(--text-faint)", fontFamily: "var(--font-body)" }}
                  >
                    {tech.alt}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About Me ──────────────────────────────────────── */}
        <section
          className={`mt-24 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About</h1>
            <div className="grid lg:grid-cols-[1.4fr_0.8fr] gap-12 items-start">
              <div className="max-w-2xl">
                <h2
                  className="text-2xl md:text-3xl font-semibold mb-6 leading-snug"
                  style={{ fontFamily: "var(--font-display)", color: "var(--text-color)" }}
                >
                  Building at the intersection of engineering, intelligence, and impact.
                </h2>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                  I'm <strong style={{ color: "var(--text-color)" }}>Sukumar Erugadindla</strong>, a Computer Science
                  undergraduate at <strong style={{ color: "var(--text-color)" }}>MGIT, Hyderabad</strong> (CGPA: 8.6/10).
                  I specialize in developing full-stack applications and ML-powered systems that are not only functional
                  but scalable and user-focused.
                </p>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                  My work reflects a balance of technical depth, clean architecture, and practical problem-solving. From
                  leading teams in national-level hackathons to publishing research in cryptography, I bring ownership,
                  adaptability, and a strong engineering mindset to every project.
                </p>
                <div className="mb-6">
                  <p className="text-base mb-3" style={{ color: "var(--text-muted)" }}>I am particularly interested in:</p>
                  <ul className="space-y-2 text-sm" style={{ color: "var(--text-muted)" }}>
                    <li>• Full-Stack System Design</li>
                    <li>• Machine Learning Applications</li>
                    <li>• Scalable Backend Architecture</li>
                  </ul>
                </div>
                <p className="text-base leading-relaxed mb-5" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                  Outside of coding, I continuously explore new technologies and best practices to refine both my
                  technical and problem-solving skills.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
                  Connect with me on{" "}
                  <a href="https://linkedin.com/in/sukumar-erugadindla" target="_blank" rel="noopener noreferrer"
                    className="hover:underline font-medium" style={{ color: "#0A66C2" }}>LinkedIn</a>{" "}
                  or check out my work on{" "}
                  <a href="https://github.com/Sukumar5705" target="_blank" rel="noopener noreferrer"
                    className="hover:underline font-medium" style={{ color: "var(--accent)" }}>GitHub</a>.
                </p>
              </div>

  
<div className="card p-5 sticky top-24 h-fit max-w-sm"
  style={{ backgroundColor: "var(--bg-card)", border: "1px solid var(--border-color)", borderRadius: "16px" }}>

  <h3 className="text-sm font-semibold mb-5"
    style={{ fontFamily: "var(--font-display)", color: "var(--text-color)" }}>
    Profile Snapshot
  </h3>

  {[
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech CSE @ MGIT (2023–2027)"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India"
    },
    {
      icon: Briefcase,
      label: "Interests",
      value: "Backend • ML • Full Stack Systems"
    },
    {
      icon: Trophy,
      label: "Highlight",
      value: "Team Lead — HackSavvy-25"
    },
    {
      icon: Mail,
      label: "Email",
      value: "erugadindlasukumar5@gmail.com"
    },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <div key={i} className="flex items-start gap-3 mb-4 last:mb-0 group">

        {/* ICON */}
        <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
          <Icon size={16} className="text-indigo-400 group-hover:text-indigo-300 transition" />
        </div>

        {/* TEXT */}
        <div>
          <span className="text-xs font-medium block"
            style={{
              color: "var(--text-faint)",
              textTransform: "uppercase",
              letterSpacing: "0.05em"
            }}>
            {item.label}
          </span>

          <span className="text-sm"
            style={{ color: "var(--text-color)" }}>
            {item.value}
          </span>
        </div>
      </div>
    );
  })}
</div>
            </div>
          </div>
        </section>

        {/* ── Certifications ────────────────────────────────── */}
        <section
          className={`mt-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: "600ms" }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="text-2xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-color)" }}>
            Certifications
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
  {[
    {
      org: "Oracle",
      name: "OCI 2025 AI Foundations Associate",
      date: "Sep 2025",
      icon: Cloud,
      color: "#F80000"
    },
    {
      org: "Deloitte / Forage",
      name: "Data Analytics Job Simulation",
      date: "Aug 2025",
      icon: BarChart3,
      color: "#86BC25"
    },
    {
      org: "Cisco Netacad",
      name: "JavaScript & Python Essentials",
      date: "May 2025",
      icon: Code,
      color: "#1BA0D7"
    },
  ].map((cert, i) => {
    const Icon = cert.icon;

    return (
      <div
        key={i}
        className="card p-5 group transition-all duration-300 hover:-translate-y-1"
        style={{ backgroundColor: "var(--bg-card)" }}
      >

        {/* ICON */}
        <div className="p-3 rounded-xl w-fit mb-3"
          style={{ background: `${cert.color}20` }}>
          <Icon size={20} style={{ color: cert.color }} />
        </div>

        {/* ORG */}
        <div className="text-xs font-semibold mb-1"
          style={{
            color: cert.color,
            fontFamily: "var(--font-body)",
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}>
          {cert.org}
        </div>

        {/* NAME */}
        <div className="text-sm font-medium mb-1"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--text-color)"
          }}>
          {cert.name}
        </div>

        {/* DATE */}
        <div className="text-xs"
          style={{
            color: "var(--text-faint)",
            fontFamily: "var(--font-body)"
          }}>
          {cert.date}
        </div>

      </div>
    );
  })}
</div>
        </section>

      </main>

      {/* ── All styles ── */}
      <style>{`
        /* Pulse badge dot */
        @keyframes glowPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        .glow-dot { animation: glowPulse 2s ease-in-out infinite; }

        /* ── Profile Art ── */

        /* Spinning rings */
        .profile-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }
        .ring-outer-1 {
          width: 268px; height: 268px;
          border-color: rgba(var(--accent-rgb, 124,92,252), 0.18);
          animation: spinRing 22s linear infinite;
          /* dashed effect via SVG-like border */
          background:
            radial-gradient(circle at 28% 28%, rgba(124,92,252,0.06) 0%, transparent 60%);
        }
        .ring-outer-2 {
          width: 312px; height: 312px;
          border-color: rgba(124,92,252,0.09);
          border-style: dashed;
          animation: spinRing 40s linear infinite reverse;
        }
        @keyframes spinRing { from{transform:translate(-50%,-50%) rotate(0deg)} to{transform:translate(-50%,-50%) rotate(360deg)} }

        /* Glow blob */
        .profile-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(124,92,252,0.22) 0%, transparent 70%);
          animation: glowPulse 3.5s ease-in-out infinite;
          pointer-events: none;
        }

        /* Image wrapper */
        .profile-img-wrap {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
          border: 2.5px solid rgba(124,92,252,0.55);
          box-shadow:
            0 0 0 5px rgba(124,92,252,0.08),
            0 0 40px rgba(124,92,252,0.18),
            0 8px 32px rgba(0,0,0,0.45);
          background: var(--bg-card);
        }
        .profile-img {
          width: 100%; height: 100%;
          object-fit: cover;
          border-radius: 50%;
          display: block;
        }

        /* Orbit dots */
        .orbit-dot {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform-origin: 0 0;
          pointer-events: none;
          z-index: 2;
        }
        .orbit-dot-1 {
          width: 9px; height: 9px;
          background: var(--accent);
          box-shadow: 0 0 8px var(--accent);
          animation: orbit1 22s linear infinite;
        }
        .orbit-dot-2 {
          width: 6px; height: 6px;
          background: #00C853;
          box-shadow: 0 0 6px #00C853;
          animation: orbit2 40s linear infinite reverse;
        }
        @keyframes orbit1 {
          from { transform: translate(-50%,-50%) rotate(0deg)   translateX(134px) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg) translateX(134px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: translate(-50%,-50%) rotate(60deg)  translateX(156px) rotate(-60deg); }
          to   { transform: translate(-50%,-50%) rotate(420deg) translateX(156px) rotate(-420deg); }
        }

        /* Floating deco squares */
        .deco-sq {
          position: absolute;
          border-radius: 4px;
          background: var(--accent);
          pointer-events: none;
          z-index: 1;
        }
        .deco-sq-1 {
          width: 11px; height: 11px; opacity: 0.55;
          top: -52px; right: -14px;
          transform: rotate(18deg);
          animation: floatA 4.5s ease-in-out infinite;
        }
        .deco-sq-2 {
          width: 7px; height: 7px; opacity: 0.3;
          bottom: -44px; left: -22px;
          transform: rotate(-12deg);
          animation: floatB 5.5s ease-in-out infinite;
        }
        @keyframes floatA { 0%,100%{transform:rotate(18deg) translateY(0)} 50%{transform:rotate(18deg) translateY(-9px)} }
        @keyframes floatB { 0%,100%{transform:rotate(-12deg) translateY(0)} 50%{transform:rotate(-12deg) translateY(7px)} }

        /* Dot grid cluster */
        .dot-grid {
          position: absolute;
          top: -58px; right: -42px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          z-index: 0;
          pointer-events: none;
        }
        .dot-grid-cell {
          display: block;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(124,92,252,0.25);
        }
      `}</style>
    </div>
  );
};

export default Home; 