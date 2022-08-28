import { QueryClient } from "react-query";
const queryClient = new QueryClient();

/**
 * Store JS Object as key-value pairs in local cache.
 * @NOTE only use primative JSON types
 * @param key
 * @param value
 */
export function cache(key: string, value: string) {
  queryClient.setQueryData(key, JSON.stringify(value));
}

/**
 * Fetch items from react-query cache. Return undefined if no items exist
 * @param key
 * @returns JSON Object with contents from cache or false if non-existent
 */
export function fetchFromCache(key: string): string | boolean {
  // first check it exists then return the JS object
  const cachedData = (queryClient.getQueryData(key) as string) ?? false;
  return cachedData ? JSON.parse(cachedData) : false;
}
