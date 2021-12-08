import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import { useSpring, animated, useTransition } from 'react-spring';
import { useState } from 'react';








function App() {

  const [slideIn, setSlideIn] = useState(false)

  const style1 = useSpring({
    from: {opacity: 0, marginTop: -100},
    to: { opacity: 1, marginTop: 0},
    config: {duration: 3000 }
})

  const style2 = useSpring({
  from: { marginLeft: 0},
  to: { marginLeft: 900 },
  config: {duration: 3000 }
})

  const transition = useTransition(slideIn, {
  from: { x: -200 , y: 0},
  enter: { x: 0 , y: 0 },
  leave: {x: -200 , y: 0 }
})

const moveMe = () => {
  setSlideIn(!slideIn)

}



  return (
<div className="App">
      <animated.div style={style1}>
        <div className="topDiv">
        <small><NavbarComp/></small>
          <animated.div style={style2}>

            <h1>Welcome</h1>
            </animated.div>
        </div>
       </animated.div>
       <button onClick={() => moveMe()}>Move Me</button>
       <div>
         {transition((style, item) => 
           item ?
           <animated.div style={style}>
             <div className="div2">Hey hey</div>
           </animated.div>
           : ''
      )}
       </div>
                               
      

    </div>




  );
}

export default App;



//Anything major - git add * 
// Git status 
// Git commit -m "message here" 
//Git push

//Git log (commit history)
//GIT CHECKOUT "BRANCH NAME" - Switches branches
//Git pull to pull branches
//Git merge PadInput/ or branch name

//Source control in VS accept current changes for package-lock.json