import { useEffect, useRef } from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./App.css";
import ParallaxComponent from "./ParllaxComponent";

export default function AboutUs() {
  const carouselRef = useRef(null);

  const teamMembers = [
    {
      title: "Convenor",
    },
    {
      name: "Yashwanth S",
      description: ["Convenor"],
      image: "./assets/AboutUs/YashwanthS.png",
      bgColor: "black",
    },
    {
      name: "Charvi Palem",
      description: ["Co-Convenor"],
      image: "./assets/AboutUs/CharviPalem.png",
      bgColor: "black",
    },
    {
      name: "Suayash Tiwari",
      description: ["Co-Convenor"],
      image: "./assets/AboutUs/SuayashTiwari.png",
      bgColor: "black",
    },
    {
      title: "SDC President",
    },
    {
      name: "Kannan M",
      description: ["SDC President"],
      image: "./assets/AboutUs/KannanM.png",
      bgColor: "black",
    },
    // {
    //   title: "SLC President",
    // },
    {
      name: "Abhinav Mars",
      description: ["SLC President"],
      image: "./assets/AboutUs/frame.png",
      bgColor: "black",
    },
    {
      name: "Poojyanth",
      description: ["SLC Vice President"],
      image: "./assets/AboutUs/frame.png",
      bgColor: "black",
    },
    {
      name: "Monish B",
      description: ["SDC Treasurer"],
      image: "./assets/AboutUs/Monish.png",
      bgColor: "black",
    },
    // {
    //   title: "Development",
    // },
    {
      name: "Kaushal Edara",
      description: ["Joint Secretary Technical SDC"],
      image: "./assets/AboutUs/KaushalEdara.png",
      bgColor: "black",
    },
    {
      name: "Manoj Varma Datla",
      description: ["Joint Secretary Non Technical SDC"],
      image: "./assets/AboutUs/ManojVarmaDatla.png",
      bgColor: "black",
    },
    // {
    //   title: "SLC",
    // },
    {
      name: "Santhosh",
      description: ["SLC Secretary Hostel Boys"],
      image: "./assets/AboutUs/frame.png",
      bgColor: "black",
    },
    {
      name: "Teja Sri",
      description: ["SLC Secretary Hostel Girls"],
      image: "./assets/AboutUs/frame.png",
      bgColor: "black",
    },
    {
      name: "Venkatesh Naidu",
      description: ["Marketing", "Lead"],
      image: "./assets/AboutUs/venkateshNaidu.png",
      bgColor: "black",
    },
    {
      name: "Shree Raj",
      description: ["Sponsorship", "Lead"],
      image: "./assets/AboutUs/ShreeRaj.png",
      bgColor: "black",
    },
    {
      name: "Venkata Sai Reddy",
      description: ["Design", "Lead"],
      image: "./assets/AboutUs/VenkataSaiReddy.png",
      bgColor: "black",
    },

    {
      name: "Shanmathe S A",
      description: ["Proshows", "Co - Lead"],
      image: "./assets/AboutUs/Shanmathe.png",
      bgColor: "black",
    },
    {
      name: "Sai Hyndavi Barla",
      description: ["Invitation", "Lead"],
      image: "./assets/AboutUs/SaiHyndaviBarla.png",
      bgColor: "black",
    },
    {
      title: "Technical Team",
    },
    {
      name: "Lankotu Naveen Kumar",
      description: ["Tech Team", "Lead"],
      position: "Lead",
      image: "./assets/AboutUs/NaveenKumar.png",
      linkedin: "https://www.linkedin.com/in/naveen-kumar-lankotu",
      bgColor: "black",
    },
    {
      name: "Pinnu Koushik",
      description: ["Tech Team", "Co-Lead"],
      position: "Co-Lead",
      image: "./assets/AboutUs/PinnuKoushik.png",
      linkedin: "https://www.linkedin.com/in/koushik-pinnu-ba0873297/",
      bgColor: "black",
    },
    {
      name: "Sai Vineel",
      description: ["Tech Team", "Assistant Co-Lead"],
      position: "Member",
      image: "./assets/AboutUs/SaiVineel.png",
      linkedin: "https://www.linkedin.com/in/sai-vineel-96946b27b/",
      bgColor: "black",
    },
    {
      name: "SIVA SURYA",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/SivaSurya.png",
      linkedin:
        "https://www.linkedin.com/in/yadala-venkata-siva-surya-1a1a3b256",
      bgColor: "black",
    },
    {
      name: "Lokesh Kudipudi ",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/LokeshKudipudi.png",
      linkedin: "https://www.linkedin.com/in/lokesh-kudipudi",
      bgColor: "black",
    },
    {
      name: "NARASIMHA",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/LakshmiNarasimha.png",
      linkedin: "https://www.linkedin.com/in/y-l-narasimha-500346270",
      bgColor: "black",
    },
    {
      name: "Venkata Sai Pranav",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/VenkataSaiPranav.png",
      linkedin: "https://www.linkedin.com/in/moparthi-pranav-441b40206",
      bgColor: "black",
    },
    {
      name: "Monu Agrahari",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/MonuAgrahari.png",
      linkedin: "https://www.linkedin.com/in/monu-agrhari-255889323/",
      bgColor: "black",
    },
    {
      name: "Aadesh Phadake",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/AadeshPhadake.png",
      linkedin: "https://www.linkedin.com/in/aadesh-phadake-96554123b/",
      bgColor: "black",
    },
    {
      name: "Arun M",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/Arun.png",
      linkedin:
        "https://www.linkedin.com/in/arun-52094b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bgColor: "black",
    },
  ];

  useEffect(() => {
    const initCarousel = () => {
      if (carouselRef.current && window.jQuery) {
        const $ = window.jQuery;
        $(carouselRef.current).owlCarousel({
          loop: true,
          margin: 20,
          nav: true,
          dots: true,
          dotsEach: true,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          center: true,
          navText: [
            `<div class="nav-btn prev-btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>`,
            `<div class="nav-btn next-btn">
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>`,
          ],
          responsive: {
            0: { items: 1, margin: 10, center: true },
            576: { items: 2, margin: 15, center: false },
            992: { items: 3, margin: 20, center: true },
          },
        });
      }
    };

    setTimeout(initCarousel, 100);

    return () => {
      if (carouselRef.current && window.jQuery) {
        const $ = window.jQuery;
        $(carouselRef.current).trigger("destroy.owl.carousel");
      }
    };
  }, []);

  const groupedMembers = teamMembers.reduce((acc, member) => {
    if (member.title) {
      acc.push({ title: member.title, members: [] });
    } else if (acc.length > 0) {
      acc[acc.length - 1].members.push(member);
    }
    return acc;
  }, []);

  return (
    <div
      className="magicians-container"
      style={{
        background: `
  linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
      url('https://png.pngtree.com/thumb_back/fh260/background/20231225/pngtree-fairytale-castle-and-a-mythical-fire-breathing-dragon-guarding-it-on-image_15513889.jpg') center/cover no-repeat fixed,
      radial-gradient(circle at top, #24222d, #131433)
    `,
      }}
    >
      <ParallaxComponent
        backgroundImage={"/AccomodationBg.jpg"}
        heading={"Our Magicians"}
      />
      <div className="featured-frames">
        {groupedMembers.map((group, index) => (
          <div key={index} className="group-section">
            {group.title && <h2 className="group-title">{group.title}</h2>}
            <div className="frames-grid">
              {group.members.map((member, idx) => (
                <div
                  key={idx}
                  className="frame"
                >
                  <div className="image-container">
                    <img
                      className="featured-image"
                      src={member.image}
                      alt={member.name}
                    />
                  </div>
                  <h3 className="featured-name">{member.name}</h3>
                  {member.description.map((desc, i) => (
                    <p key={i} className="featured-description">
                      {desc}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
