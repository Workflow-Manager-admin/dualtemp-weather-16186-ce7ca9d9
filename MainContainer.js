import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';

// PUBLIC_INTERFACE
/**
 * MainContainer is the primary container for DualTemp Weather.
 * It fetches the current temperature from an open weather API and displays
 * the temperature in both Celsius and Fahrenheit.
 */
const MainContainer = () => {
  // Temperature in Celsius and Fahrenheit
  const [celsius, setCelsius] = useState(null);
  const [fahrenheit, setFahrenheit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  // PUBLIC_INTERFACE
  /**
   * Fetch the current temperature using a public weather API.
   * Demonstrates using Open-Meteo if available, fallback to OpenWeatherMap if needed.
   * For the purposes of this example, location is hardcoded (e.g. London).
   */
  const fetchTemperature = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      // e.g. Fetch weather for London (latitude: 51.5074, longitude: -0.1278)
      const latitude = 51.5074;
      const longitude = -0.1278;

      // Using Open-Meteo free API for simplicity (no API key needed)
      const resp = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      if (!resp.ok) {
        throw new Error("Failed to fetch weather");
      }
      const data = await resp.json();
      const temperatureC = data?.current_weather?.temperature;
      if (typeof temperatureC !== 'number') {
        throw new Error("Temperature data unavailable");
      }
      setCelsius(Math.round(temperatureC * 10) / 10);
      setFahrenheit(Math.round((temperatureC * 9) / 5 * 10 + 320) / 10); // F = C × 9/5 + 32
    } catch (err) {
      setErrorMsg(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTemperature();
  }, []);

  // Styling based on provided color scheme
  // Primary: #2196F3, Secondary (bg/cards): #FFFFFF, Accent (icons/text): #FF9800

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>DualTemp Weather</Text>
        {loading ? (
          <ActivityIndicator size="large" color={styles.primary.color} />
        ) : errorMsg ? (
          <Text style={styles.error}>{errorMsg}</Text>
        ) : (
          <View style={styles.row}>
            <View style={styles.card}>
              <Text style={styles.label}>Celsius</Text>
              <Text style={styles.value}>
                {celsius}
                <Text style={styles.unit}>°C</Text>
              </Text>
            </View>
            <View style={styles.card}>
              <Text style={styles.label}>Fahrenheit</Text>
              <Text style={styles.value}>
                {fahrenheit}
                <Text style={styles.unit}>°F</Text>
              </Text>
            </View>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2196F3',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    minWidth: 140,
    elevation: 2,
    shadowColor: '#2196F3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    marginHorizontal: 8,
  },
  label: {
    color: '#FF9800',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  value: {
    color: '#2196F3',
    fontSize: 44,
    fontWeight: 'bold',
  },
  unit: {
    color: '#FF9800',
    fontSize: 24,
    marginLeft: 4,
  },
  error: {
    color: '#FF9800',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 32,
  },
  primary: {
    color: '#2196F3',
  },
});

export default MainContainer;
