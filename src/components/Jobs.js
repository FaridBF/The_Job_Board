import React from 'react';
import Job from './Job';

const Jobs = () => {
  return (
    <>
      <div class='container'>
        <Job
          className='color1'
          title={'Full Time Sales Associate - Sydney Boutique'}
          contractType={'CDI'}
          country={'Australie'}
          city={'Sydney'}
        />
        <Job
          className='color2'
          title={'Agent de Sécurité - Pantin'}
          contractType={'CDI'}
          country={'France'}
          city={'Pantin'}
        />
        <Job
          className='color3'
          title={`Responsable d'Atelier (H/F)`}
          contractType={'CDD'}
          country={'France'}
          city={'Paris'}
        />
        <Job
          className='color4'
          title={'Chef de Projets'}
          contractType={'CDD'}
          country={'France'}
          city={'Paris'}
        />
        <Job
          className='color5'
          title={'Développeur React.js'}
          contractType={'CDI'}
          country={'France'}
          city={'Paris'}
        />
        <Job
          className='color1'
          title={'Sales Associate Stockholm'}
          contractType={'CDI'}
          country={'Suède'}
          city={'Stockholm'}
        />
        <Job
          className='color2'
          title={'CRM & Data Quality Analyst'}
          contractType={'CDI'}
          country={'Suisse'}
          city={'Crans-Montana'}
        />
        <Job
          className='color3'
          title={'Vendeur/se - Crans Montana'}
          contractType={'CDI'}
          country={'USA'}
          city={'New York'}
        />
        <Job
          className='color4'
          title={`Infirmier (H/F)
          `}
          contractType={'CDI'}
          country={'France'}
          city={'Pantin'}
        />
      </div>
    </>
  );
};

export default Jobs;
