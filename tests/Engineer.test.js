const Engineer = require("../lib/Engineer");

describe("testing Engineer Class", () => {
  it("should be  able to create an instance ", () => {
    // data set up

    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
    const gitHub = "github.com";
    const roll = "Engineer";
    // crate a case
    const engineer = new Engineer(name, id, email, gitHub, roll);

    // make assertion
    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.gitHub).toBe(gitHub);
    expect(engineer.roll).toBe("Engineer");
  });
});
