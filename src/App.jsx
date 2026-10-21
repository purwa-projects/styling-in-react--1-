import { useState } from "react";
import { css } from "@emotion/react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";

const HeroButton = styled.button`
  padding: 12px 22px;
  border: none;
  border-radius: 10px;
  background: #111827;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;

const heroStyle = css`
  max-width: 650px;
  margin: 0 auto;
  text-align: center;
`;

const projects = [
  { title: "TaskFlow Pro", text: "A task management application with authentication and CRUD functionality.", tech: "FastAPI • SQLAlchemy • JWT" },
  { title: "Smart Traffic AI", text: "An AI-based traffic monitoring project using computer vision.", tech: "Python • YOLOv8 • OpenCV" },
  { title: "KisanConnect", text: "A farm-to-home platform concept connecting farmers with customers.", tech: "React • API • Database" }
];

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <Navbar />

      <main>
        <section className="hero" css={heroStyle}>
          <span className="badge">Styling in React</span>
          <h1>Building clean and responsive interfaces with React.</h1>
          <p>
            A small portfolio application demonstrating inline styles,
            styled-components, Emotion, Flexbox, Grid and media queries.
          </p>
          <HeroButton
            style={{ marginTop: "10px" }}
            onClick={() => setShowMessage(!showMessage)}
          >
            {showMessage ? "Hide Message" : "View My Work"}
          </HeroButton>
          {showMessage && <p className="message">Thanks for visiting my portfolio!</p>}
        </section>

        <section className="about">
          <div>
            <h2>About Me</h2>
            <p>
              I am an Information Technology student interested in web
              development, databases and software projects.
            </p>
          </div>
          <div className="skills">
            <span>React</span><span>JavaScript</span><span>CSS</span>
            <span>Python</span><span>SQL</span><span>Git</span>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>Some example projects and technologies.</p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>

      <footer>© 2026 React Styling Project</footer>
    </div>
  );
}

export default App;