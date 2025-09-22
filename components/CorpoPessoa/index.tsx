import { Text, View } from "react-native";
import { styles } from "./styles";

export default function CorpoPessoa({ erros }: { erros: number }) {
  return (
    <View style={styles.container}>
      <View style={styles.halfBorderTop} />
      {erros >= 1 ? <Text style={styles.copoForca}>O</Text> : undefined}

      <View style={styles.trunk}>
        {erros >= 3 ? <Text style={styles.copoForca}>/</Text> : undefined}
        {erros >= 2 ? <Text style={styles.copoForca}>|</Text> : undefined}
        {erros >= 4 ? <Text style={styles.copoForca}>\</Text> : undefined}
      </View>

      <View style={styles.legs}>
        {erros >= 6 ? <Text style={styles.copoForca}> /</Text> : undefined}
        {erros >= 5 ? <Text style={styles.copoForca}>\</Text> : undefined}
      </View>
    </View>
  );
}
