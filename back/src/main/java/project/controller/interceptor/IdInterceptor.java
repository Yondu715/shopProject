package project.controller.interceptor;

import java.io.IOException;
import java.security.Key;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.ext.Provider;
import project.controller.token.TokenKey;
import project.controller.token.TokenValidator;

@Provider
@IdRequired
public class IdInterceptor implements ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        String token = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
        String data = requestContext.getHeaderString("Data");
        Boolean valid = false;
        try {
            valid = TokenValidator.validate(token);
        } catch (Exception e) {
            requestContext.setProperty("login", "Error");
        }
        if (valid) {
            TokenKey tokenKey = TokenKey.getInstance();
            Key key = tokenKey.getKey();
            Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
            String login = claims.get("login").toString();
            requestContext.setProperty("login", login);
            requestContext.setProperty("data", data);
        }
    }
}
