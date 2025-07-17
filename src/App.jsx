import React from 'react';
import './App.css';
import { StateExample } from './hooks/useState';
import {EffectExample} from './hooks/use-effect';
import {Context} from './hooks/use-context';
import {ReducerExample} from './hooks/use-reducer';
import {RefExample} from './hooks/use-ref';
import {RefExample2} from './hooks/use-ref/Ex2';
import {Ex1} from './hooks/Practice/Ex1';
import {TextboxCounter} from './hooks/Practice/TextboxCounter';
import Ass1 from './hooks/Assignment/Ass1';
import Ass2 from './hooks/Assignment/Ass2';
import Board from './hooks/TicTacToe/Board';
import Ass3 from './hooks/Assignment/Ass3';
import Weather from './hooks/API_Handling/weather';

function App() {
  return (
    <div>
      <Weather/>
    </div>
  )
}

export default App

