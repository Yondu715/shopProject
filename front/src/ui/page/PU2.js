import {useEffect, useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png"
import del from "../../img/delete.png"
import {useDispatch, useSelector} from "react-redux";
import {AddOrder, AddProduct, Products} from "../../req/reqF";

function PU2() {

    const[error, setError] = useState("");

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}


    const Prod = useSelector(state => state.Prod);


    const [prodd, setProdd] = useState(Prod);

    const [sum, setSUM] = useState(0);

    function Sum(prodd){
        console.log(prodd);
        let a = 0;
        for (let i = 0; i < prodd.length; i++ ){
            a += prodd[i].item[2].name * prodd[i].item[3].name
        }
        setSUM(a);
    }

    async function addOrder(){

        if (!prodd.isEmpty){
            let order =
                {"products": []};
            for(let i = 0; i < prodd.length; i++){
                order.products.push({
                    "id": prodd[i].id,
                    "quantity": prodd[i].item[3].name
                })
            }
            const resp = await AddOrder(order);
            console.log(resp);
        }
        else{
            setError("Корзина пуста")
        }
    }

    function listProducts() {
        let products = [];
        for (let i = 0; i < prodd.length; i++) {
            if(prodd[i].item[6].name !== 0){
            products.push({id: prodd[i].id, item: [{name: prodd[i].item[1].name}, {name: prodd[i].item[2].name}, {name: prodd[i].item[3].name}, {name: prodd[i].item[6].name}, {name: <a onClick={(event)=> {setProdd((prevState) => {
                Sum(prevState.filter((index) => index.id !== prodd[i].id));
                return prevState.filter((index) => index.id !== prodd[i].id)
                        }
                    );  event.stopPropagation()}}><img src={del}></img></a>}]})
        }
        }
        setProdd(products);
        Sum(products);
    }

    useEffect(() => {setProdd(Prod); listProducts();  return }, []);

    return (
        <>
            <Title title = "Корзина"></Title>
            <Menu role= "user" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} f_exit = {() => console.log("exit")}></Menu>
            <Tabl tytles = {[
                {id : 1, name: 'Название'},
                {id : 2, name: 'Категория'},
                {id : 3, name: 'Цена'},
                {id : 4, name: 'Кол-во'},
                {id : 5, name: ''}
            ]}  items = {prodd} onChange = {ValueInp} ></Tabl>
            <div style={{display: "flex", flexDirection: "column"}}>
                <Error text = {error}></Error>
                <h5 style={{margin: "20px auto", color: "#6696a2", fontFamily: "Arial"}}> Общая цена {sum}</h5>
                <Button text = "Оформить" func = {() => addOrder()}></Button>
            </div>
        </>
    );
}

export default PU2;