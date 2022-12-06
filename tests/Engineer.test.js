const Engineer = require("../lib/Engineer");

describe("testing Engineer Class", () => {
  it("should be  able to create an instance ", () => {
    // data set up

    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
    const github = "github.com";
    const role = "Engineer";
    // crate a case
    const engineer = new Engineer(name, id, email, github, role);

    // make assertion
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);
    expect(engineer.getRole()).toBe("Engineer");
  });
});
