import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ScoreBoard from './components/ScoreBoard';
import { ImageBackground } from 'react-native';

export default function App() {
  const backgroundImage = {
    uri: 'https://media.discordapp.net/attachments/1265032152630689927/1327927821871480892/image.png?ex=6784d8a8&is=67838728&hm=8312344f482a8ef5410358516ff4d1290a63da03606a3d5d6867006097044cdb&=&format=webp&quality=lossless&width=1100&height=627',
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Pengaturan Skor Pertandingan Futsal</Text>
        <ScoreBoard teamA="Tim A" teamB="Tim B" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Mengatur agar gambar memenuhi layar
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Memberikan efek transparan di atas gambar
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 21,
  },
});
