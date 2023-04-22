package project.controller.paths;

import java.security.Key;

import jakarta.inject.Inject;
import jakarta.json.bind.Jsonb;
import jakarta.json.bind.JsonbBuilder;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.Response;
import project.builder.Build;
import project.controller.token.Token;
import project.controller.token.TokenIssuer;
import project.controller.token.TokenKey;
import project.model.dto.User;
import project.model.interfaces.in.IModelUser;

@Path("/users")
public class UserPaths {
    @Inject
    @Build
    private IModelUser modelUser;

    private Jsonb jsonb = JsonbBuilder.create();

    @POST
    @Path("/auth")
    public Response auth(@Context ContainerRequestContext requestContext, String userJson) {
        try {
            User user = jsonb.fromJson(userJson, User.class);
            if (!modelUser.authUser(user)) {
                return Response.status(Response.Status.UNAUTHORIZED).build();
            }
            User userFound = modelUser.getUser(user.getLogin());
            TokenKey tokenKey = TokenKey.getInstance();
            Key key = tokenKey.getKey();
            TokenIssuer ti = new TokenIssuer(key);
            String jwt = ti.issueToken(userFound.getLogin(), userFound.getRole());
            Token token = new Token(jwt);
            return Response.ok(jsonb.toJson(token)).build();
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e).build();
        }
    }

    @POST
    @Path("/reg")
    public Response reg(@Context ContainerRequestContext requestContext, String userJson) {
        try {
            User user = jsonb.fromJson(userJson, User.class);
            if (modelUser.regUser(user)){
                return Response.status(Response.Status.OK).build();
            } else {
                return Response.status(Response.Status.CONFLICT).build();
            }
        } catch (Exception e) {
            return Response.status(Response.Status.BAD_REQUEST).entity(e).build();
        }
    }

}