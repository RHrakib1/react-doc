const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];
export default function Rendaring() {
    const listItem = products.map(p => <li key={p.id}>
        {p.title}
    </li>);
    return (
        <ul>{listItem}</ul>
    )
}