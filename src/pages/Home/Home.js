import {useEffect, useState} from "react";
import Item from "../../components/Item/Item";

const Home = () => {
    const [itemsList, setItemsList] = useState([]);

    const getItems = fetch(
        "../../components/Item/item.json",
    {
        method: "GET",
    }
    );

    useEffect(()=>{
        getItems
        .then(resp => resp.json())
        .then(data =>{
            setItemsList(data.results);
        })
        .catch((error) =>{
            console.log(error);
        });   
    }, []);


    return (
    <div>
        { itemsList.map((item) => (
           <Item key={item.name} itemDetail={item} />
        ))}
        <Item />
    </div>
    );
};

export default Home;