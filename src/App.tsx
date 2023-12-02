import { useCallback, useState } from 'react';
import Webcam from 'react-webcam';

const App = () => {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

  return (
    <div>
      <button onClick={toggle}>{open ? 'Delete' : 'Create'}</button>
      {open && <Webcam />}
    </div>
  );
};

export default App;
