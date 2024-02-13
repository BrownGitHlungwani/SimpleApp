import { PlayCircleIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export declare interface DetailCardDto {
    id: number,
    name: string,
    task: string,
    gamification: string,
    imageSrc: string,
    heading: string
}

interface DetailCardProps {
    data: DetailCardDto;
}

export const DetailsCard: React.FC<DetailCardProps> = ({ data }) => {
    const [viewQuestions, setViewQuestions] = useState("");

    const handleComponent = () => {
        setViewQuestions("Questions");
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-semibold">{data.heading}</h1>
            <div className="w-full sm:max-w-5xl bg-white rounded-3xl ring-1 ring-gray-300 px-4 py-4 mb-8 ml-20 mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gray-200 rounded-lg h-[280px]">
                        <img src={data.imageSrc} className="h-[280px] sm:w-[493px] w-full rounded-md" />
                        <button>
                            <PlayCircleIcon className="absolute h-20 w-20 mt-[-12rem] ml-[6rem] text-white bg-gray-800 rounded-full" />
                        </button>
                    </div>
                    <div className="sm:col-span-2 ml-4">
                        <div className="flex flex-wrap justify-between">
                            <h1 className="text-2xl w-[28rem] font-semibold ">{data.name}</h1>
                            <div className="pt-2 text-sm text-gray-400 flex">
                                13 February 2024
                            </div>
                        </div>
                        <h3 className="text-sm text-gray-400 pt-2">By Wits</h3>
                        <p className="font-medium font-sans text-sm pt-6 leading-loose md:leading-relaxed">{data.task}</p>
                        <p className="text-gray-500 mt-2">{data.gamification}</p>
                        <button className="mt-6 flex text-sm px-6 py-1 ring-1 ring-gray-400 cursor-text  rounded-3xl bg-gray-200"
                            onClick={handleComponent}
                        >
                            Take Assessment
                        </button>
                        <dd className="border-r border-gray-400 pl-2"></dd>
                    </div>
                </div>
            </div>
            {
                viewQuestions === "Questions" &&
                <div className="mt-2 text-center"
                >
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Questions</h1>
                    <ul>
                        <li>First question 1</li>
                        <li>First question 2</li>
                        <li>First question 3</li>
                    </ul>
                </div>
            }
        </div>

    )
}

export default DetailsCard;
