import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 7%;
  background: white;
  border-bottom: 1px solid #e5e7eb;

  .logo {
    font-size: 22px;
    font-weight: 800;
  }

  .links {
    display: flex;
    gap: 24px;
  }

  a {
    color: #374151;
    text-decoration: none;
    font-weight: 600;
  }

  @media (max-width: 600px) {
    padding: 18px 5%;
    .links {
      gap: 12px;
      font-size: 14px;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <div className="logo">Shreyash</div>
      <div className="links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
      </div>
    </Nav>
  );
}

export default Navbar;