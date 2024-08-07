import React, { PropsWithChildren } from 'react';

import RestakeTabs from '../RestakeTabs';

export const dynamic = 'force-static';

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full max-w-lg mx-auto ">
      <RestakeTabs />

      {children}
    </div>
  );
};

export default layout;
