import "./accomodationCard.css";
import { motion } from "framer-motion";

const AccomodationCard = ({ title, details, price, gradient, image }) => {
  return (
    <motion.div
      className="bg-[#24222d]/50 backdrop-blur-sm w-[450px] mx-auto  shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
    >
      <div className="">
        {/* Image Section */}
        <div className="cardTopImage relative">
          <motion.div
            className={`relative h-48 flex items-center brightness-[0.35] justify-center`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          ></motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className={`inset-0 opacity-60`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            ></motion.div>
            <motion.h2
              className="text-center text-[#F7E290] font-bold text-4xl"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {title}
            </motion.h2>
          </div>
        </div>

        {/* Info Section */}
        <motion.div
          className="p-6 text-center"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <ul className="text-[#F7E290] flex flex-col items-center space-y-2">
            {details.map((detail, index) => (
              <>
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.8 + index * 0.1,
                    duration: 0.4,
                  }}
                >
                  {detail}
                </motion.li>
                {/* {index != details.length - 1 && (
                <hr className="w-[250px]"></hr>
              )} */}
              </>
            ))}
          </ul>
        </motion.div>

        {/* Price and Button Section */}
        <div className="cardBottomImage relative">
          <motion.div
            className={`${gradient} h-[200px] brightness-[0.35]`}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          ></motion.div>
          <div className="absolute text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <p className="text-[#F7E290] text-sm">ONLY</p>
            <p className="text-[#F7E290] text-3xl font-bold">{price}</p>
            <motion.button
              className="mt-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold py-2 px-6 rounded-full shadow-lg border border-[#b8860b] hover:from-[#f0c420] hover:to-[#e6b800] hover:text-black transition-all duration-300 ease-in-out"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              BOOK NOW!
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccomodationCard;
