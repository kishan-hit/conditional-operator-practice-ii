import React from "react";
import Form from "./Form";

var isUserRegistered = true;

const App = () => {
    return(
        <div className="container">
            <Form isRegistered = {isUserRegistered}/>
        </div>
    );
}

export default App;