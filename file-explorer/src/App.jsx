import './App.css'

import { Element } from './components/Element'
import { useFileExplorer } from './hooks/useFileExplorer';

function App() {
  const { files, addNode } = useFileExplorer();
  return (
    <>
      <Element files={files} addNode={addNode} />
    </>
  )
}

export default App
