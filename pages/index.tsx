import { Sidebar } from '@/components/sidebar/Sidebar';
import { MainContent } from '@/components/main/MainContent';



const Index = () => {
    return (
        <div className='text-black text-[16px]'>
            <Sidebar /> 
            <MainContent />
        </div>
    );
};
  
  export default Index;