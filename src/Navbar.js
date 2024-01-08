
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'dark' ? 'light' : 'dark'}`} aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link active text-${props.mode === 'dark' ? 'light' : 'dark'}`} href="/">About</a>
        </li>
      </ul>
      <div className="form-check form-switch mx-4">
        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'} mx-4`} id='sun' htmlFor="flexSwitchCheckDefault"><i class="bi bi-brightness-high-fill"></i></label>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode}/>
        <label className={`form-check-label text-${props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault"><i class="bi bi-moon"></i></label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes= {
  title : PropTypes.string
}
