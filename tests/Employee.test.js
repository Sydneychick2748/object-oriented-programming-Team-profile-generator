const Employee = require("../lib/Employee");

describe("testing Employee Class", () => {
  it("should be  able to create an instance ", () => {
    // data set up

    const name = "Ana";
    const id = 77;
    const email = "ana@ana.com";
   const role = "Employee";
    // crate a case
    const employee = new Employee(name, id, email, role);

    // make assertion
    expect(employee.name).toBe(name);
    expect(employee.id).toBe(id);
    expect(employee.email).toBe(email);
    expect(employee.role).toBe("Employee");
   
  });

 
});
