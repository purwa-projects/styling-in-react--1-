import styled from "styled-components";

const Card = styled.article`
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 24px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  }

  h3 {
    margin-top: 0;
  }

  .tech {
    color: #4f46e5;
    font-size: 14px;
    font-weight: 700;
  }
`;

function ProjectCard({ title, text, tech }) {
  return (
    <Card>
      <h3>{title}</h3>
      <p>{text}</p>
      <p className="tech">{tech}</p>
    </Card>
  );
}

export default ProjectCard;