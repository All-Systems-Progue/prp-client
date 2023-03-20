import { showNotification } from "@mantine/notifications";
import { useDispatch } from "react-redux";
import { QueryFunctionContext, useQuery } from "react-query";
import { InfoCircle } from "tabler-icons-react";
import IReview from "../interfaces/review";
import { refreshEditor } from "../redux/actions";
import api from "../utils/api";

async function fetchReview({ queryKey }: QueryFunctionContext) {
  const [ _, jwt, id ] = queryKey;
  const { data } = await api({
    method: "get",
    url: `/review/${id}`,
    headers: { Authorization: `Bearer ${jwt}` },
  });
  return data;
}

export default (jwt: string, id: string | undefined) => {
  const dispatch = useDispatch();

  return useQuery([ "fetchReview", jwt, id ], fetchReview, {
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
