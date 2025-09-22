import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 80,
    alignItems: "center",
    justifyContent: "flex-start",
    borderLeftColor: "#ffffffff",
    borderLeftWidth: 1,
  },
  halfBorderTop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: "50%",
    height: 1,
    backgroundColor: "#ffffffff",
  },
  trunk: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  legs: {
    flexDirection: "row",
    justifyContent: "center",
    position: "relative",
  },
  copoForca: {
    color: "#ffffff",
  },
});
