import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default () => {
  const navigate = useNavigate();
  const [cookies, _] = useCookies(["token"]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, []);
};
