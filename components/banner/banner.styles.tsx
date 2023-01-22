import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  card: {
    width: "100%",
    height: "80vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    padding: theme.spacing.xl,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: "absolute",
    // bottom: theme.spacing.xl,
    // right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs / 2,
  },

  description: {
    color: theme.white,
    maxWidth: 220,
  },
}));
