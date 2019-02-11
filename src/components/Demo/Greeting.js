import React from 'react';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
const Greeting=(props)=> {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }


export  default {
 name:"pomelo",
 Greeting:Greeting,
 do:()=>{
console.log('d0...') 
}

}    // GuestGreeting:GuestGreeting,
   
