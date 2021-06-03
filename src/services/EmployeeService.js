import axios from 'axios'

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    addEmployee(employee) {
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }

    getEmployeeById(emplyeeId) {
        return axios.post(EMPLOYEE_API_BASE_URL + '/' + emplyeeId);    
    }
}

export default new EmployeeService();