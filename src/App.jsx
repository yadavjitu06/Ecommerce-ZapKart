
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  

  return (
    <div className="app-wrapper">
      {/* Common header for all pages */}
      <Header 
        color="light" 
        light={true} 
        expand="md" 
        container="md"
      />

     

      {/* Common footer for all pages */}
      <Footer />
    </div>
  )
}

export default App
