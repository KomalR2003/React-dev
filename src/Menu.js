import logo from './logo.svg';
import { BrowserRouter, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './component/Home';
import Learn from './component/Learn';
import Blog from './component/Blog';
import Community from './component/Community';
import Reference from './component/Reference';


function Menu(){
    return(
        <>
          <BrowserRouter>
             <div className="header">
                <div className="app-logo">
                    <img src={logo} alt="logo" />
                </div>
                
                    <div className='form'>
                        <form>
                            <input type="search" placeholder="search" className="search" />
                        </form>   
                    </div>
                    <div className='nav'>
                    <ul>
                        <li>
                            <Link to="/"><a></a></Link>
                        </li>
                        <li>
                            <Link to="/learn"><a>Learn</a></Link>
                        </li>
                        <li>
                            <Link to="/community"><a>Community</a></Link>
                        </li>
                        <li>
                            <Link to="/reference"><a>Reference</a></Link>
                        </li>
                        <li>
                            <Link to="/blog"><a>Blog</a></Link>
                        </li>
                    </ul>
                   
                </div> 
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/community" component={Community} />
                    <Route path="/reference" component={Reference} />
                    <Route path="/blog" component={Blog} />
                </Switch>
            </BrowserRouter>
        </>
    );
}
export default Menu;

