interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "michael",
  lastName: "shambel",
  age: 27,
  location: "addis ababa",
};

const student2: Srudent = {
  firstName: "rut",
  lastName: "shambel",
  age: 23,
  location: "nairobi",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const nameCol = document.createElement('td');
  const locaCol = document.createElement('td');

  nameCol.textContent = student.firstName;
  locaCol.textContent = student.location;

  row.appendChild(nameCol);
  row.appendChild(locaCol);
});
table.appendChild(row);
document.body.appendChild(table);
