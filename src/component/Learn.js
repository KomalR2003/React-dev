import React from "react";
import { Link, useRouteMatch, Switch, Route, useParams } from "react-router-dom/cjs/react-router-dom.min";
import img1 from '../Image/Screenshot_1.png';
import img2 from '../Image/Screenshot_2.png';
import img3 from '../Image/Screenshot_3.png';

function Learn(){
    let { path, url } = useRouteMatch();
    return(
        <>
         <div className="container">
                <div className="sidebar">
                    <li>
                        <Link to={path}><a>Quick Start</a></Link>
                        <li><Link to={`${path}/6`}><a>Tutorial: Tic-Tac-Toe</a></Link></li>
                        <li><Link to={`${path}/7`}><a>Thinking in React</a></Link></li>
                    </li>
                    <li>
                        <Link to={`${path}/1`}><a>Installation </a></Link>
                        <li> <Link to={`${path}/8`}><a>Start a New React Project </a></Link></li>
                        <li><Link to={`${path}/9`}><a>Add React to an Existing Project </a></Link></li>
                        <li><Link to={`${path}/10`}><a>Editor Setup </a></Link></li>
                        <li><Link to={`${path}/11`}><a>Using TypeScript </a></Link></li>
                        <li><Link to={`${path}/12`}><a>React Developer Tools</a></Link></li>

                    </li>
                    <li>
                        <Link to={`${path}/2`}><a>Describing the UI</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/3`}><a>Adding interactivity</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/4`}><a>Managing state</a></Link>
                    </li>
                    <li>
                        <Link to={`${path}/5`}><a>Escape Hatches</a></Link>
                    </li>
                </div>
                <div className="content">
                    <Switch>
                        <Route exact path={path}>
                            <>

                                <h1>Quick Start</h1>
                                <p>Welcome to the React documentation! This page will give you an introduction to the <br />
                                    80% of React concepts that you will use on a daily basis.</p>
                                <div className="sub-content">
                                    <h2>You will Learn</h2>

                                    <li>How to create and nest components</li>
                                    <li>How to add markup and styles</li>
                                    <li>How to display data</li>
                                    <li>How to respond to events and update the screen</li>
                                    <li>How to share data between components</li>

                                </div>
                                <h1>Creating and nesting component</h1>
                                <p>React apps are made out of components. A component is a piece of the UI (user interface) that <br />
                                    has its own logic and appearance. A component can be as small as a button, or as large as an
                                    <br />entire page.</p>

                                <p>React components are JavaScript functions that return markup:</p>

                                <img src={img1} alt="ss1" />

                                <p>Now that you’ve declared MyButton, you can nest it into another component:</p>

                                <img src={img2} alt="ss2" />

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
    if (id == 1) return <div className="install">
        <h1>Installation</h1>
        <h3>React has been designed from the start for gradual adoption. You can use as little or <br />
            as much React as you need. Whether you want to get a taste of React, add some<br />
            interactivity to an HTML page, or start a complex React-powered app, this section <br />
            will help you get started.</h3>

        <div className="sub-install">
            <h2>In This Chapter</h2>
            <li>How to start a new React project</li>
            <li>How to add React to an existing project</li>
            <li>How to set up your editor</li>
            <li>How to install React Developer Tools</li>
        </div>

        <h1>Try React</h1>

        <h3> You don’t need to install anything to play with React. Try editing this sandbox!</h3>
    </div>




    else if (id == 2) return <div className="describe">
        <h1>Describing the UI</h1>
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
            <li>How to conditionally render components</li>
            <li>How to render multiple components at a time</li>
            <li>How to avoid confusing bugs by keeping components pure</li>
        </div>

        <h1>Your First Component</h1>
        <h3>React applications are built from isolated pieces of UI called components. A React component is<br />
            a JavaScript function that you can sprinkle with markup. Components can be as small as<br />
            a button, or as large as an entire page. Here is a Gallery component rendering three<br />
            Profile components</h3>


    </div>
    else if (id == 3)
        return <div className="describe">
            <h1>Adding Interactivity</h1>
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
                <li>How to conditionally render components</li>
                <li>How to render multiple components at a time</li>

            </div>

            <h1>Your First Component</h1>
            <h3>React applications are built from isolated pieces of UI called components. A React component is<br />
                a JavaScript function that you can sprinkle with markup. Components can be as small as<br />
                a button, or as large as an entire page. Here is a Gallery component rendering three<br />
                Profile components</h3>


        </div>
    else if (id == 4)
        return <div className="describe">
            <h1>Managing state</h1>
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
                <li>How to conditionally render components</li>
                <li>How to render multiple components at a time</li>
                <li>How to avoid confusing bugs by keeping components pure</li>
            </div>

            <h1>Your First Component</h1>
            <h3>React applications are built from isolated pieces of UI called components. A React component is<br />
                a JavaScript function that you can sprinkle with markup. Components can be as small as<br />
                a button, or as large as an entire page. Here is a Gallery component rendering three<br />
                Profile components</h3>


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

    else if (id == 6) return <div className="tut">
        <h1>Tutorial: Tic-Tac-Toe</h1>
        <h3>You will build a small tic-tac-toe game during this tutorial. This tutorial does not<br />
            assume any existing React knowledge. The techniques you’ll learn in the tutorial are <br />
            fundamental to building any React app, and fully understanding it will give you a <br />
            deep understanding of React.</h3>

        <div className="sub-tut">
            <i class="fa-solid fa-book"></i> <span>Note</span>
            <p>This tutorial is designed for people who prefer to learn by doing and want to quickly try<br/>
             making something tangible. If you prefer learning each concept step by step, start with </p>
             <p className="blu">Describing the UI</p>
        </div>

        <h3>The tutorial is divided into several sections:</h3>

        <li><span className="blue">Setup for the tutorial </span>will give you a starting point to follow the tutorial.</li>
        <li><span className="blue">Overview </span>will teach you the fundamentals of React: components, props, and state.</li>
        <li><span className="blue">Completing the game</span>will teach you the most common techniques in React development.</li>
        <li><span className="blue">Adding time trave</span>will give you a deeper insight into the unique strengths of React.</li>
    </div>
    else if (id == 7) return <div className="think">
    <h1>Thinking in React</h1>
    <p>React can change how you think about the designs you look at and the apps you<br/>
     build. When you build a user interface with React, you will first break it apart into<br/>
      pieces called components. Then, you will describe the different visual states for<br/>
       each of your components. Finally, you will connect your components together so<br/>
        that the data flows through them. In this tutorial, we’ll guide you through the<br/>
         thought process of building a searchable product data table with React.</p>

         <h2>Start with the mockup</h2>
         <p>Imagine that you already have a JSON API and a mockup from a designer.</p>
         <p>The JSON API returns some data that looks like this:</p>

         <img src={img3} alt="ss3"/>
    </div>
    else if (id == 8) return <h1>Start a New React Project</h1>
    else if (id == 9) return <h1>Add React to an Existing Project</h1>
    else if (id == 10) return <h1>Editor Setup</h1>
    else if (id == 11) return <h1>Using TypeScript </h1>
    else if (id == 12) return <h1>React Developer Tools</h1>
}
export default Learn;