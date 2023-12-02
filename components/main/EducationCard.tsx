interface EducationCardProps {
  company: string;
  period: string;
  role: string;
  title: string;
  description: string;
}

const EducationCard = ({
  company,
  period,
  role,
  title,
  description,
}: EducationCardProps) => {
  return (
    <div className='flex flex-row p-8'>
      <div className='grid grid-cols-2 w-1/2 '>
        <div className="flex flex-col gap-5 w-max">
          <span className='text-xl header'>{company}</span>
          <div className='flex flex-row gap-6'>
            <span className='text-black font-semibold'>{role}</span>
            <span className='text-black font-medium bg-cyan-200 px-2'>{period} </span>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-1/2 gap-5'>
        <span className='text-lg font-semibold'>{title}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export { EducationCard };
