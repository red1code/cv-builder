import { randomId } from './random-id';

export const initialCvValues = {
  firstName: 'Dennis MacAlistair',
  lastName: 'Ritchie',
  email: 'dennis.ritchie@gmail.com',
  phone: '+1000000000',
  experiences: [
    {
      id: randomId(),
      title: 'Computer science researcher',
      employmentType: 'Full-time',
      companyName: 'Bell Labs',
      location: 'New Jersey, U.S.A',
      startDate: '1967',
      endDate: '2007',
      description: 'Co-creating the C programming language and playing a pivotal role in the development of the Unix operating system.',
    },
  ],
  education: [
    {
      id: randomId(),
      school: 'Harvard University',
      location: 'Massachusetts, U.S.A',
      fieldOfStudy: 'Physics and Mathematics',
      startDate: '1963',
      endDate: '1968',
      grade: 'PhD in mathematics',
    },
  ]
}

export const emtyCv = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  experiences: [],
  education: []
}
