import Button from "@/components/Button";
import LandingContainer from "@/containers/LangingContainer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen h-full bg-cover bg-center relative">
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
            <Image src="/icons/3-lines.svg" height={60} width={60} alt="3-lines" />
          </button>
        </nav>

        <main className="relative flex flex-col justify-stretch z-10 container mx-auto px-6 ">
          <div className="flex flex-col items-stretch lg:flex-row mt-10 justify-between">
            <div className="lg:w-1/2 flex flex-col justify-between  text-4xl">
              <div className=" font-[Minecraft]  flex flex-col items-start">
                <h2 className="text-[#00FFC9] mb-2">лiцензирований</h2>
                <h1 className="text-white leading-14">
                  торговий робот для автоматическоЇ торгiвлi на ринку
                  <span className="text-[#00FFD1]"> xau/usd</span>
                </h1>
              </div>

              <div className="flex flex-col font-[Century_Gothic] text-white max-sm:flex-row w-[45%] max-w-[300px] gap-10 mt-8">
                <Button className="flex justify-between">
                  <span>Придбати підписку</span>
                  <span>+</span>
                </Button>
                <Button className="flex justify-between">
                  <span>Спробувати демо</span>
                  <span>+</span>
                </Button>
              </div>
            </div>

            <div className="flex w-[40%] font-[Century_Gothic] flex-col items-center">
              <div className="">
                <Image
                  src="/images/robot.png"
                  height={100}
                  width={100}
                  className="h-[65vh] -mt-[80px] w-auto"
                  alt="robot"
                />
              </div>
              <div className="flex text-2xl items-center ">
                <Button className="w-full flex justify-between max-w-[300px]">
                  <span>Надіслати заявку</span>
                  <span>+</span>
                </Button>
                <Button className="border-l-0 flex p-0 py-0">
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/24hours.svg"
                      height={75}
                      className="h-[64px] w-[64px]"
                      width={75}
                      alt="24 hours"
                    />
                  </span>
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/telegram.svg"
                      height={75}
                      className="h-[64px] w-[64px]"
                      width={75}
                      alt="24 hours"
                    />{" "}
                  </span>
                  <span className="flex items-center justify-center cursor-pointer">
                    <Image
                      src="/icons/instagram.svg"
                      height={75}
                      className="h-[64px] w-[64px]"
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
