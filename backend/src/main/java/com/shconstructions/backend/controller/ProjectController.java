package com.shconstructions.backend.controller;

import com.shconstructions.backend.dto.ProjectDTO;
import com.shconstructions.backend.model.Project;
import com.shconstructions.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<Project> getAll() {
        return projectService.getAllProjects();
    }

    @PostMapping
    public ResponseEntity<Project> create(@RequestBody ProjectDTO dto) {
        return ResponseEntity.ok(projectService.addProject(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
}
