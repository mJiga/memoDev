"use client";
import { FC } from "react";

interface CardDemoProps {
  url: string;
  title: string;
  description: string;
  ext: string;
}

export const CardDemo: FC<CardDemoProps> = ({
  url,
  title,
  description,
  ext,
}) => {
  return (
    <div className="relative max-w-xl w-full group cursor-pointer">
      <a href={ext} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative h-96 rounded-md shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20 transition-all duration-400 group-hover:opacity-10" />
          <img
            src={url}
            alt={title}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-end">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:translate-y-[-0.25rem]">
              {title}
            </h2>
            <p className="text-sm text-gray-200 transform transition-transform duration-300 group-hover:translate-y-[-0.25rem]">
              {description}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
