import React, {useState} from 'react'

const Header = (props)=>{
  return (
    <h1>
      {props.text}
    </h1>
  )
}

const Button = (props)=>{
  return (
    <button onClick = {props.handleClick}>{props.text}</button>
  )
}

const DisplayButtons = (props)=>{

  return (
    <table>
      <tbody>
        <tr>
          <td>{props.buttons.button1}</td>
          <td>{props.buttons.button2}</td>
          <td>{props.buttons.button3}</td>
        </tr>
      </tbody>
    </table>
  )

}

const Statistic = (props)=>{

  return (
      <tr>
        <td>{props.stat}</td>
        <td>{props.value}</td>
      </tr>
  )

}

const Statistics = (props)=>{
  if(props.clicks.good===0 && props.clicks.bad===0 && props.clicks.neutral===0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return(<table>
      <tbody>
        <Statistic stat='good' value={props.clicks.good}/>
        <Statistic stat='neutral' value={props.clicks.neutral}/>
        <Statistic stat='bad' value={props.clicks.bad}/>
        <Statistic stat='all' value={props.total}/>
        <Statistic stat='average' value={props.avg}/>
        <Statistic stat='positive' value={props.positive + ' %'}/>
      </tbody>
    </table>
  )
}


function App() {

  const [clicks, setClicks] = useState({
    good:0,
    neutral:0,
    bad:0
  })

  const handle = (button) =>{

    const handleClick = ()=>{
  
      if (button === 'good'){
        setClicks(
          {...clicks,
          good: clicks.good + 1
        }
        )
      } else if (button === 'neutral'){
        setClicks(
          {...clicks,
          neutral: clicks.neutral + 1
        }
        )
      }else{
        setClicks(
          {...clicks,
          bad: clicks.bad + 1
        }
        )
      }
  
    }
  
    return handleClick
  
  }

  const buttons = {
    button1: <Button text='good' handleClick={handle('good')}/>,
    button2: <Button text='neutral' handleClick={handle('neutral')}/>,
    button3: <Button text='bad' handleClick={handle('bad')}/>
  }

  let total = clicks.good + clicks.bad + clicks.neutral
  let avg = (clicks.good - clicks.bad)/total
  let positive = (clicks.good*100)/total

  return (
    <div > 

      <Header text='give feedback'/>
      <DisplayButtons buttons={buttons}/>
      <Header text='statistics'/>
      <Statistics clicks={clicks} total={total} avg={avg}
      positive={positive}/>
      
    </div>
  );
}

export default App;
