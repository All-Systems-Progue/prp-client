import "./Search.module.css";

import { ReviewCard, ReviewCardSkeleton } from "@components/molecules";
import { Box, Center, Loader, Title } from "@mantine/core";
import { useInfiniteSearch } from "@reviews/hooks";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { v4 as uuidv4 } from "uuid";

import { ReviewAnalytics } from "./ReviewAnalytics";

export const ReviewResults = ({ searchTerm }: { searchTerm: string }): JSX.Element => {
  const { ref, inView } = useInView();

  const { data, status, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteSearch(searchTerm);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <React.Fragment>
      <ReviewAnalytics
        searchTime={data?.pages[0].processingTimeMs ?? 0}
        totalMatches={data?.pages[0].estimatedTotalHits ?? 0}
      />
      {status === "loading" && Array.from({ length: 10 }, (_, i) => <ReviewCardSkeleton key={i} />)}
      {status === "error" && (
        <Center>
          <Title order={6}>Error fetching data</Title>
        </Center>
      )}
      {status === "success" && (
        <>
          <Box mb="lg">
            {data.pages.map((page) => (
              <React.Fragment key={uuidv4()}>
                {page.hits.map((review) => (
                  <ReviewCard key={review._id} review={review} />
                ))}
              </React.Fragment>
            ))}
          </Box>

          <Center ref={ref}>
            {isFetchingNextPage ? <Loader size="lg" /> : hasNextPage ? <Loader size="lg" /> : "No more results..."}
            <Box>
              <Title order={6}>{isFetching && !isFetchingNextPage ? "Checking cache..." : null}</Title>
            </Box>
          </Center>
        </>
      )}
    </React.Fragment>
  );
};
