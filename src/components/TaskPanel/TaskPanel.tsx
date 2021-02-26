import React, { ReactFragment, useEffect } from 'react';
import './TaskPanel.scss';
import Task from './components/Task/Task';
import { ITask } from '../../models/Task';
import axios from 'axios';
import { API_URL, GET_TASKS } from '../../constants/constants';

const TASKS_URL = API_URL + GET_TASKS;

function TaskPanel() {
  const defaultTasks: ITask[] = [];
  const [tasks, setTasks]: [ITask[], (tasks: ITask[]) => void] = React.useState(defaultTasks);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState('');
  const [filter, setFilter]: [string, (error: string) => void] = React.useState('All');
  const [action, setAction]: [string, (error: string) => void] = React.useState('');
  const [idAction, setIdAction]: [number, (error: number) => void] = React.useState(-1);

  useEffect(() => {
    axios.get<ITask[]>(TASKS_URL,
      {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setTasks(res.data);
        setLoading(false);
        console.log(tasks);
      })
      .catch((error) => {
        setError(error);
        console.log(error);
      });
    }, []);

    function createTaskDivs(tasks: ITask[]): ReactFragment[] {
      return tasks.map((task: ITask) =>
        <Task 
          id={task.id || -1}
          name={task.name || ''}
          description={task.description || ''}
          dueDateMonth={task.dueDateMonth || -1}
          dueDateDay={task.dueDateDay || -1}
          dueDateYear={task.dueDateYear || -1}
          status={task.status || ''}
        />
      );
    }

  return (
    <div className="TaskPanel">
      <div className='PanelMenus'>
        <h1>Simple Tasks</h1>
          <div>
            <h3><strong>Key:</strong></h3>
            Blue: default
            <br></br>Yellow: Due tomorrow and / or in TWO days
            <br></br>Red: overdue
          </div>

          <div>
            <h3><strong>Filter:</strong></h3>

            <label className="container">Due Today / Tomorrow
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container">Completed
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container">Overdue
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container">All
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>

          <div>
            <h3><strong>Actions:</strong></h3>

            <label className="container">Create
              <input type="radio" name="radio" disabled={true} />
              <span className="checkmark"></span>
            </label>

            <label className="container">Update
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>

            <label className="container">Delete
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <input type="text" id="fname" name="firstname" placeholder="Type ID" />
            <button>Submit</button>
          </div>
      </div>
      <div className='TasksInPanel'>
        {!loading && createTaskDivs(tasks)}
      </div>
      {error && <div>There was an error!</div>}
    </div>
  );
}

export default TaskPanel;
