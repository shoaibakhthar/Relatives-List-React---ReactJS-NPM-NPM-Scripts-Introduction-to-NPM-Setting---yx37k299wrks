import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key={"relativeList"}>
                <li key={"relativeListItem1"}>shoaib</li>
                <li key={"relativeListItem2"}>Abdul</li>
                <li key={"relativeListItem3"}>namit</li>
                <li key={"relativeListItem4"}>mushtaq</li>
               </ol>
            </div>
        )
    }
}


export default App;
