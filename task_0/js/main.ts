interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
    firstName: "Shaun",
    lastName: "Murphy",
    age: 28,
    location: "San José"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Dijon"
};

const studentsList: Student[] = [student1, student2];

function renderStudentsTable(students: Student[]) : void {
  const table: HTMLTableElement = document.createElement("table");
  const headerRow: HTMLTableRowElement = table.insertRow();
  const headers: string[] = ["First name", "Location"];
  headers.forEach((header) => {
    const th: HTMLTableCellElement = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });

  students.forEach((student) => {
    const row: HTMLTableRowElement = table.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell();
    firstNameCell.textContent = student.firstName;

    const locationCell: HTMLTableCellElement = row.insertCell();
    locationCell.textContent = student.location;
  });

  document.body.appendChild(table);
}

renderStudentsTable(studentsList);