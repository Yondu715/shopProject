import {useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";

function PU4() {

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    return (
        <>
            <Title title = "Заказ"></Title>
            <Menu role= "user" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} login = {'Андрейка'} f_exit = {() => console.log("exit")}></Menu>
            <Tabl tytles = {[
                {id : 1, name: '№'},
                {id : 2, name: 'Название'},
                {id : 3, name: 'Категория'},
                {id : 4, name: 'Цена'},
                {id : 5, name: 'Кол-во'},
            ]}  items = {[{id: 12, app: [{name : "a"}, {name : "a"}, {name: "a"}, {name: "a"}, {name: "a"}]}, {id: 10, app: [{name : "b"}, {name : "b"}, {name: "b"}, {name: "b"}, {name: "b"}]}]} onChange = {ValueInp} ></Tabl>
        </>
    );
}

export default PU4;