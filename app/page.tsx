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
        <nav className="relative z-10 p-6 flex justify-between items-start">
          <div
            className="text-[#00FFD1] text-5xl font-bold tracking-wider"
            style={{ fontFamily: "Monument Extended, sans-serif" }}
          >
            <Image
              src="/logos/MTRADE.svg"
              height={50}
              width={50}
              alt="mtrade"
              className="h-[115px] w-auto"
            />
          </div>
          <button className="text-[#00FFD1] p-2 rounded-full border-2 border-[#00FFD1] hover:bg-[#00FFD1]/10 transition-all">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        <main className="relative flex flex-col justify-stretch z-10 container mx-auto px-6 ">
          <div className="flex flex-col items-stretch lg:flex-row mt-10 justify-between">
            <div className="lg:w-1/2 flex flex-col justify-between  text-4xl">
              <div className=" font-[Minecraft]  flex flex-col items-start">
                <h2 className="text-[#00FFC9] mb-1">лiцензирований</h2>
                <h1 className="text-white leading-12">
                  торговий робот для автоматическоЇ торгiвлi на ринку
                  <span className="text-[#00FFD1]"> xau/usd</span>
                </h1>
              </div>

              <div className="flex flex-col font-[Century_Gothic] text-white max-sm:flex-row w-[45%] gap-4 mt-8">
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
                  className="h-[70vh] -mt-[100px] w-auto"
                  alt="robot"
                />
              </div>
              <div className="w-full flex text-2xl items-center ">
                <Button className="w-full flex justify-between">
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
