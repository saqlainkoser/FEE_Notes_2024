
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';




function ListGroupExample() {
    

  return (
    <>
    <Link to="/">Home</Link>
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        {
            <ListGroup.Item>Cart IS Empty</ListGroup.Item>
            // box.cartItems.map((item)=><ListGroup.Item>{item.food.product_name}</ListGroup.Item>)
        }

      </ListGroup>
    </Card>
    </>
  );
}

export default ListGroupExample;