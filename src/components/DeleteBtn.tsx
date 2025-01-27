import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from 'react';

interface Content {
      _id: string; 
    }

export function DeleteBtn(){    
    
    
      
    const [contentId, setContentId] = useState(''); 
    
    useEffect(() => {
      const fetchContentId = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/v1/content`); 
          const contentData: Content[] = response.data; 
          setContentId(contentData[0]._id); 
        } catch (error) {
          console.error('Error fetching content ID:', error);
        }
      };

      fetchContentId();
      }, []);



    async function deleteCon() {
      console.log("hello");
      

        await axios.delete(`${BACKEND_URL}/api/v1/content`,{
            data: { contentid: contentId },
            headers:{
                "Authorization": localStorage.getItem("token")
            }
        })
    }
    return <div>
        <button onClick={deleteCon}/>
    </div>
}