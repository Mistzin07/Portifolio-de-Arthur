import { Link } from 'react-router-dom'
export const Navbar = () =>(
  
  <nav>
    <ul>
       <li><Link to='/'>Home</Link> </li> 
       <li><Link to='/contact'>Contato</Link> </li> 
        <li> <Link to='/project'>Projetos</Link>  </li>
    </ul>
    </nav>
)