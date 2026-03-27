import React from 'react';
import Project from '../components/project.jsx';

const ProjectPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="w-full max-w-5xl">
        <h1
          className="text-4xl font-extrabold mb-12 tracking-tight text-left"
          style={{ color: 'var(--text-color)' }}
        >
          My Projects
        </h1>
      </div>

      <div className="max-w-5xl w-full space-y-10">

        {/* HyperCare */}
        <Project
          title="HyperCare – BP Monitoring & Lifestyle Advisor"
          description="An intelligent blood pressure monitoring system using Python and ML models (Random Forest, Gradient Boosting) to analyze 500+ patient records, achieving 85% accuracy in hypertension risk prediction. Features Gemini AI integration for personalized micro-goal generation, DASH diet recommendations, and a what-if scenario simulator to compare lifestyle interventions across 4+ combinations."
          github="https://github.com/Sukumar5705/bp-predictor"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-plain-wordmark.svg" className="w-10 h-10" alt="React" />,
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" className="w-10 h-10" alt="Scikit-learn" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" className="w-10 h-10" alt="Flask" />,
          ]}
          color="#155DFC"
        />

        {/* AI Code Reviewer */}
        <Project
          title="AI Code Reviewer – Automated Code Quality Platform"
          description="A full-stack code review platform using React and Node.js with Express, integrating Google Generative AI to deliver automated feedback. Improved code quality by 30% and reduced review time by 25%. Features a responsive code editor with react-simple-code-editor and Prism.js, processing 500+ JavaScript code submissions with 95% accuracy."
          github="https://github.com/Sukumar5705/code-review"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />,
          ]}
          color="#00C853"
        />

        {/* Employee Task Management */}
        <Project
          title="Employee Management System –  Role-Based Tracker"
          description="A full-stack MERN application (MongoDB, Express.js, React , Node.js) with Role-Based Access Control across 4 user roles — Admin, HR, Manager, and Employee — supporting task assignment, real-time tracking, and performance analytics for 50+ users. Secured with JWT authentication, bcrypt password hashing, and 6 API security layers including Helmet and rate limiting, while achieving 35% lower UI latency through optimistic state updates and a single-query embedded MongoDB document design that improved data retrieval speed by 40%."
          github="https://github.com/Sukumar5705/employee-management-system"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-10 h-10" alt="React" />, 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"  className="w-10 h-10" alt="MongoDB" />, 
            <img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" className="w-10 h-10" alt="Express" />, 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="Node.js" />
                  ]}
          color="#FF6D00"
        />

        {/* Wikipedia Search */}
        <Project
          title="Hospital Appointment Booking"
          description="A scalable hospital appointment booking system built using a microservices architecture with Node.js, Express, and MongoDB, featuring a responsive frontend in HTML, CSS, and JavaScript. Integrated CI/CD pipelines using Jenkins and Docker Compose, achieving 100% service uptime, 60% faster deployments, and 40% improved performance. Supports role-based authentication, real-time scheduling, and handles 100+ users with optimized API communication and cross-browser compatibility."          github="https://github.com/Sukumar5705/hospital-management"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="w-10 h-10" alt="HTML5" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="w-10 h-10" alt="Docker" />,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" className="w-10 h-10" alt="Jenkins" />,
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" className="w-10 h-10" alt="MongoDB" />
          ]}
          color="#6C63FF"
        />
         <Project
          title="Wikipedia Search – Async Web Application"
          description="A responsive web app with Bootstrap and JavaScript implementing async HTTP requests to reduce content retrieval time by 20%. Fixed 4 critical bugs and designed a search interface with template-based filtering, improving user satisfaction by 30%."
          github="https://github.com/Sukumar5705"
          status="Live"
          papers={[
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML5" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS3" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" className="w-10 h-10" alt="Bootstrap" />,
          ]}
          color="#6C63FF"
        />

      </div>
    </div>
  );
};

export default ProjectPage;