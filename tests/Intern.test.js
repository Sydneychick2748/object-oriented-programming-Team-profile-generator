const Intern = require("../lib/Intern");

describe("testing Intern Class", () => {
  it("should be  able to create an instance ", () => {
    // data set up

    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
    const school = "UCSD";
    const role = "Intern";
    // crate a case
    const intern = new Intern(name, id, email, school, role);

    // make assertion
    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);
    expect(intern.role).toBe("Intern");
  });
});
