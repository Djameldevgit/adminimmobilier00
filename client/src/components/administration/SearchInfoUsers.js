import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import LoadIcon from "../../images/loading.gif";
import LoadMoreBtn from "../LoadMoreBtn";
import { getDataAPI } from "../../utils/fetchData";
import { USER_TYPES } from "../../redux/actions/userAction";
import UserCard from "../UserCard";
import BloquearUsuarios from "./BloquearUsuarios";
import ListaUsuariosBloqueados from "./ListaUsariosBloqueados";
import RolesAdmin from "./RolesAdmin";
import Search from "./Search";


const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const SearchInfoUsers = () => {
  const { homeUsers, auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);
  const [search, setSearch] = useState("");
 
  const handleLoadMore = async () => {
    setLoad(true);
    const res = await getDataAPI(`users?limit=${homeUsers.page * 9}`, auth.token);

    dispatch({
      type: USER_TYPES.GET_USERS,
      payload: { ...res.data, page: homeUsers.page + 1 },
    });

    setLoad(false);
  };

  const filteredUsers = homeUsers.users.filter(
    (user) =>
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row mb-4">
        <Search/>
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
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td><UserCard user={user} /></td>
                <td>{user.email}</td>
                <td>{formatDate(user.createdAt)}</td>
                <td>
                  <div className="action-dropdown">

                    <button className="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
                      Acción
                    </button>

                    <div className="dropdown-menu">
                      <p className="dropdown-item"  >Editar</p>
                      <p className="dropdown-item"  >Eliminar</p>
                     
                    </div>
                   
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {load && <img src={LoadIcon} alt="loading" className="loading-icon" />}

      <LoadMoreBtn result={homeUsers.result} page={homeUsers.page} load={load} handleLoadMore={handleLoadMore} />


    </div>
  );
};

export default SearchInfoUsers;
