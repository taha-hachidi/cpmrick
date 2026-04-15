package com.nexora.digital.contact;

import org.springframework.stereotype.Service;

@Service
public class ContactService {

    private final ContactRequestRepository contactRequestRepository;

    public ContactService(ContactRequestRepository contactRequestRepository) {
        this.contactRequestRepository = contactRequestRepository;
    }

    public ContactRequest save(ContactRequestDto dto) {
        ContactRequest entity = new ContactRequest();
        entity.setFullName(dto.getFullName());
        entity.setEmail(dto.getEmail());
        entity.setPhone(dto.getPhone());
        entity.setCompany(dto.getCompany());
        entity.setProjectType(dto.getProjectType());
        entity.setBudgetRange(dto.getBudgetRange());
        entity.setMessage(dto.getMessage());
        return contactRequestRepository.save(entity);
    }
}
