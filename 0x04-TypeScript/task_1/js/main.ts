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
