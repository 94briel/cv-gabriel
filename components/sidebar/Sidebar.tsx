import Image from 'next/image';
import { LineBreak } from '../LineBreak';
import { ProgressItem } from './ProgressItem';
import { PersonalInformation } from './PersonalInformation';
import { Skill } from './Skill';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 text-white fixed h-full w-3/12 px-3 bg-gradient-to-b from-cyan-500 from-70% to-teal-500 items-center'>
      <section className='flex flex-col items-center w-full mt-8 gap-1'>
        <div className='relative w-full h-40 mb-2'>
          <Image
            className='object-scale-down rounded-full'
            src='/images/profile-pic.png'
            layout='fill'
            alt='Foto de perfil de Gabriel Camargo'
          />
        </div>
        <div className='flex flex-col items-center'>
          <span className='text-2xl header'>Gabriel Camargo</span>
          <span className='italic'>Ingeniero de Sistemas</span>
        </div>
        <LineBreak />
      </section>

      <section className='w-full flex flex-col gap-1'>
        <PersonalInformation name="Edad" content="23" />
        <PersonalInformation name="País de residencia" content="Colombia" />
        <PersonalInformation name="Ciudad" content="Medellín, Antioquia" />
        <LineBreak />
      </section>

      <section className='w-full flex flex-col gap-1 items-center'>
        <span className='text-lg header'>Idiomas</span>
        <ProgressItem name="Español" progress="100" />
        <ProgressItem name="Inglés" progress="70" />
        <LineBreak />
      </section>

      <section className='w-full flex flex-col gap-1 items-center'>
        <span className='text-base header'>Lenguajes de programación</span>
        <ProgressItem name="Python" progress="90" />
        <ProgressItem name="C#" progress="50" />
        <ProgressItem name="JavaScript" progress="30" />
        <LineBreak />
      </section>

      <section className='w-full flex flex-col gap-1 items-center'>
        <span className='text-base header'>Habilidades extra</span>
        <Skill skill="Desarrollador de videojuegos" />
        <Skill skill="Liderazgo" />
        <Skill skill="Adaptabilidad" />
      </section>
    </div>
  );
};

export { Sidebar };
