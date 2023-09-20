import { showNotification } from "@mantine/notifications";
import { useMutation } from "react-query";
import { Check } from "tabler-icons-react";

import IReview from "../interfaces/review";
import api from "../utils/api";

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
