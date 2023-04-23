package project.controller.paths.websocket.users;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import project.model.interfaces.in.IModelUsersWs;

@ServerEndpoint("/asyncUsers")
public class wsEndpoint {

    IModelUsersWs modelUsersWs;

    @OnOpen
    public void connectionOpen(Session session) {
        modelUsersWs.addSession(session);
    }

    @OnMessage
    public void messageProcess() {
        modelUsersWs.sendAll();
    }

    @OnClose
    public void connectionClose(Session session) {
        modelUsersWs.removeSession(session);
    }
}