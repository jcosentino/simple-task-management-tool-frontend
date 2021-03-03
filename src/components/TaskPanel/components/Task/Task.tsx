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

  function specialFlag(): string {
    const currDate = new Date();
    const date = new Date();
    if(dueDateMonth && dueDateDay && dueDateYear){
      date.setMonth(dueDateMonth);
      date.setDate(dueDateDay);
      date.setFullYear(dueDateYear);

      if(date.getMonth() === currDate.getMonth()+1 &&
         (date.getDate() === currDate.getDate() || date.getDate() === currDate.getDate()+1) &&
         date.getFullYear()){
        return 'DueTodOrTom';
      }
      return date < currDate ? 'Overdue' : '';
    }

    return '';
  }

  return (
    <div className={`Task ${specialFlag()}`}>
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
