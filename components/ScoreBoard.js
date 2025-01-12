import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function ScoreBoard({ teamA, teamB }) {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncreaseScore = (team) => {
    if (team === 'A' && scoreA < 10) {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        Alert.alert(
          `${teamA} Menang!`,
          'Skor telah mencapai 10. Pertandingan akan direset.',
          [
            {
              text: 'OK',
              onPress: () => handleReset(), // Reset skor setelah notifikasi
            },
          ]
        );
      }
    } else if (team === 'B' && scoreB < 10) {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        Alert.alert(
          `${teamB} Menang!`,
          'Skor telah mencapai 10. Pertandingan akan direset.',
          [
            {
              text: 'OK',
              onPress: () => handleReset(), // Reset skor setelah notifikasi
            },
          ]
        );
      }
    }
  };

  const handleDecreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <View style={styles.container}>
      {/* Team A */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamA}</Text>
        <Text style={styles.score}>{scoreA}</Text>
        <View style={styles.buttons}>
          <Button
            title="+"
            onPress={() => handleIncreaseScore('A')}
            disabled={scoreA === 10} // Disable tombol jika skor 10
          />
          <Button title="-" onPress={() => handleDecreaseScore('A')} />
        </View>
      </View>

      {/* Team B */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>{teamB}</Text>
        <Text style={styles.score}>{scoreB}</Text>
        <View style={styles.buttons}>
          <Button
            title="+"
            onPress={() => handleIncreaseScore('B')}
            disabled={scoreB === 10} // Disable tombol jika skor 10
          />
          <Button title="-" onPress={() => handleDecreaseScore('B')} />
        </View>
      </View>

      {/* Reset Button */}
      <Button title="Reset Pertandingan" onPress={handleReset} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  teamContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});
