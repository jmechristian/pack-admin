import CPSForm from '@/components/cps/CPSForm';
import { Suspense } from 'react';

export default async function Page({ params }) {
  return (
    <div className='flex flex-col gap-12'>
      <div className='font-bold text-2xl'>CPS Form</div>
      <Suspense fallback={<p>Loading....</p>}>
        <CPSForm param={params.id} />
      </Suspense>
    </div>
  );
}
