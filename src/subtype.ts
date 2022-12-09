interface ToString<T> {
  toString: (a: T) => string;
}

const show = <T>(instance: ToString<T>) => (a: T) =>
  console.log(instance.toString(a));

type Dog = {
  name: string;
};

type Person = {
  firstName: string;
  lastName: string;
};

const dogToString: ToString<Dog> = {
  toString: (a) => a.name,
};

const personToString: ToString<Person> = {
  toString: (a) => a.firstName + " " + a.lastName,
};

show(dogToString)({ name: "john" });
show(personToString)({ firstName: "taro", lastName: "tanaka" });
