package com.shconstructions.backend.controller;

import com.shconstructions.backend.dto.EmployeeDTO;
import com.shconstructions.backend.model.Employee;
import com.shconstructions.backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Employee> getAll() {
        return employeeService.getAllEmployees();
    }

    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody EmployeeDTO dto) {
        return ResponseEntity.ok(employeeService.addEmployee(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
