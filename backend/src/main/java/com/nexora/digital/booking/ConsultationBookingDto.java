package com.nexora.digital.booking;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalTime;

public class ConsultationBookingDto {

    @NotBlank(message = "Name is required.")
    private String fullName;

    @NotBlank(message = "Email is required.")
    @Email(message = "Invalid email address.")
    private String email;

    private String phone;
    private String company;

    @NotBlank(message = "Consultation type is required.")
    private String consultationType;

    @NotNull(message = "Date is required.")
    @FutureOrPresent(message = "Date must be today or later.")
    private LocalDate preferredDate;

    @NotNull(message = "Time is required.")
    @JsonFormat(pattern = "HH:mm")
    private LocalTime preferredTime;

    private String notes;

    public String getFullName() { return fullName; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
    public String getPhone() { return phone; }
    public void setPhone(String phone) { this.phone = phone; }
    public String getCompany() { return company; }
    public void setCompany(String company) { this.company = company; }
    public String getConsultationType() { return consultationType; }
    public void setConsultationType(String consultationType) { this.consultationType = consultationType; }
    public LocalDate getPreferredDate() { return preferredDate; }
    public void setPreferredDate(LocalDate preferredDate) { this.preferredDate = preferredDate; }
    public LocalTime getPreferredTime() { return preferredTime; }
    public void setPreferredTime(LocalTime preferredTime) { this.preferredTime = preferredTime; }
    public String getNotes() { return notes; }
    public void setNotes(String notes) { this.notes = notes; }
}
