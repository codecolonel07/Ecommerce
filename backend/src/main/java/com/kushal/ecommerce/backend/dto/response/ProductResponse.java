package com.kushal.ecommerce.backend.dto.response;

import lombok.*;
import java.math.BigDecimal;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductResponse {

    private Long id;

    private String title;

    private String description;

    private BigDecimal price;

    private String imageUrl;
}
