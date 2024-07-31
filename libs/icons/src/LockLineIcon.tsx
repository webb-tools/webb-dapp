import { createIcon } from './create-icon';
import type { IconBase } from './types';

export const LockLineIcon = (props: IconBase) => {
  return createIcon({
    ...props,
    viewBox: '0 0 12 14',
    d: 'M10.6667 5.66634H11.3333C11.7015 5.66634 12 5.96481 12 6.33301V12.9997C12 13.3679 11.7015 13.6663 11.3333 13.6663H0.666667C0.29848 13.6663 0 13.3679 0 12.9997V6.33301C0 5.96481 0.29848 5.66634 0.666667 5.66634H1.33333V4.99967C1.33333 2.42235 3.42267 0.333008 6 0.333008C8.57733 0.333008 10.6667 2.42235 10.6667 4.99967V5.66634ZM1.33333 6.99967V12.333H10.6667V6.99967H1.33333ZM5.33333 8.33301H6.66667V10.9997H5.33333V8.33301ZM9.33333 5.66634V4.99967C9.33333 3.15873 7.84093 1.66634 6 1.66634C4.15905 1.66634 2.66667 3.15873 2.66667 4.99967V5.66634H9.33333Z',
    displayName: 'LockLineIcon',
  });
};
