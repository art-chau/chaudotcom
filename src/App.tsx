import './App.css'
import ContactMe from './ContactMe.tsx'
import Logo from './Logo.tsx'

function App() {
  return (
    <>
    <div className='app-foreground'>
      <div className='app-bio'>
        <Logo></Logo>
        <p className='text'>I’m a programmer and founder based in LA. Currently, I’m building Self Engineering.</p>

        <p className='text'>I bring over ten years of hands-on experience building B2C and B2B products, primarily in engineering roles but frequently stepping into design, product and research leadership. I’ve been part of teams at Intercom and LaunchDarkly.</p>
      
        <p className='text'>I studied philosophy, with a focus on aesthetics, at the University of Chicago. I see technology and creativity not as luxuries but as tools of liberation and reflection, a perspective that underpins my work in tech and creative practices across creative coding and writing.</p>

        <p className='text'>I love meeting dynamic people. Always down for a cheeky martini. Gin. Dirty. Stirred.</p>
      </div>
      <ContactMe></ContactMe>
    </div>
    </>
  )
}

export default App
