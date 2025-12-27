const ConditionalRendring = () => {
  const isLoggedIn = false;
  return <>{isLoggedIn ? <h1>Welcome user</h1> : <h1>LogIn please</h1>}</>;
};

export default ConditionalRendring;
