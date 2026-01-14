import './Logo.css'

function Logo() {
  return (
    <div className='chau-banner'>
      <audio controls>
        <source src="/mynameischau.m4a" type="audio/mp4" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default Logo