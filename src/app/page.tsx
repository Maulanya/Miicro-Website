"use client"

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
import Getyourown from "@/components/organisms/getyourown";
import Boxes from "@/components/organisms/boxes";
import Communitieswork from "@/components/organisms/communitieswork";
import { UserbackProvider } from '@userback/react';

export default function Home() {
  return (
    <UserbackProvider token="A-3fq7ZC9klLzGcaWTBU7pNBRs3">
      <Header />
      <Main />
      <InfiniteMovingCards items={[CarauselLogo]} />
      <OurSites />
      <Gallery />
      <Getyourown />
      <Boxes />
      <BuildLaunch />
      <Customers />
      <FAQ />
      <Communitieswork />
      <InfiniteMovingCards speed="slow" items={[getStartedTodayGreen, getStartedTodayPink, getStartedTodayYellow]} />
      <Footer />
    </UserbackProvider>
  );
}
