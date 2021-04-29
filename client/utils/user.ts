const dummyUser = {
  id: 'test',
  name: 'testName',
  profileImageUrl: 'profileImage',
};

export const getUser = (liffIDToken: string) => {
  console.log(liffIDToken);
  // client.get('/getUser', liffIDToken);
  return dummyUser;
};

export const createUser = (liffIDToken: string) => {
  console.log(liffIDToken);
  return dummyUser;
  // client.post('/createUser', liffIDToken);
};
