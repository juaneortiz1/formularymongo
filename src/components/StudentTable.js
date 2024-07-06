import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Programa</th>          
          <th>Edad</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.nombre}</td>
            <td>{student.correo}</td>
            <td>{student.programa}</td>
            <td>{student.edad}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;


