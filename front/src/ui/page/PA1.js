import {useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";

function PA1() {

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    return (
        <>
            <Title title = "Список товаров"></Title>
            <Menu role= "admin" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} login = {'Андрейка'} f_exit = {() => console.log("exit")}></Menu>
            <Tabl tytles = {[
                {id : 1, name: '№'},
                {id : 2, name: 'Название'},
                {id : 3, name: 'Категория'},
                {id : 4, name: 'Цена'}
            ]} items = {[{id: 12, app: [{name : "a"}, {name: "a"}, {name: "a"}, {name: "a"}]}, {id: 10, app: [{name : "b"}, {name: "b"}, {name: "b"}, {name: "b"}]}]} onChange = {ValueInp} ></Tabl>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Error text = ""></Error>
                <Button text = "Удалить" func = {() => console.log(111)}></Button>
            </div>
        </>
    );
}

export default PA1;