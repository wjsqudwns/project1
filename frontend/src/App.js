import React from 'react'
const App = () => {
return(<>
  
  <nav>
    <Link to ="./index.html">Home</Link>
    <Link to ="./blog_list.html">Blog</Link>
    <Link to ="./about_me.html">About Me</Link>
  </nav>

  <h1>첫번쨰</h1>
  <h2>두번쨰</h2>
  <h3>세번쨰</h3>
  <h4>네번쨰</h4>
  <h5>다섯번쨰</h5>
  <p>문단은 p 로</p>
  <link href="https://www.google.com">Go to google</link>
  <hr/>
  <img src = "./images/stay_funky.jpg" width = "600"></img>
  </>
    )  
}
export default App