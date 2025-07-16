
import { ContactSection } from "../components/home/ContactSection";
import { CustomerReviewsSection } from "../components/home/CustomerReviewsSection";
import { FeaturedProductsSection } from "../components/home/FeaturedProductsSection";
import { FeaturesSection } from "../components/home/FeaturesSection";
import { HeroSection } from "../components/home/HeroSection";
import { ImageCompareSection } from "../components/home/ImageCompareSection";

export default function Home() {
  return (
    <>
      <HeroSection/>
      <FeaturesSection/>
      <FeaturedProductsSection/>
      <ImageCompareSection />
      <CustomerReviewsSection />
      <ContactSection />
    </>
  );
}