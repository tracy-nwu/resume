import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Demo from "./components/Demo";
import resume from "./resume.data";
import Editor from "./components/Editor/index";
import "./App.css";

const html = ReactDOMServer.renderToString(
  <div className="container">
    {/* <Demo /> */}

    <Header
      qrcode={resume.qrcode}
      info={resume.info}
      user={resume.user}
      desc={resume.desc}
    />
    <Main
      education={resume.education}
      skill={resume.skill}
      experience={resume.experience}
    />
    <Footer />
  </div>
);
// console.log(html);
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: JSON.parse(
        window.localStorage.getItem("resumeData") || JSON.stringify(resume)
      )
    };
  }
  handleChangeData = value => {
    this.setState({
      data: value
    });
  };

  render() {
    const { data } = this.state;
    // const html = ReactDOMServer.renderToString(
    //   <div className="container">
    //     {/* <Demo /> */}
    //     <Header
    //       qrcode={resume.qrcode}
    //       info={resume.info}
    //       user={resume.user}
    //       desc={resume.desc}
    //     />
    //     <Main
    //       education={resume.education}
    //       skill={resume.skill}
    //       experience={resume.experience}
    //     />
    //     <Footer />
    //   </div>
    // );
    // console.log(html);
    return (
      <div className="container">
        {/* <Demo /> */}
        <Editor data={data} onEditor={this.handleChangeData} />
        <Header
          qrcode={data.qrcode}
          info={data.info}
          user={data.user}
          desc={data.desc}
        />
        <Main
          education={data.education}
          skill={data.skill}
          experience={data.experience}
        />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
