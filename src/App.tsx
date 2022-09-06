import { AppProvider } from '@/providers/app'
import User from '@/features/sample/components/User'

const App = () => {
  return (
    <AppProvider>
      <div>
        <h2 className="text-blue-400">React My Template</h2>
        <User />
      </div>
    </AppProvider>
  )
}

export default App
