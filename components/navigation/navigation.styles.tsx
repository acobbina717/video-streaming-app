import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  navLink: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "64px",
    fontSize: "10px",
    textDecoration: "none",
    color: "white",
  },
  logoWrapper: {
    alignContent: "center",
    height: "24px",
    justifyContent: "center",
    marginBottom: "6px",
    width: "24px",
  },
  navText: {
    lineHeight: "14px",
    maxHeight: "14px",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));
