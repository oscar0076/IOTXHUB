import React from "react";
import ProductCard from "./ProductCard";
import './SensorStyle.css'  // Import the ProductCard component
const ProductSaleSection = () => {
  const products = [
    {
      imgSrc: "/images/sensors/6_axis1.PNG",
      title: "CHENGZHOU",
      description: "6-axis Force Sensor Dimensional Load Cell Torque Sensor for Robotics CZ KWR63 Series",
      price: "400DT",
    },
    {
      imgSrc: "images/sensors/DaguRobot.PNG",
      title: "Dagu",
      description: "DaguRobot Tilt Angle Sensor Switch Sensor Module",
      price: "550DT",
    },
    {
      imgSrc: "/images/sensors/Gravity_tilit_sensor.PNG",
      title: "DFRobot",
      description: "Gravity Tilt Sensor",
      price: "230DT",
    },
    {
      imgSrc: "/images/sensors/mercury_tilit_sensor_switch.PNG",
      title: "Sunfounder",
      description: "Mercury Tilt Sensor Switch",
      price: "750DT",
    },
    {
      imgSrc: "/images/sensors/crash-sensor-right.webp",
      title: "DFRobot",
      description: "Crash Sensor (Right)",
      price: "330DT",
    },
    {
      imgSrc: "/images/sensors/raindrop-sensor-module-1.webp",
      title: "Sunfounder",
      description: "Raindrop Sensor Module",
      price: "160DT",
    },
    {
      imgSrc: "/images/sensors/grove_smart.webp",
      title: "SeeedStudio",
      description: "Grove Smart Air Quality Sensor-SGP41, MOX Gas Sensor for VOCs & NOx, Air Purifier",
      price: "60DT",
    },
    {
      imgSrc: "/images/sensors/tilt.webp",
      title: "Sparkfun",
      description: "Tilt Sensor - AT407",
      price: "5DT",
    },
    {
      imgSrc: "/images/sensors/temperature.webp",
      title: "Sparkfun",
      description: "Temperature Sensor - TMP36",
      price: "6DT",
    },
  ];

  return (
    <div>


      <main>
        <section className="equipp">
          <p>Sensors</p>
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

export default ProductSaleSection;
