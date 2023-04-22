import {useState} from "react";
import "../../css/fon.css"
import Title from "../comp/title";
import Input from "../comp/input";
import Button from "../comp/button";
import Error from "../comp/error";
import {useNavigate} from "react-router-dom";

function PSI() {

    const router = useNavigate();

    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    console.log(valueInp)
    console.log(valuePas)
    return (
        <>
            <Title title = "Авторизaция"></Title>
            <div style={{display: "flex", width: "100%", flexDirection: "column", marginTop: "5%"}}>
            <Input type = 'text' text = "Логин" onChange = {handlerValue}></Input>
            <Input type = 'password' text = "Пароль" onChange = {handlerPass} ></Input>
                <h5 style={{margin: "auto", color: "#6696a2", fontFamily: "Arial"}}><a onClick={() => {router("/psu")}}>Регистрация</a></h5>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <Error text = ""></Error>
            <Button func = {() => {console.log(1111)}} text = 'Войти'></Button>
            </div>
        </>
    );
}

export default PSI;