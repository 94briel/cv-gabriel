import { useState } from 'react';
import { LearnMoreDialog } from './LearnMoreDialog';
import Image from 'next/image';

interface ProjectCardProps {
  picPath: string;
  title: string;
  description: string;
  source: string;
}

const ProjectCard = ({
  picPath,
  title,
  description,
  source
}: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <div className='flex flex-col bg-white relative w-[600px] h-[600px]'>
      <div className='relative w-[600px] h-[300px]'>
        <Image className='object-cover' fill={true} src={picPath} alt={`Imagen representativa del proyecto ${title}.`} />
      </div>
      <div className='flex flex-col p-6 gap-3 flex-grow'>
        <span className='text-lg font-semibold header'>{title}</span>
        <span>{description}</span>
      </div>
      <div className='absolute bottom-3 left-6'>
        <span onClick={() => { setDialogOpen(true); }} className='text-blue-700 underline text-lg font-medium hover:cursor-pointer b'>Saber más...</span>
      </div>
      <LearnMoreDialog
        open={dialogOpen}
        setOpen={setDialogOpen}
        title={title}
        source={source}
      />
    </div>
  );
};

export { ProjectCard };
