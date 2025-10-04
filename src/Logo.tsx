import './Logo.css'
import GlitchText from './components/GlitchText';

function Logo() {
  return (
    <div className='chau-banner'>
      <GlitchText
        speed={7}
        enableShadows={false}
        enableOnHover={true}
        className='sixtyfour-chau'
      >
      CHAU
      </GlitchText>
    </div>
  );
}

export default Logo