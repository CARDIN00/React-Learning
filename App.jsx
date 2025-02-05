import Card from './Card'
import './App.css'
import './index.css'

let name = "karan Singh"
function App(){
  return(
    <>
    <Card></Card>

    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>

    <div className="paragraph">
      <h1>hello {name}</h1>
      <p>this is a paragraph</p>
      </div>
    </>
    
  );
}

export default App
