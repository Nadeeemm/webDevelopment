import React, { Component } from 'react'



const getMoods = ()=>{
  const moods = ['sad','angry','happy','hungry','tired']

  return moods[Math.floor(Math.random()*moods.length)]
}
const getNum = ()=>{
  

  return Math.floor(Math.random()*10)+1
}


 class Hello extends Component {
    render() {
          let num = getNum()
        return (
            <div>
                  {/* <h1>Hello from React App</h1>
        <p>This is my first para</p>
        <h2>my mood is {getMoods()}</h2>
        <para> my num is: {num} {num===7 ? 'Lucky Number': 'unlucky Number'}</para>

        
        <Card/> */}
        <h1>Number is: {num}</h1>
        <para>  {num===7 ?
         <img src="https://media2.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=e1bb72ff5b7ca7bf48637959772e6344"/>
         : null}</para>

            </div>
        )
    }
}

export default Hello
