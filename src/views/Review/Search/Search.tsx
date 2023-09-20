import { ChangeEvent, useState } from "react";

import Page from "../../../components/Page";
import Results from "./Results";
import Searchbar from "./Searchbar";

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
