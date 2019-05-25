import React from 'react';
import Ingredients from './Ingrediants/Ingredients'
import './Burger.css'
const Burger = props => {
        let transformedIngredients = Object.keys(props.ingredients)
            .map(igKey => {
                    return [...Array(props.ingredients[igKey])]
                        .map((_, i) => {
                                return <Ingredients key={ igKey + i } type={ igKey }/>
                        });
            });
        return(
            <div className="Burger">
                    <Ingredients type={'bread-top'}/>
                    { transformedIngredients }
                    <Ingredients type={'bread-bottom'}/>
            </div>
        );
};

export default Burger;