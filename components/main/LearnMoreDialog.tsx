import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';
import { FaGithub } from "react-icons/fa";

interface LearnMoreDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  source: string;
}

const LearnMoreDialog = ({
  open,
  setOpen,
  title,
  source
}: LearnMoreDialogProps) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className='border-8 border-cyan-500 bg-white text-black p-3'>
        <DialogTitle>
          <span className='header'>{title}</span>
        </DialogTitle>
        <DialogContent>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-row gap-2'>
              <FaGithub className='text-2xl' />
              <a href={source} className='text-blue-700 underline hover:cursor-pointer'>
                {title}
              </a>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button text={'Close'} OnClick={() => setOpen(false)} />
        </DialogActions>
      </div>
    </Dialog>
  );
};

export { LearnMoreDialog };
