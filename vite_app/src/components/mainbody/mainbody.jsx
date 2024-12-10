// // import React, { useState, useEffect } from "react";
// // import "./mainbody.css";
// // import { use } from "react";

// // function MainBody() {
// //   const [videos, setVideos] = useState([]);
// //   const [loading,setLoading] = useState(true)
// //   const [error,setError] = useState(null)

// //   useEffect(() => {

// //     const API_KEY = 'AIzaSyC-PbE0IY2db4t-fb4opibXEfLGIUVchJk';
// //     const searchQuery = 'travel vlogs';
// //     const maxResults = 10;

// //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`)
// //       .then((res) => res.json())
// //       .then((data) => {
// //         console.log(data);
// //         const transformedVideos = data.items.map((item) => ({
// //           title: item.snippet.title,
// //           channel: item.snippet.channelTitle,
// //           views: 'N/A', // YouTube API v3 does not provide views in the search endpoint; fetch details via videos.list if needed
// //           date: new Date(item.snippet.publishedAt).toLocaleDateString(),
// //           thumbnail: item.snippet.thumbnails.medium.url,
// //         }));
// //         setVideos(transformedVideos)
// //         setLoading(false)
// //       })
// //       .catch((error) => console.error(error));
// //       setError(error.message)
// //   }, []);

// //   if(loading){
// //     return(
// //       <div>loading</div>
// //     )
// //   }else if(error){
// //     return(
// //       <div>error</div>
// //     )
// //   }

// //   const [recop, setRecop] = useState([]);

// //   useEffect(() => {
// //     fetch("https://youtube-api-nmsp.onrender.com/recop")
// //       .then((res) => res.json())
// //       .then((recop) => {
// //         console.log(recop);
// //         setRecop(recop);
// //       })
// //       .catch((error) => console.error(error));
// //   }, []);

// //   return (
// //     <>
// //       <section className="mainbody">
// //         <div className="header">
// //           <div className="search-container">
// //             <div className="input-item">
// //               <input
// //                 type="text"
// //                 name="search"
// //                 id="search"
// //                 placeholder="Search"
// //               />
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
// //                 alt=""
// //               />
// //             </div>
// //             <img
// //               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true"
// //               alt=""
// //             />
// //             <div className="option">
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true"
// //                 alt=""
// //               />
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true"
// //                 alt=""
// //               />
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true"
// //                 alt=""
// //               />
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true"
// //                 alt=""
// //               />
// //             </div>
// //           </div>
// //           <div className="hl"></div>
// //           <div className="yt-recent">
// //             <div className="yt-recent-container">
// //               {recop.map((op) => (
// //                 <div key={op.id} className="yt-recent-item">
// //                   <p>{op.title}</p>
// //                 </div>
// //               ))}
// //             </div>
// //             <div className="lt-arr">
// //               <img
// //                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/leftBottom.png?raw=true"
// //                 alt=""
// //               />
// //             </div>
// //           </div>
// //           <div className="hl"></div>
// //         </div>
// //         <div className="main-container">
// //           {videos.map((con,index) => (
// //             <div key={index} className="main-item">
// //               <img src={con.thn} alt="" />
// //               <div className={con.class}>
// //                 <img src={con.thumbnail} alt="" />
// //                 <p>{con.title}</p>
// //               </div>
// //               <div className={con.class2}>
// //                 <div className="Name">
// //                   <p>{con.channel}</p>
// //                   <img
// //                     className={con.verified}
// //                     src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
// //                     alt=""
// //                   />
// //                 </div>
// //                 <div className={con.class3}>
// //                   <div className="veiw">
// //                     <p>{con.views} views</p>
// //                   </div>
// //                   <div className="dot"></div>
// //                   <div className="veiw">
// //                     <p>{con.data} ago</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // export default MainBody;

// import React, { useState, useEffect } from "react";
// import "./mainbody.css";

// function MainBody() {
//   const [videos, setVideos] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [recop, setRecop] = useState([]);
//   const [searchQuery, setSearchQuery] = useState(""); // To store the search input value
//   const [searchTerm, setSearchTerm] = useState("travel vlogs"); // Default search term

//   const fetchVideos = (query) => {
//     const API_KEY = 'AIzaSyAlcCXP_XhhjkNPSbOuwKgp8j8q4Q-NmxY';
//     const maxResults = 10;

//     setLoading(true);
//     setError(null);

//     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&maxResults=${maxResults}&key=${API_KEY}`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to fetch YouTube videos");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         const transformedVideos = data.items.map((item) => ({
//           title: item.snippet.title,
//           channel: item.snippet.channelTitle,
//           date: new Date(item.snippet.publishedAt).toLocaleDateString(),
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));
//         setVideos(transformedVideos);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   };

//   useEffect(() => {
//     fetchVideos(searchTerm); // Fetch videos when the component mounts or the search term changes
//   }, [searchTerm]);

//   useEffect(() => {
//     fetch("https://youtube-api-nmsp.onrender.com/recop")
//       .then((res) => res.json())
//       .then((data) => setRecop(data))
//       .catch((error) => console.error("Error fetching recommendations:", error));
//   }, []);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     setSearchTerm(searchQuery); // Update the search term to trigger a new fetch
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <section className="mainbody">
//       <div className="header">
//         {/* Search Bar */}
//         <form className="search-container" onSubmit={handleSearch}>
//           <div className="input-item">
//             <input
//               type="text"
//               name="search"
//               id="search"
//               placeholder="Search"
//               value={searchQuery}
//                // Update search query
//             />
//             <button type="submit" onClick={(e) => setSearchQuery(e.target.value)}>
//               <img
//                 src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                 alt="Search Icon"
//               />
//             </button>
//           </div>
//         </form>
//         <div className="option">
//           {/* Options Icons */}
//           {/* ... Your Option Icons */}
//         </div>
//         <div className="hl"></div>

//         {/* Recent Recommendations */}
//         <div className="yt-recent">
//           <div className="yt-recent-container">
//             {recop.map((op) => (
//               <div key={op.id} className="yt-recent-item">
//                 <p>{op.title}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="hl"></div>
//       </div>

//       {/* Main Video Container */}
//       <div className="main-container">
//         {videos.map((video, index) => (
//           <div key={index} className="main-item">
//             <img src={video.thumbnail} alt={`Thumbnail of ${video.title}`} />
//             <div>
//               <p>{video.title}</p>
//               <p>Channel: {video.channel}</p>
//               <p>Date: {video.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default MainBody;

import React, { useState, useEffect } from "react";
import "./mainbody.css";

function MainBody() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recop, setRecop] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // To store the search input value
  const [searchTerm, setSearchTerm] = useState("travel vlogs"); // Default search term

  const fetchVideos = (query) => {
    const API_KEY = "AIzaSyBjzV5b_49U4LeZtAESMNt9ovnGvPY0CrU";
    const maxResults = 10;

    setLoading(true);
    setError(null);

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        query
      )}&maxResults=${maxResults}&key=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch YouTube videos");
        }
        return res.json();
      })
      .then((data) => {
        const transformedVideos = data.items.map((item) => ({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          date: new Date(item.snippet.publishedAt).toLocaleDateString(),
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(transformedVideos);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchVideos(searchTerm); // Fetch videos when the component mounts or the search term changes
  }, [searchTerm]);

  useEffect(() => {
    fetch("https://youtube-api-nmsp.onrender.com/recop")
      .then((res) => res.json())
      .then((data) => setRecop(data))
      .catch((error) =>
        console.error("Error fetching recommendations:", error)
      );
  }, []);

  const handleSearchClick = () => {
    setSearchTerm(searchQuery); // Update the search term to trigger a new fetch
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="mainbody">
      <div className="header">
        {/* Search Bar */}
        <div className="search-container">
          <div className="input-item">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search query
            />
            <button type="button" onClick={handleSearchClick}>
              <img
                src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                alt="Search Icon"
              />
            </button>
          </div>
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

        {/* Recent Recommendations */}
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

      {/* Main Video Container */}
      <div className="main-container">
        {videos.map((video, index) => (
          <div key={index} className="main-item">
            <img src={video.thumbnail} alt={`Thumbnail of ${video.title}`} />
            <div>
              <p>{video.title}</p>
              <p>Channel: {video.channel}</p>
              <p>Date: {video.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainBody;
