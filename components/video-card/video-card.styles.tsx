import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  lgCard: {
    minWidth: "250px",
    minHeight: "434px",
  },

  smCard: {
    minWidth: "320px",
    minHeight: "170px",
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
