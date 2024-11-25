import data from "./data.json";

(async function () {
  try {
    // const res = await fetch("./data.json");
    // const data = await res.json();
    let employees = data;
    let selectedEmployeeId = employees[0].id;
    let selectedEmployee = { ...employees[0] };
    const employeesList = document.querySelector(".employees__list");
    const employeeDetails = document.querySelector(".employee__details");
    const addEmployeeModal = document.querySelector(".add-employee-modal");
    const addEmployeeButton = document.querySelector(".add-employee-btn");
    const addEmployeeForm = document.querySelector("#add-employee-form");

    addEmployeeButton.addEventListener("click", () => {
      addEmployeeModal.style.display = "flex";
    });

    addEmployeeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const newEmployee = {
        id: employees.length + 1,
        firstName: formData.get("name").split(" ")[0],
        lastName: formData.get("name").split(" ")[1],
        age: formData.get("age"),
        dob: formData.get("dob"),
        email: formData.get("email"),
        contactNumber: formData.get("contactNumber"),
        salary: formData.get("salary"),
        imageUrl: "https://randomuser.me/api/portraits/lego/1.jpg",
      };
      employees.push(newEmployee);
      addEmployeeModal.style.display = "none";
      renderEmployees();
      renderEmployeeDetails();
    });

    const renderEmployees = () => {
      employeesList.innerHTML = "";
      const addEmployeeToList = (employee) => {
        const employeeElement = document.createElement("li");
        const deleteButton = document.createElement("span");
        const employeeName = document.createElement("span");
        employeeElement.addEventListener("click", (e) => {
          selectedEmployeeId = employee.id;
          selectedEmployee = employees.find(
            (emp) => emp.id == selectedEmployeeId
          );
          renderEmployeeDetails();
        });

        employeeName.innerHTML = `${employee.firstName} ${employee.lastName}`;
        deleteButton.innerHTML = "X";
        deleteButton.style.color = "red";
        deleteButton.addEventListener("click", (e) => {
          e.stopPropagation();
          console.log("before", selectedEmployee);
          employees = employees.filter((emp) => emp.id !== employee.id);
          console.log("after", selectedEmployee);
          if (selectedEmployeeId === employee.id) {
            selectedEmployeeId = employees[0].id;
            selectedEmployee = employees[0];
          }
          renderEmployees();
          renderEmployeeDetails();
        });

        employeeElement.append(employeeName);
        employeeElement.append(deleteButton);

        employeesList.append(employeeElement);
      };

      employees.forEach(addEmployeeToList);
    };

    const renderEmployeeDetails = () => {
      console.log("emplyeedetails", selectedEmployee);
      employeeDetails.innerHTML = "";
      const employeeImgElement = document.createElement("img");
      employeeImgElement.setAttribute("src", selectedEmployee.imageUrl);
      employeeImgElement.classList.add("employee__details--img");
      const employeeName = document.createElement("span");
      employeeName.innerHTML = `${selectedEmployee.firstName} ${selectedEmployee.lastName}`;
      const employeeAge = document.createElement("p");
      const employeeDOB = document.createElement("p");
      const employeeEmail = document.createElement("a");
      const employeeContact = document.createElement("p");
      const employeeSalary = document.createElement("p");
      employeeAge.innerText = "Age: " + selectedEmployee.age;
      employeeDOB.innerText = "Date of birth: " + selectedEmployee.dob;
      employeeEmail.innerText = "Email: " + selectedEmployee.email;
      employeeEmail.setAttribute("href", `mailto:${selectedEmployee.email}`);
      employeeContact.innerText =
        "Contact Number: " + selectedEmployee.contactNumber;
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
    console.error(err);
  }
})();
