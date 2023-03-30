import React from "react";
import { Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import theme from "../../custom-theme";

const style = { alignItems: "center", marginTop: "20vh" };

export const PageNotFound = () => {
  return (
    <ThemeProvider theme={theme}>
      <Stack sx={style} spacing={1}>
        <Typography variant="h1">Oops!</Typography>
        <Typography variant="h6">Sorry, 404 - Page Not Found</Typography>
        <Box width="30vw">
          <Typography variant="subtitle2" align="center">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavaialable due to some reason,
          </Typography>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};

export default PageNotFound;
