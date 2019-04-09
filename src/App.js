import React, { Component, Fragment } from 'react';
import { Header, Footer} from './components/layouts'
import Exercises from './components/exercises'
import { muscles, exercises } from './store.js'

class App extends Component {
  state = {
    exercises,
    exercise: {},
  }

  getExercisesByMuscules() {
    const initExercises = muscles.reduce((exercises, category) => ({ //!(1)! because when we delete all the exercises the categories also disappear
      ...exercises,
      [category]: []
    }), {})
    // console.log(muscles, initExercises)

    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = [...exercises[muscles], exercise]

        // exercises[muscles] = exercises[muscles]
        //   ? [...exercises[muscles], exercise]
        //   : [exercise]
        
        return exercises
      }, initExercises) //!(1)! here used to be a {} instead of a initExercises
    )
  }

  handleCategorySelect = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises: exercises.filter(ex => ex.id !== id)
    }))
  }

  handleExerciseSelectEdit = id => 
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }))

  handleExerciseEdit = exercise =>
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises.filter(ex => ex.id !== exercise.id),
        exercise
      ]
    }))
  

  render() {
    const exercises = this.getExercisesByMuscules()
    const { category, exercise, editMode } = this.state

    return (
      <Fragment>
        <Header 
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          muscles={muscles}
          exercises={exercises}
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}

export default App;
