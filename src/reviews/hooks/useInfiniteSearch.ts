import MeiliSearch from "meilisearch";
import { useInfiniteQuery } from "react-query";

const client = new MeiliSearch({
  host: import.meta.env.VITE_MEILI_URL,
  apiKey: import.meta.env.VITE_MEILI_API_KEY,
});

const attributes = ["_id", "entityType", "category", "subCategory", "content"];

const settings = {
  searchableAttributes: attributes,
  displayedAttributes: [...attributes, "isFlagged", "createdAt"],
};

/**
 * Search term is access through the queryKey param array. Everytime
 * this key is changed (i.e. new search term is typed) the entire query
 * is refetched.
 * @NOTE previous search queries will be cached - including scroll history
 * @param { queryKey } - ["meilisearch", searchTerm]
 * @param { pageParam } - contains the current page offset
 * @returns
 */
async function meiliFetch({ queryKey, pageParam }: { queryKey: string[]; pageParam?: number }) {
  const index = await client.getIndex("reviews");
  await index.updateSettings(settings);
  return await index.search(queryKey[1], {
    attributesToHighlight: ["*"],
    offset: pageParam,
    limit: 10,
  });
}

export const useInfiniteSearch = (searchTerm: string) =>
  useInfiniteQuery(["meiliSearch", searchTerm], meiliFetch, {
    getNextPageParam: (lastPage, allPages) => {
      const roundedTotal = Math.ceil(lastPage.estimatedTotalHits / 10) * 10;
      const hasMoreData = lastPage.offset < roundedTotal;
      return hasMoreData ? lastPage.offset + lastPage.limit : undefined;
    },
  });
