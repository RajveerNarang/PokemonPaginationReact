//functional list
import React from 'react'
//destructure props
export default function PokemonList({pokemon}) {
    return (
        <div>
            {pokemon.map(p=>(//key for array element
                <div key ={p}>{p}</div>
            ))}
        </div>
    )
}
