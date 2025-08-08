import LandingPage from './pages/landing-page'
import Header from "./components/header"
import Services from './pages/services'
import Certificates from './pages/certificates'
import Footer from './pages/footer'

function App() {

  return (
    <>
      <Header />

      <main>
        <LandingPage />
      </main>

      <section>
        <Services />
      </section>

      <section>
        <Certificates />
      </section>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default App
