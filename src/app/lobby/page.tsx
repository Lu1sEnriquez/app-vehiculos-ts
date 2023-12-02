/* importaciones de next */
import Image from "next/image";
import logoAct1 from "@/assets/icons/acti.png";
import logoActi2 from "@/assets/icons/actilogo.jpg";
import logoActi3 from "@/assets/icons/actilogo2.png";
/* importaciones de img que necesitamos */
import logoItson from "@/assets/icons/LogoItson.png";
import ButtonsLobby from "@/components/lobbyComponents/ButtonsLobby";

const lobbyPage = () => {
  return (
    <main className="w-full  h-full container  flex  flex-col  items-center animate-fade gap-5">
      <div className="   w-4/6 md:w-96 flex mt-20 md:mt-10   ">
        <Image src={logoItson} alt="logo"></Image>
      </div>

      <ButtonsLobby></ButtonsLobby>
      <div className="flex flex-row items-end justify-center gap-2 text-slate-800">
        <h1 className="font-nunito-sans font-bold text-xl">Acti</h1>
        <Image src={logoActi3} width={35} alt="Acti"></Image>
      </div>
    </main>
  );
};

export default lobbyPage;
