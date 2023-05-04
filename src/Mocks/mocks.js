import images from '../images/images';
import BuildIcon from '@mui/icons-material/Build';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CloudIcon from '@mui/icons-material/Cloud';
export const universityList = [
  {
    id: '1',
    name: 'Truman state university',
    image: images?.pershing1,
    description:
      'Truman State University is a public liberal arts and sciences university located in Kirksville, Missouri, USA. It was founded in 1867 and has a current enrollment of approximately 5,000 undergraduate and graduate students. Truman is consistently ranked as one of the top public universities in the Midwest region of the United States.',
  },
  {
    id: '2',
    name: 'St. cloud state University',
    image: images?.pershing2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '3',
    name: 'Gulla state University',
    image: images?.ryle1,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '4',
    name: 'Thulo cloud state University',
    image: images?.ryle2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '5',
    name: 'Sano cloud state University',
    image: images?.ryle3,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '6',
    name: 'Hyabusa cloud state University',
    image: images?.stokes1,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
  {
    id: '7',
    name: 'Sarakushi state University',
    image: images?.stokes2,
    description:
      'St. Cloud State University is a public university located in St. Cloud, Minnesota, USA. It was founded in 1869 and has a current enrollment of approximately 14,000 undergraduate and graduate students. The university offers more than 200 undergraduate and graduate programs across a variety of fields, including education, business, science, and the arts.',
  },
];

export const serviceList = [
  { id: 1, name: 'Visa appointment', description: 'This is service 1', price: 10, icon: <BuildIcon /> },
  { id: 2, name: 'DS-160 fill up', description: 'This is service 2', price: 20, icon: <AutorenewIcon /> },
  { id: 3, name: 'Mock Interview', description: 'This is service 3', price: 30, icon: <CloudIcon /> },
  { id: 4, name: 'Career Counseling', description: 'This is service 3', price: 30, icon: <CloudIcon /> },
  { id: 5, name: 'Essay writing', description: 'This is service 1', price: 10, icon: <BuildIcon /> },
  { id: 6, name: 'Resume Review', description: 'This is service 2', price: 20, icon: <AutorenewIcon /> },
  { id: 7, name: 'Mock Interview', description: 'This is service 3', price: 30, icon: <CloudIcon /> },
  { id: 8, name: 'Career Counseling', description: 'This is service 3', price: 30, icon: <CloudIcon /> },
  // ... more services
];

export const mockUniDetailsData = {
  title: 'Applying to U.S. Universities from Nepal',
  images: [images.ISN_0, images.ISN_1, images.ISN_2, images.ISN_3],
  content: [
    'Applying to colleges in the U.S. from Nepal involves a mix of simplicity and complexity. Although there are many consultancies in Putalisadak that can help expedite the process, they often charge a substantial fee for services that can be done on your own.',
    'As a high-school graduate of 2016, I started my application process in May of 2016. I took SAT classes at a consultancy, only to later realize that I could have studied more effectively at home. In this blog, I will outline the general steps for applying to most average U.S. universities. Applying to top-tier universities is more complex and will be covered in a separate series.',
    'In this blog, I will outline the general steps for applying to most average U.S. universities. Applying to top-tier universities is more complex and will be covered in a separate series.',
  ],
};
