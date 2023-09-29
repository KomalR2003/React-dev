import React from "react";

function Blog(){
    return(
        <>
            <div className="blog">
                <div className="blog-content">
                <h1>React Blog</h1>
                <p>This blog is the official source for the updates from the React team. Anything important,<br/>
                 including release notes or deprecation notices, will be posted here first. You can also follow the<br/>
                  @reactjs account on Twitter, but you won’t miss anything essential if you only read this blog.  </p>

                  <div className="blog-box">
                    
                        <h2>react Canaries : Incremental feature rollout outside meta </h2>
                        <p>may 3,2023</p>
                        <h3>We’d like to offer the React community an option to adopt individual new features <br/>
                        as soon as their design is close to final, before they’re released in a stable <br/>
                        version—similar to how Meta has long used bleeding-edge versions of React internally.<br/>
                         We are introducing a new officially supported Canary release channel. It lets curated<br/>
                          setups like frameworks decouple adoption of individual React features from the<br/>
                           React release schedule.</h3>
                  </div>

                  <div className="blog-box">
                    
                    <h2>Introducing react.dev</h2>
                    <p>March 16, 2023</p>
                    <h3>Today we are thrilled to launch react.dev, the new home for React and its documentation.<br/>
                     In this post, we would like to give you a tour of the new site.</h3>
              </div>
                </div>
            </div>
        </>
    );
}
export default Blog;