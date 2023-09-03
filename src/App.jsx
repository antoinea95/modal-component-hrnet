import { useState } from 'react'
import Modal from './components/Modal/Modal'

function App() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <button onClick={() => setIsShow(true)}>Ouvrir</button>
      <Modal onClose={() => setIsShow(false)} isShow={isShow}>
        <p>Cool !</p>
      </Modal>
    </>
  )
}

export default App
