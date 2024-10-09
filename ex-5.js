const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  let totelScore = students.reduce((acc, student) => acc + student.score, 0);

  return totelScore / students.length;
}

console.log(getAverageStudentScore(students)); // Output: 87.5
