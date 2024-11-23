import { useState } from 'react'
import AuthForm from './AuthForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return  <AuthForm />;
}

export default App
