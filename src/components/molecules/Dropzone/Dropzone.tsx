import { Button, Group, rem, Text, useMantineTheme } from "@mantine/core";
import { Dropzone as MantineDropzone, MIME_TYPES } from "@mantine/dropzone";
import { IconCloudUpload, IconDownload, IconX } from "@tabler/icons-react";
import { useRef } from "react";

import classes from "./Dropzone.module.css";

export function Dropzone() {
  const theme = useMantineTheme();
  const openRef = useRef<() => void>(null);

  return (
    <div className={classes.wrapper}>
      <MantineDropzone
        openRef={openRef}
        onDrop={() => {
          1 === 1;
        }}
        className={classes.dropzone}
        radius="md"
        accept={[MIME_TYPES.pdf]}
        maxSize={30 * 1024 ** 2}
      >
        <div style={{ pointerEvents: "none" }}>
          <Group justify="center">
            <MantineDropzone.Accept>
              <IconDownload style={{ width: rem(50), height: rem(50) }} color={theme.colors.blue[6]} stroke={1.5} />
            </MantineDropzone.Accept>
            <MantineDropzone.Reject>
              <IconX style={{ width: rem(50), height: rem(50) }} color={theme.colors.red[6]} stroke={1.5} />
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>
              <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
            </MantineDropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="lg" mt="xl">
            <MantineDropzone.Accept>Drop files here</MantineDropzone.Accept>
            <MantineDropzone.Reject>Pdf file less than 30mb</MantineDropzone.Reject>
            <MantineDropzone.Idle>Upload resume</MantineDropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" c="dimmed">
            Drag&apos;n&apos;drop files here to upload. We can accept only <i>.pdf</i> files that are less than 30mb in
            size.
          </Text>
        </div>
      </MantineDropzone>

      <Button className={classes.control} size="md" radius="xl" onClick={() => openRef.current?.()}>
        Select files
      </Button>
    </div>
  );
}
