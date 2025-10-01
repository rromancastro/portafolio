import { NavBar } from "./components";
import { FirstSection, FourthSection, SecondSection, ThirdSection } from "./sections";

export default function Home() {
    return  (<>
        <NavBar />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </>)
}
