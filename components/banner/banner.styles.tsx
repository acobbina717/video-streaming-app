import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  container: {
    width: "100%",
    height: "80vh",
    position: "relative",
    backgroundSize: "cover",
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
  },

  image: {
    width: "100%",
    height: "100%",
    // [`@media (max-width: ${theme.breakpoints.sm}px)`]: {},
  },

  content: {
    position: "absolute",
    width: "100%",
    height: "100%",
    zIndex: 10,
  },

  leftContent: {
    display: "flex",
    justifyContent: "flex-start",
    paddingLeft: "4rem",
    paddingRight: "4rem",
    height: "100%",

    flexDirection: "column",
    marginTop: "6rem",

    [`@media (min-width: 68px)`]: {
      width: "50%",
    },
  },

  title: {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 800,
    marginBottom: theme.spacing.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [`@media (min-width: 1024px)`]: {
      fontSize: "3.75rem",
      lineHeight: 1,
    },
  },

  subTitle: {
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [`@media (min-width: 1024px)`]: {
      fontSize: "1.rem",
      lineHeight: "2rem",
    },
  },

  actions: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },

  playButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem",
    marginTop: "1.25rem",

    paddingTop: "0.5rem",
    paddingBottom: "0.5rem",
    width: "8rem",
  },

  playButtonText: {
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.75rem",
    paddingLeft: "0.25rem",
    textAlign: "center",
  },
}));
