import { instance } from "./userApi";

const requestGetContacts = async () => {
  const { data } = await instance.get("/contacts");

  return data;
};

const requestAddContact = async (formData) => {
  const { data } = await instance.post("/contacts", formData);

  return data;
};

const requestDeleteContact = async (contactId) => {
  const { data } = await instance.delete(`/contacts/${contactId}`);

  return data;
};

const requestEditContact = async (editedContact) => {
  const { data } = await instance.patch(`/contacts/${editedContact.id}`, {
    name: editedContact.name,
    number: editedContact.number,
  });
  return data;
};

export {
  requestGetContacts,
  requestAddContact,
  requestDeleteContact,
  requestEditContact,
};
