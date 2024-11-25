(async function () {
  try {
    const res = await fetch("./src/data.json");
    const data = await res.json();
    let employees = data;
    let selectedEmployeeId = 0;
    let selectedEmployee = employees[0];
    const employeesList = document.querySelector(".employees__list");
    const employeeDetails = document.querySelector(".employee__details");

    employeesList.addEventListener("click", (e) => {
      console.log(e);
      if (e.target.TagName === "LI") {
        console.log("yes");
      }
    });

    const renderEmployees = () => {
      employeesList.innerHTML = "";
      const addEmployeeToList = (employee) => {
        const employeeElement = document.createElement("li");
        const deleteButton = document.createElement("span");
        const employeeName = document.createElement("span");
        employeeName.innerHTML = `${employee.firstName} ${employee.lastName}`;
        deleteButton.innerHTML = "X";
        deleteButton.style.color = "red";
        deleteButton.addEventListener("click", () => {
          employees = employees.filter((emp) => emp.id != employee.id);
          renderEmployees();
        });

        employeeElement.append(employeeName);
        employeeElement.append(deleteButton);

        employeesList.append(employeeElement);
      };

      employees.forEach(addEmployeeToList);
    };

    const renderEmployeeDetails = () => {
      console.log(selectedEmployee);
      const employeeImgElement = document.createElement("img");
      employeeImgElement.setAttribute("src", selectedEmployee.imageUrl);
      employeeImgElement.classList.add("employee__details--img");
      const employeeName = document.createElement("span");
      employeeName.innerHTML = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
      const employeeAge = document.createElement("p");
      const employeeDOB = document.createElement("p");
      const employeeEmail = document.createElement("p");
      const employeeContact = document.createElement("p");
      const employeeSalary = document.createElement("p");
      employeeAge.innerText = "Age: " + selectedEmployee.age;
      employeeDOB.innerText = "Date of birth: " + selectedEmployee.dob;
      employeeEmail.innerText = "Email: " + selectedEmployee.email;
      employeeContact.innerText =
        "Contact Number: " + selectedEmployee.conactNumber;
      employeeSalary.innerText = "Salary: " + selectedEmployee.salary;

      employeeDetails.append(
        ...[
          employeeImgElement,
          employeeName,
          employeeAge,
          employeeDOB,
          employeeEmail,
          employeeContact,
          employeeSalary,
        ]
      );
    };

    renderEmployees();
    renderEmployeeDetails();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
})();
