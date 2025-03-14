const studentNames= ["sonia", "daniel", "paul", "chinelo", "voltage"]

function FindStudent(allStudents, StudentNames){
  allStudents.includes(StudentNames) ? console.log('name found'): console.log("no name found")
}
FindStudent(studentNames, "sonia")
