import { showNotification } from "@mantine/notifications";
import { refreshEditor } from "@redux/editorSlice";
import { useAppDispatch } from "@redux/hooks";
import { IReview } from "@src/interfaces";
import { IconInfoCircle } from "@tabler/icons-react";
import { api } from "@utils/api";
import { QueryFunctionContext, useQuery } from "react-query";

async function fetchReview({ queryKey }: QueryFunctionContext) {
  const [_, jwt, id] = queryKey;
  const { data } = await api({
    method: "get",
    url: `/review/${id}`,
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export const useFetchReview = (jwt: string, id: string | undefined) => {
  const dispatch = useAppDispatch();

  return useQuery(["fetchReview", jwt, id], fetchReview, {
    onSuccess: (data: IReview) => {
      showNotification({
        title: "Editing Mode Enabled",
        message: "",
        color: "blue",
        radius: "lg",
        icon: <IconInfoCircle />,
      });
      dispatch(refreshEditor(data.content));
    },
    refetchOnWindowFocus: false,
    enabled: !!id, // this should only run when the id is present in the URL
  });
};
