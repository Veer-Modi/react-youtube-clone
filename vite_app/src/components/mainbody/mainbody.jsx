import "./mainbody.css";

function MainBody() {
  const recOP = [
    { id: 1, title: "All" },
    { id: 2, title: "Coke Studio" },
    { id: 3, title: "UK" },
    { id: 4, title: "Case Study" },
    { id: 5, title: "Music" },
    { id: 6, title: "Bnagla Lofi" },
    { id: 7, title: "Tour" },
    { id: 8, title: "Saintmartin" },
    { id: 9, title: "Tech" },
    { id: 10, title: "Iphone 13" },
    { id: 10, title: "User Interface Design" },
    { id: 11, title: "Computer" },
  ];

  const content = [
    {
      id: 1,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true",
      title: "Bubuli | Coke Studio Bangla | Season One | RituRaj X Nandita",
      owner: "Coke Studio Bangla",
      verified: "",
    },
    {
      id: 2,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",
      title: "INfinix Note 12: Amoled Helio G88 SoC!",
      owner: "ATC Android ToTo Company",
      verified: "",
    },
    {
      id: 3,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
      title: "My First UX Design case study-This got me my first job.",
      owner: "Saptarshi Prakash",
      verified: "off",
    },
    {
      id: 4,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",
      profile: "",
      title: "My Mix",
      owner: "Lopamudra Mitra, Anupam Roy, and more",
      verified: "off",
    },
    {
      id: 5,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",
      title: "UX Design-What is it? (From AJ&Smart)",
      owner: "AJ&Smart",
      verified: "",
    },
    {
      id: 6,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",
      profile: "",
      title:
        "MIX - Mombati | Mohan Sharif | Dhakayia Dose | MAhib Ahsan ft Anika",
      owner: "Mohon Sharif, Odd Signature, Shayan Chowdhury Arnob, and more",
      verified: "off",
    },
    {
      id: 7,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
      title: " | 48 VISA-FREE",
      owner: "Nadir On The Go",
      verified: "off",
    },
    {
      id: 8,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",
      title: "14 Advanced Tips to Design FASTER in Figma",
      owner: "Mizko",
      verified: "",
    },
    {
      id: 9,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true",
      title: "| 48 VISA-FREE",
      owner: "Nadir On The Go",
      verified: "",
    },
    {
      id: 10,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
      title: "random title",
      owner: "random",
      verified: "",
    },
    {
      id: 10,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204-1.png?raw=true",
      title: "random title",
      owner: "random",
      verified: "",
    },
    {
      id: 12,
      thn: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",
      profile:
        "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",
      title: "Microsoft placement offer | 100% scholar",
      owner: "Saptarshi Prakash",
      verified: "off",
    },
  ];
  return (
    <>
      <section className="mainbody">
        <div className="search-container">
          <div className="input-item">
            <input type="text" name="search" id="search" placeholder="Search" />
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
            {recOP.map((op) => (
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
        <div className="main-container">
          {content.map((con) => (
            <div key={con.id} className="main-item">
              <img src={con.thn} alt="" />
              <div className="title">
                <img src={con.profile} alt="" />
                <p>{con.title}</p>
              </div>
              <div className="des">
                <div className="Name">
                  <p>{con.owner}</p>
                  <img
                    className={con.verified}
                    src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/verified.png?raw=true"
                    alt=""
                  />
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