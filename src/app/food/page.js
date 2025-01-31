import Image from "next/image";
import styles from "./globals.css";

const DATA = [
    {
        category: "Fruits",
        information: [
            {
                price: "$1", stocked: true, name: "Apple" 
            },
            {
                price: "$1", stocked: true, name: "Dragonfruit"
            },
            {
                price: "$2", stocked: false, name: "Passionfruit"
            }
        ]
    },
    {
        category: "Vegetables",
        information: [
            {
                price: "$2", stocked: true, name: "Spinach"  
            },
            {
                price: "$4", stocked: false, name: "Pumpkin"  
            },
            {
               price: "$1", stocked: true, name: "Peas"
            }
        ]
    }
]


function ProductInfo(props) {
    return <div className="productsInfo oneLine">
        <p className="productName">Apple</p>
        <p className="productPrice">1$</p>
    </div>
}

function Catergory(props) {
    return <div className="categories">Category</div>
}

function ProductSection() {
    return (
        <div className="products">
            <Catergory></Catergory>
            <ProductInfo></ProductInfo>
        </div>
    )
}

function SearchBar(props) {
    return (
        <div id="searchBar">
            <input id="searchButton" placeholder="Search..."></input>
            <div id="checkInStock">
                <input type="checkbox"></input>
                <p id="checkText">Only show products in stock</p>
            </div>
        </div>
    )
}

function All(props) {
    return (
        <div id="container">
            <SearchBar></SearchBar>
            <div className="Options">
                <div id="sortName" className="oneLine">
                    <p>Name</p>
                    <p>Price</p>
                </div>
                <ProductSection></ProductSection>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div id="body">
            <All />
        </div>
    );
}