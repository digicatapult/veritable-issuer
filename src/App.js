import './stylesheets/font-awesome.min.css'
import './stylesheets/AppTheme.css'

import AppCore from './components/Core/AppCore'
import { ISSUER_LABEL } from './utils/env'

function App() {
  return <AppCore agent={ISSUER_LABEL} />
}

export default App
