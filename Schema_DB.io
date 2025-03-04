https://dbdiagram.io

Table patients {
  id int [pk, increment]
  first_name varchar
  last_name varchar
  date_of_birth date
  gender varchar
  phone varchar
  email varchar
  address varchar
}

Table employees {
  id int [pk, increment]
  first_name varchar
  last_name varchar
  role varchar // Ex: 'Médico', 'Enfermeiro', 'Faxineiro', 'Recepcionista', etc.
  phone varchar
  email varchar
}

Table appointments {
  id int [pk, increment]
  patient_id int 
  employee_id int  
  appointment_date datetime
  diagnosis text
  notes text
}

Table prescriptions {
  id int [pk, increment]
  appointment_id int 
  medication_name varchar
  dosage varchar
  instructions text
}

Table attendances {
  id int [pk, increment]
  patients_id int 
  employee_id int 
  urgency_level enum('Baixa', 'Média', 'Alta', 'Emergência')
  observations text    
}

Ref: appointments.patient_id > patients.id
Ref: appointments.employee_id > employees.id
Ref: prescriptions.appointment_id > appointments.id
Ref: attendances.patients_id > patients.id
Ref: attendances.employee_id > employees.id