import './App.css'

function App() {

  let name:string = 'Vizz'
  let age:number=23
  let isActive:boolean=true
  let ratings:number[] = [3,4,5,6]

  let person:any = 3
  person="Hi"
  

  return (
    <>
      {name} {age} {isActive} {ratings} {person}
    </>
  )
}

export default App
