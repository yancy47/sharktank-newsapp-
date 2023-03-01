import { useState } from "react";

function Form({ addMember, setShowForm }) {
  let [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" value={form.name} onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input id="email" value={form.email} onChange={handleChange} />

      <label htmlFor="commente">Comment</label>
      <input id="comment" value={form.comment} onChange={handleChange} />
    </form>
  );
}

export default Form;