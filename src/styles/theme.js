import { StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';

const themeStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    bgColor: {
      backgroundColor: theme === 'light' ? '#FFFFFF' : '#1E1E1E',
    },
    textColor: {
      color: theme === 'light' ? '#1E1E1E' : '#FFFFFF',
    },
  });
};

export default themeStyles;
