import { useState } from "react";
import Card from "./Component/Card";

const App = () => {
  const [pizzaCount, setPizzaCount ] = useState(0);
  const [burgerCount, setBurgerCount ] = useState(0);
  const [coldStoneCount, setColdStoneCount ] = useState(0);
  const [pizzaPrice, burgerPrice, coldStonePrice] = [4000, 3500, 2000];
return(
    <div>
      <div className="Outer">
        <Card name="Pizza" price="4000" image="/images/pizza.jpg" onClick={()=>{setPizzaCount(pizzaCount + 1)}} />
        <Card name="Burger" price="3500" image="/images/burger.jpg" onClick={() =>{setBurgerCount(burgerCount + 1 )}} />
        <Card name="ColdStone" price="2000" image="/images/coldStone.jpg" onClick={() =>{setColdStoneCount(coldStoneCount + 1)}}/>
      </div>

      <div>
        <h1>Amount:{pizzaCount*pizzaPrice + burgerCount*burgerPrice + coldStoneCount*coldStonePrice}</h1>
        <table>
          <thead>
            <th>Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalAmount</th>
          </thead>
          <tbody>
            <tr>
              <td>Pizza</td>
              <td>{pizzaCount}</td>
              <td>{pizzaPrice}</td>
              <td>{pizzaPrice * pizzaCount}</td>
            </tr>
            <tr>
              <td>Burger</td>
              <td>{burgerCount}</td>
              <td>{burgerPrice}</td>
              <td>{burgerPrice * burgerCount}</td>
            </tr>
            <tr>
              <td>ColdStone</td>
              <td>{coldStoneCount}</td>
              <td>{coldStonePrice}</td>
              <td>{coldStonePrice * coldStoneCount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App;
