import api from '../../../utils/api';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './AddPet.module.css';

import PerForm from '../../form/PetForm';

// hooks
import useFlashMessage from '../../../hooks/useFlashMessage';
import PetForm from '../../form/PetForm';

function EditPet() {
  const [pet, setPet] = useState({});
  const [token] = useState(localStorage.getItem('token') || '');
  const { id } = useParams();
  const { setFlashMessage } = useFlashMessage();

  useEffect(() => {
    api
      .get(`/pets/${id}`, {
        Authorization: `Bearer ${JSON.parse(token)}`
      })
      .then(response => {
        setPet(response.data.pet);
      });
  }, [token, id]);

  async function updatePet(pet) {}

  return (
    <section>
      <div className={styles.addpet_header}>
        <h1>Editando o Pet: {pet.name}</h1>
        <p>Depois da edição os dados serão atualizados no sistema</p>
      </div>
      {pet.name && (
        <PetForm
          handleSubmit={updatePet}
          btnText='Atualizar'
          petData={pet}
        />
      )}
    </section>
  );
}

export default EditPet;
