import React from 'react';

const App = ()=>{
    return (
        <div id="container">
            <div id="FormWrap">
                <div id="FormImage">
                    <img />

                </div>
                <div id="form">
                    <h1 >Create Account</h1>
                    <form action="">
                        <input type="text" placeholder="Enter your name" />
                        <input type="date" placeholder="Enter your DOB" />
                        <input type="email" placeholder="Enter your email" />

                        <input type="password" placeholder="Choose your password" />
                        <input type="password" placeholder="Confirm your password" />
                        <input type="submit" value="Create my account" />
                    </form>

                </div>

            </div>


        </div>



);

};

export default App;