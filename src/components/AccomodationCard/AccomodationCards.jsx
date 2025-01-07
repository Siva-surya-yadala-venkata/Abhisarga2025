import bg1 from "../../assets/bg1.jpg";
import bg2 from "../../assets/bg2.png";
import whitebg from "../../assets/whitebg.png";
import "./accomodationCards.css";

function AccomodationCards() {
  return (
    <div className="p-4 flex items-center flex-col">
      <div className="bg1Container">
        <img
          src={bg1}
          alt="nothing"
          className="w-full h-[75vh] brightness-[0.25] md:w-[50vw] md:h-[65vh] opacity-25"
        ></img>
      </div>
      <div>
        <img
          src={whitebg}
          alt="nothing"
          className="w-full h-[75vh] md:w-[50vw] md:h-[65vh] opacity-0"
        ></img>
      </div>
      <div className="bg2Container">
        <img
          src={bg2}
          alt="nothing"
          className="w-full h-[75vh] brightness-[0.25] md:w-[50vw] md:h-[65vh]"
        ></img>
      </div>
    </div>
  );
}

export default AccomodationCards;
