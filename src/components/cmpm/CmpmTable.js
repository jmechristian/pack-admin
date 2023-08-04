import React from 'react';
import { API, Amplify } from 'aws-amplify';
import { listCMPMForms } from '@/graphql/queries';
import awsExports from '../../aws-exports';
import Link from 'next/link';

Amplify.configure(awsExports);

const getData = async () => {
  const forms = await API.graphql({ query: listCMPMForms });
  return { forms };
};

const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    company: 'Member',
    phone: '5122893696',
    complete: '80',
  },
  // More people...
];

const convertDate = (date) => {
  const event = new Date(date);

  return event.toLocaleDateString();
};

const CmpmTable = async () => {
  const { forms } = await getData();
  return (
    <div>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>
            Active CMPM Forms
          </h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all active applications that have yet to be completed or
            approved.
          </p>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    First
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Last
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Email
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Company
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    % Complete
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Approved
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200'>
                {forms.data.listCMPMForms.items.map((person) => (
                  <tr key={person.email}>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-600'>
                      {convertDate(person.createdOn)}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-600'>
                      {person.firstName}
                    </td>
                    <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-600 sm:pl-0'>
                      {person.lastName}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-600'>
                      {person.email}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-600'>
                      {person.companyName}
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 font-bold text-sm text-red-600'>
                      80%
                    </td>
                    <td className='whitespace-nowrap px-3 py-4 font-bold text-sm text-red-600'>
                      No
                    </td>
                    <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <Link
                        href={`/cmpm-form/${person.id}`}
                        className='text-indigo-600 hover:text-indigo-900 font-bold'
                      >
                        View
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CmpmTable;
