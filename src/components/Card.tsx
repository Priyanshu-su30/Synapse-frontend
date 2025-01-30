import { DocumentIcon } from "../icons/DocumentIcon";
import { LinksIcon } from "../icons/LinksIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { TagsIcon } from "../icons/TagsIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { DeleteBtn } from "./DeleteBtn";

interface CardProps {
    title: string;
    link: string;
    contentId: string;
    type: "twitter" | "youtube" | "document" | "link" | "tag";
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
        }
    };

    return (
        <div>
            <div className="p-4 bg-white rounded-xl border-gray-200 max-w-72  border min-h-48 min-w-72 ">
                <div className="flex justify-between">
                    <div className="flex items-center text-md">
                        <div className="text-gray-500 pr-2">
                            {renderIcon()}
                        </div>
                        {title}
                    </div>
                    <div className="flex items-center">
                        <div className="pr-2 text-gray-500">
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
                            src={link.replace('watch', 'embed')}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    )}

                    {type === "twitter" && (
                        <blockquote className="twitter-tweet">
                            <a href={link.replace("x.com", "twitter.com")}></a>
                        </blockquote>
                    )}
                </div>
            </div>
        </div>
    );
}