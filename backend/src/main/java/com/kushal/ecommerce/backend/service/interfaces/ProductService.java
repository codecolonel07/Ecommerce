package com.kushal.ecommerce.backend.service.interfaces;

import com.kushal.ecommerce.backend.dto.request.ProductRequest;
import com.kushal.ecommerce.backend.dto.response.ProductResponse;
import java.util.List;

public interface ProductService {

    ProductResponse createProduct(ProductRequest request);
    List<ProductResponse> getAllProducts();
    ProductResponse getProductById(Long id);
}
