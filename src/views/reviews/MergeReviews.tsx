import { Dropzone } from "@components/molecules";
import { Page } from "@components/Page";
import { Stepper } from "@mantine/core";
import { theme } from "@utils/theme";
import { useState } from "react";

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper mb={theme.spacing.xl} active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="Upload" description="Upload word file"></Stepper.Step>
        <Stepper.Step label="Verify" description="Verify the contents"></Stepper.Step>
        <Stepper.Step label="Merge" description="Merge with other documents"></Stepper.Step>
      </Stepper>
    </>
  );
}

export const MergeReviews = (): JSX.Element => {
  return (
    <Page>
      <Demo />
      <Dropzone />
    </Page>
  );
};
