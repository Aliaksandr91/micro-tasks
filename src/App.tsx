import React from 'react';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
  return (
      <>
        <Header titleHeader={'Header'}/>
        <Body titleBody={'Body'}/>
          <Footer titleFooter={'Footer'}/>
      </>
  );
}

export default App;
