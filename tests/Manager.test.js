const Manager = require("../lib/Manager");

describe("testing Manager Class", () => {
  it("should be  able to create an instance ", () => {
    // data set up

    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
    const officeNumber = "7";
    const role = "Manager";
    // crate a case
    const manager = new Manager(name, id, email, officeNumber, role);

    // make assertion
    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);
    expect(manager.getRole()).toBe("Manager");
  });
});
