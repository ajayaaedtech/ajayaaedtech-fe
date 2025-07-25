import Footer from "./components/Footer/Footer";
import HeroAjayaa from "./components/herosection/HeroAjayaa";
// import CourseCategories from "./components/CourseCategories/CourseCategories";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs";
import OfferingsComponent from "./components/OfferingsComponent/OfferingsComponent";
import TeacherShowcase from "./components/teachershowcase/TeacherShowcase";
import ProjectOverview from "./components/projectoverview/ProjectOverview";
import ContactInfo from "./helper-components/ContactInfo";
import MainSectionHome from "./components/miansectionhome/MainSectionHome";
import HorizontalScrollingCards from "./components/miansectionhome/HorizontalScrollingCards";
import BrochureDownloadSection from "./components/brochureui/BrochureDownloadSection";
import EdTechConsultancy from "./components/EdTechConsultancy/EdTechConsultancy";
export default function Home() {
  return (
    <>
      {/* <HeroAjayaa /> */}
      <MainSectionHome/>
     {/* <HorizontalScrollingCards/> */}
      {/* <CourseCategories /> testing dmuu */}
      {/* <TeacherShowcase/> */}
      <EdTechConsultancy/>
      <WhyChooseUs />
      <ProjectOverview />
      <OfferingsComponent/>
      <BrochureDownloadSection/>
      {/* <Footer /> */}
      <ContactInfo/>
    </>
  );
}
