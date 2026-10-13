import logo from './logo-text.png'
const links = ["Home", "Technologies", "Projects", "About", "Contact"];
const hrefFor = (l) => (l === "Home" ? "#" : `#${l.toLowerCase()}`);

function Brand() {
  return (
    <div className='cursor-pointer'>
      <img src={logo} alt="" />
    </div>
  );
}

function AuthButtons() {
  return (
    <div className="flex items-center gap-1 sm:gap-2">
      <button className=" btn-sm sm:btn-md">Sign In</button>
      <button className="btn bg-rose-500 btn-sm sm:btn-md rounded-full border-0 text-white">Sign Up</button>
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-base-300 bg">
      
      <div className="mx-auto hidden max-w-7xl items-center justify-between px-4 py-3 lg:flex">
        <Brand />
        <nav>
          <ul className="flex items-center gap-8 font-medium">
            {links.map((l) => (
              <li key={l}>
                <a href={hrefFor(l)} className="hover:text-secondary">{l}</a>
              </li>
            ))}
          </ul>
        </nav>
        <AuthButtons />
      </div>

      {/* mobile */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-2 py-2 lg:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-square" aria-label="Open menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content z-10 mt-2 w-52 rounded-box bg-base-100 p-2 shadow-lg">
            {links.map((l) => (
              <li key={l}><a href={hrefFor(l)}>{l}</a></li>
            ))}
          </ul>
        </div>
        <div className='cursor-pointer '>
          <img src ={logo} alt=""/>
        </div>
          
        <AuthButtons />
      </div>
    </header>
  );
}
