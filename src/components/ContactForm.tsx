// src/components/ContactForm.tsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addContact, editContact } from "../redux/actions";
import { State, Contact } from "../redux/store";

const ContactForm: React.FC = () => {
  const { id } = useParams<{ id?: string }>(); // Get id from URL params if available
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector((state: State) => state.contacts);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState<"active" | "inactive">("active"); // Default status

  // Load contact data if editing
  useEffect(() => {
    if (id) {
      const contact = contacts.find((c) => c.id === Number(id));
      if (contact) {
        setFirstname(contact.firstname);
        setLastname(contact.lastname);
        setStatus(contact.status);
      }
    }
  }, [id, contacts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstname && lastname) {
      if (id) {
        // Edit existing contact
        dispatch(
          editContact(Number(id), { firstname, lastname, status }) as any
        );
      } else {
        // Add new contact
        dispatch(addContact({ firstname, lastname, status }) as any);
      }
      navigate("/"); // Navigate back to the contact list after submission
    }
  };

  const handleCancel = () => {
    navigate("/"); // Navigate back to the contact list
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center text-xl">Create Contact</h1>
      <form className="p-2 flex flex-col gap-4 border border-black/80 rounded-md mt-8" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            className="p-2 border border-gray-800 rounded-md"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            className="p-2 border border-gray-800 rounded-md"
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <label>
            <input
              type="radio"
              name="status"
              value="active"
              checked={status === "active"}
              onChange={() => setStatus("active")}
            />
            Active
          </label>
          <label>
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={status === "inactive"}
              onChange={() => setStatus("inactive")}
            />
            Inactive
          </label>
        </div>
        <div className="flex justify-center gap-4">
          <button className="px-4 py-1 rounded-md border border-black bg-green-500" type="submit">Save</button>
          <button className="px-4 py-1 rounded-md border border-black bg-red-500" type="button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
