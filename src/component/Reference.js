import React from "react";
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom";
import img4 from '../Image/Screenshot_4.png';
import img5 from '../Image/Screenshot_5.png';
import img6 from '../Image/Screenshot_6.png';
import img7 from '../Image/Screenshot_7.png';

function Referenc() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="container">
                <div className="sidebar">
                    <li>
                        <Link to={path}><a>Hooks</a></Link>
                        <li><Link to={`${path}/1`}><a>useContext</a></Link></li>
                        <li><Link to={`${path}/2`}><a>useEffect</a></Link></li>
                        <li><Link to={`${path}/3`}><a>useState</a></Link></li>
                    </li>
                    <li>
                        <Link to={`${path}/4`}><a>Components</a></Link>


                    </li>
                    <li>
                        <Link to={`${path}/5`}><a>API's</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/6`}><a>Directive</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/7`}><a>Client APIs</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/8`}><a>Server APIs</a></Link>
                    </li>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path={path}>
                            <>

                                <h1>Built-in React Hooks</h1>
                                <h3>Hooks let you use different React features from your components. You can either<br />
                                    use the built-in Hooks or combine them to build your own. This page lists all built-in<br />
                                    Hooks in React.</h3>
                                <hr className="line" />

                                <h1>State Hooks </h1>

                                <h3>State lets a component <span className="blue">“remember” information like user input</span>. For example, a form component<br />
                                    can use state to store the input value, while an image gallery component can use state to store<br />
                                    the selected image index.</h3>


                                <h3>To add state to a component, use one of these Hooks:</h3>
                                <li><span className="blue">useState</span> declares a state variable that you can update directly.</li>
                                <li><span className="blue">useReducer</span> declares a state variable with the update logic inside a<span className="blue"> reducer function</span>.</li>

                                <img src={img4} alt="ss4" />

                                <hr className="line" />

                                <h1>Context Hooks</h1>
                                <h3>Context lets a component <span className="blue">receive information from distant parents without passing it as props</span>.<br />
                                    For example, your app's top-level component can pass the current UI theme to all components<br />
                                    below, no matter how deep.</h3>

                                <li>useContext reads and subscribes to a context.</li>
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
    if (id == 1) return <div className="hook">
        <h1>useContext</h1>
        <h3>useContext is a React Hook that lets you read and subscribe to context from<br />
            your component.</h3>

        <img src={img5} alt="ss5" />

        <h4>Referenc</h4>
        <li>useContext(SomeContext)</li>

        <h4>Usage</h4>
        <li>Passing data deeply into the tree</li>
        <li>Updating data passed via context</li>
        <li>Specifying a fallback default value</li>
        <li>Overriding context for a part of the tree</li>
        <li>Optimizing re-renders when passing objects and functions</li>

        <h4>Troubleshooting</h4>
        <li>My component doesn’t see the value from my provider</li>
        <li>I am always getting undefined from my context although the default value is different</li>

        <h4>Parameters:</h4>
        <p>SomeContext: The context that you’ve previously created with createContext. The context <br/>
        itself does not hold the information, it only represents the kind of information you can provide<br/>
         or read from components.</p>
    </div>




    else if (id == 2) return <div className="hook">
        <h1>useEffect</h1>
        <h3>useEffect is a React Hook that lets you synchronize a component with an external system.
        </h3>

        <img src={img6} alt="ss6" />

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