import React from "react";
import ProductCard from "./ProductCard";
import './SensorStyle.css'  // Import the ProductCard component
const Microcontrollers = () => {
  const products = [
        {
          imgSrc: "images/microcontrollers/arduino_mega.webp",
          title: "Elenco",
          description: "Snap Circuits Dual LED Display & Microcontroller Module",
          price: "150DT",
        },
        {
          imgSrc: "/images/microcontrollers/micro2.webp",
          title: "Arduino",
          description: "Arduino Uno WiFi Microcontroller rev2",
          price: "160DT",
        },
        {
          imgSrc: "/images/microcontrollers/micro3.webp",
          title: "DFRobot",
          description: "DFRduino Uno USB Microcontroller R3",
          price: "60DT",
        },
        {
          imgSrc: "/images/microcontrollers/micro4.webp",
          title: "Revolution",
          description: "PICAXE-20M2 Microcontroller Chip",
          price: "20DT",
        },
        {
          imgSrc: "/images/microcontrollers/micro6.webp",
          title: "DFRobot",
          description: "Arduino Mega 2560 Microcontroller Rev3",
          price: "170DT",
        },
      ];

  return (
    <div>


      <main>
        <section className="equipp">
          <p>Microcontrollers</p>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
           
          </div>
        </section>

        <section className="product-sale">
          <div className="product-cards">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imgSrc={product.imgSrc}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        </section>
      </main>

     
    </div>
  );
};

export default Microcontrollers;
