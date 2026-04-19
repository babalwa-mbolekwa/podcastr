import Image from "next/image"
import React from "react"

interface PodcastCardProps {
  imgURL: string
  title: string
  description: string
  podcastId: number
}

const PodcastCard: React.FC<PodcastCardProps> = ({
  imgURL,
  title,
  description,
  podcastId,
}) => {
  return <div className="cursor-pointer">
    <figure className="flex flex-col gap-2">
        <Image src={imgURL} alt={title} width={174} height={174} loading="eager" className="aspect-square h-fit w-full rounded-xl 2xl:size-50" />
        <div className="flex flex-col">
            <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
            <h2 className="text-12 truncate font-normal capitalize">{description}</h2>
        </div>
    </figure>
  </div>
}

export default PodcastCard
