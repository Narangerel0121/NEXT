import Image from "next/image";
import styles from "./global.css";
import { getFirstDynamicReason } from "next/dist/server/app-render/dynamic-rendering";

function Menu(props) {
    return (
        <div className="meals">
            <div className="mealInfo">
                <div className="oneLine">
                    <div className="foodName">CHICKEN CAESER SALAD</div>
                    <div className="price">24,900₮</div>
                </div>
                <div className="recipe">Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken</div>
            </div>
        </div>
    );
}

const goods = [
    {
        category: "SALADS",
        type: [
            {
                foodName: "CHICKEN CAESER SALAD",
                price: "24900₮",
                recipe: "Served with Sundried tomatoes, chunky garlic croutons and grilled Chicken"
            },
            {
                foodName: "GREEK SALAD",
                price: "21900₮",
                recipe: "Fresh cucumbers, tomatoes, red onions, Kalamata olives, and feta cheese, drizzled with olive oil."
            },
            {
                foodName: "QUINOA POWER SALAD",
                price: "22500₮",
                recipe: "A healthy mix of quinoa, avocado, roasted sweet potatoes, and kale with a tangy lemon dressing."
            },
        ]
    },
    {
        category: "BURGERS",
        type: [
            {
                foodName: "CLASSIC BURGER",
                price: "18900₮",
                recipe: "Juicy beef patty, cheddar cheese, lettuce, tomato, and house-made sauce, served with fries."
            },
            {
                foodName: "BBQ BACON BURGER",
                price: "21900₮",
                recipe: "Beef patty topped with crispy bacon, BBQ sauce, cheddar, and onion rings."
            },
            {
                foodName: "VEGAN BLACK BEAN BURGER",
                price: "17900₮",
                recipe: "Homemade black bean patty, avocado, lettuce, tomato, and vegan mayo, served on a whole-grain bun."
            },
        ]
    },
    {
        category: "PASTA",
        type: [
            {
                foodName: "SPACTHETTI PASTA",
                price: "20900₮",
                recipe: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta."
            },
            {
                foodName: "SEAFOOD MARINARA",
                price: "23500₮",
                recipe: "Classic Italian pasta with creamy egg sauce, Parmesan cheese, and crispy pancetta."
            },
            {
                foodName: "PESTO CHICKEN PASTA",
                price: "21000₮",
                recipe: "Fettuccine pasta with grilled chicken, basil pesto, and cherry tomatoes."
            },
        ]
    },
    {
        category: "PIZZA",
        type: [
            {
                foodName: "MARGHERITA PIZZA",
                price: "30900₮",
                recipe: "Simple and classic with tomato sauce, fresh mozzarella, and basil leaves."
            },
            {
                foodName: "PEPPERONI FEAST",
                price: "34500₮",
                recipe: "Loaded with pepperoni and melted mozzarella on a crispy crust."
            },
            {
                foodName: "VEGETARIAN DELIGHT",
                price: "29900₮",
                recipe: "Topped with bell peppers, mushrooms, olives, onions, and fresh tomatoes."
            },
        ]
    },
];

export default function Home() {
    const menus = []
    for (let i = 0; i < goods.type.length; i++) {
        menus.push(<Menu good={goods[i].type}></Menu>)
    }
    return (
        <div id="body">
            <h1 className="title">pranzo</h1>
            <div className="container">
                <div className="card-container">
                    <div className="category">SALADS</div>
                    {menus}
                </div>
            </div>
        </div>
    )
}