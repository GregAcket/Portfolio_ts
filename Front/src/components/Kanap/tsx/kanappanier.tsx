import "../css/style.css"
import "../css/cart.css"

import { ChangeEvent, FormEvent, MouseEvent, useEffect, useState } from "react"
import { KanapCart } from "../../../utils/type"
import { useNavigate } from "react-router-dom"

type FormAttribute = {
  value: string
  error?: string
  isValid?: boolean
}

type FormType = {
  firstName: FormAttribute
  lastName: FormAttribute
  address: FormAttribute
  city: FormAttribute
  email: FormAttribute
}

export default function Kanappanier() {
  const storedValue = localStorage.getItem("selectedCanap")
  const initialValue: KanapCart[] = storedValue ? JSON.parse(storedValue) : []

  //STATE

  const [storage, setStorage] = useState(initialValue)

  const [form, setForm] = useState<FormType>({
    firstName: { value: " " },
    lastName: { value: " " },
    address: { value: " " },
    city: { value: " " },
    email: { value: " " },
  })

  //EFFECT

  useEffect(() => {
    updateTotalPrice()
  })

  //NAV

  const navigate = useNavigate()

  // Update total quantity

  const totalProduct = () => storage.reduce((a, b) => a + b.quantity, 0)

  const [totalQuantity, setTotalQuantity] = useState(totalProduct())

  // Delete item and update display on clic

  const handleDeletion = (e: MouseEvent<HTMLParagraphElement>) => {
    const target = e.target as HTMLElement
    const itemToDelete = target.closest(".cart__item")

    if (itemToDelete) {
      const idItem = itemToDelete.getAttribute("data-id")
      const colorItem = itemToDelete.getAttribute("data-color")
      if (idItem && colorItem) {
        const checkIndexItem = storage.findIndex(
          (search) => search.id === idItem && search.couleur === colorItem
        )
        if (checkIndexItem !== -1) {
          setStorage((oldStorage) => {
            const newStorage = [...oldStorage]

            newStorage.splice(checkIndexItem, 1)

            localStorage.setItem("selectedCanap", JSON.stringify(newStorage))

            updateTotalPrice()

            return newStorage
          })
        }
      }
    }
  }

  // Update quantity on change

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)

    const getCorrectCanap = e.target.closest(".cart__item")
    const idCanap = getCorrectCanap?.getAttribute("data-id")
    const couleurCanap = getCorrectCanap?.getAttribute("data-color")

    const checkCorrectCanap = storage.find(
      (search) => search.id === idCanap && search.couleur === couleurCanap
    )

    if ((newValue <= 0 || newValue > 100) && checkCorrectCanap !== undefined) {
      e.target.value = checkCorrectCanap.quantity.toString()

      return alert("Veuillez selectionner une quantité valide (entre 1 et 100)")
    }

    if (checkCorrectCanap !== undefined) {
      checkCorrectCanap.quantity = newValue

      localStorage.setItem("selectedCanap", JSON.stringify(storage))

      setTotalQuantity(totalProduct())

      updateTotalPrice()
    }
  }

  // Update total price

  const updateTotalPrice = () => {
    const price = document.querySelectorAll(
      ".cart__item__content__description p:nth-child(3)"
    )

    let finalPrice = 0

    price.forEach((prix) => {
      if (prix.textContent !== null) {
        const canapPrice = parseInt(prix.textContent)

        const research = prix.closest(".cart__item")

        const idResearch = research?.getAttribute("data-id")
        const colorResearch = research?.getAttribute("data-color")

        const checkItem = storage.find(
          (search) =>
            search.id === idResearch && search.couleur === colorResearch
        )
        if (checkItem !== undefined) {
          const totalPricePerCanap = canapPrice * checkItem.quantity

          finalPrice = finalPrice + totalPricePerCanap

          const totalPriceNodes = document.querySelector(
            "#totalPrice"
          ) as HTMLElement

          if (totalPriceNodes) {
            totalPriceNodes.innerText = finalPrice.toString()
          }
        }

        if (storage.length < 1) {
          const totalPriceNodes = document.querySelector(
            "#totalPrice"
          ) as HTMLElement
          totalPriceNodes.innerText = "0"
        }
      }
    })
  }

  const article = storage.map((result) => {
    return (
      <article
        className="cart__item"
        data-id={result.id}
        data-color={result.couleur}
        key={`${result.id} - ${result.couleur}`}
      >
        <div className="cart__item__img">
          <img src={result.imageUrl} alt={result.altTxt} />
        </div>
        <div className="cart__item__content">
          <div className="cart__item__content__description">
            <h2 className="kanap_h2 kanap_cart_h2">{result.name}</h2>
            <p>{result.couleur}</p>
            <p>{result.price}</p>
          </div>
          <div className="cart__item__content__settings">
            <div className="cart__item__content__settings__quantity">
              <p>Qté : </p>
              <input
                type="number"
                className="itemQuantity"
                name="itemQuantity"
                min="1"
                max="100"
                value={result.quantity}
                onChange={(e) => handleQuantityChange(e)}
              />
            </div>
            <div className="cart__item__content__settings__delete">
              <p className="deleteItem" onClick={(e) => handleDeletion(e)}>
                Supprimer
              </p>
            </div>
          </div>
        </div>
      </article>
    )
  })

  // Listener on form fields changes

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name
    const fieldValue = e.target.value
    const newField = { [fieldName]: { value: fieldValue } }
    setForm({ ...form, ...newField })
  }

  //Regex and form Validation

  const regexNomPrenomVille = /^[a-zA-ZÉÈéèç/ñ\-\s]{2,}$/
  const regexMail = /^[a-zA-Z0-9.é_ñèç%+-]+@[a-zA-Z0-9ñ.-]+\.[a-zA-Zñ]{2,}$/
  const regexadresse = /^[a-zA-Z0-9éèÉÈçñ\-\s]{5,}$/

  const validateForm = () => {
    let newForm = form

    if (regexNomPrenomVille.test(form.firstName.value)) {
      const newField = { value: form.firstName.value, isValid: true }
      newForm = { ...newForm, ...{ firstName: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Uniquement des lettres, minimum 2 caractères)"
      const newField = {
        value: form.firstName.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ firstName: newField } }
    }

    if (regexNomPrenomVille.test(form.lastName.value)) {
      const newField = { value: form.lastName.value, isValid: true }
      newForm = { ...newForm, ...{ lastName: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Uniquement des lettres, minimum 2 caractères)"
      const newField = {
        value: form.lastName.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ lastName: newField } }
    }

    if (regexadresse.test(form.address.value)) {
      const newField = { value: form.address.value, isValid: true }
      newForm = { ...newForm, ...{ address: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Uniquement des chiffres et des lettres, minimum 5 caractères)"
      const newField = {
        value: form.address.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ address: newField } }
    }

    if (regexNomPrenomVille.test(form.city.value)) {
      const newField = { value: form.city.value, isValid: true }
      newForm = { ...newForm, ...{ city: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Uniquement des lettres, minimum 2 caractères)"
      const newField = {
        value: form.city.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ city: newField } }
    }

    if (regexMail.test(form.email.value)) {
      const newField = { value: form.email.value, isValid: true }
      newForm = { ...newForm, ...{ email: newField } }
    } else {
      const errorMsg =
        "Veuillez remplir le champs correctement SVP (Par exemple: Guy_Banvil@caramail.fr)"
      const newField = {
        value: form.email.value,
        error: errorMsg,
        isValid: false,
      }
      newForm = { ...newForm, ...{ email: newField } }
    }

    setForm(newForm)
    return (
      newForm.firstName.isValid &&
      newForm.lastName.isValid &&
      newForm.address.isValid &&
      newForm.city.isValid &&
      newForm.email.isValid
    )
  }

  const order = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isFormValid = validateForm()

    if (storage.length < 1) {
      alert("Votre panier est vide, vous ne pouvez pas commander")
    } else if (!isFormValid) {
      alert("Il y a une erreur dans le remplissage de votre formulaire")
    } else {
      const productIdArray = []
      for (const ids of storage) {
        productIdArray.push(ids.id)
      }

      const order = {
        contact: form,
        products: productIdArray,
      }

      const url = "https://kanap.greg-dev.com/products/order"

      async function postForm() {
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          })
          const data = await response.json()
          alert("Merci de votre achat")
          navigate(`/project/kanap/confirmation?orderid=${data.orderId}`)
        } catch (error) {
          alert(`Une  erreur s'est produite. Veuillez nous excuser`)
        }
      }
      postForm()
    }
  }

  return (
    <>
      <main className="limitedWidthBlockContainer Kanap_main Kanap_main_cart">
        <div className="limitedWidthBlock" id="limitedWidthBlock">
          <div className="cartAndFormContainer" id="cartAndFormContainer">
            <h1 className="kanap_h1 kanap_cart_h1">Votre panier</h1>
            <section className="cart">
              <section id="cart__items">{article}</section>
              <div className="cart__price">
                <p>
                  Total (<span id="totalQuantity">{totalProduct()}</span>{" "}
                  articles) : <span id="totalPrice">{totalQuantity}</span> €
                </p>
              </div>
              <div className="cart__order">
                <form
                  method="get"
                  className="cart__order__form"
                  onSubmit={(e) => order(e)}
                >
                  <div className="cart__order__form__question">
                    <label htmlFor="firstName">Prénom: </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    {form.firstName.error && (
                      <p id="firstNameErrorMsg">{form.firstName.error}</p>
                    )}
                  </div>
                  <div className="cart__order__form__question">
                    <label htmlFor="lastName">Nom: </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    {form.lastName.error && (
                      <p id="lastNameErrorMsg">{form.lastName.error}</p>
                    )}
                  </div>
                  <div className="cart__order__form__question">
                    <label htmlFor="address">Adresse: </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    {form.address.error && (
                      <p id="addressErrorMsg">{form.address.error}</p>
                    )}
                  </div>
                  <div className="cart__order__form__question">
                    <label htmlFor="city">Ville: </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    {form.city.error && (
                      <p id="cityErrorMsg">{form.city.error}</p>
                    )}
                  </div>
                  <div className="cart__order__form__question">
                    <label htmlFor="email">Email: </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    {form.email.error && (
                      <p id="emailErrorMsg">{form.email.error}</p>
                    )}
                  </div>
                  <div className="cart__order__form__submit">
                    <input type="submit" value="Commander !" id="order" />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}
