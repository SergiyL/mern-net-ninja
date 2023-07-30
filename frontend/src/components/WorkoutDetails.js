import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import DeleteIcon from '@mui/icons-material/Delete';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { uk } from 'date-fns/locale';

const WorkoutDetails = ({workout}) => {
    const {dispatch} = useWorkoutsContext()

    const handleClick = async () => {
        const response = await fetch (`http://localhost:4000/api/workouts/${workout._id}`, {
            method: 'DELETE'
        });
        const json = await response.json();

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }
    
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Навантаження (кг): </strong>{workout.load}</p>
            <p><strong>Повторень: </strong>{workout.reps}</p>
            <p>додано {formatDistanceToNow(new Date(workout.createdAt), { locale: uk, addSuffix: true })}</p>
            <span onClick={handleClick}><DeleteIcon/></span>            
        </div>
    )
}

export default WorkoutDetails;
