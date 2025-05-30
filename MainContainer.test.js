import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react-native';
import MainContainer from './MainContainer';

// Allow mocking global fetch
const mockFetch = (resp, ok = true) => {
  global.fetch = jest.fn().mockResolvedValue({
    ok,
    json: async () => resp,
  });
};

afterEach(() => {
  jest.resetAllMocks();
});

describe('MainContainer', () => {
  it('shows loading indicator on mount', () => {
    mockFetch({ current_weather: { temperature: 20 } }); // Delayed resolution
    const { getByTestId } = render(<MainContainer />);
    expect(getByTestId('ActivityIndicator')).toBeTruthy();
  });

  it('renders temperature in Celsius and Fahrenheit from API', async () => {
    mockFetch({ current_weather: { temperature: 22.34 } }); // 22.3°C, 72.1°F
    const { queryByText, getByText } = render(<MainContainer />);
    await waitFor(() => {
      expect(getByText('Celsius')).toBeTruthy();
      expect(getByText('Fahrenheit')).toBeTruthy();
      // Celsius
      expect(queryByText('22.3')).toBeTruthy();
      expect(getByText('°C')).toBeTruthy();
      // Fahrenheit
      expect(queryByText('72.1')).toBeTruthy();
      expect(getByText('°F')).toBeTruthy();
    });
  });

  it('renders color and style tokens correctly', async () => {
    mockFetch({ current_weather: { temperature: 15 } });
    const { getByText } = render(<MainContainer />);
    await waitFor(() => {
      const title = getByText('DualTemp Weather');
      expect(title.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ color: '#2196F3', fontSize: 28 }),
        ])
      );
      expect(getByText('Celsius').props.style).toEqual(
        expect.arrayContaining([expect.objectContaining({ color: '#FF9800' })])
      );
    });
  });

  it('displays error if API fails', async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error('API fail!'));
    const { getByText } = render(<MainContainer />);
    await waitFor(() => {
      expect(getByText('API fail!')).toBeTruthy();
    });
  });

  it('shows error if temperature is unavailable', async () => {
    mockFetch({ current_weather: { } });
    const { getByText } = render(<MainContainer />);
    await waitFor(() => {
      expect(getByText('Temperature data unavailable')).toBeTruthy();
    });
  });

  it('shows error if fetch returns !ok', async () => {
    mockFetch({}, false); // !ok
    const { getByText } = render(<MainContainer />);
    await waitFor(() => {
      expect(getByText('Failed to fetch weather')).toBeTruthy();
    });
  });
});

// Patch MainContainer.js to add testID to ActivityIndicator, if not present. Save initial attempt in case failure is due to this.