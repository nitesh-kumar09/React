import Hello from './Hello'
import reactSvg from './assets/react.svg'
const App = ()=>{
  return(
    <>
      <h1>App Component</h1>
      <Hello/>
      <img src={reactSvg} alt="reactSvg" width="200px" />
    </>
  )
}

export default App;

