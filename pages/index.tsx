

import HeroSection from '@/components/home/HeroSection';
import AboutSmall from '@/components/about/AboutSmall';
import MyProjects from '@/components/projects/MyProjects';
import Skills from '@/components/skills/Skills';
import Footer from '@/components/footer';
import BestWork from '@/components/projects/BestWork';
import Utopia_2 from '@/components/projects/Utopia_2';
export default function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSmall/>
    <Skills/>
    <MyProjects/>
    <BestWork/>
    <Footer/>
    <Utopia_2/>
    </>
  );
}
