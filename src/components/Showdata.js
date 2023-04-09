import { deletes } from '../slices/CRUDslices'
import { useDispatch, useSelector } from 'react-redux'
const Showdata = ({handleEdit}) => {
    const data=useSelector(state=>state.CRUD.data)
    const dispatch = useDispatch()
   
    return (
        <>
            {
                data.map(d => (
                    <div key={d.name} style={{ color: "red", height: '120px', width: '400px', border: "1px solid red" }}>
                        <p style={{ color: 'red' }}>{d.name}</p>
                        <p style={{ color: 'green' }}>{d.email}</p>
                        <p style={{ color: 'red' }}>{d.contact}</p>
                        <button onClick={() => dispatch(deletes(d.name))}>delet</button>
                    </div>
                ))
            }
        </>
    )
}

export default Showdata
