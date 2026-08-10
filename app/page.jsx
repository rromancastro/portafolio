import { Loader, NavbarComponent } from "./components";
import { FifthSection, FourthSection, HeaderSection, SecondSection, ThirdSection } from "./sections";

export default function Home() {
  return <>
    {/* <Loader /> */}
    <NavbarComponent />
    <HeaderSection />
    <SecondSection /> 
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </>
}
