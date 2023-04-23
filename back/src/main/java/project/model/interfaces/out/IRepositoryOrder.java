package project.model.interfaces.out;

import java.util.List;

import project.model.dto.Order;

public interface IRepositoryOrder {
    public List<Order> findOrderByLogin(String login);

    public List<Order> findAll();

    public boolean setOrderStatus(Integer id, String status);

    public boolean addOrder(String login, Order order);
}
