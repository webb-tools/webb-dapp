import type { FC, PropsWithChildren } from 'react';
import { useCallback, useEffect, useState } from 'react';
import ModalQueueManagerContext, {
  ModalQueueItem,
  type ModalQueueManagerContextType,
} from './context';

/**
 * ModalQueueManagerProvider creates a Modal Queue Manager at the root
 * of the dom tree
 */
const ModalQueueManagerProvider: FC<PropsWithChildren> = ({ children }) => {
  const [queue, setQueue] = useState<ModalQueueManagerContextType['queue']>([]);

  // The current modal is tracked in state.
  const [currentModal, setCurrentModal] = useState<ModalQueueItem | null>(null);

  const enqueue = useCallback<ModalQueueManagerContextType['enqueue']>(
    (modal) => {
      setQueue((prev) => [modal, ...prev]);
    },
    []
  );
  enqueueModal = enqueue;

  const dequeue = useCallback<ModalQueueManagerContextType['dequeue']>(() => {
    const newQueue = queue.slice();
    const modal = newQueue.pop();
    setQueue(newQueue);
    setCurrentModal(null);
    return modal;
  }, [queue]);
  dequeueModal = dequeue;

  console.log('Rendering ModalQueueManagerProvider');

  useEffect(() => {
    if (queue.length === 0 || currentModal) {
      return;
    }

    const nextModal = queue[queue.length - 1];
    if (typeof nextModal.props.onOpenChange === 'function') {
      const onOpenChange = nextModal.props.onOpenChange.bind({});

      nextModal.props.onOpenChange = (open: boolean) => {
        if (!open) {
          dequeue();
        }
        onOpenChange(open);
      };
    }

    setCurrentModal(nextModal);
  }, [queue, currentModal, dequeue]);

  return (
    <ModalQueueManagerContext.Provider value={{ queue, enqueue, dequeue }}>
      {children}
      {currentModal}
    </ModalQueueManagerContext.Provider>
  );
};

export default ModalQueueManagerProvider;

/**
 * Utility function to enqueue a modal
 * it must be used in the context of a modal queue manager
 * @param modal The modal to enqueue
 */
let enqueueModal = (modal: ModalQueueItem) => {
  return;
};

/**
 * Utility function to dequeue a modal
 * it must be used in the context of a modal queue manager
 * @returns The first modal in the queue
 */
let dequeueModal = () => {
  return;
};

export { dequeueModal, enqueueModal };
