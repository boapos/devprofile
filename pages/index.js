import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex flex-col items-start justify-center ">
        <Header />
        <SubHeader />
      </div>
    </div>
  );
}
