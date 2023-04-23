package project.model.interfaces.in;

import jakarta.websocket.Session;

public interface IModelProductWSv2 {
    public void addSession(Session session);

    public void removeSession(Session session);

    public void sendMessage(String message);

    public void sendAll();
}
