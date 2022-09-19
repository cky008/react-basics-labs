
import Task from './components/Task';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Making Video Clip", deadline: "This weekend", description: "About <Cyberpunk Edgerrunners>"},
      { id: 5, title: "Homework", deadline: "Today", description: "Finish lab2"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))}
    </div>
  );
}

export default App;
