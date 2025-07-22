import './Calendar.css'

export const Calendar = () => {
    const array:number[]= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
    return (
        <div className='calendar'>
           <section className='calendar__inf'>
             <h1>Julio</h1>
           </section>
           <section className='calendar__prompts'> <h1>Lunes</h1> <h1>Martes</h1> <h1>Miercoles</h1> <h1>Jueves</h1> <h1>Viernes</h1> <h1>Sabado</h1> <h1>Domingo</h1></section>
           <section className='calendar__days'>
            {array.map((day) => {
                return (<div key={day}>
                    <h1>{day}</h1>
                </div>)
            })}
           </section>
           
            
        </div>
    )
}