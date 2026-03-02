import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter basename="/react-IELTS-institute/">
        <Layout />
      </BrowserRouter>
    </>
  )
}

export default App
