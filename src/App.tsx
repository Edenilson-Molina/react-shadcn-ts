import { Outlet } from 'react-router-dom'
import { ThemeProvider } from './components/specific/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Outlet />
    </ThemeProvider>
  )
}

export default App
