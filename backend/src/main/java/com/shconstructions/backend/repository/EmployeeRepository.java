package com.shconstructions.backend.repository;
import com.shconstructions.backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}
