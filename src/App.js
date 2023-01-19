import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Detail from "./pages/Detail/Detail";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom"


function App(){
    return(
        <BrowserRouter>
        <div className="App">
            <main>
                <NavBar/>
                <ItemListContainer saludo = {"Bienvenido!"} />
            </main>
        </div>
        <Routes> 
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Home />} />
            <Route path="detail" element={<Detail />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;