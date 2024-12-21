import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import SearchSection from "./SearchSection";
import SpecialOffers from "./SpecialOffers";
import PopularTours from "./PopularTours";
import Destinations from "./Destinations";
import WhyChooseUs from "./WhyChooseUs";
import OfferBanner from "./OfferBanner";
import CustomerReviews from "./CustomerReviews";
import BlogSection from "./BlogSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <SearchSection />
      <SpecialOffers />
      <PopularTours />
      <Destinations />
      <WhyChooseUs />
      <OfferBanner />
      <CustomerReviews />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
