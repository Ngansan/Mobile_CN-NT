import AuthorizePro from './context/AuthorizePro';
import { CartProvider } from './context/CartContext';
import AppNavigator from './navigations/AppNavigator';
export default function App() {
  return (
    <AuthorizePro>
      <CartProvider>
      <AppNavigator/>
      </CartProvider>
    </AuthorizePro>
  );
}