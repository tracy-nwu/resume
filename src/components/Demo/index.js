import React from "react";

import pomelo from "./Greeting";
import Button from "./Button/index";
import LoginControl from "./LoginControl";

const Greeting = pomelo.Greeting;

class Demo extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Button>条件渲染</Button>
          <Button type="primary">条件渲染</Button>
        </p>
        <Greeting isLoggedIn={true} />
        <p>元素变量:</p>
        <LoginControl />
      </div>
    );
  }
}
export default Demo;
