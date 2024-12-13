import React from "react";
import ProductCard from "./ProductCard";
import './SensorStyle.css'  // Import the ProductCard component
const Motors = () => {
  const products = [

        {
          imgSrc: "/images/motors/motor1.webp",
          title: "T-Motor",
          description: "T-Motor Brushless Motor U15Ⅱ KV80",
          price: "1500DT",
        },
        {
          imgSrc: "/images/motors/motor2.webp",
          title: "T-Motor",
          description: "T-Motor FPV 4 In 1 55A Brushless Motor ESC",
          price: "300DT",
        },
        {
          imgSrc: "/images/motors/motor3.webp",
          title: "E-S Motor",
          description: "Micro Flat Spur Gear Motor, Parallel Shaft Gear Motor, 6V, 7RPM",
          price: "40DT",
        },
        {
          imgSrc: "/images/motors/motor4.webp",
          title: "E-S Motor",
          description: "DC Flat Spur Gear Motor, Parallel Shaft Gear Motor, 12V, 3RPM",
          price: "70DT",
        },
        {
          imgSrc: "/images/motors/motor5.webp",
          title: "iflight-rc",
          description: "iPower Motor GM3506 Brushless Gimbal Motor w/ AS5048A Encoder",
          price: "110DT",
        },
        {
          imgSrc: "/images/motors/motor6.webp",
          title: "T-Motor",
          description: "T-Motor Navigator MN3510 360KV Brushless Motor",
          price: "200DT",
        },
        {
          imgSrc: "/images/motors/motor7.webp",
          title: "E-S Motor",
          description: "DC 12.0V 25BY Stepper Geared Motor w/ Motor Driver Kits, Gear Ratio 1/478",
          price: "200DT",
        },
        {
          imgSrc: "/images/motors/motor8.webp",
          title: "E-S Motor",
          description: "DC 5.0V 15BY Stepper Geared Motor w/ Motor Driver Kits, Gear Ratio 1/380",
          price: "100DT",
        },
     
      
      ];

  return (
    <div>


      <main>
        <section className="equipp">
          <p>Motors</p>
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

export default Motors;
