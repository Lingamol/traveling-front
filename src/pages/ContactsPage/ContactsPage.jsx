// import ButtonMain from 'components/ButtonMain/ButtonMain';
// import AddContactForm from 'components/Contacts/AddContactForm/AddContactForm';
// import ContactsCount from 'components/Contacts/ContactsCount/ContactsCount';
// import ContactsFilter from 'components/Contacts/ContactsFilter/ContactsFilter';
// import ContactList from 'components/Contacts/ContactsList/ContactsList';
// import Filter from 'components/Contacts/Filter/Filter';
// import ModalLogin from 'components/Login/ModalLogin/ModalLogin';
// import Modal from 'components/Modal/Modal';
// import ModalDialog from 'components/Modal/ModalDialog/ModalDialog';
// import ModalTemplate from 'components/Modal/ModalTemplate/ModalTemplate';
import { useState } from 'react';
const AlertDialogProops = {
  onAgree: () => console.log('AGree!!'),
  message: 'succesess',
  question: 'Do You want?',
  nameButton: 'Yes !',
  title: 'dialog',
};
const ContactsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    console.log('modalOpen', isModalOpen);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div>
      <h1>Contacts page</h1>
      {/* <Filter />
      <ContactsCount />
      <ContactsFilter /> */}
      {/* <ContactList /> */}
      {/* <ButtonMain onClick={toggleModal}>Add Contact</ButtonMain>
      {isModalOpen && (
        <Modal onClose={toggleModal} type="form"> */}
      {/* <ModalDialog onClose={toggleModal} {...AlertDialogProops} /> */}
      {/* <ModalTemplate onClose={toggleModal}>
            <AddContactForm onClose={toggleModal} />
          </ModalTemplate>
        </Modal>
      )} */}
      {/* {isModalOpen && <ModalLogin onClose={toggleModal} />} */}
    </div>
  );
};
export default ContactsPage;
