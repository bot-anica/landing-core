import { FC } from 'react';
import { Loader2 } from 'lucide-react';

const PrePaymentLoader: FC = () => (
  <section className="py-24 lg:py-28 xl:py-32 relative overflow-hidden flex justify-center items-center min-h-screen">
    <Loader2 className="w-10 h-10 animate-spin text-primary-pink" />
  </section>
);

export default PrePaymentLoader;
