import React from 'react';
import { API, Amplify } from 'aws-amplify';
import { getCPSForm } from '@/graphql/queries';
import awsExports from '../../aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

const getData = async (id) => {
  const form = await API.graphql({
    query: getCPSForm,
    variables: { id: id },
  });
  return { form };
};

const CmpmForm = async ({ param }) => {
  const { form } = await getData(param);
  return (
    <div className='px-8 border border-gray-400 rounded-lg p-9'>
      <div className='px-6 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          Applicant Information
        </h3>
        <p className='mt-1 max-w-3xl text-sm leading-6 text-gray-500'>
          Personal details and application.
        </p>
      </div>
      <div className='mt-6 border-t border-gray-300 max-w-3xl'>
        <dl className='divide-y divide-gray-300'>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              First Name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.firstName}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Last Name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.lastName}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Email
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.email}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Phone
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.phone}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Street Address
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.streetAddress}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Street Address Extra
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.addressExtra}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              City
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.city}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              State
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.state}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Country
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.country}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Company
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.companyName}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Title
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.companyTitle}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              LinkedIn
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.linkedin}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Birth Year
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.birthYear}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Background
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.background}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Why did you get into packaging?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.whyPackaging}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              What is your main area of interest?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.areaOfInterest}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              What goals do you have for yourself in the next 12 months?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.yearGoals}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              How do you see The Certificate of Mastery in Packaging Management
              helping you achieve those goals?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.cpsGoals}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              We know written applications can only capture so much. As we
              review your application, what more would you like us to know?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.moreAboutYou}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Elective
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.elective}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Early Op Out?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.optOut}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Where did you hear about the Certificate of Mastery in Packaging
              Management?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.referral}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              How will you be paying for this program?
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.payment}
            </dd>
          </div>
          <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Payment Confirmation
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {form && form.data.getCPSForm.paymentConfirmation}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default CmpmForm;
