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
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
        return () => clearInterval(interval); // Cleanup function to stop interval when unmounted
    }, []);

    return (
        <div className="carousel-container">
            <button className="prev" onClick={prevSlide}>❮</button>

            <img src={images[currentIndex]} alt="Dish" className="carousel-image" />

            <button className="next" onClick={nextSlide}>❯</button>

            <div className="dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={index === currentIndex ? "dot active" : "dot"}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
