import React from 'react'

const StudentList = ({students}) => {
    const passedStudents = students.filter(s => s.marks >=33)
  return (
    <div>
        <h2>List of Students Passed in Exam</h2>
        <ul>
            {passedStudents.map( s =>(
                <li key={s.id}>{s.name} - {s.marks}</li>
            ))}
        </ul>
    </div>
  )
}

export default StudentList
