package project.controller.paths.websocket.products;

import jakarta.inject.Inject;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;
import project.model.interfaces.in.IModelProductWs;

@ServerEndpoint("/asyncProducts")
public class wsEndpoint {

    @Inject
    IModelProductWs modelProductWs;
    
    @OnOpen
    public void connectionOpen(Session session){
        modelProductWs.addSession(session);
    }

    @OnMessage
    public void messageProcess() {
        modelProductWs.sendAll();
    }

    @OnClose
    public void connectionClose(Session session) {
        modelProductWs.removeSession(session);
    }
}
