import CPSTable from '@/components/cps/CPSTable';
import { Suspense } from 'react';

export default async function Page() {
  return (
    <div className='flex flex-col gap-12'>
      <div className='font-bold text-2xl'>CPS Forms</div>
      <Suspense fallback={<p>Loading....</p>}>
        <CPSTable />
      </Suspense>
    </div>
  );
}
