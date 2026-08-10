import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* Logo */}
      <View style={styles.logoCircle}>
        <Ionicons
          name="school"
          size={70}
          color="#00E5E5"
        />
      </View>

      {/* App Title */}
      <Text style={styles.title}>
        QR Attendance
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitleTitle}>
        School Event Attendance
      </Text>

      <Text style={styles.description}>
        Scan QR Codes to record attendance during
        {'\n'}
        school activities.
      </Text>

      {/* Scan Button */}
      <TouchableOpacity
        style={styles.scanButton}
        activeOpacity={0.8}
        onPress={() => router.push('/(tabs)/scan')}
      >
        <Ionicons
          name="qr-code"
          size={42}
          color="#00E5E5"
        />

        <Text style={styles.scanButtonText}>
          Scan QR Code
        </Text>
      </TouchableOpacity>

      {/* History Button */}
      <TouchableOpacity
        style={styles.historyButton}
        activeOpacity={0.8}
        onPress={() => router.push('/(tabs)/history')}
      >
        <Ionicons
          name="time-outline"
          size={40}
          color="#55BCEB"
        />

        <Text style={styles.historyButtonText}>
          Attendance History
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55B3AA',
    alignItems: 'center',
    paddingTop: 180,
    paddingHorizontal: 40,
  },

  logoCircle: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#E8F4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 45,
  },

  title: {
    fontSize: 48,
    fontWeight: '800',
    color: '#050505',
    textAlign: 'center',
    marginBottom: 190,
  },

  subtitleTitle: {
    fontSize: 38,
    fontWeight: '700',
    color: '#65C5F0',
    textAlign: 'center',
    marginBottom: 25,
  },

  description: {
    fontSize: 24,
    lineHeight: 34,
    color: '#454545',
    textAlign: 'center',
    marginBottom: 70,
  },

  scanButton: {
    width: '100%',
    height: 120,
    backgroundColor: '#86A8D3',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
    marginBottom: 40,
  },

  scanButtonText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
  },

  historyButton: {
    width: '100%',
    height: 120,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 18,
  },

  historyButtonText: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111111',
  },
});