import { BrowserRouter, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/specific/ThemeProvider'
import { renderRoutesGlobal } from './router/router.config'
import { routes } from './router/routes'

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
