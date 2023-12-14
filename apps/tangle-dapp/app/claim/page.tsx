import { Divider } from '@webb-tools/webb-ui-components/components/Divider';
import { AppTemplate } from '@webb-tools/webb-ui-components/containers/AppTemplate';
import FAQSection from '@webb-tools/webb-ui-components/containers/FAQSection';

import faqItems from '../../constants/faq';
import ConnectSection from './ConnectSection';

export default async function ClaimPage() {
  return (
    <AppTemplate.Root>
      <ConnectSection />

      <Divider className="my-16 bg-mono-180 dark:bg-mono-120" />

      <AppTemplate.Content>
        <FAQSection items={faqItems} />
      </AppTemplate.Content>
    </AppTemplate.Root>
  );
}
