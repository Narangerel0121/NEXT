import Image from "next/image";
import style from "./globals.css"

function ProductRow() {
    return(
        <div className="productRow">
             <p className="productName">Apple</p>
             <p className="productPrice">$4</p>
         </div>
    )
}

function ProductCategoryRow(props) {
    return(
        <div className="productCategoryRow"></div>
    )
}

function Category(props) {
    return(
        <div id="category">
             <p id="categoryName">Name</p>
             <p id="categroyPrice">Price</p>
         </div>
    )
}

function ProductTable(props) {
    return(
        <div id="productTable">
        <Category></Category>
         <ProductCategoryRow></ProductCategoryRow>
         <ProductRow></ProductRow>
     </div>
    )
}

function SearchBar(props) {
    return(
        <div id="searchBar">
    <input id="search" placeholder="Search..."></input>
    <div id="checkSection">
        <input type="checkbox" id="checkBox"></input>
        <p id="checkText">Only in stock</p>
    </div>
</div>
    )
}

function All(props) {
    const products = [];
   for(let i = 0; i < DATA.length; i++) {
    products.push(<ProductTable data={DATA[i]} ></ProductTable>)
   }
   return(
    <div id="container">
    <SearchBar></SearchBar>
     <ProductTable></ProductTable>
     {console.log(products)} 
     {console.log(products.category)} 
 </div>
   )
}

const DATA = [
    {
        category: "Fruits",
        products: [
            {price: "$1", stocked: true, name: "Apple"},
            {price: "$1", stocked: true, name: "Dragonfruit"},
            {price: "$2", stocked: false, name: "Passionfruit"}
        ]
    },
    {
        category: "Vegetables",
        products: [
            {price: "$2", stocked: true, name: "Spinach"},
            {price: "$4", stocked: false, name: "Pumpkin"},
            {price: "$1", stocked: true, name: "Peas"}
        ]
    }
]

export default function Home() {
    return (
        <div id="body">
            <All></All>
        </div>
    );
}