import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit_commande() {
    let params = useParams();
    let navigate = useNavigate();
  return (
    <div>
        <p>{params.id}</p>
        <button onClick={()=>navigate("/Add_commande")}>dddddd</button>
    </div>
  )
}
