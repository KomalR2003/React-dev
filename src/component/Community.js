import React from "react";
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import img7 from '../Image/Screenshot_7.png';

function Referenc() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <li>
                        <Link to={path}><a>Community</a></Link></li>
                    <li>
                        <Link to={`${path}/1`}><a>React Conferences</a></Link>

                    </li>
                    <li>
                        <Link to={`${path}/2`}><a>REact Meetups</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/3`}><a>React Videos</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/4`}><a> Meet The Team</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/5`}><a> Docs Contributors</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/6`}><a>  Acknowledgement</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/7`}><a>Versioning Policy</a></Link>
                    </li>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path={path}>
                            <>

                                <h1>React Community</h1>
                                <h3>React has a community of millions of developers. On this page we’ve listed some<br/>
                                 React-related communities that you can be a part of; see the other pages in this<br/>
                                  section for additional online and in-person learning materials.</h3>

                                    <br/> 

                                <h2>Code of Conduct  </h2>

                                <p>Before participating in React’s communities, <span className="blue">please read our Code of Conduct</span>. We have adopted<br/>
                                 the <span className="blue">Contributor Covenant</span> and we expect that all community members adhere to the<br/>
                                  guidelines within.</p>

                                  <br/>

                                  <h2>Stack Overflow </h2>

                                <p>Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific<br/>
                                 error. Read through the <span className="blue">existing questions</span> tagged with reactjs or <span className="blue">ask your own!</span></p>

                                <br/>
                                <h2>Popular Discussion Forums </h2>


                                <h4>There are many online forums which are a great place for discussion about best practices and<br/>
                                 application architecture as well as the future of React. If you have an answerable code-level<br/>
                                  question, Stack Overflow is usually a better fit.</h4>
                                  <h4>Each community consists of many thousands of React users.</h4>
                                <li><span className="blue">DEV’s React community</span> </li>
                                <li><span className="blue">Hashnode’s React community</span></li>
                                <li><span className="blue">Reactiflux online chat</span></li>
                                <li><span className="blue">Reddit’s React communityNews </span></li>

                                
                            </>
                        </Route>
                        <Route path={`${path}/:id`}>
                            <Topic></Topic>
                        </Route>
                    </Switch>
                </div>


            </div>

        </>
    );
}
function Topic() {
    let { id } = useParams();
    if (id == 1) return <div className="conference">
        <h1>React Conferences</h1>
        <h3>Do you know of a local React.js conference? Add it here! (Please keep the list<br/>
         chronological)</h3>

        <h2>Upcoming Conferences </h2>
        <h3>RedwoodJS Conference 2023 </h3>
        <p>September 26 - 29, 2023. Grants Pass, Oregon + remote (hybrid event)</p>

        <p><span className="blue">Website - Twitter</span></p>

       <h3>React Alicante 2023  </h3>
        <p>September 28 - 30, 2023. Alicante, Spain</p>
        <p><span className="blue">Website - Twitter</span></p>

       <h3>React Live 2023  </h3>
        <p>September 29, 2023. Amsterdam, Netherlands</p>
        <p><span className="blue">Website </span></p>

       <h3>React Native EU 2023   </h3>
        <p>September 7 & 8, 2023. Wrocław, Poland</p>
        <p><span className="blue">Website -twitter- facebook </span></p>  
    </div>




    else if (id == 2) return <div className="conference">
        <h1>React Meetups</h1>
        <h4>useEffect is a React Hook that lets you synchronize a component with an external system.
        </h4>

        <h3>Albania</h3>
        <li> <span className="blue">Tirana</span></li>

        <h3>Argentina</h3>
        <li> <span className="blue">Buenos Aires</span></li>
        <li> <span className="blue">Rosario </span></li>

        <h3>Australia</h3>
        <li> <span className="blue">Brisbane</span></li>
        <li> <span className="blue">Melbourne</span></li>
        <li> <span className="blue">Sydney</span></li>

        <h3>Austria </h3>
        <li> <span className="blue">Vienna</span></li>

        <h3>Belgium </h3>
        <li> <span className="blue">Belgium</span></li>

        <h3>Brazil </h3>
        <li> <span className="blue">Belo Horizonte</span></li>
        <li> <span className="blue">Curitiba</span></li>
        <li> <span className="blue">Florianópolis</span></li>
        <li> <span className="blue">Goiânia</span></li>
        <li> <span className="blue">Joinville</span></li>
        <li> <span className="blue">Juiz de Fora</span></li>
        <li> <span className="blue">Maringá</span></li>
        <li> <span className="blue">Porto Alegre</span></li>


    </div>
    else if (id == 3)
        return <div className="hook">
            <h1>useState</h1>
            <h3>useEffect is a React Hook that lets you synchronize a component with an external system.
            </h3>

            <img src={img7} alt="ss7" />

            <h4>Referenc</h4>
            <li>useContext(SomeContext)</li>

            <h4>Usage</h4>
            <li>Connecting to an external system</li>
            <li>Wrapping Effects in custom Hooks</li>
            <li>Controlling a non-React widget</li>
            <li>Fetching data with Effects</li>
            <li>Specifying reactive dependencies</li>
            <li>Updating state based on previous state from an Effect</li>
            <li>Removing unnecessary object dependencies</li>
            <li>Removing unnecessary function dependencies</li>
            <li>Reading the latest props and state from an Effect</li>
            <li>Displaying different content on the server and the client</li>

            <h4>Troubleshooting</h4>
            <li>My component doesn’t see the value from my provider</li>
            <li>I am always getting undefined from my context although the default value is different</li>


        </div>
    else if (id == 4)
        return <div className="component">
            <h1>React DOM Components</h1>
            <h4>React supports all of the browser built-in HTML and SVG components.
            </h4>
            <br />
            <hr />
            <h2>Common components </h2>
            <h4>All of the built-in browser components support some props and events.</h4>

            <li>Common components (e.g. div)</li>

            <h4>This includes React-specific props like ref and dangerouslySetInnerHTML.</h4>
            <br />
            <hr />

            <h2>Form components</h2>
            <h4>These built-in browser components accept user input:</h4>
            <li>input</li>
            <li>select</li>
            <li>textarea</li>
            <h4>They are special in React because passing the value prop to them makes them controlled.</h4>
            <br />
            <hr />

            <h2>All HTML components </h2>
            <h4>React supports all built-in browser HTML components. This includes:</h4>
            <li>aside</li>
            <li>audio</li>
            <li>base</li>
            <li>body</li>
            <li>button</li>
            <li>canvas</li>

        </div>

    else if (id == 5)
        return <div className="describe">
            <h1>Escape Hatches</h1>
            <h3>React is a JavaScript library for rendering user interfaces (UI). UI is built from small <br />
                units like buttons, text, and images. React lets you combine them into reusable,<br />
                nestable components. From web sites to phone apps, everything on the screen can <br />
                be broken down into components. In this chapter, you’ll learn to create, customize.
            </h3>

            <div className="sub-describe">
                <h2>In This Chapter</h2>
                <li>How to write your first React component</li>
                <li>When and how to create multi-component files</li>
                <li>How to add markup to JavaScript with JSX</li>
                <li>How to configure components with props</li>

                <li>How to render multiple components at a time</li>
                <li>How to avoid confusing bugs by keeping components pure</li>
            </div>

            <h1>Your First Component</h1>
            <h3>React applications are built from isolated pieces of UI called components. A React component is<br />
                a JavaScript function that you can sprinkle with markup. Components can be as small as<br />
                a button, or as large as an entire page. Here is a Gallery component rendering three<br />
                Profile components</h3>


        </div>
}
export default Referenc;