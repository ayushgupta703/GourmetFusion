import React, { useState } from "react";
import "./Menu.css";

const menuItems = [
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 1,
        name: "Grilled Chicken",
        description: "Juicy chicken breast grilled to perfection.",
        price: "$15",
        category: "Mains",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 2,
        name: "Caesar Salad",
        description: "Fresh romaine lettuce with Caesar dressing.",
        price: "$10",
        category: "Appetizers",
        image: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        name: "Chocolate Lava Cake",
        description: "Delicious molten chocolate cake.",
        price: "$8",
        category: "Desserts",
        image: "https://via.placeholder.com/150",
    },
];

const Menu = () => {
    const [filter, setFilter] = useState("All");

    const handleFilterChange = (category) => {
        setFilter(category);
    };

    const filteredItems =
        filter === "All"
            ? menuItems
            : menuItems.filter((item) => item.category === filter);

    return (
        <div className="menu">
            <h2 className="menu-title">Our Menu</h2>
            <div className="menu-filters">
                <button onClick={() => handleFilterChange("All")}>All</button>
                <button onClick={() => handleFilterChange("Appetizers")}>
                    Appetizers
                </button>
                <button onClick={() => handleFilterChange("Mains")}>Mains</button>
                <button onClick={() => handleFilterChange("Desserts")}>Desserts</button>
            </div>
            <div className="menu-items">
                {filteredItems.map((item) => (
                    <div key={item.id} className="menu-item">
                        <img src={item.image} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
