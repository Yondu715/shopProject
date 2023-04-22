import {useState} from "react";
import "../../css/fon.css"
import Title from "../comp/title";
import Input from "../comp/input";
import Button from "../comp/button";
import Error from "../comp/error";
import {useNavigate} from "react-router-dom";
import {Auth} from "../../req/reqF";
import {User} from "../../trans/user";
import {useDispatch} from "react-redux";

function PSI() {

    const[error, setError] = useState("");



    const dispatch = useDispatch();

    const setRoleUser = () => {
        dispatch({type: "setRole", payload: "user"})
    }

    const setRoleAdmin = () => {
        dispatch({type: "setRole", payload: "admin"})
    }

    const setLogin = (login) => {
        dispatch({type: "setLogin", payload: login})
    }



    const router = useNavigate();

    const[valueInp, setValueInp] = useState("");
    const handlerValue = (e) => setValueInp(e.target.value);

    const[valuePas, setValuePas] = useState("");
    const handlerPass = (e) => setValuePas(e.target.value);

    async function Auth_() {
        if (valueInp !== "" && valuePas !== "") {

            const userV = {
                login: valueInp,
                password: valuePas
            }

            const user = new User();
            user.set(userV);
            const data = await Auth(user.get());

            if (data.status === 200) {

                localStorage.setItem("token", data.data_.token);
                const a = data.data_.token.split(".");
                const b = JSON.parse(atob(a[1]));

                setLogin(b.login);

                if (b.role === "user") {
                    setRoleUser();
                    router('/pu1')
                }
                if (b.role === "admin") {
                    setRoleAdmin();
                    router('/pa1')
                }
            } else {
                setError("Пользователь не найден")
            }
        }
        else {
            setError("Не все поля были заполнены")
        }
    }

    return (
        <>
            <Title title = "Авторизaция"></Title>
            <div style={{display: "flex", width: "100%", flexDirection: "column", marginTop: "5%"}}>
            <Input type = 'text' text = "Логин" onChange = {handlerValue}></Input>
            <Input type = 'password' text = "Пароль" onChange = {handlerPass} ></Input>
                <h5 style={{margin: "auto", color: "#6696a2", fontFamily: "Arial"}}><a onClick={() => {router("/psu")}}>Регистрация</a></h5>
            </div>
            <div style={{display: "flex", flexDirection: "column"}}>
            <Error text = {error}></Error>
            <Button func = {() => {Auth_()}} text = 'Войти'></Button>
            </div>
        </>
    );
}

export default PSI;