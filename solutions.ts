const multiplyValue = (value: number, multiplier?: number): number => {
  return value * (multiplier ?? 2);
};



type Values = string | number | boolean;
const processInput = (value: Values): string | number => {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
};



type Coordinate = readonly [number, number, string];

const formatCoordinate = (value: Coordinate): string => {
  return `Location: ${value[2]} (${value[0]}, ${value[1]})`;
};




const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};




interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}
const getPopularCourses = (
  courses: Course[],
  minStudents: number,
): Course[] => {
  const result = courses.filter(
    (course) => course.isPublished === true && course.students >= minStudents,
  );
  return result;
};


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map((item) => item[key]);
};


class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) { }
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


const validateAgeAsync = async (age: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
};
