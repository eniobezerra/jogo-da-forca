import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  textoPalavra: {
    fontSize: 24,
    color: "#ffff",
  },
  teclado: {
    backgroundColor: "#c9c9c9ff",
    padding: 16,

    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 8,
    gap: 6,
  },
  desabilitado: {
    backgroundColor: "#c5c5c6ff",
  },
  palavra: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 8,
  },
  forca: {
    backgroundColor: "#c9c9c9ff",
    padding: 16,
    borderRadius: 16,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 16,
  },
  textoResultado: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f1f1f1",
    textAlign: "center",
    marginBottom: 8,
  },
});
