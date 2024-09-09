import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { State } from "../redux/store";
import { deleteContact } from "../redux/actions";

export const ContactPage = () => {
  const contacts = useSelector((state: State) => state.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    dispatch(deleteContact(id) as any);
  };

  const handleEdit = (id: number) => {
    navigate(`/form/${id}`); // Navigate to /form/:id for editing
  };

  const handleAddContact = () => {
    navigate("/form"); // Navigate to /form for adding
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center">
          <button
            onClick={handleAddContact}
            className="border border-black bg-gray-300 text-black font-bold rounded-md px-4 py-2"
          >
            Create Contact
          </button>
        </div>
        <ul className="flex flex-col gap-4 mt-4">
          {!contacts.length && (
            <div className="text-center text-2xl font-bold border border-black p-8">
              Not Contacts Found Please add Contact using Create Contact Button
            </div>
          )}
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="rounded-md bg-blue-300 px-4 py-2 flex justify-between"
            >
              <div>
                {contact.firstname} {contact.lastname} - {contact.status}
              </div>
              <div className="flex gap-2">
                <button
                  className="px-4 py-1 rounded-md border border-black bg-green-500"
                  onClick={() => handleEdit(contact.id)}
                >
                  Edit
                </button>
                <button
                  className="px-4 py-1 rounded-md border border-black bg-red-500"
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
