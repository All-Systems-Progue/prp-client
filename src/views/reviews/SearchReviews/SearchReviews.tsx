import { Page } from "@components/Page";
import { ChangeEvent, useState } from "react";

import { ReviewResults } from "./ReviewResults";
import { Searchbar } from "./Searchbar";

export const SearchReviews = (): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState("");

  const callback = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Page>
      <Searchbar onChangeCallback={callback} />
      <ReviewResults searchTerm={searchTerm} />
    </Page>
  );
};
