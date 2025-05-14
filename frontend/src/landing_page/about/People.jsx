import React from "react";
import { Link } from "react-router-dom";


function People() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-2 mt-10 text-center">People</h1>
        <div className="row fs-5">
          <div className="offset-1 col-5 mt-5 text-center">
            <img src="public/media/images/jayOdedra.jpg" style={{borderRadius: "100%", width:"60%"}} alt="Develer" />
            <p className="fs-4 mb-0 mt-3">Jay Odedra</p>
            <p className="fs-6">Developer</p>
          </div>
          <div className="col-5 mt-10">
            <p>
              I'm a developer who enjoys building things from the ground up — I
              cloned this site from scratch as part of my learning journey. When
              I'm not coding, you'll find me in my zone playing games and diving
              deeper into the world of development.
            </p>
            <p>
              Contact on <Link className="text-decoration-none" to={"/"}>Homepage</Link> / <a className="text-decoration-none" href="https://www.linkedin.com/in/jayodedra1884/">LinkedIn</a> / <a className="text-decoration-none" href="https://www.instagram.com/jay_odedra_1884/">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default People;
