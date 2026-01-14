import './App.css'
import ContactMe from './ContactMe.tsx'
import Logo from './Logo.tsx'

function App() {
  return (
    <>
    <div className='app-foreground'>
      <div className='app-bio'>
        <Logo></Logo>
        <p className='text'>Hi, I’m Chau — I’m a programmer based in LA. Currently, I’m set to join the 2025 Restless Egg cohort to build Self Engineering.</p>

        <p className='text'>I bring over ten years of hands-on experience building B2C and B2B products, primarily in engineering roles but frequently stepping into design, product and research leadership. I’ve been part of teams at Intercom and LaunchDarkly.</p>
      
        <p className='text'>I studied philosophy, with a focus on aesthetics, at the University of Chicago. I see technology and creativity not as luxuries but as tools of liberation and reflection, a perspective that underpins my work in tech and creative practices across creative coding and more traditional mediums like oil pastels and writing.</p>

        <p className='text'>I love meeting dynamic people and am always down for a cheeky martini. Gin. Dirty. Stirred.</p>
      </div>
      <ContactMe></ContactMe>
    </div>
    </>
  )
}

export default App
