const Intern = require('../lib/intern');

const intern = new Intern('juan', '1545', 'juan@ford.edu', 'Ford');

test('test if we can return the constructor values for intern', () => {
    expect(intern.name).toBe('juan');
    expect(intern.id).toBe('1545');
    expect(intern.email).toBe('juan@ford.edu');
    expect(intern.school).toBe('Ford');
});

test('test if we can return the name of employee from the getName() method', () => {
    expect(intern.getName()).toBe('juan');
});

test('test if we can return the getId() method', () => {
    expect(intern.getId()).toBe('1545');
});

test('test if we can return the getEmail() method', () => {
    expect(intern.getEmail()).toBe('juan@ford.edu');
});

test('test if we can return the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});

test('test if we can return the getSchool() method', () => {
    expect(intern.getSchool()).toBe('Ford')
});