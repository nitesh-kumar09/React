const ArraysObject = () => {
  const fruits = ["Banana", "Orange", "PinApple"];

  type userType = {
    name:string;
    age:number;
  }
  const users = [{name:"Nitesh",age:24}]

  const userProfile =(user:userType)=>{
    return `My name is ${user.name} and my age is ${user.age}`
  }
  return (
    <>
      <h1>Fruits List</h1>
      <ul>
        {fruits.map((item, index) => (
          <li>
            {index} - {item}
          </li>
        ))}
      </ul>

      <h1>User</h1>
      <ul>
        {users.map((user,index)=>(
            <li key={index} >{userProfile(user)}</li>
        ))}
      </ul>
    </>
  );
};
export default ArraysObject;
