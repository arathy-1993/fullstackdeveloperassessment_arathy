import React from "react"
import {
  AgilityPic,
  ContentItem,
  ImageField,
  Module,
  URLField,
  UnloadedModule,
  UnloadedModuleProps,
} from "@agility/nextjs"
import Link from "next/link"
import getAgilitySDK from "lib/cms/getAgilitySDK"
import { getContentItem } from "lib/cms/getContentItem"

interface IHeroBanner {
  title: string
  subtitle: string
  backgroundImage: ImageField
}

const HeroBanner = async ({ module, languageCode }: UnloadedModuleProps) => {
  const { fields, contentID } = await getContentItem<IHeroBanner>({
    contentID: module.contentid,
    languageCode,
  })

  console.log("Hero Banner",fields);

  return (
    <div
      className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
      data-agility-component={contentID}
    >
      {/* Background Image */}
      {fields.backgroundImage && (
        <AgilityPic
          image={fields.backgroundImage}
          className="absolute inset-0 object-cover w-full h-full"
          alt={fields.title || "Hero Background"}
        />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4">
        <h1
          data-agility-field="title"
          className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg"
        >
          {fields.title}
        </h1>
        <p
          data-agility-field="subtitle"
          className="text-white text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md"
        >
          {fields.subtitle}
        </p>
      </div>
    </div>
  )
}

export default HeroBanner