import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
export default function SectionTitle({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: ReactNode;
}) {
  return (
    <Box>
      <Typography className="eyebrow" color="primary">
        {number} / {label}
      </Typography>
      <Typography variant="h2" sx={{ mt: 2 }}>
        {title}
      </Typography>
    </Box>
  );
}
