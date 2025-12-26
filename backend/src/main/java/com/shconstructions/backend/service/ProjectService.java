package com.shconstructions.backend.service;

import com.shconstructions.backend.dto.ProjectDTO;
import com.shconstructions.backend.model.Project;
import com.shconstructions.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    public Project addProject(ProjectDTO dto) {
        Project project = new Project();
        project.setTitle(dto.getTitle());
        project.setCategory(dto.getCategory());
        project.setDescription(dto.getDescription());
        project.setImageUrl(dto.getImageUrl());
        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        projectRepository.deleteById(id);
    }
}
