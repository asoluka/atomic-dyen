const person = {
  name: "Austin",
};

function showName(name) {
  // return person.name + " " + name;
  person.name = "Bucky";
  return name;
}

function addValue(a, b) {
  return a + b;
}

showName("austin");
addValue(1, 3);

person.name = "Bucky";

showName("austin");
