const heading = React.createElement( // heading is nothing but a normal React element which is basically a js object
    "h1",
    {id : "heading"}, //  Attribute object
    "Hello From React"
);
// console.log(heading); // object
// const root = ReactDOM.createRoot(document.querySelector(".root1"));
// root.render(heading);

// Creating Nested Structure
/*
<div id="parent">
<div id="child">
        <h1>I'm H1</h1>
        <h2>I'm H2</h2>
    </div>
    </div>
*/
   
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",{id: "child"},
        [React.createElement("h1",{} , "I'm h1"),React.createElement("h2",{},"I'm h2")]  // Array of Children
    )
);
       
const root = ReactDOM.createRoot(document.querySelector(".root1"));
root.render(parent);
console.log(parent);

// Another Structure

// {/* <div class="parent">
// <div id="child1">
//     <h1></h1>
//     <h2></h2>
// </div>
// <div id="child2">
//     <h1></h1>
//     <h2></h2>
// </div>
// </div> */}

const parent2 = React.createElement(
    "div",
    { class: "parent" },
    [React.createElement("div",
        { id: "Child1" },
        [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")]
    ), React.createElement("div",
        { id: "child2" },
        [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")]
    )]
);

// JSX 


const root2 = ReactDOM.createRoot(document.querySelector(".root2"));
root2.render(parent2);



 








