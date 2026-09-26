import React from 'react';
import ContactHero from '../components/ContactHero';
import ContactTopics from '../components/ContactTopics';
import ContactComponent from '../components/Contact';

const Contact: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-tec-dark">
      <ContactHero />
      <ContactTopics />
      <ContactComponent
        title="Envie sua"
        highlight="mensagem."
        intro="Preencha o formulário e um de nossos consultores entrará em contato pelo WhatsApp para entender sua necessidade e apresentar a solução ideal."
        submitLabel="Enviar mensagem"
        spacingClass="py-14 md:py-20"
      />
    </div>
  );
};

export default Contact;
