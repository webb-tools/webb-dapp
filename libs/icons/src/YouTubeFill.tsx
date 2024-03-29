import { createIcon } from './create-icon';
import { IconBase } from './types';

export const YouTubeFill = (props: IconBase) => {
  return createIcon({
    ...props,
    viewBox: '0 0 32 32',
    path: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.325 5.333c.712.004 2.494.022 4.387.098l.672.029c1.905.09 3.81.244 4.755.507 1.26.354 2.249 1.386 2.584 2.696.533 2.08.6 6.136.608 7.118l.001.203v.232c-.01.983-.076 5.04-.61 7.119-.338 1.313-1.329 2.346-2.583 2.696-.946.262-2.85.417-4.755.506l-.672.03c-1.893.076-3.675.094-4.387.097l-.313.001h-.34c-1.507-.01-7.808-.077-9.813-.634-1.259-.355-2.25-1.387-2.584-2.696-.534-2.08-.6-6.136-.608-7.12v-.434c.008-.982.074-5.04.608-7.118.338-1.314 1.329-2.347 2.585-2.695 2.004-.559 8.307-.627 9.813-.635h.652zm-2.993 6v9.334l8-4.667-8-4.667z"
      />
    ),
    displayName: 'YouTubeFill',
  });
};
