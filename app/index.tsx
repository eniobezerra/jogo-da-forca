import { useState } from "react";
import { Alert, Text, View } from "react-native";
import Botao from "../components/Botao";
import BotaoAlfabeto from "../components/BotaoAlfabeto";
import Pessoa from "../components/CorpoPessoa";
import { styles } from "./styles";

export default function Index() {
  const [palavra, setPalavra] = useState<string[]>([]);
  const [acertos, setAcertos] = useState<string[]>([]);
  const [erros, setErros] = useState<number>(0);
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);

  const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

  const palavras = [
    "maca",
    "melancia",
    "papagaio",
    "coelho",
    "universidade",
    "diretor",
    "espelho",
    "cortina",
    "revista",
    "lapis",
    "sofa",
    "armario",
    "colega",
    "vizinho",
    "emprego",
    "bairro",
    "ilha",
    "cachoeira",
    "deserto",
    "campo",
    "cometa",
    "planeta",
    "neve",
    "neblina",
    "gelo",
    "rocha",
    "moto",
    "trem",
    "navio"
]

  function iniciarJogo() {
    const palavraEscolhida =
      palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraEscolhida.split(""));
    setAcertos(Array(palavraEscolhida.length).fill("_"));
    setErros(0);
    setLetrasUsadas([]);
  }

  function tentarLetra(letra: string) {
    if (letrasUsadas.includes(letra)) return;

    setLetrasUsadas((prev) => [...prev, letra]);

    if (palavra.includes(letra)) {
      setAcertos((prev) =>
        prev.map((l, i) => (palavra[i] === letra ? letra : l))
      );
    } else {
      setErros((prev) => prev + 1);
    }
  }

  function encerrarJogo() {
    Alert.alert("A palavra era:", palavra.join(""));
    iniciarJogo();
  }

  // variáveis derivadas
  const venceu = acertos.length > 0 && !acertos.includes("_");
  const perdeu = erros >= 6;

  return (
    <View style={styles.container}>
      {palavra.length === 0 ? (
        <Botao onPress={iniciarJogo} title="Começar" />
      ) : (
        <View>
          <View style={styles.forca}>
            <Pessoa erros={erros} />

            <View style={styles.palavra}>
              {acertos.map((letra, index) => (
                <Text key={index} style={styles.textoPalavra}>
                  {letra}
                </Text>
              ))}
            </View>
          </View>

          <View>
            {perdeu ? (
              <Text style={styles.textoResultado}>Você perdeu!!</Text>
            ) : venceu ? (
              <Text style={styles.textoResultado}>Você ganhou!!</Text>
            ) : (
              <View style={styles.teclado}>
                {alfabeto.map((letra) => (
                  <BotaoAlfabeto
                    key={letra}
                    title={letra}
                    onPress={() => tentarLetra(letra)}
                    disabled={letrasUsadas.includes(letra)}
                    style={[
                      letrasUsadas.includes(letra) && styles.desabilitado,
                    ]}
                  />
                ))}
              </View>
            )}

            <Botao onPress={encerrarJogo} title="Recomeçar" />
          </View>
        </View>
      )}
    </View>
  );
}
