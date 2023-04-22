import {useState} from "react";
import Menu from "../comp/menu";
import Tabl from "../comp/tabl";
import "../../css/fon.css"
import Title from "../comp/title";
import Button from "../comp/button";
import Error from "../comp/error";
import plus from "../../img/plus.png";
import minus from "../../img/minus.png";

function PU1() {

    const[valueInp, setValueInp] = useState([]);
    const ValueInp = (valueInp) =>{setValueInp(valueInp)}

  return (
      <>
          <Title title = "Список товаров"></Title>
          <Menu role = "user" f = {[() => console.log(1111), () => console.log(2222), () => console.log(3333), () => console.log(4444)]} f_exit = {() => console.log("exit")}></Menu>
          <Tabl tytles = {[
        {id : 1, name: '№'},
        {id : 2, name: 'Название'},
        {id : 3, name: 'Категория'},
        {id : 4, name: 'Цена'},
        {id : 5, name: ''},
              {id : 6, name: ''},
              {id : 7, name: 'Кол-во'},
          ]} items = {[{id: 12, app: [{name : "a"}, {name: "a"}, {name: "a"}, {name: "a"}, {name: <a onClick={(event)=> {console.log("+"); event.stopPropagation()}}><img src={plus}></img></a>}, {name: <a onClick={(event)=> {console.log("-"); event.stopPropagation()}}><img src={minus}></img></a>}, {name: 0}]}, {id: 10, app: [{name : "b"}, {name: "b"}, {name: "b"}, {name: "b"}, {name: <a onClick={(event)=> {console.log("+"); event.stopPropagation()}}><img src={plus}></img></a>}, {name: <a onClick={(event)=> {console.log("-"); event.stopPropagation()}}><img src={minus}></img></a>}, {name: 0}]}]} onChange = {ValueInp} ></Tabl>
          <div style={{display: "flex", flexDirection: "column"}}>
          <Error text = ""></Error>
          <Button text = "Добавить в корзину" func = {() => console.log(111)}></Button>
          </div>
      </>
  );
}

export default PU1;
