import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Button } from './Button';

interface QuoteDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const quotes = [
  "La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon",
  "La única manera de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
  "Nuestra mayor gloria no es no caer nunca, sino levantarnos cada vez que caemos. - Confucio",
  "La vida es realmente simple, pero insistimos en hacerla complicada. - Confucio",
  "La educación es el arma más poderosa que puedes usar para cambiar el mundo. - Nelson Mandela",
  "No se trata de cuánto golpeas, se trata de cuánto puedes recibir y seguir adelante. - Rocky Balboa",
  "La paciencia es amarga, pero su fruto es dulce. - Jean-Jacques Rousseau",
  "La imaginación es más importante que el conocimiento. - Albert Einstein",
  "El éxito no es la llave de la felicidad. La felicidad es la llave del éxito. - Albert Schweitzer",
  "La perseverancia no es una carrera larga, sino muchos sprints cortos, uno tras otro. - Walter Elliot",
  "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden. - Jerry Rice",
  "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
  "El éxito es aprender a ir de fracaso en fracaso sin desesperarse. - Winston Churchill",
  "La oportunidad es gemela de la adversidad. - Sun Tzu",
  "No hay viento favorable para el marinero que no sabe a qué puerto se dirige. - Séneca",
  "Sé el cambio que quieres ver en el mundo. - Mahatma Gandhi",
  "La mejor manera de predecir el futuro es crearlo. - Peter Drucker",
  "No te preocupes por los fracasos, preocúpate por las posibilidades que pierdes cuando ni siquiera lo intentas. - Jack Canfield",
  "El éxito no es definitivo, el fracaso no es fatal: lo que cuenta es el coraje para continuar. - Winston Churchill"
];

const QuoteDialog = ({ open, setOpen }: QuoteDialogProps) => {

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <div className='border-8 border-cyan-500 bg-white text-black p-3'>
        <DialogTitle>
          <span className='header font-semibold'>Frase motivacional</span>
        </DialogTitle>
        <DialogContent>
          <div className='flex items-center'>
            <span className='text-lg font-medium'>{open && quotes[Math.floor(Math.random() * quotes.length)]}</span>
          </div>
        </DialogContent>
        <DialogActions>
          <Button text={'Cerrar'} OnClick={() => setOpen(false)} />
        </DialogActions>
      </div>
    </Dialog>
  );
};

export { QuoteDialog };
