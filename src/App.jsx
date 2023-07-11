import { Suspense, lazy, useState } from 'react'

const Globe = lazy(() => import('./globe'))

function App() {
  const [showGlobe, setShowGlobe] = useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label style={{ marginBottom: '1rem' }}>
        <input
          type='checkbox'
          checked={showGlobe}
          onChange={(e) => setShowGlobe(e.target.checked)}
        />
        {' show globe'}
      </label>
      <div style={{ width: 400, height: 400 }}>
        <Suspense fallback={<div>loading globe...</div>}>
          {showGlobe ? <Globe /> : null}
        </Suspense>
      </div>
    </div>
  )
}

export default App
