import {useState} from "react";
import Menu from "../comp/menu";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";
import Input from "../comp/input";

function PA2() {

    const[valueK, setValueK] = useState("");
    const handlerK = (e) => setValueK(e.target.value);

    const[valueN, setValueN] = useState("");
    const handlerN = (e) => setValueN(e.target.value);

    const[valueC, setValueC] = useState("");
    const handlerC = (e) => setValueC(e.target.value);

    console.log(valueK)
    console.log(valueN)
    console.log(valueC)

    return (
        <>
            <Title title = "Добавить товар"></Title>
            <Menu role= "admin" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} login = {'Андрейка'} f_exit = {() => console.log("exit")}></Menu>
            <div style={{display: "flex", width: "100%", flexDirection: "column", marginTop: "5%"}}>
                <Input type = 'text' text = "Категория" onChange = {handlerK}></Input>
                <Input type = 'text' text = "Название" onChange = {handlerN} ></Input>
                <Input type = 'text' text = "Цена" onChange = {handlerC} ></Input>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Error text = ""></Error>
                <Button text = "Добавить" func = {() => console.log(111)}></Button>
            </div>
        </>
    );
}

export default PA2;