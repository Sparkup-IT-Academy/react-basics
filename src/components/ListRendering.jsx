export default function ListRendering() {
    const dishArray = [
        {   
            id: 1,
            name: 'Sandwich',
            imgUrl: 'https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=',
            price: 2.99,
        },
        {   
            id: 2,
            name: 'Burger',
            imgUrl: 'https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=',
            price: 4.99,
        },
        {   
            id: 3,
            name: 'Pizza',
            imgUrl: 'https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=',
            price: 5,
        },
        {   
            id: 4,
            name: 'Momo',
            imgUrl: 'https://media.istockphoto.com/id/510482834/photo/sandwich-bread-tomato-lettuce-and-yellow-cheese.jpg?s=612x612&w=0&k=20&c=Q69t_vK73KXddedlvN4RmFcPL34mCwEqprJvbDTyOWo=',
            price: 8,
        },
    ]

    return (
        <div className="card-container">
            {
                dishArray.map(item => {
                    return <div key={item.id} className="card">
                                <img src={item.imgUrl} />
                                <p className="price">${ item.price }</p>
                                <h2 className="card-title">{ item.name }</h2>
                            </div>
                })
            }
        </div>
    )
}