import { useMutation } from "react-query";
import api from "../utils/api";
import IReview from "../interfaces/review";
import { showNotification } from "@mantine/notifications";
import { Check } from "tabler-icons-react";

async function createReview({
  jwt,
  reviewData,
  id = null,
}: {
  jwt: string;
  reviewData: IReview;
  id?: string | null;
}) {
  const patchURL = "/" + id;
  const { data } = await api({
    method: id ? "patch" : "post",
    url: "/review" + (id ? patchURL : ""),
    headers: { Authorization: `Bearer ${jwt}` },
    data: reviewData,
  });
  return data;
}

export default () =>
  useMutation("createReview", createReview, {
    onSuccess: () =>
      showNotification({
        title: "Success",
        message: "Review Point added",
        color: "green",
        radius: "lg",
        icon: <Check />,
      }),
  });
