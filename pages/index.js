import EmailModal from "../components/EmailModal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-screen px-8 pt-10">
      <div className=""></div>
      <div className="flex flex-col items-center lg:items-start justify-center ">
        <Header />
        <SubHeader />
        <div className="relative mt-5">
          <EmailModal />
        </div>
      </div>
      <Footer />
    </div>
  );
}
