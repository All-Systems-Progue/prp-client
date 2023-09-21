import { Box, Button, Group, Loader, TextInput, useMantineTheme } from "@mantine/core";
import { useForm } from "@mantine/form";
import { selectEditorContent, useAppSelector } from "@redux/editorSlice";
import { useCreateReview, useFetchReview, useIsEditing } from "@reviews/hooks";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";

export const CreateReviewForm = (): JSX.Element => {
  const [cookies, _] = useCookies(["token"]);
  const theme = useMantineTheme();
  const { id } = useParams();
  const isEditing = useIsEditing();
  const editorContent = useAppSelector(selectEditorContent);
  const newReview = useCreateReview();
  const { data, status } = useFetchReview(cookies.token, id);

  const form = useForm({
    initialValues: {
      entityType: data?.entityType || "",
      category: data?.category || "",
      subCategory: data?.subCategory || "",
    },

    validate: {
      entityType: (value: string) => (value.length < 4 ? "Too short!" : null),
      category: (value: string) => (value.length < 4 ? "Too short!" : null),
      subCategory: (value: string) => (value.length < 4 ? "Too short!" : null),
    },
  });

  /**
   * Await react-query to fetch the review data before re-rendering the form
   * with the newly fetch information.
   */
  useEffect(() => {
    if (status === "success") {
      form.setValues({
        entityType: data.entityType,
        category: data.category,
        subCategory: data.subCategory,
      });
    } else if (status === "loading") {
      form.setValues({
        entityType: "Loading...",
        category: "Loading...",
        subCategory: "Loading...",
      });
    }
  }, [status]);

  const handleSubmit = async (values: typeof form.values) => {
    if (isEditing) {
      newReview.mutate({
        jwt: cookies.token,
        reviewData: { ...values, content: editorContent },
        id,
      });
    } else {
      newReview.mutate({
        jwt: cookies.token,
        reviewData: { ...values, content: editorContent },
      });
    }
  };

  return (
    <Box mx="auto">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Entity Type"
          placeholder="BUSINESS"
          style={{ boxShadow: theme.shadows.md }}
          {...form.getInputProps("entityType")}
          mb="sm"
        />
        <TextInput
          required
          label="Category"
          placeholder="TAX LAW"
          style={{ boxShadow: theme.shadows.md }}
          {...form.getInputProps("category")}
          mb="sm"
        />
        <TextInput
          required
          label="Sub-category"
          placeholder="TAX"
          style={{
            boxShadow: theme.shadows.md,
          }}
          {...form.getInputProps("subCategory")}
          mb="sm"
        />

        <Group position="left" mt="md">
          <Button type="submit">
            {newReview.isLoading ? <Loader color="white" size="sm" /> : <span>{isEditing ? "Update" : "Create"}</span>}
          </Button>
        </Group>
      </form>
    </Box>
  );
};
