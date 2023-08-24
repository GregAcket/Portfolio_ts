import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { KanapType } from "../../../utils/type"

import "../css/style.css"

export default function Kanapindex() {
  //STATE
  const [kanapData, setKanapData] = useState<KanapType[]>([])

  //EFFECT

  const url = "https://kanap.greg-dev.com/products"

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url)
        const kanapDataJson = await response.json()
        setKanapData(kanapDataJson)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [url])

  let products = kanapData?.map((produit) => {
    return (
      <Link to={"/project/kanap/product/" + produit._id} key={produit._id}>
        <article>
          <img src={produit.imageUrl} alt={produit.altTxt} />
          <h3 className="productName">{produit.name}</h3>
          <p className="productDescription">{produit.description}</p>
        </article>
      </Link>
    )
  })

  return (
    <>
      <main className="limitedWidthBlockContainer Kanap_main">
        <div className="limitedWidthBlock">
          <div className="titles">
            <h1 className="kanap_h1">Nos produits</h1>
            <h2 className="kanap_h2">Une gamme d'articles exclusifs</h2>
          </div>
          <section className="items" id="items">
            {products}
          </section>
        </div>
      </main>
    </>
  )
}