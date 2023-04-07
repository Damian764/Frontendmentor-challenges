import { Outlet } from 'react-router-dom'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
import './_root.scss'

function Root() {
  return (
    <div className="App">
      <Header />
      <div id='main'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root
