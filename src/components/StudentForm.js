import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const StudentForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [birthDate, setBirthDate] = useState(null);

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = calculateAge(birthDate);
    const student = {
      nombre: name,
      correo: email,
      programa: program,
      fechaNacimiento: birthDate,
      edad: age,
    };
    onSubmit(student);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Correo:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Programa:</label>
        <input type="text" value={program} onChange={(e) => setProgram(e.target.value)} required />
      </div>
      <div>
        <label>Fecha de Nacimiento:</label>
        <DatePicker
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          dateFormat="yyyy-MM-dd"
          showYearDropdown
          scrollableYearDropdown
        />
      </div>
      <button type="submit">Agregar Estudiante</button>
    </form>
  );
};

export default StudentForm;




