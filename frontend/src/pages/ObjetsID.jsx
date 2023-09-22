import axios from "axios"
import "./ObjetID.css"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function ObjetsID({ onlogin, setAddpanier, addpanier }) {
  const params = useParams()

  const [objets, setObjets] = useState([])
  const [createur, setCreateur] = useState([])
  const [avis, setAvis] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:4242/objets/${params.id}`)
      .then((res) => setObjets(res.data))
    axios
      .get(`http://localhost:4242/utilisateur/avec/objets?id=${params.id}`)
      .then((res) => setCreateur(res.data))
    axios
      .get(`http://localhost:4242/avisurobjetparid?id=${params.id}`)
      .then((res) => setAvis(res.data))
  }, [params.id])

  const handleAdd = () => {
    // pour ajouter au panier
    const UtilisateurId = localStorage.getItem("UtilisateurId")
    const ObjetsId = objets.id
    const quantitePanier = 1
    axios.post("http://localhost:4242/panier", {
      UtilisateurId,
      ObjetsId,
      quantitePanier,
    })
    setAddpanier(addpanier + 1)
  }

  return (
    <div className="container cardObjet">
      <div className="descriptionObjet">
        <img
          src={`http://localhost:4242/${objets.photo1}`}
          alt={objets.nomObjet}
        />
        <h2>{objets.nomObjet}</h2>
        <p>Prix: {objets.prix} €</p>
        <p>Quantité restante : {objets.quantite}</p>
        <button className="bdtadpan" onClick={handleAdd}>
          Ajouter au panier
        </button>
      </div>
      <div className="infoAutre">
        <div className="infoCreateur">
          <h2>Ce createur est</h2>
          {createur.map((auteur) => (
            <div key={auteur.id}>
              <Link className="link" to={`/Createurs/${auteur.id} `}>
                <img
                  src={`http://localhost:4242/assets/images/avatar/${auteur.photo}`}
                  alt={auteur.nom}
                />
              </Link>
              <h2>{auteur.prenom}</h2>
            </div>
          ))}
        </div>
        <div className="avisutilisateur">
          {avis.map((avis) => (
            <div key={avis.id}>
              <h2>{avis.avisObjet}</h2>
              <img
                src={`http://localhost:4242/assets/images/avatar/${avis.photo}`}
                alt={avis.prenom}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ObjetsID
