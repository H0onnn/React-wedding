import {
  createContext,
  useContext,
  ComponentProps,
  useState,
  useCallback,
  useMemo,
} from 'react';
import Modal from '@shared/Modal';

type ModalProps = ComponentProps<typeof Modal>;
type ModalOptions = Omit<ModalProps, 'open'>;

interface ModalContextValue {
  open: (options: ModalOptions) => void;
  close: () => void;
}

const Context = createContext<ModalContextValue | undefined>(undefined);

const defaultValues: ModalProps = {
  open: false,
  body: null,
  onSubmitButtonClick: () => {},
  onCancelButtonClick: () => {},
};

export const ModalContext = ({ children }: { children: React.ReactNode }) => {
  const [modalState, setModalState] = useState<ModalProps>(defaultValues);
  const $portal_root = document.getElementById('root-portal');

  const open = useCallback((options: ModalOptions) => {
    setModalState({ ...options, open: true });
  }, []);

  const close = useCallback(() => {
    setModalState(defaultValues);
  }, []);

  const values = useMemo(() => ({ open, close }), [open, close]);

  return (
    <Context.Provider value={values}>
      {children}
      {$portal_root ? <Modal {...modalState} /> : null}
    </Context.Provider>
  );
};

export const useModalContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('ModalContext 내부에서 사용해주세요.');
  }

  return context;
};
