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
import TrainingServices from "./components/TrainingServices";
import NewFeaturedCourses from "./components/featuredcourses/NewFeaturedCourses";

export const metadata = {
  title: "Ajayaa Edtech - Tech-Driven Learning Solutions",
  description: "Tech Vision India - Training the Future",
  keywords: [
    "Ajayaa Edtech",
    "Tech Education",
    "Industry 4.0 Skills",
    "Computational Thinking",
    "AI Literacy",
    "EdTech India", 'ajayaa', 'edtech', 'tech training',
  ],

};

export default function Home() {

  return (
    <>
      {/* <HeroAjayaa /> */}
      <MainSectionHome />
      {/* <HorizontalScrollingCards/> */}
      {/* <CourseCategories /> testing dmuu */}
      {/* <TeacherShowcase/> */}
      {/*   <EdTechConsultancy /> */}
      <TrainingServices />
      <NewFeaturedCourses />

      <WhyChooseUs />
      <ProjectOverview />
      <OfferingsComponent />
      <BrochureDownloadSection />
      {/* <Footer /> */}
      <ContactInfo />
    </>
  );
}
