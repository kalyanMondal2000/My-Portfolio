let name = window.prompt("Hello! What is you name?");
function findName(name) {
    return (<h1>Welcome!{name}</h1>);
}

ReactDOM.render(<findName/>, document.getElementById("welcomeSection"))