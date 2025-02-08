import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { LogoutIcon } from "../icons/LogoutIcon";

export default function LogoutButton  ()  {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("authToken"); 

    localStorage.clear();
    sessionStorage.clear();

    if ("caches" in window) {
      caches.keys().then((names) => {
        names.forEach((name) => caches.delete(name));
      });
    }

    navigate("/signin");
  };

  return (
    <button onClick={handleLogout} className="flex items-center gap-2 ">
        <LogoutIcon/>Logout
    </button>
  );
};


