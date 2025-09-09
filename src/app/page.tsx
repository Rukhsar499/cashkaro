"use client";


import Header from "../app/component/Header";
import Footer from "../app/component/Footer";
import OfferSlider from "../app/OfferSlider";
import TopCategoriesSlider from "../app/TopCategoriesSlider";

export default function Home() {
  return (
    <>
    <Header />
    <OfferSlider />
    <TopCategoriesSlider />
    <Footer />
    </>
  );
}
