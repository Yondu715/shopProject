export async function WSocket(func, url){
    let ws = new WebSocket('ws://localhost:8080/WEB_EP-1.0-SNAPSHOT' + url);
        ws.onmessage = () => {
            func();
            ws.close();
        }
    }