package com.nexora.digital.booking;

import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ConsultationBookingRepository extends JpaRepository<ConsultationBooking, Long> {

    @Query(value = """
        SELECT COUNT(*)
        FROM consultation_bookings
        WHERE preferred_date = :preferredDate
          AND preferred_time = CAST(:preferredTime AS time)
        """, nativeQuery = true)
    long countExistingSlot(
            @Param("preferredDate") LocalDate preferredDate,
            @Param("preferredTime") LocalTime preferredTime
    );
}