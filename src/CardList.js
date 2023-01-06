import React from 'react';
import Card from "./Card"

const cardlist = ({robots2} )=> {
    return(
        <div>
            {
                robots2.map( (user,i)=>{
                    return <Card key={robots2[i].id} id={robots2[i].id} name={robots2[i].name} email={robots2[i].email} />
                } )
            }
        </div>
    )
}

export default cardlist