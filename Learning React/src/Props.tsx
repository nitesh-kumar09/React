type propsType = {
  name: string;
  age: number;
  city: string;
  hobbies: string[];
};

// also used default values
const Props = ({
  name = "Guest",
  age = 18,
  city = "unknown",
  hobbies,
}: propsType) => {
  // const {name,age,city} = props;

  return (
    <>
      {/* First way */}
      {/* <h1>Name: {props.name}</h1>
      <p>Age: {props.age}</p>
      <p>City: {props.city}</p> */}

      {/* Second way */}
      <h1>Name: {name}</h1>
      <p>Age: {age}</p>
      <p>City: {city}</p>

      <h1>My Hobbies</h1>
      <ul>
        {hobbies.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </>
  );
};

export default Props;
