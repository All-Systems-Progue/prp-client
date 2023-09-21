import { showNotification } from "@mantine/notifications";
import { refreshEditor, useAppDispatch } from "@redux/editorSlice";
import { IReview } from "@src/interfaces";
import { api } from "@utils/api";
import { QueryFunctionContext, useQuery } from "react-query";
import { InfoCircle } from "tabler-icons-react";

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
        icon: <InfoCircle />,
      });
      dispatch(refreshEditor(data.content));
    },
    refetchOnWindowFocus: false,
    enabled: !!id, // this should only run when the id is present in the URL
  });
};
