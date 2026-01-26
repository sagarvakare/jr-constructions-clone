package com.shconstructions.backend.dto;

public class EmployeeDTO {
    private String name;
    private String role;
    private String imageUrl;

    // Getters
    public String getName() { return name; }
    public String getRole() { return role; }
    public String getImageUrl() { return imageUrl; }

    // Setters
    public void setName(String name) { this.name = name; }
    public void setRole(String role) { this.role = role; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }
}
