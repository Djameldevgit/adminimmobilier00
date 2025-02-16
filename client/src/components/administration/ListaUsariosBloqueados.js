import { useDispatch, useSelector } from "react-redux";
import UserCard from "../UserCard";

const ListaUsuariosBloqueados = () => {


  const { userBlockReducer, auth } = useSelector(state => state);
 
  return (
    
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Useario bloqueados</h5>
            
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Usuario</th>
                  <th>Email</th>
                  <th>Fecha de registro</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
  {userBlockReducer.blockedUsers.map((block, index) => (
    <tr key={block._id}>
      <td>{index + 1}</td>
      <td><UserCard user={block.user} /></td>
      <td>{block.user?.username}</td>
      <td>{block.user?.email}</td>
      <td>
        <div className="action-dropdown">
          <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Acción
          </button>
          <div className="dropdown-menu">
            <p className="dropdown-item">Desbloquear</p>
          </div>
        </div>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>
        </div>
    
  );
};

export default ListaUsuariosBloqueados;

