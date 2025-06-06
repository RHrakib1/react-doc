const products = [
    { title: 'Cabbage', id: 1, isFruit: false, },
    { title: 'Garlic', id: 2, isFruit: true, },
    { title: 'Apple', id: 3, isFruit: false, },
];


export default function Rendaring() {
    const listItem = products.map(p => <li key={p.id} style={{
        color: p.isFruit ? 'red' : 'green',
        fontSize:p.isFruit ? '30px' : '50px'
    }}>
        {p.title}
    </li>);
    return (
        <ul>{listItem}</ul>
    )
}