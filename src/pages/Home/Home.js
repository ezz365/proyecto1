import {useEffect, useState} from "react";
import Item from "../../components/Item/Item";

const Home = () => {
    const [ itemList, setItemList] = useState([]);

    const getItems = fetch(
        "../../components/Item/item.json",
    {
        method: "GET",
    }
    );

    useEffect(()=>{
        getItems
        .then((resp) => resp.json())
        .then((data)=>{
            setItemList(data.results);
            console.log(data.results);
        })
        .catch((error) =>{
            console.log(error);
        });   
    }, []);


    return (
    <div>
        { itemList.map((item) => (
           <Item key={item.name} itemDetail={item} />
        ))}
        <Item />
    </div>
    );
};

export default Home;