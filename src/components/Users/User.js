const User = ({name, age}) => {
  const isSingularYear = age % 10 === 1;
  const value = `${name} (${age} year${isSingularYear ? '' : 's'} old)`;

  return <li>{value}</li>;
};

export default User;