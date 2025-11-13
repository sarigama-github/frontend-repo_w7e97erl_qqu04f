import Navbar from './Navbar'
import Home from './Home'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
