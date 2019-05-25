import React from 'react'
import './BurgerIngredient.css'

const Ingredients = props => {
    let ingredients = null;
    switch (props.type) {
        case ('bread-bottom'):{
            ingredients = <div className="BreadBottom" />;
            break;
        }
        case('bread-top'): {
            ingredients = (<div className="BreadTop">
                <div className="Seeds1" />
                <div className="Seeds2" />
            </div>);
            break;
        }
        case('meat'): {
            ingredients = (<div className="Meat" />);
            break;
        }

        case('salad'):{
            ingredients = <div className="Salad" />
            break;
        }

        case('bacon'): {
            ingredients = <div className="Bacon" />
            break;
        }

        case ('cheese'): {
            ingredients = <div className="Cheese" />
            break;
        }
        default:
            ingredients = null

    }
    return ingredients;
};
export default Ingredients;