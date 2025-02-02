import axios from "axios";
import { BACKEND_URL } from "../config";
import { DeleteIcon } from "../icons/DeleteIcon";

interface DeleteBtnProps {
    contentId: string;
}

export function DeleteBtn({ contentId }: DeleteBtnProps) {
    const handleDelete = async () => {
        try {
            await axios.delete(`${BACKEND_URL}/api/v1/content`, {
                data: { contentid: contentId },
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });
        } catch (error) {
            console.error("Delete failed:", error);
        }
    };

    return (
        <a onClick={handleDelete} className="cursor-pointer dark:text-white">
            <DeleteIcon />
        </a>
    );
}