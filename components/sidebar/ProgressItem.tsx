interface ProgressItemProps {
  name: string;
  progress: string;
}

const ProgressItem = ({ name, progress }: ProgressItemProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between'>
        <span className='font-semibold'>{name}</span>
        <span>{progress}%</span>
      </div>
      <div className='w-[200px] h-2 border-purple-700 rounded-full border flex items-center'>
        <div
          className='border-purple-700 h-full rounded-full border-t-8 flex items-center'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export { ProgressItem };
