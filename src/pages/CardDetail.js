import React, {Component} from 'react';
import magicService from '../services/magicService.js';


class CardDetail extends Component {
    state={
        card: null,
    }
    componentDidMount(){
        const {id}=this.props.match.params;
        magicService.getOneCard(id)
        .then((response)=>{
            this.setState({
                card: response.data.card,
            })

        })
        .catch((error)=>{
            console.log(error);
        })
    }
    goToPreviousPage= ()=>{
        this.props.history.goBack();
    }
    render() {
        const{card}= this.state;
    return (
        <div classNAme='image-container'>
            <button onClick={this.goToPreviousPage}>Go Back</button>
            {card ? <img src={card.imageUrl} alt={card.name} className='image-detail'/> : <p>Loading ...</p>}
        </div>
    );
    }
}

export default CardDetail;
