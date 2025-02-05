import { useEffect, useRef } from "react";
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
      description: ["Chair"],
      image: "./assets/AboutUs/YashwanthS.webp",
      bgColor: "black",
    },
    {
      title: "newLine",
    },
    {
      name: "Charvi Palem",
      description: ["Co-Chair"],
      image: "./assets/AboutUs/CharviPalem.webp",
      bgColor: "black",
    },
    {
      name: "Suayash Tiwari",
      description: ["Co-Chair"],
      image: "./assets/AboutUs/SuayashTiwari.webp",
      bgColor: "black",
    },
    {
      title: "Members",
    },
    {
      name: "Kannan M",
      description: ["SDC President"],
      image: "./assets/AboutUs/KannanM.webp",
      bgColor: "black",
    },
    {
      name: "Abhinav Mars",
      description: ["SLC President"],
      image: "./assets/AboutUs/AbhinavMars.webp",
      bgColor: "black",
    },
    {
      name: "Poojyanth",
      description: ["SLC Vice President"],
      image: "./assets/AboutUs/Poojyanth.webp",
      bgColor: "black",
    },
    {
      title: "newLine",
    },
    {
      name: "Monish B",
      description: ["SDC Treasurer"],
      image: "./assets/AboutUs/Monish.webp",
      bgColor: "black",
    },
    {
      name: "Manoj Varma Datla",
      description: ["Joint Secretary Non Technical SDC"],
      image: "./assets/AboutUs/ManojVarmaDatla.webp",
      bgColor: "black",
    },
    {
      name: "Kaushal Edara",
      description: ["Joint Secretary Technical SDC"],
      image: "./assets/AboutUs/KaushalEdara.webp",
      bgColor: "black",
    },
    {
      title: "newLine",
    },
    {
      name: "Santhosh",
      description: ["SLC Secretary Hostel Boys"],
      image: "./assets/AboutUs/Santhosh.webp",
      bgColor: "black",
    },
    {
      name: "Teja Sri",
      description: ["SLC Secretary Hostel Girls"],
      image: "./assets/AboutUs/TejaSri.webp",
      bgColor: "black",
    },
    {
      name: "Venkatesh Naidu",
      description: ["Marketing"],
      image: "./assets/AboutUs/venkateshNaidu.webp",
      bgColor: "black",
    },
    {
      title: "newLine",
    },
    {
      name: "Shree Raj",
      description: ["Sponsorship"],
      image: "./assets/AboutUs/ShreeRaj.webp",
      bgColor: "black",
    },
    {
      name: "Venkata Sai Reddy",
      description: ["Design"],
      image: "./assets/AboutUs/VenkataSaiReddy.webp",
      bgColor: "black",
    },
    {
      name: "Shanmathe S A",
      description: ["Proshows"],
      image: "./assets/AboutUs/Shanmathe.webp",
      bgColor: "black",
    },
    {
      title: "The Magicians Behind the Website",
    },
    {
      name: "Naveen Kumar L",
      description: ["Tech Team", "Lead"],
      position: "Lead",
      image: "./assets/AboutUs/NaveenKumar.webp",
      linkedin: "https://www.linkedin.com/in/naveen-kumar-lankotu",
      bgColor: "black",
    },
    {
      name: "Pinnu Koushik",
      description: ["Tech Team", "Co-Lead"],
      position: "Co-Lead",
      image: "./assets/AboutUs/PinnuKoushik.webp",
      linkedin: "https://www.linkedin.com/in/koushik-pinnu-ba0873297/",
      bgColor: "black",
    },
    {
      title: "newLine",
    },
    {
      name: "Sai Vineel",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/SaiVineel.webp",
      linkedin: "https://www.linkedin.com/in/sai-vineel-96946b27b/",
      bgColor: "black",
    },
    {
      name: "Siva Surya",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/SivaSurya.webp",
      linkedin:
        "https://www.linkedin.com/in/yadala-venkata-siva-surya-1a1a3b256",
      bgColor: "black",
    },
    {
      name: "Lokesh Kudipudi ",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/LokeshKudipudi.webp",
      linkedin: "https://www.linkedin.com/in/lokesh-kudipudi",
      bgColor: "black",
    },
    {
      name: "Narasimha",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/LakshmiNarasimha.webp",
      linkedin: "https://www.linkedin.com/in/y-l-narasimha-500346270",
      bgColor: "black",
    },
    {
      name: "Venkata Sai Pranav",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/VenkataSaiPranav.webp",
      linkedin: "https://www.linkedin.com/in/moparthi-pranav-441b40206",
      bgColor: "black",
    },
    {
      name: "Monu Agrahari",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/MonuAgrahari.webp",
      linkedin: "https://www.linkedin.com/in/monu-agrhari-255889323/",
      bgColor: "black",
    },
    {
      name: "Aadesh Phadake",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/AadeshPhadake.webp",
      linkedin: "https://www.linkedin.com/in/aadesh-phadake-96554123b/",
      bgColor: "black",
    },
    {
      name: "Arun M",
      description: ["Tech Team", "Member"],
      position: "Member",
      image: "./assets/AboutUs/Arun.webp",
      linkedin:
        "https://www.linkedin.com/in/arun-52094b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bgColor: "black",
    },
  ];

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
        linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url('https://webp.webptree.com/thumb_back/fh260/background/20231225/webptree-fairytale-castle-and-a-mythical-fire-breathing-dragon-guarding-it-on-image_15513889.jpg') center/cover no-repeat fixed,
      radial-gradient(circle at top, #24222d, #131433)
    `,
      }}
    >
      <ParallaxComponent
        backgroundImage={"/AccomodationBg.jpg"}
        heading={"Our Magicians"}
      />
      <div className="featured-frames flex flex-wrap justify-center gap-8">
        {groupedMembers.map((group, index) => (
          <div key={index} className="group-section flex flex-col items-center">
            {group.title != "newLine" && (
              <div className="width-[1000px] mt-[100px]">
                <h2 className="group-title text-[#fff] font-mysticalFont text-[30px] md:text-[50px] text-center">
                  {group.title}
                </h2>
              </div>
            )}
            <div className="flex flex-wrap items-center  justify-center gap-8">
              {group.members.map((member, idx) => (
                  <div
                    key={idx}
                    className="frame flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => {
                      if (member.linkedin) {
                        window.open(member.linkedin, "_blank");
                      } else {
                        console.log(`${member.name} clicked`);
                      }
                    }}
                  >
                    <div className="image-container">
                      <img
                        className="featured-image"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div>
                      <h3 className="featured-name">{member.name}</h3>
                      {member.description.map((desc, i) => (
                        <p key={i} className="featured-description">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="h-[60px]"></div>
    </div>
  );
}
