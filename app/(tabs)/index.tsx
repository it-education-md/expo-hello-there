import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#ffffff');

  const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const handlePress = () => {
    setBgColor(getRandomColor());
  };
  
  const isDarkColor = (color: string) => {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
    return luminance < 128;
  };

  const textColor = isDarkColor(bgColor) ? '#ffffff' : '#000000';

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }]} onPress={handlePress}>
      <Text style={[styles.text, {color: textColor}]}>Hello there</Text>
      <Text style={[styles.colorCode, {color: textColor}]}>{bgColor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorCode: {
    fontSize: 18,
    marginTop: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
