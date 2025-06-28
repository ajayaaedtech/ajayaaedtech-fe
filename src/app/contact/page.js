import Footer from "../components/Footer/Footer";
import ContactForm from "./ContactForm";
import ContectHomeDesign from "./ContectHomeDesign.js";
import ContactTitleInfo from "./ContectTitleInfo.js";
import AdditonalInfo from "./AdditonalInfo.js";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white ">
      {/* Teach vision section */}
      <div className="block border min-h-50 w-full">
        <ContectHomeDesign />
      </div>

      <ContactTitleInfo />
      
      <div className="mt-10  mx-auto">
        <ContactForm />
      </div>
      <AdditonalInfo />
      <Footer />
    </main>
  );
}
