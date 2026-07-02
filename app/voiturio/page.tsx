import VoiturioNavbar from "@/components/voiturio/navbar";
import VoiturioHero from "@/components/voiturio/hero";
import VoiturioFeatures from "@/components/voiturio/features";
import VoiturioTestimonials from "@/components/voiturio/testimonials";
import VoiturioAppSection from "@/components/voiturio/app-section";
import VoiturioBlogSection from "@/components/voiturio/blog-section";
import VoiturioNewsletter from "@/components/voiturio/newsletter";
import VoiturioFooter from "@/components/voiturio/footer";

export const metadata = {
  title: "Voiturio — Économisez sur votre location de voiture",
  description:
    "Comparez et réservez parmi plus de 500 agences de location de voiture. Meilleurs prix garantis.",
};

export default function VoiturioHomePage() {
  return (
    <main style={{ fontFamily: "var(--font-poppins)", color: "#16181d" }}>
      <VoiturioNavbar />
      <VoiturioHero />
      <VoiturioFeatures />
      <VoiturioTestimonials />
      <VoiturioAppSection />
      <VoiturioBlogSection />
      <VoiturioNewsletter />
      <VoiturioFooter />
    </main>
  );
}
