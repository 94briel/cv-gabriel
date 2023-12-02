import Image from 'next/image';
import { Button } from '@/components/main/Button';
import { useState } from 'react';
import { QuoteDialog } from './QuoteDialog';
import { KnowledgeCard } from './KnowledgeCard';
import { FaGamepad } from "react-icons/fa";
import { FaTable } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { EducationCard } from './EducationCard';
import { ProjectCard } from './ProjectCard';
import { LineBreak } from '../LineBreak';
const MainContent = () => {

  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  return (
    <main className='ml-[25%] overflow-y-auto bg-white'>
      <section className='bg-white flex flex-row items-center px-16 py-10 gap-8'>
        <Image
          src='https://avatars.githubusercontent.com/u/53193766'
          width={200}
          height={400}
          alt='Foto de perfil de GitHub de Gabriel Camargo'
        />
        <div className='flex flex-col gap-4 text-center'>
          <div className='flex flex-col'>
            <span className='header font-semibold text-4xl'>Soy Gabriel Camargo</span>
          </div>
          <span>
            Estudiante de ingeniería de sistemas colombiano.
            ¡Me gustan tanto los videojuegos que soy uno de los líderes del Semillero de Videojuegos de la Universidad de Antioquia!
          </span>
          <div className=''>
            <Button
              text='Clíqueame para una frase motivacional je, je'
              OnClick={() => {
                setDialogOpen(true);
              }}
            ></Button>

          </div>
        </div>
        <QuoteDialog open={dialogOpen} setOpen={setDialogOpen} />
      </section>
      <section className='bg-gray-100 flex flex-col items-center gap-8 p-8'>
        <span className='header font-semibold text-3xl'>Conocimientos</span>
        <div className='flex flex-row  gap-6'>
          <KnowledgeCard
            Svg={FaGamepad}
            title='Desarrollo de videojuegos'
            description='C#, Unity, Blender'
          />
          <KnowledgeCard
            Svg={FaTable}
            title='Ciencia de datos'
            description='Python, Numpy, Pandas, Matplotlib'
          />
          <KnowledgeCard
            Svg={FaReact}
            title='Desarrollo web'
            description='Frontend, React, JavaScript'
          />
        </div>
      </section>
      <section className='bg-white flex flex-col gap-8 p-8'>
        <span className='header font-semibold text-3xl text-center'>Educación</span>
        <div className='bg-gray-100'>
          <EducationCard
            company='Universidad de Antioquia'
            period='febr. 2017 - actualidad'
            role='Estudiante'
            title='Ingeniería de Sistemas'
            description='Ingeniería de Sistemas tiene como objeto el estudio de elementos en ciencia y tecnología para la investigación, innovación, modelación, implantación y gestión de sistemas físicos o abstractos, orientados al procesamiento simbólico.'
          />
          <LineBreak />
          <EducationCard
            company='GitHub Campus Expert'
            period='abr. 2023 - actualidad'
            role='Voluntario'
            title='GitHub Campus Expert'
            description='
            Los GitHub Campus Experts son líderes estudiantiles que se esfuerzan por construir espacios diversos e inclusivos para aprender habilidades, compartir sus experiencias y colaborar en proyectos.'
          />
        </div>
      </section>
      <section className='bg-gray-100 flex flex-col gap-8 p-8 overflow-x-auto scrollbar'>
        <span className='header font-semibold text-3xl text-center'>Portafolio</span>
        <div className='flex flex-row gap-8 overflow-x-auto scrollbar pb-2'>
          <ProjectCard
            picPath='/images/ingemon.jpg'
            title='Ingemón'
            description='Universo virtual que pretende emular de manera simplificada un metaverso con NFT, criptomonedas y modalidades de juego en diferentes plataformas.'
            source='https://github.com/ejemplo9004/Ingemon'
          />
          <ProjectCard
            picPath='/images/tizos.png'
            title='Tizos'
            description='El propósito de este juego es celebrar la infancia latina a través los tazos coleccionables, que estuvieron presentes durante nuestra niñez. Esta vez, los tazos hacen referencia a caricaturas famosas de la televisión.'
            source='https://github.com/94briel/Tazos'
          />
          <ProjectCard
            picPath='/images/llave-tumbaga.png'
            title='La llave de Tumbaga'
            description='Pedro es un docente de antropología que lleva años en una lucha permanente contra la labor destructiva de los guaqueros en Antioquia.'
            source='https://github.com/94briel/GGJ2021'
          />
        </div>
      </section>
      <footer className='flex bg-white p-4 mx-auto text-sm'>
        <span className='mx-auto'>
          &copy; {new Date().getFullYear()} - Gabriel Camargo
        </span>
      </footer>
    </main>
  )
}

export { MainContent } 