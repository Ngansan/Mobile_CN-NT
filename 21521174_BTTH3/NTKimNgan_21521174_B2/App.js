import { NavigationContainer } from '@react-navigation/native';
import { SettingsProvider } from './context/SettingContext';
import BottomTab from './components/BottomTab';
export default function App() {
  return (
    <SettingsProvider>
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    </SettingsProvider>

  );
}
