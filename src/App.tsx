import "./App.css";
import Person from "./Person";

function App() {
  // const name:string = 'Vizz'
  // const age:number=23
  // const isActive:boolean=true
  // const ratings:number[] = [3,4,5,6]

  // let person:any = 3
  // person="Hi"

  return (
    <>
      <Person name="Vizz" age={23} country="USA" isActive={true} />
      <Person name="Rox" age={22} isActive={true} />
    </>
  );
}

export default App;
