import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

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
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>видалити</span>
        </div>
    )
}

export default WorkoutDetails;