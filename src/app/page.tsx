"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from "../app/component/Header";
import OfferSlider from "../app/OfferSlider";

export default function Home() {
  return (
    <>
    <Header />
    <OfferSlider />
    </>
  );
}
