const WorkoutDetails = ({workout}) => {
    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Навантаження (кг): </strong>{workout.load}</p>
            <p><strong>Повторень: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
        </div>
    )
}

export default WorkoutDetails;