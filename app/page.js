import Image from "next/image";
import MainContent from "./_components/MainContent";
import LanguageLinks from "./_components/LanguageLinks";

export default function Home() {
  return (
    <div>
      <LanguageLinks />
      <MainContent />
    </div>
  );
}
