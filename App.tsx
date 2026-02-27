import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/screens/LoginScreen';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LoginScreen
        onBack={() => console.log('Back pressed')}
        onLogin={(email, password) => console.log('Login:', email)}
        onForgotPassword={() => console.log('Forgot password')}
      />
    </>
  );
}
