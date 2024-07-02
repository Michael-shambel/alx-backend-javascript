export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentPlace = students.filter((student) => student.location === city);
  return studentPlace.map((eachStudent) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === eachStudent.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...eachStudent, grade };
  });
}
