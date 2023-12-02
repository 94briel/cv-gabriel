interface KnowledgeCardProps {
  Svg: React.FC;
  title: string;
  description: string;
}

const KnowledgeCard = ({ Svg, title, description }: KnowledgeCardProps) => {
  return (
    <div className='w-1/3 border-black border-2 bg-white flex flex-col items-center p-6 gap-5'>
      <div className='text-6xl'>
        <Svg />
      </div>
      <div className='flex flex-col items-center gap-1'>
        <span className='text-base font-semibold text-center truncate'>{title}</span>
        <span className='italic truncate'>{description}</span>
      </div>
    </div>
  );
};

export { KnowledgeCard };
