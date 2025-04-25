import Button from "@/components/Button";
import LandingContainer from "@/containers/LangingContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-full w-full bg-cover bg-center relative">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/background.webm"
        className="w-full absolute bg-transparent"
      >
        <source src="/your-video.webm" type="video/webm" />
      </video>
      <div className="absolute min-h-screen h-full inset-0 z-0 bg-[linear-gradient(to_right,_#3B1F56_0%,_#322358_25%,_#232B5B_50%,_#1F2D5C_75%)] opacity-70"></div>

      {/* Navigation */}
      <LandingContainer>
        <nav className="relative z-10 p-6 flex justify-between items-center">
          <div
            className="text-[#00FFD1] text-5xl font-bold tracking-wider"
            style={{ fontFamily: "Monument Extended, sans-serif" }}
          >
            <Image
              src="/logos/MTRADE.svg"
              height={75}
              width={75}
              alt="mtrade"
              className="h-[115px] w-auto"
            />
          </div>
          <button className="cursor-pointer">
            <Image
              src="/icons/3-lines.svg"
              height={60}
              width={60}
              alt="3-lines"
            />
          </button>
        </nav>

        <main className="relative flex flex-col w-full z-10 container px-6 ">
          <div className="flex flex-col items-stretch w-[95vw] lg:flex-row justify-between mt-10">
            <div className="lg:w-[50%] flex flex-col justify-between text-4xl">
              <div className=" font-[Minecraft] text-[44px] mt-15 flex flex-col items-start">
                <h2 className="text-[#00FFC9] mb-2">Лiцензирований</h2>
                <h1 className="text-white leading-14">
                  торговий робот для автоматическоЇ торгiвлi на ринку
                  <span className="text-[#00FFD1]"> xau/usd</span>
                </h1>
              </div>

              <div className="flex flex-col font-[Century_Gothic] text-white max-sm:flex-row w-[45%]  max-w-[320px] gap-10 mt-8">
                <Button className="relative hover:text-black flex justify-between group overflow-hidden px-6 py-3 text-white ">
                  {/* Текст внутри кнопки */}
                  <span className="relative z-10 flex justify-between w-full">
                    <span>Придбати підписку</span>{" "}
                    <span className="relative z-10">+</span>
                  </span>
                  {/* Заливка из плюса */}
                  <span
                    className="absolute bg-[#02DBB2] rounded-full w-0 h-0 transition-all duration-500 ease-out z-0 
                   group-hover:w-[250%] group-hover:h-[150%] 
                   transform -translate-y-1/2 translate-x-9"
                    style={{ top: "50%", right: "1.25rem" }}
                  ></span>{" "}
                  {/* Начало заливки из плюса */}
                </Button>
                <Button className="relative hover:text-black flex justify-between group overflow-hidden px-6 py-3 text-white ">
                  {/* Текст внутри кнопки */}
                  <span className="relative z-10 flex justify-between w-full">
                    <span>Спробувати демо</span>
                    <span className="relative z-10">+</span>
                  </span>
                  {/* Заливка из плюса */}
                  <span
                    className="absolute bg-[#02DBB2] rounded-full w-0 h-0 transition-all duration-500 ease-out z-0 
                   group-hover:w-[250%] group-hover:h-[150%] 
                   transform -translate-y-1/2 translate-x-9"
                    style={{ top: "50%", right: "1.25rem" }}
                  ></span>{" "}
                  {/* Начало заливки из плюса */}
                </Button>
              </div>
            </div>

            <div className="flex font-[Century_Gothic] flex-col items-center">
              <div>
                <Image
                  src="/images/robot.png"
                  height={10000}
                  width={10000}
                  className="h-[70vh] -mt-[80px] w-auto"
                  alt="robot"
                />
              </div>
              <div className="flex text-2xl items-center ">
                <Button className="relative flex hover:text-black justify-between group overflow-hidden px-6 py-3 text-white w-[300px]">
                  {/* Текст внутри кнопки */}
                  <span className="relative z-10 flex justify-between w-full">
                    <span>Надіслати заявку</span>
                    <span className="relative z-10">+</span>
                  </span>
                  {/* Заливка из плюса */}
                  <span
                    className="absolute bg-[#02DBB2] rounded-full w-0 h-0 transition-all duration-500 ease-out z-0 
                   group-hover:w-[250%] group-hover:h-[150%] 
                   transform -translate-y-1/2 translate-x-9"
                    style={{ top: "50%", right: "1.25rem" }}
                  ></span>{" "}
                  {/* Начало заливки из плюса */}
                </Button>
                <Button className="border-l-0 flex p-0 py-0">
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/24hours.svg"
                      height={75}
                      className="h-[56px] w-[56px]"
                      width={75}
                      alt="24 hours"
                    />
                  </span>
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/telegram.svg"
                      height={75}
                      className="h-[56px] w-[56px]"
                      width={75}
                      alt="24 hours"
                    />{" "}
                  </span>
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/instagram.svg"
                      height={75}
                      className="h-[56px] w-[56px]"
                      width={75}
                      alt="24 hours"
                    />{" "}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </main>
      </LandingContainer>
    </div>
  );
}
