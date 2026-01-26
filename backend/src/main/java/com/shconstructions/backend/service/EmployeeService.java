package com.shconstructions.backend.service;

import com.shconstructions.backend.dto.EmployeeDTO;
import com.shconstructions.backend.model.Employee;
import com.shconstructions.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    public Employee addEmployee(EmployeeDTO dto) {
        Employee emp = new Employee();
        emp.setName(dto.getName());
        emp.setRole(dto.getRole());
        emp.setImageUrl(dto.getImageUrl());
        return employeeRepository.save(emp);
    }

    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
}
