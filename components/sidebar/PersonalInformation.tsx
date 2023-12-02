interface PersonalInformationProps {
  name: string;
  content: string;
}

const PersonalInformation = ({ name, content }: PersonalInformationProps) => {
  return (
    <div className='flex flex-row justify-between'>
      <span className='font-semibold'>{name}</span>
      <span>{content}</span>
    </div>
  )
}

export { PersonalInformation }