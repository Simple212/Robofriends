import React from 'react'

const Searchbox = ( {searchfiled,search2} )=>{
    return(
        <div className='pa2'>
            <input type='search' placeholder='Search Robots' className='pa3 ba b--green bg-lightest-blue' onChange={search2}></input>
        </div>
    )
}
export default Searchbox