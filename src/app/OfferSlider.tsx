"use client";
import Image from "next/image";

export default function OfferSlider() {
    return (
        <div id="offerCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

                {/* Slide 1 */}
                <div className="carousel-item active">
                    <Image
                        src="/assets/img/banner.png"
                        width={600}
                        height={400}
                        className="d-block  rounded-3"
                        alt="Offer 1"
                    />
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <Image
                        src="/assets/img/banner2.png"
                        width={600}
                        height={400}
                        className="d-block  rounded-3"
                        alt="Offer 1"
                    />
                </div>

                {/* Slide 3 */}
                <div className="carousel-item">
                    <Image
                        src="/assets/img/banner3.png"
                        width={600}
                        height={400}
                        className="d-block  rounded-3"
                        alt="Offer 1"
                    />
                </div>
            </div>

            {/* Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#offerCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>

            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#offerCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
