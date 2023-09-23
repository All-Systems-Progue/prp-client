import { Image } from "@mantine/core";
import { Link } from "react-router-dom";

import ProgueLogo from "/logo/progue-logo.svg";

export const HeaderLogo = (): JSX.Element => {
  return (
    <Link to="/home" style={{ margin: "auto" }}>
      <Image m="auto" src={ProgueLogo} height={40} alt="Progue Logo" />
    </Link>
  );
};
