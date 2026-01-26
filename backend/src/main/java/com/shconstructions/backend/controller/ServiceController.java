package com.shconstructions.backend.controller;

import com.shconstructions.backend.dto.ServiceDTO;
import com.shconstructions.backend.model.ServiceItem;
import com.shconstructions.backend.service.ServiceItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {
    @Autowired
    private ServiceItemService serviceItemService;

    @GetMapping
    public List<ServiceItem> getAll() {
        return serviceItemService.getAllServices();
    }

    @PostMapping
    public ResponseEntity<ServiceItem> create(@RequestBody ServiceDTO dto) {
        return ResponseEntity.ok(serviceItemService.addService(dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        serviceItemService.deleteService(id);
        return ResponseEntity.noContent().build();
    }
}
