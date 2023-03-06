function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
    return users;
  }
  
  
  const users = [
    { name: 'Temo', age: 25 },
    { name: 'Gabo', age: 30 },
    { name: 'Saba', age: 20 },
  ];
  
  const sortedUsers = sortByAge(users);
  console.log(sortedUsers);