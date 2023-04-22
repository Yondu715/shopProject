package project.builder;

import jakarta.enterprise.inject.Default;
import jakarta.enterprise.inject.Produces;
import jakarta.inject.Inject;
import project.model.interfaces.in.IModelProduct;
import project.model.interfaces.in.IModelUser;
import project.model.interfaces.out.IRepositoryProduct;
import project.model.interfaces.out.IRepositoryUser;

public class Builder {
    @Inject @Default
    private IModelProduct modelProduct;

    @Inject @Default
    private IModelUser modelUser;

    @Inject @Default
    private IRepositoryProduct repositoryProduct;

    @Inject @Default
    private IRepositoryUser repositoryUser;

    @Produces @Build
    public IModelProduct buildModelProduct(){
        modelProduct.setRepository(repositoryProduct);
        return modelProduct;
    }

    @Produces @Build
    public IModelUser builModelUser(){
        modelUser.setRepository(repositoryUser);
        return modelUser;
    }
}
