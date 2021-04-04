import React, {useState} from 'react'

const Button = (props)=>{
  return(
    <button onClick = {props.handleClick}>
      {props.name}
    </button>
  )
}

const DisplayButton = (props)=>{
  return(
    <table>
      <tbody>
        <tr>
          <td>
            <Button name={props.buttons[0].name} 
            handleClick={props.buttons[0].handler}/>
            <Button name={props.buttons[1].name} 
            handleClick={props.buttons[1].handler}/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

const Headers = (props)=>{

  return(
    <h1>{props.text}</h1>
  )
}


function App() {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState({
    0:0,
    1:0,
    2:0,
    3:0,
    4:0,
    5:0
  })

  const handleSelect = ()=>{
    let selection = Math.floor(Math.random()*6)
    setSelected(selection)
  }

  //console.log(selected)
  const handleVote =  ()=>{
    //console.log(selected)
    setVotes(
      {...votes,
      [selected]: votes[selected] + 1
    }
    )
  }

  let buttons = [
    {
      'name': 'vote',
      'handler': handleVote
    },
    {
      'name': 'next quote',
      'handler': handleSelect
    }
  ]
  //console.log(selected)

  const getMax = ()=>{
    let maxVotes = Math.max(...Object.values(votes))
    return [Object.keys(votes).find(
      key=>votes[key]===maxVotes
    ), maxVotes]
  }
  return (
    <div>
      <Headers text='Anecdote of the day'/>
      {anecdotes[selected]}
      <p>
      {'has ' + votes[selected] + ' votes'}
      </p>
      <DisplayButton buttons={buttons}/>
      <Headers text='Anecdote with most votes'/>
      {anecdotes[getMax()[0]]}
      <p>
      {'has ' + getMax()[1] + ' votes'}
      </p>
    </div>
  );
}

export default App;