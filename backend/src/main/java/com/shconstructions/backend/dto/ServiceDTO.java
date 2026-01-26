package com.shconstructions.backend.dto;

public class ServiceDTO {
    private String title;
    private String description;
    private String iconCode;

    // Getters
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getIconCode() { return iconCode; }

    // Setters
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setIconCode(String iconCode) { this.iconCode = iconCode; }
}
