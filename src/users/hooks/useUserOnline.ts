import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useUserOnline = () => {
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, [cookies.token, navigate]);
};
