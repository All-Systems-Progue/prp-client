import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();
  const [ cookies, _ ] = useCookies([ "token" ]);

  useEffect(() => {
    if (!cookies.token) {
      navigate("/");
    }
  }, []);
};
