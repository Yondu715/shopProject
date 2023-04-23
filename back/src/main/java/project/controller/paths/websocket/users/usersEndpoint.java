package project.controller.paths.websocket.users;

import jakarta.inject.Inject;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import project.model.interfaces.in.IModelProductWSv2;

@ServerEndpoint(value = "/asyncUsers")
public class usersEndpoint {

    @Inject
    IModelProductWSv2 modelUsersWs;

    @OnOpen
    public void connectionOpen(Session session) {
        modelUsersWs.addSession(session);
    }

    @OnMessage
    public void messageProcess(Session session, String message) {
        modelUsersWs.sendAll();
    }

    @OnClose
    public void connectionClose(Session session) {
        modelUsersWs.removeSession(session);
    }
}