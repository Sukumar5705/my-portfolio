import React from "react";

const TimelineItem = ({ role, company, companyColor = "#155DFC", timeline, description, isLast }) => {
  return (
    <div className="flex gap-5 group">
      {/* Timeline Column */}
      <div className="flex flex-col items-center">
        <div
          className="timeline-dot mt-1.5 transition-all duration-300 group-hover:scale-125"
          style={{ backgroundColor: companyColor, boxShadow: `0 0 0 3px ${companyColor}20` }}
        />
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{ backgroundColor: "var(--border-color)" }}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-12 flex-1">
        <div
          className="card p-6"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
            <div>
              <div
                className="text-xs font-semibold mb-1"
                style={{
                  color: companyColor,
                  fontFamily: "var(--font-body)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {company}
              </div>
              <h3
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--text-color)", letterSpacing: "-0.02em" }}
              >
                {role}
              </h3>
            </div>
            <span
              className="text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0"
              style={{
                backgroundColor: "var(--bg-secondary)",
                color: "var(--text-muted)",
                border: "1px solid var(--border-color)",
                fontFamily: "var(--font-body)",
              }}
            >
              {timeline}
            </span>
          </div>

          {/* Description */}
          <div
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
          >
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  return (
    <section
      className="min-h-screen py-14 px-6"
      style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <span className="section-label">Background</span>
        <h1
          className="text-4xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.03em" }}
        >
          PROFESSIONAL EXPERIENCE & EDUCATION

        </h1>
        <p
          className="text-base mb-14 max-w-xl"
          style={{ color: "var(--text-muted)", fontFamily: "var(--font-body)" }}
        >
A curated overview of my technical experience, research contributions, and academic foundation in computer science and software engineering.
        </p>

        {/* ── Experience Timeline ──────────────────────────── */}
        <div className="mb-4">
          <h2
            className="text-sm font-semibold mb-8"
            style={{
              color: "var(--text-faint)",
              fontFamily: "var(--font-body)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Professional
          </h2>

          <TimelineItem
            company="HackSavvy-25 — National Level Hackathon"
            companyColor="#F59E0B"
            role="Team Leader"
            timeline="Mar 2025"
            isLast={false}
            description={
              <div>
                <p className="mb-3">

            Led a cross-functional team of 4 engineers to design and deliver a complete software solution under strict time constraints in a national-level competitive environment.


                </p>
                <ul className="list-none space-y-2">
                  {[
                    "Spearheaded end-to-end product development, from ideation to final deployment",
                    "Architected system design and coordinated implementation across frontend, backend, and machine learning components",
                    "Enabled efficient team execution through structured task allocation and agile collaboration",
                    "Presented and defended the solution before a panel of technical experts, demonstrating both technical depth and product thinking"
                    ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />

          <TimelineItem
            company="HBRP Publications"
            companyColor="#8B5CF6"
            role="Research Author — Hybrid Crypto"
            timeline="May 2025"
            isLast={true}
            description={
              <div>
                <p className="mb-3">
Authored and published a research paper titled <strong style={{ color: "var(--text-color)" }}>Hybrid Crypto</strong>, focusing on advanced cryptographic techniques and hybrid encryption models.
                </p>
                <ul className="list-none space-y-2">
                  {[
                  "Conducted independent research in cryptography, analyzing hybrid encryption mechanisms and their practical applications",
                  "Designed and documented a structured research methodology aligned with academic publishing standards",
                  "Successfully submitted and received formal acceptance from HBRP Publications",
                  "Demonstrated strong analytical thinking, technical writing, and problem-solving skills",
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span style={{ color: "#8B5CF6", marginTop: "2px", flexShrink: 0 }}>▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
        </div>

        {/* ── Education Timeline ──────────────────────────── */}
        <div className="mt-4">
          <h2
            className="text-sm font-semibold mb-8"
            style={{
              color: "var(--text-faint)",
              fontFamily: "var(--font-body)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Education
          </h2>

          <TimelineItem
            company="Mahatma Gandhi Institute of Technology, Hyderabad"
            companyColor="#155DFC"
            role="B.Tech in Computer Science & Engineering"
            timeline="2023 – 2027"
            isLast={false}
            description={
              <div>
                <p className="mb-3">
                 Currently pursuing a Bachelor's degree with a strong academic record  <strong style={{ color: "var(--text-color)" }}>8.6 / 10</strong>, with a focus on core computer science fundamentals and software engineering.{" "}
                  
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems", "Computer Networks"].map((course) => (
                    <span key={course} className="skill-tag">{course}</span>
                  ))}
                </div>
              </div>
            }
          />

          <TimelineItem
            company="Narayana Junior College — Board of Intermediate Education, Telangana"
            companyColor="#10B981"
            role="Board of Intermediate Education (MPC)"
            timeline="2021 – 2023"
            isLast={true}
            description={
              <p>
                Graduated with distinction{" "}
                <strong style={{ color: "var(--text-color)" }}>98.1%</strong> with specialization in Mathematics, Physics, and Chemistry, building a strong analytical and problem-solving foundation.
              </p>
            }
          />
        </div>

        <div className="mt-12">
          <h2
            className="text-sm font-semibold mb-6"
            style={{
              color: "var(--text-faint)",
              fontFamily: "var(--font-body)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Skills
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                category: "Languages",
                skills: ["Java", "C++", "C", "Python"],
              },
              {
                category: "Web Development",
                skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS", "Express", "NodeJS"],
              },
              {
                category: "Databases",
                skills: ["MySQL", "MongoDB"],
              },
              {
                category: "Tools & Practices",
                skills: ["GitHub", "Clean Code", "Agile", "REST APIs", "Scikit-learn", "Flask"],
              },
            ].map((group, i) => (
              <div
                key={i}
                className="card p-5"
                style={{ backgroundColor: "var(--bg-card)" }}
              >
                <h3
                  className="text-xs font-semibold mb-3"
                  style={{
                    color: "var(--text-faint)",
                    fontFamily: "var(--font-body)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;