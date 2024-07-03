interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearOfExperience?: number;
  location: string;
  [key: string]: boolean | string | number;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher = (firstName, lastName) => {
	const firstShortName = firstName.charAt(0).toUpperCase();
	return `${firstShortName}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface studentConstructor {
  firstName: string;
  lastName: string;
}

interface studentMethods {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements studentMethods {
  private firstName: string;
  private lastName: string;

  constructor(elem: studentConstructor) {
    this.firstName = elem.firstName;
    this.lastName = elem.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
