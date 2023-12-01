/* importaciones de next */
import Image from "next/image";

/* importaciones de img que necesitamos */
import logoItson from "@/assets/icons/LogoItson.png";
import ButtonsLobby from "@/components/lobbyComponents/ButtonsLobby";

const lobbyPage = () => {
  return (
    <main className="w-full  h-full container  flex  flex-col  items-center animate-fade ">
      <div className="container   w-4/6 md:w-96 flex mt-20 md:mt-10  ">
        <Image src={logoItson} alt="logo"></Image>
      </div>

      <ButtonsLobby></ButtonsLobby>
    </main>
  );
};

export default lobbyPage;
