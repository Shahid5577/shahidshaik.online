import { lazy, useState } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootContainer from "./globals/root";
import CookiesBar from "./components/CookiesBar";
import CampaignsHome from "./pages/campaignsHome";
import HostHome from "./pages/hostHome";
import FilesHome from "./pages/filesHome";
import EsignHome from "./pages/esignHome";
import AdsHome from "./pages/adsHome";
import PitchHome from "./pages/pitchHome";
import MailHome from "./pages/mailHome";
import ProjectsHome from "./pages/projectsHome";
import LaunchHome from "./pages/launchHome";
import HrHome from "./pages/hrHome";
import TaxHome from "./pages/taxHome";
import ChatHome from "./pages/chatHome";
import SocialHome from "./pages/socialHome";
import SmsHome from "./pages/smsHome";
import CrewHome from "./pages/crewHome";
import SwiprrHome from "./pages/Swiprr";
import KeptUpHome from "./pages/keptupHome";

const Home = lazy(() => import("./pages/home"));

const App = () => {
  const [acceptedCooikies, setAcceptedCookies] = useState<boolean>(
    localStorage.getItem("accepted-cookies") ? true : false
  );
  return (
    <RecoilRoot>
      {!acceptedCooikies && (
        <CookiesBar setAcceptedCookies={setAcceptedCookies} />
      )}
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route path="" Component={Home} />
            <Route path="/campaigns" element={<CampaignsHome/>} />
            <Route path="/host" element={<HostHome/>} />
            <Route path="/files" element={<FilesHome/>} />
            <Route path="/esign" element={<EsignHome/>} />
            <Route path="/ads" element={<AdsHome/>} />
            <Route path="/pitch" element={<PitchHome/>} />
            <Route path="/mail" element={<MailHome/>} />
            <Route path="/projects" element={<ProjectsHome/>} />
            <Route path="/launch" element={<LaunchHome/>} />
            <Route path="/hr" element={<HrHome/>} />
            <Route path="/tax" element={<TaxHome/>} />
            <Route path="/chat" element={<ChatHome/>} />
            <Route path="/social" element={<SocialHome/>} />
            <Route path="/watsup" element={<SmsHome/>} />
            <Route path="/crew" element={<CrewHome/>} />
            <Route path="/swiprr" element={<SwiprrHome/>} />
            <Route path="/keptup" element={<KeptUpHome/>} />
          </Routes>
        </RootContainer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
