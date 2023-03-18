import { ChangeEvent, useState } from "react";
import Searchbar from "./Searchbar";
import Results from "./Results";

import Page from "../../../components/Page";

export default function Search(): JSX.Element {
  const [ searchTerm, setSearchTerm ] = useState("");

  const callback = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Page>
      <Searchbar onChangeCallback={callback} />
      <Results searchTerm={searchTerm} />
    </Page>
  );
}
