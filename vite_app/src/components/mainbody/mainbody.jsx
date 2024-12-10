import React, { useState, useEffect } from "react";
import "./mainbody.css";

function MainBody() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("https://youtube-api-nmsp.onrender.com/videos")
      .then((res) => res.json())
      .then((videos) => {
        console.log(videos);
        setVideos(videos);
      })
      .catch((error) => console.error(error));
  }, []);

  const [recop, setRecop] = useState([]);

  useEffect(() => {
    fetch("https://youtube-api-nmsp.onrender.com/recop")
      .then((res) => res.json())
      .then((recop) => {
        console.log(recop);
        setRecop(recop);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <section className="mainbody">
        <div className="header">
          <div className="search-container">
            <div className="input-item">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt=""
              />
            </div>
            <img
              src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
              alt=""
            />
            <div className="option">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
                alt=""
              />
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
                alt=""
              />
            </div>
          </div>
          <div className="hl"></div>
          <div className="yt-recent">
            <div className="yt-recent-container">
              {recop.map((op) => (
                <div key={op.id} className="yt-recent-item">
                  <p>{op.title}</p>
                </div>
              ))}
            </div>
            <div className="lt-arr">
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
                alt=""
              />
            </div>
          </div>
          <div className="hl"></div>
        </div>
        <div className="main-container">
          {videos.map((con) => (
            <div key={con.id} className="main-item">
              <img src={con.thn} alt="" />
              <div className={con.class}>
                <img src={con.profile} alt="" />
                <p>{con.title}</p>
              </div>
              <div className={con.class2}>
                <div className="Name">
                  <p>{con.owner}</p>
                  <img
                    className={con.verified}
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
                    alt=""
                  />
                </div>
                <div className={con.class3}>
                  <div className="veiw">
                    <p>{con.veiw} views</p>
                  </div>
                  <div className="dot"></div>
                  <div className="veiw">
                    <p>{con.time} ago</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default MainBody;
