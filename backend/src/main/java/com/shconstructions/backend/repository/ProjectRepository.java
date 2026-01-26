package com.shconstructions.backend.repository;
import com.shconstructions.backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
public interface ProjectRepository extends JpaRepository<Project, Long> {}
