import './App.css';
import { useState, useEffect } from 'react';
import Login from './components/Login';
import SigninContext from './context/sign-in';
import React from 'react';

const intialData = [
  {
    id: 0,
    title: 'inicio1',
    description: 'loremipsun'
  },
  {
    id: 1,
    title: 'inicio1',
    description: 'loremipsun'
  }, {
    id: 3,
    title: 'inicio1',
    description: 'loremipsun'
  }, {
    id: 4,
    title: 'inicio1',
    description: 'loremipsun'
  },
]

const profesores = [
  {
    id: 0,
    title: 'title1',
    description: 'loremipsun'
  },
  {
    id: 1,
    title: 'title2',
    description: 'loremipsun'
  }, {
    id: 3,
    title: 'title3',
    description: 'loremipsun'
  }, {
    id: 4,
    title: 'title4',
    description: 'loremipsun'
  },
]

const alumnos = [
  {
    id: 0,
    title: 'alumnos1',
    description: 'loremipsun'
  },
  {
    id: 1,
    title: 'alumnos2',
    description: 'loremipsun'
  }, {
    id: 3,
    title: 'alumnos3',
    description: 'loremipsun'
  }, {
    id: 4,
    title: 'alumnos3',
    description: 'loremipsun'
  },
]

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    // se hace la peticion para traer los datos
    setItems(intialData)
  }, [])

  const showInicio = () => {
    setItems(intialData)
  }

  const showAlumnos = () => {
    setItems(profesores)
  }

  const showPadres = () => {
    setItems(alumnos)
  }

  return (
    <div>
      <SigninContext>
        <Login />
      </SigninContext>
      
      <hr />
      <button onClick={showInicio}>inicio</button>
      <button onClick={showAlumnos}>profesores</button>
      <button onClick={showPadres}>alumnos</button>

      <div>
        {items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </div>

      <hr />
      <Dropdow />
    </div>
  );
}

export default App;

const Dropdow = () => {
  const data = [
    {
      id: 0,
      question: 'pregunta 1???',
      answer: 'respuesta 1',
      dropdown: false
    },
    {
      id: 1,
      question: 'pregunta 2???',
      answer: 'respuesta 2',
      dropdown: false
    },
    {
      id: 2,
      question: 'pregunta 3???',
      answer: 'respuesta 3',
      dropdown: false
    }
  ]

  const [state, setState] = useState(data)

  const showAnswer = (id) => {
    setState(() => state.map(item => {
      if (id === item.id) {
        const newData = { ...item, dropdown: !item.dropdown }
        return newData
      } else return item
    }))
  }

  return (
    <div>
      {state.map(item => (
        <li key={item.id}>
          {item.question}
          <button onClick={() => showAnswer(item.id)}>{item.dropdown ? '<' : '>'}</button>
          {item.dropdown && <i>{item.answer}</i>}
        </li>
      ))}
    </div>
  )
}
