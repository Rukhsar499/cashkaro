"use client";
import Image from "next/image";

export default function OfferSlider() {
    return (
        <div id="offerCarousel" className="carousel slide mb first-sec" data-bs-ride="carousel">
            <div className="carousel-inner">

                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Image
                                src="/assets/img/banner.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 1"
                            />
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <Image
                                src="/assets/img/banner2.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 2"
                            />
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <Image
                                src="/assets/img/banner3.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 3"
                            />
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <Image
                                src="/assets/img/banner4.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 4"
                            />
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <Image
                                src="/assets/img/banner5.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 5"
                            />
                        </div>
                        <div className="col-12 col-md-4 d-none d-md-block">
                            <Image
                                src="/assets/img/banner6.png"
                                width={600}
                                height={300}
                                className="d-block w-100 rounded-3"
                                alt="Offer 6"
                            />
                        </div>
                    </div>
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
