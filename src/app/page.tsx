import AboutSection from "@/components/about.component";
import CashOfferCTA from "@/components/cash-offer.component";
import ContactSection from "@/components/contact.component";
import Footer from "@/components/footer";
import Hero from "@/components/hero.component";
import MortgageHelpSection from "@/components/mortgage-help.component";
import PreForeclosureSection from "@/components/pre-foreclosure.component";
import GoogleReviewStrip from "@/components/review.component";
import Testimonials from "@/components/testimonials.component";

export default function Home() {
    return (
        <main className="bg-white">
            <Hero />
			<AboutSection/>
			<CashOfferCTA/>
			<PreForeclosureSection/>
			<GoogleReviewStrip/>
			<Testimonials/>
			<ContactSection/>
			<MortgageHelpSection/>
			<Footer/>
        </main>
    );
}