import React from "react";

export declare interface DetailCardDto {
    id: number,
    name: string,
    task: string,
    gamefication: string,
    image: string,
}

interface DetailCardProps {
    data: DetailCardDto;
}

export const DetailsCard: React.FC<DetailCardProps> = ({ data }) => {

    return (
        <div className="w-full bg-white rounded-3xl ring-1 ring-gray-300 px-4 py-4 mb-8">
            <div className="grid grid-cols-1  sm:grid-cols-3 gap-4">
                <div>
                    <img src={data.image} className="h-[260px] sm:w-[493px] w-full rounded-md" />
                </div>
                <div className="sm:col-span-2 ml-4">
                    <div className="flex flex-wrap justify-between">
                        <h1 className="text-2xl font-semibold ">{data.name}</h1>
                        <div className="pt-2 text-sm text-gray-400 flex">
                            <img src="/Editcheck.svg" className="h-5 w-8 sm:-ml-0 -ml-3" />
                            13 February 2024
                        </div>
                    </div>
                    <h3 className="text-sm text-gray-400 pt-2">By Wits</h3>
                    <p className="font-medium font-sans text-sm pt-6 leading-loose md:leading-relaxed">{data.task}</p>
                    <button className="mt-6 flex text-sm px-6 py-1 ring-1 ring-gray-400 cursor-text  rounded-3xl bg-gray-200">
                        <h1 className="font-semibold">{data.id}</h1>
                        <dd className="border-r border-gray-400 pl-2"></dd>
                        <h2 className="pl-2 font-medium text-green-600">{data.gamefication}</h2>
                    </button>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-3"></div>
        </div>

    )
}

export default DetailsCard;