import { useEffect, useState } from "react";
import Card from "./components/Card";
function App() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true); //je pars du principe qu'au chargement de la page, je suis dans l'attente de données
  const url =
    "https://data.iledefrance.fr/api/records/1.0/search/?dataset=evenements-publics-cibul&q=&rows=32";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setRecords(data.records);
          setLoading(false);
        }, 3000);
      });
  }, []); //au premier chargement du composant, tu vas faire une requête

  // useEffect(() => {
  //   let monInterval = setInterval(() => {
  //       console.log("toto");
  //   }, 1000);

  //   return () => { //cleanup (fonction de nettoyage) au déchargement du composant
  //     clearInterval(monInterval)
  //   };
  // }, []);
  // if (loading) {
  //   return <div>Chargement en cours</div>;
  // }
  return (
    <div>
      <h1>Liste des évènements culturels</h1>
      {loading ? (
        <div>Chargement en cours</div>
      ) : (
        records.map((e) => (
          <Card
            key={e.recordid}
            title={e.fields.title}
            image={e.fields.image_thumb}
            description={e.fields.description}
          />
        ))
      )}
    </div>
  );
}

export default App;
