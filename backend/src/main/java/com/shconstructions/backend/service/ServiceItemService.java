package com.shconstructions.backend.service;

import com.shconstructions.backend.dto.ServiceDTO;
import com.shconstructions.backend.model.ServiceItem;
import com.shconstructions.backend.repository.ServiceItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceItemService {
    @Autowired
    private ServiceItemRepository repository;

    public List<ServiceItem> getAllServices() {
        return repository.findAll();
    }

    public ServiceItem addService(ServiceDTO dto) {
        ServiceItem item = new ServiceItem();
        item.setTitle(dto.getTitle());
        item.setDescription(dto.getDescription());
        item.setIconCode(dto.getIconCode());
        return repository.save(item);
    }

    public void deleteService(Long id) {
        repository.deleteById(id);
    }
}
