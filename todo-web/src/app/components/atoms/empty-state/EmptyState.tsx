import { Box } from "@mui/material";

export const EmptyState = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="text.secondary"
    >
      <h1>No data</h1>
    </Box>
  );
};
