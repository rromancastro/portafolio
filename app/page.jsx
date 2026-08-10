import { Loader, NavbarComponent } from "./components";
import { LanguageProvider } from "./i18n";
import { FifthSection, FourthSection, HeaderSection, SecondSection, ThirdSection } from "./sections";

export default function Home() {
  return <LanguageProvider>
    <Loader />
    <NavbarComponent />
    <HeaderSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
    <FifthSection />
  </LanguageProvider>
}
