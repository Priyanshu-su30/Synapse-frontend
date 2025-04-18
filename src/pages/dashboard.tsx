/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Card } from "../components/Card"
import { CreateContentModal } from "../components/CreateContentModal"
import { PlusIcon } from "../icons/PlusIcon"
import { ShareIcon } from "../icons/ShareIcon"
import { Sidebar } from "../components/Sidebar"
import { useContent } from "../hooks/useContent"
import { BACKEND_URL } from "../config"
import axios from "axios"
import ClickSpark from "../animations/ClickSpark"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(() => {
    refresh();
  }, [modalOpen])

  return (
      <ClickSpark sparkColor='#fff' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <div>
            <Sidebar />
            <div className="p-4  ml-72 min-h-screen bg-gray-100 dark:bg-black-700 dark:text-white">
              <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false);
              }} />
              <div className="pb-4 flex justify-end gap-4">
                <Button onClick={() => {
                  setModalOpen(true)
                }} variant="primary" text="Add content" startIcon={<PlusIcon />}></Button>
                <Button onClick={async () => {
                    const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                        share: true
                    }, {
                        headers: {
                            "Authorization": localStorage.getItem("token")
                        }
                    });
                    const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
                    //todo: copy the link to user's clipboard
                    alert(shareUrl);
                }} variant="secondary" text="Share brain" startIcon={<ShareIcon />}></Button>
              </div>

              <div className="flex gap-4 flex-wrap">
                {contents.map(({type, link, title, _id}) => 
                <Card 
                    type={type}
                    link={link}
                    title={title}
                    contentId = {_id}
                />)}
              </div>
            </div>
        </div>
      </ClickSpark>
  )
}