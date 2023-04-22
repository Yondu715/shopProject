import {useEffect, useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";
import {DeleteProduct, Products} from "../../req/reqF";
import {useDispatch, useSelector} from "react-redux";

function PU1() {




    const countsProd = useSelector(state => state.countsProd);

    const dispatch = useDispatch();

    const setCountsProd = (mass) => {
        dispatch({type: "setCountsProd", payload: mass})
    }




    const [title, setTitle] = useState("")

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

    const[valueCounts, setValueCounts] = useState([]);

    const [error, setError] = useState("")

    const [prod, setProd] = useState([]);

    function DataGet(res){
        let n = 0;
        let products = [];
        for (let i = 0; i < res.length; i++) {
            n = n + 1;
            products.push({id: res[i].id, item: [{name : n}, {name: res[i].name}, {name: res[i].type}, {name: res[i].price}, {name: <a onClick={(event)=> {setValueCounts((prevState) => {
                        let a = [];
                        for (let j = 0; j < prevState.length; j++){
                            if (j === i){
                                a.push(prevState[j] + 1)
                            }
                            else {a.push(prevState[j])}
                        }
                        return a;
                    }); event.stopPropagation()}}><img src={plus}></img></a>}, {name: <a onClick={(event)=> {console.log("-"); event.stopPropagation()}}><img src={minus}></img></a>}, {name: countsProd[i]}]})
        }
        return products;
    }


    async function listProducts() {
        let data = await Products();
        let res = data.data_;
        console.log(res);
        let mas = []
        for (let i = 0; i < res.length; i++) {
            mas.push(0)
        }
        setCountsProd(mas);
        setValueCounts(mas);
        setProd(DataGet(res));
    }

    useEffect(() => {listProducts();return}, []);

  return (
      <>
          <Title title = {title}></Title>
          <Menu role = "user" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} f_exit = {() => console.log("exit")}></Menu>
          <Tabl tytles = {[
        {id : 1, name: '№'},
        {id : 2, name: 'Название'},
        {id : 3, name: 'Категория'},
        {id : 4, name: 'Цена'},
        {id : 5, name: ''},
              {id : 6, name: ''},
              {id : 7, name: 'Кол-во'},
          ]} items = {prod} onChange = {ValueInp} ></Tabl>
          <div style={{display: "flex", flexDirection: "column"}}>
          <Error text = {error}></Error>
          <Button text = "Добавить в корзину" func = {() => console.log(valueCounts)}></Button>
          </div>
      </>
  );
}

export default PU1;
