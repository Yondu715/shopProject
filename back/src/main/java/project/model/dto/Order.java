package project.model.dto;

import java.time.LocalDate;
import java.util.List;

public class Order {
    private Integer id;
    private Integer id_user;
    private List<Product> products;
    private Integer price;
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public Integer getId_user() {
        return id_user;
    }
    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }
    public List<Product> getProducts() {
        return products;
    }
    public void setProducts(List<Product> products) {
        this.products = products;
    }
    public Integer getPrice() {
        return price;
    }
    public void setPrice(Integer price) {
        this.price = price;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public LocalDate getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }
    private String status;
    private LocalDate createdAt;
}
