export default function getStudentByLocation(students, place) {
  return students.filter(
    (student) => student.location === place,
  );
}
