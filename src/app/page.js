import MainMenu from "./components/menu/MainMenu";
import Footer from "./components/Footer/Footer";
import HeroAjayaa from "./components/herosection/HeroAjayaa";
import CourseCategories from "./components/CourseCategories/CourseCategories";
import WhyChooseUs from "./components/whychooseus/WhyChooseUs";
import OfferingsComponent from "./components/OfferingsComponent/OfferingsComponent";
import TeacherShowcase from "./components/teachershowcase/TeacherShowcase";
import ProjectOverview from "./components/projectoverview/ProjectOverview";

export default function Home() {
  return (
    <>
      <HeroAjayaa />
      {/* <CourseCategories /> testing dmuu */}
      <TeacherShowcase/>
      <WhyChooseUs />
      <ProjectOverview />
      <OfferingsComponent/>
      <Footer />
    </>
  );
}
