import React, { useReducer, useState } from 'react';

// Initial items and state
const initialItems = [
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.50 },
    { id: 3, name: 'Cherry', price: 2.00 }
];

const initialState = {
    items: initialItems,
    cart: []
};

// Reducer function to manage cart actions
function cartReducer(state, action) {
    switch (action.type) {
        case 'update_quantity':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.id ? { ...item, quantity: action.quantity } : item
                )
            };
        case 'add_to_cart':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    ...state.items.filter(item => item.id === action.id && item.quantity > 0)
                ]
            };
        case 'remove_all':
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}


function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    const [selectedItem, setSelectedItem] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleChangeQuantity = (id, quantity) => {
        dispatch({ type: 'update_quantity', id, quantity });
    };

    const handleAddToCart = (id) => {
        dispatch({ type: 'add_to_cart', id });
    };

    const handleRemoveAll = () => {
        dispatch({ type: 'remove_all' });
    };

    return (
        <div>
            <h1>Shopping Cart Using UseReducer Hook</h1>
            <div>
                <h2>Available Items</h2>
                {state.items.map(item => (
                    <div key={item.id}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price.toFixed(2)}</p>
                        <select
                            value={item.quantity || 1}
                            onChange={(e) => handleChangeQuantity(item.id, parseInt(e.target.value))}
                        >
                            {[1, 2, 3, 4, 5].map(q => (
                                <option key={q} value={q}>{q}</option>
                            ))}
                        </select>
                        <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div>
                <h2>Cart</h2>
                <ul>
                    {state.cart.map((item, index) => (
                        <li key={index}>
                            {item.name} - Quantity: {item.quantity} - Price: ${(item.price * item.quantity).toFixed(2)}
                        </li>
                    ))}
                </ul>
                <button onClick={handleRemoveAll}>Remove All Items</button>
            </div>
        </div>
    );
}

export default ShoppingCart;
