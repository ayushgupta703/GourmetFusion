import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
    "https://www.travelandleisure.com/thmb/C18rAVxiR0HVcaAKg1CPdiTaH1I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/the-wizards-emeralds-roxbury-catskills-MOVIEHOTELS0218-77357fbca68a41ee85414e51957a3daa.jpg",
    "https://hips.hearstapps.com/elledecor/assets/16/02/1452641380-01.jpg",
    "https://photos.travelmyth.com/blog/14190-clearskyresorts.jpg?width=1380",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN-pvrqt1Mwgnxa7s7QiUP1vrYbQZsRZIQFA&s",
    "https://img.buzzfeed.com/buzzfeed-static/static/2021-04/27/6/asset/0d89923d4c06/sub-buzz-596-1619504594-22.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsccRwdmKC_IX8u30mb0oW2QP84yv2wGwzkw&s",
    "https://hips.hearstapps.com/elledecor/assets/16/02/1452638325-living-module-021.jpg"
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Centered slide

    // Next slide function
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };


    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gallery-carousel">
            <div className="gallery-carousel-wrapper">
                {images.map((image, index) => {
                    let diff = index - currentIndex;
                    let scale = 1 - Math.abs(diff) * 0.1;
                    let opacity = 1 - Math.abs(diff) * 0.3;
                    let translateX = diff * 25;

                    return (
                        <div
                            key={index}
                            className={`gallery-carousel-slide ${index === currentIndex ? "active" : ""}`}
                            style={{
                                backgroundImage: `url(${image})`,
                                transform: `translateX(${translateX}%) scale(${scale})`,
                                opacity: opacity,
                                zIndex: -Math.abs(diff) + 5,
                            }}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
