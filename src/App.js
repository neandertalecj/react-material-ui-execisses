import React, { Component, Fragment } from 'react';
import { Header, Footer} from './components/layouts'
import Exercises from './components/exercises'
import { muscles, exercises } from './store.js'

class App extends Component {
  state = {
    exercises
  }

  getExercisesByMuscules() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]
        
        return exercises
      }, {})
    )
  }

  render() {
    console.log(this.getExercisesByMuscules())
    const exercises = this.getExercisesByMuscules()
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Footer 
          muscles={muscles}
        />
      </Fragment>
    );
  }
}

export default App;
