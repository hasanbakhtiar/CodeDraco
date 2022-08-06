const list = (
    <ul>
        <li className="btn btn-success">pen</li>
        <li>book</li>
        <li>table</li>
    </ul>
)


const temp = (
    <div style={{"color":"red"}}>
        {list}
        {list}
        {list}
        {list}
        {list}
    </div>
)

ReactDOM.render(temp,document.querySelector("#root"));