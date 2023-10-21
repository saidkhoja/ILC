import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SupportSection from "./components/SupportSection";
import RatesSection from "./components/RatesSection";
import PartnerSection from "./components/PartnerSection";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div
            style={{
                background:
                    "radial-gradient(30% 70% at 30% 70%, rgba(205, 187, 239, 0.20) 30%, rgba(196, 196, 196, 0.05) 100%)",
            }}>
            <div className='container'>
                <Header />
                <main>
                    <HeroSection />
                    <SupportSection />
                    <RatesSection />
                    <PartnerSection />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;
