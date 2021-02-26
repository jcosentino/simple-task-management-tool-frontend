import './Task.scss';
import { ITask } from '../../../../models/Task';

function Task(props: ITask) {
  const {
    id,
    name,
    description,
    dueDateMonth,
    dueDateDay,
    dueDateYear,
    status
  } = props;

  function specialFlag(status: string): string {
    const currDate = new Date();
    if(dueDateMonth && dueDateDay && dueDateYear){
      const date = new Date();
      date.setMonth(dueDateMonth);
      date.setDate(dueDateDay);
      date.setFullYear(dueDateYear);
      if(date.getDate() === currDate.getDate() ||
         (date.getMonth() === currDate.getMonth()+1 &&
          date.getDay() === currDate.getDay()+1 &&
          date.getFullYear() === currDate.getFullYear())){
        return 'dueTodOrTom'
      }
      return date < currDate ? 'Overdue' : '';
    }

    return '';
  }

  return (
    <div className={`Task ${specialFlag(status)}`}>
      <div>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>dueDateMonth: {dueDateMonth}</div>
        <div>dueDateDay: {dueDateDay}</div>
        <div>dueDateYear: {dueDateYear}</div>
        <div>status: {status}</div>
        <div>Description: <br></br>{description}</div>
      </div>
    </div>
  );
}

export default Task;
