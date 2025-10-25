import './App.css'
import PcNavbar from './components/layout/PcNavbar'
import MobileNavbar from './components/layout/MobileNavbar '
import SlideShow from './components/layout/SlideShow'
import InflcArea from './components/layout/InflcArea'
function App() {
  return (
    <>
      <PcNavbar />
      <InflcArea />
      <SlideShow />
      <div>
        <h1>
          home page
        </h1>
      </div>
      <MobileNavbar />
    </>
  )
}

export default App
