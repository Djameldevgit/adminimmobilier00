import { useSelector, useDispatch } from 'react-redux';
import UserCard from '../UserCard';
import { roleuserautenticado, rolemoderador, rolesuperuser, roleadmin } from '../../redux/actions/roleAction';
import { useState } from 'react';

const RolesAdmin = ({ setOpenModalRoles }) => {
  const { homeUsers, auth } = useSelector(state => state);
  const dispatch = useDispatch();

  // Estado para almacenar los roles seleccionados
  const [selectedRoles, setSelectedRoles] = useState({});

  const handleRoleChange = (userId, role) => {
    setSelectedRoles(prev => ({ ...prev, [userId]: role }));
  };

  const handleChangeRole = async (user, selectedRole) => {
    switch (selectedRole) {
      case 'user':
        await dispatch(roleuserautenticado(user, auth));
        break;
      case 'Super-utilisateur':
        await dispatch(rolesuperuser(user, auth));
        break;
      case 'Moderateur':
        await dispatch(rolemoderador(user, auth));
        break;
      case 'admin':
        await dispatch(roleadmin(user, auth));
        break;
      default:
        break;
    }
  };

  const handleSubmitRoleChange = (user) => {
    const selectedRole = selectedRoles[user._id];
    if (selectedRole) {
      handleChangeRole(user, selectedRole);
    }
  };

  return (
 
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Asignar roles</h5>
           
          </div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Rol Actual</th>
                  <th>Cambiar Rol</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {homeUsers.users.map((user) => (
                  user._id !== auth.user._id && user.role !== 'admin' && (
                    <tr key={user._id}>
                      <td>
                        <UserCard user={user} />
                      </td>
                      <td>{user.role}</td>
                      <td>
                        <select
                          className='form-control'
                          onChange={(e) => handleRoleChange(user._id, e.target.value)}
                          value={selectedRoles[user._id] || user.role}
                        >
                          <option value='user'>Utilisateur authentifié</option>
                          <option value='Super-utilisateur'>Super utilisateur</option>
                          <option value='Moderateur'>Moderateur</option>
                          <option value='admin'>admin</option>
                        </select>
                      </td>
                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleSubmitRoleChange(user)}
                        >
                          Asignar Rol
                          
                        </button>
                      </td>
                    </tr>
                  )
                ))}
              </tbody>
            </table>
          </div>
        </div>
    
  );
};

export default RolesAdmin;


