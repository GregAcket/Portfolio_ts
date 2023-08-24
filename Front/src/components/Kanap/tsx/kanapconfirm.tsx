import "../css/confirmation.css"
import "../css/style.css"

export default function Kanapconfirm() {
  const canapeUrl = window.location.href
  const url = new URL(canapeUrl)
  const id = url.searchParams.get("orderid")

  localStorage.clear()

  return (
    <>
      <main className="limitedWidthBlockContainer Kanap_main">
        <div className="limitedWidthBlock" id="limitedWidthBlock">
          <div className="confirmation">
            <p>
              Commande validée ! <br />
              Votre numéro de commande est : <span id="orderId">{id}</span>
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
