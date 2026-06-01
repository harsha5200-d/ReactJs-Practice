import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Harsha Vardhan</span>
        </h1>

        <h2>MERN Stack Developer</h2>

        <p>
          Passionate MERN Stack Developer with experience building full-stack
          web applications using MongoDB, Express.js, React.js, and Node.js.
          I enjoy creating responsive user interfaces, REST APIs, and scalable
          web solutions.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="home-image">
        <img
          src="https://plus.unsplash.com/premium_vector-1683141132250-12daa3bd85cf?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
        />
      </div>
    </section>
  );
};

export default Home;