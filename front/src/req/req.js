export function fetchData(url, method, data) {
    return new Promise((resolve) => {
        let body;
        if (method !== 'DELETE'){
            body = data ? JSON.stringify(data) : null
        }
        else{
            body = undefined
        }

        fetch("http://localhost:8080/shopProject-1/api" + url, {
            method: method,
            body: body,
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "Authorization": localStorage.getItem("token"),
                "Data": JSON.stringify(body)
            }
        })
            .then(async response => {
                if (response.status === 200) {
                    let temp;
                    try {
                        temp = await response.json()
                    }
                    catch (error){
                        temp = null
                    }
                    return {
                        status : 200,
                        data_: temp
                    }
                }
                else {
                    return {
                        status : 400
                    }
                }
            })
            .then((data) => {
                resolve(data);
            });
    });
}

