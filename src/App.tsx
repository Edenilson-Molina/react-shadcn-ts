import { BrowserRouter, Outlet, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/specific/ThemeProvider'
import { renderRoutesGlobal, routes } from './router'

function App() {
  return (
    <ThemeProvider 
      defaultTheme='system' 
      storageKey='vite-ui-theme'
    >
      <BrowserRouter>
        <Routes>
          { renderRoutesGlobal(routes) }
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
