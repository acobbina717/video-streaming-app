import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  smCard: {
    position: "relative",
    width: "100%",
    // minWidth: "300px",
    minHeight: "190px",
    // minHeight: "0",
    // paddingBottom: "56.25%",
    // paddingTop: "56.25%",
  },

  mdCard: {
    position: "relative",
    width: "150px",
    minWidth: "150px",
    // height: "280px",
    minHeight: "280px",
  },

  lgCard: {
    position: "relative",
    width: "218px",
    minWidth: "218px",
    height: "434px",
    minHeight: "434px",
  },

  img: {
    objectFit: "cover",
    objectPosition: "center",
    visibility: "inherit",
  },

  details: {
    margin: 12,
    flex: "auto",
  },
}));
