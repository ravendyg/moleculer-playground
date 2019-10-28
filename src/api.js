const mock = [{
  id: 1,
  name: 'name1',
  email: 'email1',
}, {
  id: 2,
  name: 'name2',
  email: 'email2',
}, {
  id: 3,
  name: 'name3',
  email: 'email3',
}, {
  id: 4,
  name: 'name4',
  email: 'email4',
}, {
  id: 5,
  name: 'name5',
  email: 'email5',
}, {
  id: 6,
  name: 'name6',
  email: 'email6',
}, {
  id: 7,
  name: 'name7',
  email: 'email7',
}, {
  id: 8,
  name: 'name8',
  email: 'email8',
}];

export async function fetchContacts(page, size) {
  const end = size * (page + 1);

  return {
    data: mock.slice(size * page, end),
    hasMore: end < mock.length,
  };
}

export async function createContact(name, email) {
  mock.push({
    id: mock.length + 1,
    name,
    email,
  });
}
