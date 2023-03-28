import React from 'react'
import styles from './styles.module.scss'
import Video from 'components/Video'
import TimeEvents from 'components/VideoEvents'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className={styles.app}>
      <h1>React Custom Player</h1>
      <div className={styles.container}>
        <TimeEvents />
        <Video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  )
}

export default App
