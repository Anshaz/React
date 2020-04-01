import React from 'react';
import { Media } from 'reactstrap';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

function RenderDish({ dish }) {
        if (dish == null)
        {
            return (<div></div>)
        }

        else
        {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
           };
         
    }


function RenderComments({ comments }) {
    if (comments === 1) {
        return (<div></div>)
    }
    const commentPlaced = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    {new Intl.DateTimeFormat('en-US', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(comment.date))}
                </p>
            </li>
        )
    });

    return (
        <div className='col-12 col-md-5'>
            <h3> Comments </h3>
            <ol className='list-unstyled'>
                {commentPlaced}
            </ol>

        </div>
    );
    }

const DishDetail = (props) => {

    if (props.dish != null) {
        return (
            <div className="container">
                <div className='row'>

                    <RenderDish dish={props.dish} />
                    <RenderComments comments={(props.dish.comments)} />
                  </div></div>);

    }
            return (

            <div></div>)
                 
        
         
        
    

}

export default DishDetail;