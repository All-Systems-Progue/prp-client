import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";
import { Box, Center, Loader, Title } from "@mantine/core";

import useInfiniteSearch from "../../../hooks/useInfiniteSearch";
import ReviewCard from "../../../components/ReviewCard";
import Analytics from "./Analytics";

import "./Search.module.css";

export default function Results({
  searchTerm,
}: {
  searchTerm: string;
}): JSX.Element {
  const { ref, inView } = useInView();

  const {
    data,
    status,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteSearch(searchTerm);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [ inView, fetchNextPage ]);

  return (
    <React.Fragment>
      <Analytics
        searchTime={data?.pages[0].processingTimeMs ?? 0}
        totalMatches={data?.pages[0].estimatedTotalHits ?? 0}
      />
      {status === "loading" && (
        <Center>
          <Loader size="lg" />
        </Center>
      )}
      {status === "error" && (
        <Center>
          <Title order={6}>Error fetching data</Title>
        </Center>
      )}
      {status === "success" && (
        <>
          <Box mb="lg">
            {data.pages.map((page: { hits: any[] }) => (
              <React.Fragment key={uuidv4()}>
                {page.hits.map((review: any) => (
                  <ReviewCard key={uuidv4()} idx={uuidv4()} review={review} />
                ))}
              </React.Fragment>
            ))}
          </Box>

          <Center ref={ref}>
            {isFetchingNextPage ? (
              <Loader size="lg" />
            ) : hasNextPage ? (
              <Loader size="lg" />
            ) : (
              "No more results..."
            )}
            <Box>
              <Title order={6}>
                {isFetching && !isFetchingNextPage ? "Checking cache..." : null}
              </Title>
            </Box>
          </Center>
        </>
      )}
    </React.Fragment>
  );
}
