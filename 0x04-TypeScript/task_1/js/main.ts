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
