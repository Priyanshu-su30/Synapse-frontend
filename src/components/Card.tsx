import { ShareIcon } from "../icons/ShareIcon";
import { DocumentIcon } from "../icons/DocumentIcon";
import { LinksIcon } from "../icons/LinksIcon";
import { TagsIcon } from "../icons/TagsIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DeleteBtn } from "./DeleteBtn";
import { ContentType } from "./CreateContentModal";
import { Tweet } from "react-tweet";

import React, { useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
  className?: string;
  spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = "",
  spotlightColor = "rgba(255, 255, 255, 0.25)"
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState<number>(0);

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!divRef.current || isFocused) return;

    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.9);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.9);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-in-out"
        style={{
          opacity,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};


interface CardProps {
    title: string;
    link: string;
    contentId: string;
    type: ContentType;
}




export function Card({ title, link, type, contentId }: CardProps) {
    
    const renderIcon = () => {
        switch (type) {
            case "twitter":
                return <TwitterIcon />;
            case "youtube":
                return <YoutubeIcon />;
            case "link":
                return <LinksIcon />;
            case "tag":
                return <TagsIcon />;
            case "document":
                return <DocumentIcon />;
            default:
                return <DocumentIcon />; 
        }
    };

    const extractTweetId = (link) => {
      const regex = /\/status\/(\d+)/;
      const match = link.match(regex);
      return match ? match[1] : null;
    };

    const tweetId = extractTweetId(link);


    return (
        <div>
            <SpotlightCard className="p-4 bg-white rounded-xl border-gray-200 max-w-72 border min-h-48 min-w-72 dark:bg-black-700"
                spotlightColor="rgba(0, 229, 255, 0.2)">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            {renderIcon()} 
                    
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500 dark:text-white">
                            <a href={link} target="_blank">
                                <ShareIcon />
                            </a>
                        </div>
                        <div className="text-gray-500">
                            <DeleteBtn contentId={contentId} />
                        </div>
                    </div>
                </div>
                <div className="pt-4">
                    {type === "youtube" && (
                        <iframe
                            className="w-full"
                            src={link.replace("watch", "embed").replace("?v=", "/")}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}

                    {type === "twitter" && (
                        // <blockquote className="twitter-tweet">
                        //     <a href={link.replace("x.com", "twitter.com")}></a>
                        // </blockquote>
                        
                        <Tweet id={tweetId} />
                    )}
                </div>
            </SpotlightCard>
        </div>
    );
}