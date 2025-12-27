// import FunctionEvent from "./FunctionEvent";
// import ArraysObject from "./ArraysObject";
// import ConditionalRendring from "./ConditionalRendring";
import Button from "./Button";
import Props from "./Props";
const App = () => {
  const message = () => {
    alert("button Clicked");
  };

  const hobbies = ["Reading books", "Coding", "Traveling"];
  return (
    <>
      {/* <FunctionEvent/> */}
      {/* <ArraysObject /> */}
      {/* <ConditionalRendring /> */}
      <Props name="Nitesh Singh" age={24} city="Mahua" hobbies={hobbies} />
      <Button handleClick={message} label={"Click me"} />
    </>
  );
};

export default App;
