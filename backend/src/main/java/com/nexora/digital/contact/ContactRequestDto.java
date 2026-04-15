package com.nexora.digital.contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class ContactRequestDto {

    @NotBlank(message = "Name is required.")
    private String fullName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    private String email;

    private String phone;
    private String company;

    @NotBlank(message = "Project type is required.")
    private String projectType;

    private String budgetRange;

    @NotBlank(message = "Message is required.")
    @Size(min = 10, message = "Message must contain at least 10 characters.")
    private String message;

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getProjectType() { return projectType; }
    public void setProjectType(String projectType) { this.projectType = projectType; }
    public String getBudgetRange() { return budgetRange; }
    public void setBudgetRange(String budgetRange) { this.budgetRange = budgetRange; }
    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }
}
