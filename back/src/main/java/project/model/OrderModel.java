package project.model;

import java.util.List;

import project.model.dto.Order;
import project.model.interfaces.in.IModelOrder;
import project.model.interfaces.out.IRepositoryOrder;

public class OrderModel implements IModelOrder {

    private IRepositoryOrder repositoryOrder;

    @Override
    public void setRepository(IRepositoryOrder repositoryOrder) {
        this.repositoryOrder = repositoryOrder;
    }

    @Override
    public List<Order> getOrders(String login) {
        return repositoryOrder.findOrderByLogin(login);
    }

    @Override
    public boolean changeStatusOrder(Order order) {
        return repositoryOrder.setOrderStatus(order.getId(), order.getStatus());
    }

    @Override
    public boolean addOrder(String login, Order order) {
        return repositoryOrder.addOrder(login, order);
    }

    
}
