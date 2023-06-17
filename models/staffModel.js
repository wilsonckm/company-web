const staff = [
    {firstName: 'Frank', skill: 'Debugging', level: 5},
    {firstName: 'Jill', skill: 'Collaboration', level: 4},
    {firstName: 'Bob', skill: 'Conflict Resolution', level: 3}
];

module.exports = {
  getAll,
};

function getAll () {
  return staff;
}