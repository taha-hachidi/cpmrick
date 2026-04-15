package com.nexora.digital.booking;

import com.nexora.digital.shared.ApiException;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

@Service
public class BookingService {

    private final ConsultationBookingRepository bookingRepository;

    public BookingService(ConsultationBookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public ConsultationBooking save(ConsultationBookingDto dto) {
        if (bookingRepository.existsByPreferredDateAndPreferredTime(dto.getPreferredDate(), dto.getPreferredTime())) {
            throw new ApiException("This time slot is already booked.", HttpStatus.CONFLICT);
        }

        ConsultationBooking booking = new ConsultationBooking();
        booking.setFullName(dto.getFullName());
        booking.setEmail(dto.getEmail());
        booking.setPhone(dto.getPhone());
        booking.setCompany(dto.getCompany());
        booking.setConsultationType(dto.getConsultationType());
        booking.setPreferredDate(dto.getPreferredDate());
        booking.setPreferredTime(dto.getPreferredTime());
        booking.setNotes(dto.getNotes());
        return bookingRepository.save(booking);
    }
}
