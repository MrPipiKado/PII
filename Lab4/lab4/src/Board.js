import './App.css';

export const SIZE = 8;
const arr = [0,1,2,3,4,5,6,7];

export const chessBoard = [
    [''  , ''  , 'wr', 'wr', ''  , ''  , ''  , ''  ],
    ['wp', ''  , 'wk', ''  , ''  , 'wq', 'wp', 'wp'],
    [''  , 'wp', 'bq', 'wp', ''  , 'wp', ''  , ''  ],
    [''  , ''  , ''  , ''  , 'wp', 'wn', ''  , ''  ],
    [''  , 'bn', 'bp', ''  , ''  , 'bp', ''  , ''  ],
    ['bp', ''  , ''  , 'bp', ''  , ''  , 'bp', ''  ],
    [''  , 'bk', ''  , ''  , ''  , ''  , ''  , 'bp'],
    [''  , ''  , 'br', ''  , ''  , ''  , ''  , 'br']
]

export function Board(){
    return (
        <table>
            <tbody>
                { arr.map((rowIndex) => <Row rowIndex={rowIndex}/>) }
            </tbody>
        </table>
    )
}

function Row({rowIndex}){
    return (
        <tr>
            { arr.map((columnIndex) =>
                <Cell rowIndex={rowIndex} columnIndex={columnIndex}/>) }
        </tr>
    )
}

function Cell({rowIndex, columnIndex}){
    const even = (rowIndex + columnIndex) % 2 === 0;

    return (
        <td className="cell" style={{
            backgroundColor: even ? 'white' : 'darkgrey',
        }}>
            {chessBoard[rowIndex][columnIndex] !== ''?
                <img className="cell-img" src={`images/${chessBoard[rowIndex][columnIndex]}.png`}/> : ""}
        </td>
    )
}