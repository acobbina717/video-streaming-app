import { createStyles } from "@mantine/core";

export const useStyles = createStyles({
  container: {
    paddingRight: "1rem",
    paddingLeft: "1rem",
  },
  title: {
    fontWeight: 700,
    fontSize: "2rem",
  },
  cardWrapper: {
    display: "flex",
    paddingTop: "1.7rem",
    paddingBottom: "1.5rem",
    marginTop: "1.5rem",
    marginRight: "0.75rem",
    overflowX: "scroll",
    overflowY: "hidden",
  },
});
