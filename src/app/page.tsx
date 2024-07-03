import Header from "@/components/organisms/header";
import Main from "@/components/organisms/main";
import { InfiniteMovingCards } from "@/components/organisms/infinite-moving-cards";
import CarauselLogo from '@/assets/images/CarauselLogo.svg'
import OurSites from "@/components/organisms/oursites";
import { Gallery } from "@/components/melecules/gallery";
import { BuildLaunch } from "@/components/melecules/buildlaunch";
import Customers from "@/components/organisms/customers";
import FAQ from "@/components/organisms/faq";
import getStartedTodayGreen from '@/assets/images/Get started today green.svg'
import getStartedTodayPink from '@/assets/images/Get started today pink.svg'
import getStartedTodayYellow from '@/assets/images/Get started today yellow.svg'
import Footer from "@/components/organisms/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <InfiniteMovingCards items={[CarauselLogo]} />
      <OurSites />
      <Gallery />
      <BuildLaunch />
      <Customers />
      <FAQ />
      <InfiniteMovingCards items={[getStartedTodayGreen, getStartedTodayPink, getStartedTodayYellow]} />
      <Footer />
    </>
  );
}
