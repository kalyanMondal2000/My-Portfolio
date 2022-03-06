const findName = () =>{
    const name = window.prompt("Hello! What is you name?")
    return (<h1>Welcome {name}!</h1>)
}

ReactDOM.render(<findName/>, document.getElementById("welcomeSection"))