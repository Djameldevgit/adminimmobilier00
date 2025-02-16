import React, { useState } from "react";
 
import { useSelector, useDispatch } from 'react-redux';
import { bloquearUsuario } from "../../redux/actions/userBlockAction";

const BloquearUsuarios = ({   user }) => {
  const { auth } = useSelector(state => state)
  const dispatch = useDispatch()

  const [datosBloqueo, setDatosBloqueo] = useState({
    motivo: "",
    fechaBloqueo:"",
    fechaLimite: "", // Nueva fecha de límite para el bloqueo

  });


  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDatosBloqueo({ ...datosBloqueo, [name]: value });
  };

  const handleBloqueo = (e) => {
    e.preventDefault();
    dispatch(bloquearUsuario({ auth, datosBloqueo, user })); // ✅ Solo enviamos `motivo` y `fechaLimite`
  };

  return (
  
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Confirmar bloqueo</h5>
         
          </div>
          <form onSubmit={handleBloqueo}>
            <div className="modal-body">
              <div className="form-group">
                <label>Motivo del bloqueo</label>
                <input
                  type="text"
                  className="form-control"
                  name="motivo"
                  value={datosBloqueo.motivo}
                  onChange={handleChangeInput}
                  placeholder="Ingresa el motivo"
                  required
                />
              </div>
              <div className="form-group">
                <label>fecha inicio del bloqueo</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fechaBloqueo"
                  value={datosBloqueo.fechaBloqueo}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="form-group">
                <label>fecha límite del bloqueo</label>
                <input
                  type="datetime-local"
                  className="form-control"
                  name="fechaLimite"
                  value={datosBloqueo.fechaLimite}
                  onChange={handleChangeInput}
                />
              </div>

            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-danger ">Bloquear</button>
             
            </div>
          </form>
        </div>
     
  );
};

export default BloquearUsuarios;
