import AboutSection from "@/components/about.component";
import CashOfferCTA from "@/components/cash-offer.component";
import ContactSection from "@/components/contact.component";
import Footer from "@/components/footer";
import HelpAccordion from "@/components/help-accordion";
import Hero from "@/components/hero.component";
import HowItWorks from "@/components/how-it-works.component";
import MortgageHelpSection from "@/components/mortgage-help.component";
import PreForeclosureSection from "@/components/pre-foreclosure.component";
import GoogleReviewStrip from "@/components/review.component";
import Review from "@/components/review.tio.component";
import Testimonials from "@/components/testimonials.component";
import WhyChooseLochHomes from "@/components/why-choose-us";

export default function Home() {
    return (
        <main className="bg-white">
            <Hero />
			<AboutSection/>
			<CashOfferCTA/>
			<HowItWorks/>
			<PreForeclosureSection/>
			<HelpAccordion/>
			<WhyChooseLochHomes/>
			<ContactSection/>
			{/* <GoogleReviewStrip/> */}
			<Review/>
			<Testimonials/>
			{/* <MortgageHelpSection/> */}
			<Footer/>
        </main>
    );
}