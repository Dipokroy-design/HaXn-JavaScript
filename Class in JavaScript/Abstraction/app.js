// Base concept
function getMonthlySalary(base, bonus, taxRate) {
  const gress = base + bonus;
  const tax = gress * taxRate;
  const net = gress - tax;
  return net;
}
console.log(getMonthlySalary(70000, 25000, 0.2));

// Abstraction Demo code
function getSalary(employee) {
  const { base, bonus } = employee;
  const taxRate = 0.2;

  function calculateSalary(base, bonus, taxRate) {
    const gress = base + bonus;
    const tax = gress * taxRate;
    return gress - tax;
  }
  return calculateSalary(base, bonus, taxRate);
}

const person1 = getSalary({ base: 60000, bonus: 25000 });

console.log(person1);
