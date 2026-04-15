package com.nexora.digital.booking;

import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConsultationBookingRepository extends JpaRepository<ConsultationBooking, Long> {
    boolean existsByPreferredDateAndPreferredTime(LocalDate preferredDate, LocalTime preferredTime);
}
