// Prob->01
const numberOrString = <T extends string | number>(item: T): number => {
  if (typeof item === "number") {
    return Math.pow(item, 2);
  } else {
    return item.length;
  }
};

// Prob->02
interface Person {
  name: string;
  phone?: number;
  address?: {
    city: string;
    street: string;
  };
}
const person: Person = {
  name: "x",
  phone: +934789326,
  address: {
    city: "dhaka",
    street: "dhanmondi,9A",
  },
};

const getAddressCity = <T extends Person>(item: T): string => {
  return item.address?.city ?? "Has no Address";
};

// Prob->03
class Cat {}
const cat = new Cat();
const getInstance = (animal: Cat): animal is Cat => {
  return animal instanceof Cat;
};

const isCat = (animalName: Cat) => {
  if (getInstance(animalName)) {
    console.log("yes, it's a cat.");
  } else {
    console.log("no, it's not a cat.");
  }
};

// Prob->04
type Union = number | string;
const checkNumberAndAdd = <T extends Union>(list: T[]): number => {
  let total: number = 0;
  list.forEach((element) => {
    if (typeof element === "number") {
      total += element;
    }
  });
  return total as number;
};

// Prob->05
interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: number;
}

const car: Car = {
  make: "aluminum",
  model: "xyc",
  year: 2021,
};
const driver: Driver = {
  name: "x",
  licenseNumber: 93875923,
};

const conbineObj = <T, Q>(obj: T, obj2: Q): T & Q => {
  return Object.assign({}, obj, obj2);
};

// Prob->06
const typeCheck = (item: unknown) => {
  if (Array.isArray(item)) {
    if (item.length > 0 && item.every((x) => typeof x === "number")) {
      const result = item.reduce((previous, current) => previous + current);
      console.log(result);
    } else {
      console.error("it is not a number of array");
    }
  } else {
    console.error("it is not a number of array");
  }
};

// Prob->07
const findFirstOccurrence = <T>(arr: T[], target: T): number => {
  if (arr.find((item) => item === target)) {
    return arr.indexOf(target);
  } else {
    return arr.indexOf(target);
  }
};

// Prob->08
interface Product {
  name: string;
  price: number;
  quantity: number;
}
const product: Product[] = [
  {
    name: "x",
    price: 20.98,
    quantity: 4,
  },
];

type PriceAndQuantity = {
  price: number;
  quantity: number;
};
const shoppingCost = <T extends PriceAndQuantity>(items: T[]): number => {
  const totalCost = items.map((item) => {
    return item.price * item.quantity;
  });
  return totalCost[0];
};
