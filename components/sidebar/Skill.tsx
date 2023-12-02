import { PiIntersectSquareDuotone } from 'react-icons/pi';

interface SkillProps {
  skill: string;
}

const Skill = ({ skill }: SkillProps) => {
  return (
    <div className='flex flex-item'>
      <span className='text-purple-700 text-[14px]'>
        <PiIntersectSquareDuotone />
      </span>
      <span className='mx-1'>{skill}</span>
    </div>
  );
};

export { Skill };