import Button from "@/components/Button";
import LandingContainer from "@/containers/LangingContainer";
import Image from "next/image";
import ClipBlock from "@/components/ClipBlock";

export default function Home() {
    return (
        <div className="min-h-screen h-full w-full">
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
                        <div className="lg:w-[50%] flex flex-col justify-between text-3xl" data-aos="fade-right" data-aos-duration="1000">
                            <div className=" font-[Minecraft] flex flex-col items-start">
                                <h2 className="text-[#00FFC9] mb-2">Лiцензований</h2>
                                <h1 className="text-white leading-14">
                                    торговий робот для автоматичноЇ торгiвлi <br /> на ринку
                                    <span className="text-[#00FFD1]"> xau/usd</span>
                                </h1>
                            </div>

                            <div
                                className="flex flex-col font-[Century_Gothic] text-white max-sm:flex-row w-[45%]  max-w-[320px] gap-10 mt-8">
                                <Button
                                    btnClassName="w-full flex justify-between"
                                    className="relative flex justify-between  overflow-hidden px-6 py-3 text-white ">
                                    <span className="relative z-10 ">
                                        Придбати підписку                         </span>
                                    <span className="relative z-10">+</span>
                                </Button>
                                <Button
                                btnClassName="w-full flex justify-between"
                                    className="relative hover:text-black flex justify-between group overflow-hidden px-6 py-3 text-white ">
                                    {/* Текст внутри кнопки */}
                                    <span className="relative z-10 flex justify-between w-full">
                                        <span>Спробувати демо</span>
                                        <span className="relative z-10">+</span>
                                    </span>
                                </Button>
                            </div>
                        </div>

                        <div className="flex font-[Century_Gothic] flex-col items-center" data-aos="fade-left" data-aos-duration="1000">
                            <div>
                                <Image
                                    src="/images/robot.png"
                                    height={10000}
                                    width={10000}
                                    className="h-[60vh] -mt-[80px] w-auto"
                                    alt="robot"
                                />
                            </div>
                            <div className="flex text-2xl items-center ">
                                <Button btnClassName="w-full flex justify-between relative z-10" className="w-[300px]">
                                        <span>Надіслати заявку</span>
                                        <span className="">+</span>
                                </Button>
                                <div className="border-l-0 border-[#02DBB2] border-4 flex p-0 py-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </LandingContainer>

            <div
                className={'flex justify-center items-center py-12 w-full bg-[linear-gradient(to_right,_#3B1F56_0%,_#322358_25%,_#232B5B_50%,_#1F2D5C_75%)] '}>
                <h3
                    className={'font-[Minecraft] text-[#00FFC9] text-8xl z-[100] text-reveal'}>
                    <span>П</span>
                    <span>Р</span>
                    <span>О</span>
                    <span>&nbsp;</span>
                    <span>П</span>
                    <span>Р</span>
                    <span>О</span>
                    <span>Д</span>
                    <span>У</span>
                    <span>К</span>
                    <span>Т</span>
                </h3>
            </div>

            <LandingContainer className={'p-5 flex items-center justify-center'}>
                <div className={'flex justify-between w-full'}>
                    <ClipBlock mirror data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100">
                        <header className={'text-[23px]'}>
                            <span className={'text-[#00FFC9] font-bold'}>MTRADE</span> <span>- найкращий <br /> торговий робот </span>
                            <span className={'text-[#00FFC9]'}>2025</span>
                        </header>

                        <main className={'font-[Century_Gothic] text-[23px] leading-[25px] mb-5 mt-3'}>
                            <div>З запатентованим алгоритмом трейдингу, <br /> який пройшов <span
                                className={'text-[#00FFC9] font-bold'}>незалежний аудит.</span>
                            </div>
                        </main>

                        <footer className={'font-[Century_Gothic] text-[23px] leading-[25px]'}>
                            <div>Система приймає рішення <span
                                className={'text-[#00FFC9] font-bold'}>самостійно</span> на <br /> основі ринкових
                                даних,
                                <span className={'text-[#00FFC9] font-bold'}>працює 24/5</span> і орієнтована
                                на <span className={'font-bold text-[#00FFC9]'}>довгостроковий прибуток</span></div>
                        </footer>
                    </ClipBlock>
                    <ClipBlock data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100">
                        <header className={'text-[23px] mb-5'}>
                            <span className={'text-[#00FFC9]'}>автоматична</span> <span>торгiвля</span>
                        </header>

                        <main className={'font-[Century_Gothic] text-[23px] leading-[25px] mb-5 mt-3'}>
                            <div>Пара золото/долар <span className={'text-[#00FFC9] font-bold'}>(XAU/USD)</span> —
                                одна <br /> з найволатильніших і найприбутковіших <br /> пар.
                            </div>
                        </main>

                        <footer className={'font-[Century_Gothic] text-[23px] leading-[25px]'}>
                            <div><span className={'text-[#00FFC9] font-bold'}>Сіткова стратегія</span> дозволяє
                                заробляти <br />
                                на рості і на падінні ринку.
                            </div>
                        </footer>
                    </ClipBlock>

                </div>

                <div className={"flex justify-center items-center bg-[url('/images/sphere.png')] h-[350px] w-[287px] rounded-full flex justify-center items-center bg-center bg-cover -mt-[120px] -mb-[120px]"} data-aos="zoom-in" data-aos-duration="1200">
                    <Image src={"/images/goldi.png"} height={350} width={287} alt={'sphere'} />
                </div>
                <div className={'flex justify-between w-full'}>
                    <ClipBlock className={'items-start text-start'} mirror rotate={180} data-aos="fade-right" data-aos-duration="1000" data-aos-delay="150">
                        <header className={'text-[20px]'}>
                            <span className={'text-[#00FFC9]'}>Надiйний</span> <span>прибуток <br /> та адаптация</span>
                        </header>

                        <main className={'font-[Century_Gothic] text-[23px] leading-[25px] mb-5 mt-3'}>
                            Система показує стабільну прибутковість <br /> до <span
                                className={'text-[#00FFC9] font-bold'}>

                                30% щомісяця.
                            </span>
                        </main>

                        <footer className={'font-[Century_Gothic] text-[23px] leading-[25px]'}>
                            Алгоритм автоматично адаптується <br /> до змін ринку, розподіляючи ризики
                            і <br /> обираючи <span className={'text-[#00FFC9] font-bold'}>найкращі точки входу.</span>
                        </footer>
                    </ClipBlock>
                    <ClipBlock rotate={180} data-aos="fade-left" data-aos-duration="1000" data-aos-delay="150">
                        <header className={'text-[20px]'}>
                            <span>Для тестування <br /> спробуй </span>
                            <span className={'text-[#00FFC9]'}>демо-версiю</span>
                        </header>

                        <main className={'font-[Century_Gothic] mt-14 text-[23px] flex justify-center'}>
                            <Button btnClassName="w-[250px] h-[60px] text-2xl flex justify-between items-center" className={'w-[250px] h-[60px] text-2xl flex justify-between items-center'}>
                                <span>
                                    Спробувати демо
                                </span>
                                <span>
                                    +
                                </span>
                            </Button>
                        </main>
                    </ClipBlock>

                </div>
            </LandingContainer>

        </div>
    );
}
