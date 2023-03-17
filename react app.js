console.log("Message to Developer")
function Alertmessage()
{
        const hi=()=>{alert("Message from Javasccript Alert!")}
        return <div><button onClick={hi}>click</button></div>
}
ReactDOM.render(<Alertmessage/>,document.getElementById('mydiv'))