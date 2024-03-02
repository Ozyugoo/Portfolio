
function Contact() {
  return (
    <>
      <div className="col12">
      <section className="col6">
        <h2>Let&#39;s Connect</h2>
        <p>Say hello at stellaoziomaug@gmail.com</p>
      </section>
      <section className="col6">
        <form action="stellaoziomaug@gmail.com" method="post">
            <p><label htmlFor="names">Name</label></p>
            <input type="text" name="names" id="names" placeholder="John Doe"/>            
        </form>
      </section>
      </div>
    </>
  )
}

export default Contact
