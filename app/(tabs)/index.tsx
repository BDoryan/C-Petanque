import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PetanqueManager</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
      <Text>
        Bienvenue sur l'application PetanqueManager, celle-ci vas vous permettre de pouvoir organiser vos concours de pétanque avec simplicité.
        L'organisation de concours n'est pas forcement une tâche très compliquer mais en réalité intégrer un côté numérique permet de moderniser
        son organisation.

        Par exemple, l'application propose différentes fonctionnalité: configuration, organisation, inscription, classement.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
