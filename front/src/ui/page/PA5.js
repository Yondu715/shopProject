import {useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";
import del from "../../img/delete.png";

function PA5() {

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    return (
        <>
            <Title title = "Список пользователей"></Title>
            <Menu role= "admin" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} f_exit = {() => console.log("exit")}></Menu>
            <Tabl tytles = {[
                {id : 1, name: '№'},
                {id : 2, name: 'ID'},
                {id : 3, name: 'Логин'},
                {id : 4, name: 'Роль'},
                {id : 5, name: ''}
            ]} items = {[{id: 12, app: [{name : "a"}, {name: "a"}, {name: "a"}, {name: "a"}, {name: <a onClick={(event)=> {console.log("-"); event.stopPropagation()}}><img src={del}></img></a>}]}, {id: 10, app: [{name : "b"}, {name: "b"}, {name: "b"}, {name: "b"}, {name: <a onClick={(event)=> {console.log("-"); event.stopPropagation()}}><img src={del}></img></a>}]}]} onChange = {ValueInp} ></Tabl>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Error text = ""></Error>
                <Button text = "Изменить роль" func = {() => console.log(111)}></Button>
            </div>
        </>
    );
}

export default PA5;