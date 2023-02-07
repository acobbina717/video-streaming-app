import { createStyles } from "@mantine/core";
export const useStyles = createStyles((theme) => ({
  lg: {
    position: "relative",
    width: "250px",
    minWidth: "250px",
    height: "434px",
    minHeight: "434px",
  },

  sm: {
    // border: "2px solid red",
    position: "relative",
    // width: "240.656px",
    minWidth: "242.656px",
    // height: "170px",
    minHeight: "180px",
    // borderRadius: "100px",
  },

  // cardImg: {
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,

  //   objectFit: "cover",

  //   objectPosition: "center",
  //   display: "block",

  //   maxWidth: "100%",
  // },

  //   title: {
  //     fontFamily: `Greycliff CF ${theme.fontFamily}`,
  //     fontWeight: 900,
  //     color: theme.white,
  //     lineHeight: 1.2,
  //     fontSize: 32,
  //     marginTop: theme.spacing.xs,
  //   },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
