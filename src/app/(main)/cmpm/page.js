import CmpmTable from '@/components/cmpm/CmpmTable';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='font-bold text-2xl'>CMPM Forms</div>
      <Suspense fallback={<p>Loading....</p>}>
        <CmpmTable />
      </Suspense>
    </div>
  );
}
