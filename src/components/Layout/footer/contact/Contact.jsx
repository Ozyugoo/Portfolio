import FontIcon from "../../main/hero/FontIcon"

function Contact() {
  return (
    <>
      <section className="col12">
      <section className="col6">
        <h2>Let&#39;s Connect</h2>
        <p>Say hello at stellaoziomaug@gmail.com</p>
        <FontIcon />
        <p>&copy; 2024 Stella Ugoo-Okonkwo</p>
      </section>
      <section className="col6">
        <form action="stellaoziomaug@gmail.com" method="post">
            <label htmlFor="names">Name</label>
            <input type="text" name="name" id="name" placeholder="John Doe"/>            
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />            
            <label htmlFor="subject">Subject</label>
            <input type="text" name="subject" id="subject" />            
            <label htmlFor="names">Name</label>
            <textarea name="textarea" id="" cols="30" rows="10">Message</textarea> 
            <button type="submit">Submit</button>           
        </form>
      </section>
      </section>
    </>
  )
}

export default Contact
