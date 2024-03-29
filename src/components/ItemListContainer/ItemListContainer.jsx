import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
const ItemListContainer = ({  productsData }) => {

    return (
            <div className='list-css'>
                    {
                        // eslint-disable-next-line react/prop-types
                        productsData.map(products => {
                            return (
                                
                                    <Card key={products.id} style={{ width: '18rem' }}>
                                        <Link to={`/item/${products.id}`}>
                                        <Card.Img variant="top" src={products.thumbnail} />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title> {products.title} </Card.Title>
                                            <Card.Text>
                                                {products.description}
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                )
                        })
                    }
            </div>
            )
}
            export default ItemListContainer;