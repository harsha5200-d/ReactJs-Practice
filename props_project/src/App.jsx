import React from "react";
import { Bookmark } from "lucide-react";
import "./index.css";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            className="logo"
            src="https://imgs.search.brave.com/2W-kqelYugtkx0eaEbiCBcgMftP8JyPPhsDYRxbGwSE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0aWMudmVjdGVlenkuY29tL3N5c3RlbS9yZXNvdXJjZXMvdGh1bWJuYWlscy8wNTAvODE2LzgwOS9zbWFsbC9hbWF6b24tdHJhbnNwYXJlbnQtaWNvbi1mcmVlLXBuZy5wbmc"
            alt="Amazon"
          />

          <button className="bookmark-btn">
            <Bookmark size={20} />
          </button>
        </div>

        <div className="center">
          <h3>
            Amazon <span>5 days ago</span>
          </h3>

          <h2>Senior UI/UX Designer</h2>

          <div className="tags">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div className="salary">
            <h3>$120/hr</h3>
            <p>Mumbai, India</p>
          </div>

          <button className="apply-btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;