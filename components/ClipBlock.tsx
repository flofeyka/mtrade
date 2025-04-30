import React from "react";
import Image from "next/image";
import { cn } from "@sglara/cn";

interface Props {
    children: React.ReactNode;
    rotate?: 45 | 90 | 180;
    className?: string;
    mirror?: boolean;
    hideLine?: boolean;
    linePosition?: "top" | "bottom" | "auto";
    "data-aos"?: string;
    "data-aos-duration"?: string | number;
    "data-aos-delay"?: string | number;
    "data-aos-easing"?: string;
}

export default function ClipBlock({ 
    children, 
    rotate, 
    mirror, 
    className, 
    hideLine = false, 
    linePosition = "auto",
    ...props 
}: Props) {
    const rotationClass: string = rotate === 180 ? 
        'bg-[url("/images/rotated-clip_block.png")]' : 
        'bg-[url("/images/clip_block.png")]';

    // Создаем четыре разных линии и показываем нужную в зависимости от конфигурации
    const isDefaultBlock = !rotate && !mirror; // Обычный блок (верхний правый)
    const isMirrorBlock = !rotate && mirror;   // Зеркальный блок (верхний левый)
    const isRotatedBlock = rotate === 180 && !mirror; // Повернутый блок (нижний правый)
    const isRotatedMirrorBlock = rotate === 180 && mirror; // Повернутый зеркальный блок (нижний левый)
    
    return (
        <div
            {...props}
            className={cn(`relative flex flex-col pt-3 ${mirror && !rotate ? "items-start" : "items-end text-end"} ${rotate && 'justify-start pt-14'} p-3 px-5 w-[43vw] h-[40vh] bg-cover gap-16 font-[Minecraft]`, className)}
        >
            <div
                className={cn(`absolute inset-0 bg-cover ${mirror ? 'transform scale-x-[-1] text-start' : 'text-end'} z-0`, rotationClass)}
            />
            
            {/* Декоративные линии в соответствии со скриншотом */}
            {!hideLine && (
                <>
                    {/* Верхний правый блок (обычный) - линии снизу и справа */}
                    {isDefaultBlock && (
                        <>
                            {/* Линия снизу */}
                            <div className="absolute z-10 clip-line right-0 -mr-5 bottom-0">
                                <Image 
                                    src="/icons/clipblock-line.svg" 
                                    width={400} 
                                    height={139} 
                                    alt="" 
                                    className="w-full h-auto object-cover"
                                    priority
                                />
                            </div>
                        </>
                    )}
                    
                    {/* Верхний левый блок (зеркальный) - снизу слева */}
                    {isMirrorBlock && (
                        <div className="absolute z-[9999] clip-line left-5 bottom-0">
                            <Image 
                                src="/icons/clipblock-line.svg" 
                                width={400} 
                                height={139} 
                                alt="" 
                                className="w-full h-auto max-h-[150px] -ml-10 transform scale-x-[-1]"
                                priority
                            />
                        </div>
                    )}
                    
                    {/* Нижний правый блок (повернутый) - вверху справа */}
                    {isRotatedBlock && (
                        <div className="absolute z-10 clip-line right-0 -mr-5 top-0">
                            <Image 
                                src="/icons/clipblock-line.svg" 
                                width={400} 
                                height={139} 
                                alt="" 
                                className="w-full rotate-180 transform scale-x-[-1]"
                                priority
                            />
                        </div>
                    )}
                    
                    {/* Нижний левый блок (повернутый зеркальный) - вверху слева */}
                    {isRotatedMirrorBlock && (
                        <div className="absolute z-full clip-line -top-13">
                            <Image 
                                src="/icons/clipblock-line.svg" 
                                width={450} 
                                height={139} 
                                alt="" 
                                className="w-full -ml-10"
                                priority
                            />
                        </div>
                    )}
                </>
            )}

            <div className={cn("relative z-20 flex flex-col text-[30px]", rotate===180 && 'pt-10')}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
}
