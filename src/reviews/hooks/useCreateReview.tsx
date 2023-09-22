import { showNotification } from "@mantine/notifications";
import { IReview } from "@src/interfaces";
import { IconCheck } from "@tabler/icons-react";
import { api } from "@utils/api";
import { useMutation } from "react-query";

async function createReview({ jwt, reviewData, id = null }: { jwt: string; reviewData: IReview; id?: string | null }) {
  const patchURL = "/" + id;
  const { data } = await api({
    method: id ? "patch" : "post",
    url: "/review" + (id ? patchURL : ""),
    headers: { Authorization: `Bearer ${jwt}` },
    data: reviewData,
  });
  return data;
}

export const useCreateReview = () =>
  useMutation("createReview", createReview, {
    onSuccess: () =>
      showNotification({
        title: "Success",
        message: "Review Point added",
        color: "green",
        radius: "lg",
        icon: <IconCheck />,
      }),
  });
