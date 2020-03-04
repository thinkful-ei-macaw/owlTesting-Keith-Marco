import React from 'react';
import Card from './namecard'
//import './list.css';


export default function List(props) {
      return ( 
        <section className="List">
       
                <div className="List-cards">
                  
                  {props.participants.map((card) => 
                    <Card 
                      key={card.id}
                      name={card.name}
                      content={card.content}
                    />
                    )}
                </div>
            </section>)
}