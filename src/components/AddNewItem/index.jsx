import { Dialog , DialogTitle, DialogContent} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux' 
import { toggleAddNewGadget } from '../../redux/actions'
import InputFields from '../InputFields'

export default function AddNewItem() {
    const dispatch = useDispatch()
    const addNewGadget = useSelector(state => state.addNewGadget)

    const handleClose = () => {
        dispatch( toggleAddNewGadget(false) )
    }

    return (
        <Dialog
            fullWidth
            open={addNewGadget}
            onClose={handleClose}
        >
            <DialogTitle onClose={handleClose} >
                Add a New Gadget 
            </DialogTitle>

            <DialogContent dividers>
                <InputFields />
            </DialogContent>

        </Dialog>
    )
}
