import { useDispatch, useSelector } from "react-redux";
import { addCutomerAction, removeCutomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispach = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispach({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispach({ type: "GET_CASH", payload: cash });
  };

  const addCutomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispach(addCutomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispach(removeCutomerAction(customer.id));
  };
  return (
    <div className="App">
      <div style={{ fontSize: "100px" }}>{cash}</div>
      <div style={{ display: "flex" }}>
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>
        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
        <button onClick={() => addCutomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispach(fetchCustomers())}>
          Получить клиентов из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <div>
          {customers.map((customer) => (
            <div
              onClick={() => removeCustomer(customer)}
              style={{
                fontSize: "2rem",
                border: "1px solid black",
                padding: "10px",
                marginTop: 10,
              }}
            >
              {customer.name}
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "2rem", marginTop: 20 }}>
          Клиенты отсутсвуют
        </div>
      )}
    </div>
  );
}

export default App;
