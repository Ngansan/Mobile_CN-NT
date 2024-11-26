import AuthorizePro from './context/AuthorizePro';
import AppNavigator from './navigations/AppNavigator';
export default function App() {
  return (
    <AuthorizePro>
      <AppNavigator/>
    </AuthorizePro>
  );
}

