package project.model;

import java.util.concurrent.ConcurrentLinkedQueue;

import jakarta.ejb.Asynchronous;
import jakarta.websocket.Session;
import project.model.interfaces.in.IModelUserWs;

public class UserModelWs implements IModelUserWs {
    private final static ConcurrentLinkedQueue<Session> queue = new ConcurrentLinkedQueue<>();

    @Override
    @Asynchronous
    public void addSession(Session session) {
        queue.add(session);
    }

    @Override
    @Asynchronous
    public void removeSession(Session session) {
        queue.remove(session);
    }

    @Override
    @Asynchronous
    public void sendMessage(String message) {
        for (Session session : queue) {
            if (session.isOpen()) {
                if (message == null) {
                    session.getAsyncRemote().sendObject(true);
                } else {
                    session.getAsyncRemote().sendText(message);
                }
            }
        }
    }

    @Override
    @Asynchronous
    public void sendAll() {
        for (Session session : queue) {
            if (session.isOpen()){
                session.getAsyncRemote().sendObject(true);
            }
        }
    }
}
