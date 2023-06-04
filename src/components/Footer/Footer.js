import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://portfolio.alainpaulin.com'
      className='link footer__link'
    >
       Alain Paulin Niyonkuru © Copy right {new Date().getFullYear()}
    </a>
  </footer>
)

export default Footer
