import "./pantherecontact.css"

export default function Pantherecontact() {
  return (
    <>
      <section id="bloc-6">
        <h1 className="panthere_bloc6_h1">Parlons web design !</h1>

        <p className="panthere_bloc6_p">
          Nous sommes ravis que vous souhaitiez collaborer avec notre agence.
          <br />
          Parlez-nous de votre projet en complétant le formulaire ci-dessous.
        </p>
      </section>

      <section id="bloc-7">
        <div className="panthere_bloc7_div">
          <h2 className="panthere_bloc7_h2">Nous contacter :</h2>
          <form id="form_1" noValidate>
            <div className="panthere_form_group">
              <label htmlFor="name">
                Nom
                <span aria-label="Cet élément est requis">*</span>
              </label>
              <input
                id="name"
                className="panthere_input"
                type="text"
                placeholder="Guy Banvil"
                required
              />
            </div>

            <div className="panthere_form_group">
              <label htmlFor="email">
                Adresse email
                <span aria-label="Cet élément est requis">*</span>
              </label>
              <input
                id="email"
                className="panthere_input"
                type="email"
                placeholder="Guybanvil@caramail.fr"
                required
              />
            </div>

            <div className="panthere_form_group">
              <label htmlFor="input_504">
                Comment nous avez-vous connu ?
                <span aria-label="Cet élément est requis">*</span>
              </label>
              <input
                className="panthere_input"
                type="text"
                id="input_504"
                placeholder="Famille, collègue, revue spécialisée ..."
                required
              />
            </div>

            <div className="panthere_form_group">
              <label htmlFor="message">
                Quel est votre projet (Ajoutez autant de détails que nécessaire)
                <span aria-label="Cet élément est requis">*</span>
              </label>
              <textarea
                id="message"
                className="panthere_input"
                placeholder="Je souhaiterai ..."
                rows="4"
                cols="50"
                required
              ></textarea>
            </div>

            <button className="panthere_button_submit">Envoyer</button>
            <span>* = Champs requis</span>
          </form>
        </div>
      </section>
    </>
  )
}
