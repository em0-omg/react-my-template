import * as React from 'react'
import { Provider } from 'react-redux'

import { setupStore } from '@/store'

type AppProviderProps = {
  children: React.ReactNode
}

const store = setupStore()

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense fallback={<div></div>}>
      <Provider store={store}>{children}</Provider>
    </React.Suspense>
  )
}
