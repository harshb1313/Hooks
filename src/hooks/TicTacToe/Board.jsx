import React, { useState } from 'react'
import '../../index.css'
import Square from './Square'


function Board() {
    let [val,setVal] = useState(Array(9).fill(null))
    let[xturn, setXturn] = useState(true)

    function checkWinner(){
        const WinnePoss = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]

        ];

        for(let logic of WinnePoss){
            
            const [a,b,c] = logic;
            if ( val[a]!== null && val[a] === val[b] && val[a] === val[c] ){
                return val[a];
            }
        }
        return false
    }

    const isWinner = checkWinner()

    function handleClick(index){
        if(val[index]!==null){
            return;
        }
        const copyval = [...val];
        copyval[index]= xturn ? 'X' : 'O'
        setVal(copyval)
        return(setXturn(!xturn))
        
    }





    return (
        <div className='board-container'>
            {isWinner ? (<>{isWinner} Won </>) :
            (<>
            <div className='Board'>
                <div className='div-row'>
                    <Square value= {val[0]} onClick={()=>{handleClick(0)}} />
                    <Square value= {val[1]} onClick={()=>{handleClick(1)}}/>
                    <Square value= {val[2]} onClick={()=>{handleClick(2)}}/>
                </div>
                <div className='div-row'>
                    <Square value= {val[3]} onClick={()=>{handleClick(3)}}/>
                    <Square value= {val[4]} onClick={()=>{handleClick(4)}}/>
                    <Square value= {val[5]} onClick={()=>{handleClick(5)}}/>
                </div>
                <div className='div-row'>
                    <Square value= {val[6]} onClick={()=>{handleClick(6)}}/>
                    <Square value= {val[7]} onClick={()=>{handleClick(7)}}/>
                    <Square value= {val[8]} onClick={()=>{handleClick(8)}}/>
                </div>
            </div>
            </>
    )}
    

        </div>


    )
}

export default Board
