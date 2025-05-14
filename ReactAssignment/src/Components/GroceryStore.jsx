// You have been give a list of Items you shopped from Grocery store
// You need to calculate the total amount of money you spent

import { useMemo, useState } from "react";

export default function GroceryStore() {
    const [items, setItems] = useState([
        { name: "Chocolates", value: 50 },
        { name: "Fruits", value: 280 },
        { name: "Sweets", value: 120 },
        { name: "Sankcs", value: 80 }
    ])

    // const totalValue = 0;

    const totalValue = useMemo(() => {
        // let finalValue = 0;
        return items.reduce((x, y) => x + y.value, 0);
        // items.forEach(x => {
        //     finalValue += x.value;
        // })
        // return finalValue;
    }, [items]);            // as if in future items changes then this total will re-calculate

    return (
        <>
            {items.map((item, index) => {
                return (
                    <li key={index}>{item.name} - Price :- ${item.value}</li>
                )
            })}
            <p>Total Value :- {totalValue}</p>
        </>
    )
}