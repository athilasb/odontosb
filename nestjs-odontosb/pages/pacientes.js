import Main from '../src/main/main'; // Certifique-se de importar o caminho correto para o componente Menu
import { withAuthServerSideProps } from '../services/auth';
import { Icon } from '@iconify/react';

import styles from '../styles/pacientes.module.css';
import { useState } from 'react';

import Modal from '../src/components/modal/modal';
import Link from 'next/link';
import Input from '../src/components/html/input/input';
import Label from '../src/components/html/label/label';

export default function Pacientes() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Lógica para salvar
    handleCloseModal();
  };


  return (
    <Main>
      <div className='flex-between gap-10 color-pricipal'>
        <Link href='/'>
          <div className='flex-center gap-10 cursor-pointer'>
            <Icon icon="gg:arrow-left-o" width="20" />
            <h2>Pacientes</h2>
          </div>
        </Link>
        <div className='flex-center gap-10 cursor-pointer' onClick={handleOpenModal}>
          <Icon icon="healthicons:positive-outline" width="20" />
          <h3>Adicionar Paciente</h3>
        </div>
      </div>
      {/*Lista baixo */}
      <div className={styles.conteudo}>
        <div className={styles.list} >
          <div>Andressa de Oliveira Ferreira</div>
          <div>N°01</div>
          <div>Desde: 15/06/2023</div>
        </div>
      </div>

      {isModalOpen && (
        <Modal title="Título do Modal" salvar={handleSave} onClose={handleCloseModal}>
          <form onSubmit={handleForm} className={styles.form}>
            <div className='flex-column gap-20'>
              <div>
                <Input type="text" placeholder="Nome"  required value={formData.nome} onChange={(e) => handleFormEdit(e, 'nome')} />
              </div>
              <div className='display-grid grid-2 gap-10'>
                <div className='display-grid grid-3 gap-10'>
                  <Label>
                    Masculino
                    <Input type="radio" name="sexo" value="1" />
                  </Label>
                  <Label>
                    Feminino
                    <Input type="radio" name="sexo" value="2" />
                  </Label>
                  <Label>
                    Outros
                    <Input type="radio" name="sexo" value="3" />
                  </Label>
                </div>
                <Input type="text" placeholder="Nome social" required value={formData.nome_social} onChange={(e) => handleFormEdit(e, 'nome_social')} />
              </div>
              <div className='display-grid grid-2 gap-10'>
                <Input type="text" placeholder="Data de Nascimento" required value={formData.data_nascimento} onChange={(e) => handleFormEdit(e, 'data_nascimento')} />
                <Input type="text" placeholder="Filiação" required value={formData.filiacao} onChange={(e) => handleFormEdit(e, 'filiacao')} />
              </div>

              <div className='display-grid grid-3 gap-10'>
                <Input type="text" placeholder="RG" required value={formData.rg} onChange={(e) => handleFormEdit(e, 'rg')} />
                <Input type="text" placeholder="CPF" required value={formData.cpf} onChange={(e) => handleFormEdit(e, 'cpf')} />
                <Input type="text" placeholder="nacionalidade" required value={formData.nacionalidade} onChange={(e) => handleFormEdit(e, 'nacionalidade')} />
              </div>

              <div className='display-grid grid-3 gap-10'>
                <Input type="text" placeholder="Status Civil" required value={formData.status_civil} onChange={(e) => handleFormEdit(e, 'status_civil')} />
                <Input type="text" placeholder="Ocupação" required value={formData.ocupacao} onChange={(e) => handleFormEdit(e, 'ocupacao')} />
                <Input type="text" placeholder="Contato" required value={formData.contato} onChange={(e) => handleFormEdit(e, 'contato')} />
              </div>
              <div>
                <Input type="Email" placeholder="email" required value={formData.email} onChange={(e) => handleFormEdit(e, 'email')} />
              </div>
              <div>
                <Input type="text " placeholder="Endereço" required value={formData.endereco} onChange={(e) => handleFormEdit(e, 'endereco')} />
              </div>
            </div>
          </form>
        </Modal>
      )}

    </Main>
  );
}

export const getServerSideProps = withAuthServerSideProps(async ({ req, res }) => {
  return {
    props: {},
  };
});
