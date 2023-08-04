import CmpmForm from '@/components/cmpm/CmpmForm';
import CmpmTable from '@/components/cmpm/CmpmTable';
import { Suspense } from 'react';

export default async function Page({ params }) {
  return (
    <div className='flex flex-col gap-12'>
      <div className='font-bold text-2xl'>CMPM Form</div>
      <Suspense fallback={<p>Loading....</p>}>
        <CmpmForm param={params.id} />
      </Suspense>
    </div>
  );
}
