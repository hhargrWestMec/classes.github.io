
/*
class Employee {
    constructor (f_name ,l_name, age, address, city, zip_code, state, country) {
        this.f_name = f_name;
        this.l_name = l_name;
        this.age = age;
        this.address = address;
        this.city = city;
        this.zip_code = zip_code;
        this.state = state;
        this.country = country;
    }

    createEmployees () { 
        console.log(`New Employee Name: ${this.f_name}, ${this.l_name}`)
    }

}


class Details extends Employee { 
    constructor (f_name ,l_name, age, address, city, zip_code, state, country, job_title, dept, salary, years_service) {
        super(f_name ,l_name, age, address, city, zip_code, state, country)
        this.job_title = job_title;
        this.dept = dept;
        this.salary = salary;
        this.years_service = years_service;
    }

    createDetails () {
        console.log(`New Employee Job Title: ${this.job_title}`)

    }

    displayDetails () {
        
    }

} 


let emp = new Details('John', 'Doe', '25', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Unknown', 'Software Engineer', 'Engineering', 'Unknown', 'Unknown')
emp.createEmployees();
emp.createDetails();
*/


// using form input 

let main_array = [];
const employee_list = document.getElementById('employee_list');

class newEmployeeForm {
    constructor () {
        this.f_name = document.getElementById('f_name').value;
        this.l_name = document.getElementById('l_name').value;
        this.age = document.getElementById('age').value;
        this.address = document.getElementById('address').value;
        this.city = document.getElementById('city').value;
        this.zip_code = document.getElementById('zip').value;
        this.state = document.getElementById('state').value;
        this.country = document.getElementById('country').value;
        this.full_name = `${this.f_name} ${this.l_name}`;
        this.array_obj = {
            f_name:this.f_name,
            l_name:this.l_name,
            age:this.age,
            address:this.address,
            city:this.city,
            zip:this.zip_code,
            state:this.state,
            country:this.country
        };
    }

    name () {
        console.log(`The employees name is ${this.full_name}`);
        main_array.push(this.array_obj);
        console.log(main_array);
        
    }
}

class JobDetails extends newEmployeeForm {
    constructor (f_name ,l_name, age, address, city, zip_code, state, country, full_name, array_obj) {
        super(f_name ,l_name, age, address, city, zip_code, state, country, full_name, array_obj)
        this.job_title = document.getElementById('title').value;
        this.dept = document.getElementById('dept').value;
        this.salary = document.getElementById('salary').value;
        this.years_service = document.getElementById('years_service').value;
    }

    job_details () {
        console.log(`${this.full_name} (Age:${this.age})\nTitle: ${this.job_title}\nDept: ${this.dept}\nSalary: $${this.salary}\nYears of Service: ${this.years_service}`)
    }

    display_info() {
        console.log('Displaying information...')

        let li = document.createElement('li');
        let p = document.createElement('p');

        p.innerText = `First Name : ${this.f_name}\nLast Name : ${this.l_name}\nAge : ${this.age}\nCity : ${this.city}\nZip Code : ${this.zip_code}\nState : ${this.state}\nCountry : ${this.country}\nJob Title : ${this.job_title}\nDepartment : ${this.dept}\nSalary : $${this.salary}\nYears Service : ${this.years_service}`
        
        li.append(p)
        employee_list.append(li)        
    }
}

document.getElementById('button').addEventListener('click', function () { 
let newEmp = new JobDetails();
// newEmp.name();
// newEmp.job_details();
newEmp.display_info();

})