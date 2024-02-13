import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { DetailCardDto, DetailsCard } from '.';

const products = [
  {
    id: 1,
    name: "University's Mission, Values, and Culture",
    task: "Task: Watch video presentations and read articles about the university's mission, values, and culture",
    gamification: "Gamification: Earn points and badges for completing the modules and quizzes related to university culture",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 2,
    name: "Campus Tour and Familiarization",
    task: "Task: Take a virtual campus tour with 360-degree photos and interactive maps",
    gamification: "Gamification: Complete challenges by visiting key locations virtually and earn points for exploration",
    imageSrc: 'https://i.pinimg.com/564x/33/e8/07/33e807c32153e8f8712edb34ea990890.jpg',
  },
  {
    id: 3,
    name: "Completion of Employment Contracts and Forms",
    task: "Task: Fill out employment contracts, tax forms, and legal documents online",
    gamification: "Gamification: Earn points for each form completed accurately and within deadlines",
    imageSrc: 'https://i.pinimg.com/564x/ba/63/95/ba6395c1c2f4e9bd760132d741024584.jpg',
  },
  {
    id: 4,
    name: "Submission of Identification and Qualification Documents",
    task: "Task: Upload scanned copies of identification documents (e.g., ID, passport) and academic qualifications",
    gamification: "Gamification: Receive badges for document submission and verification",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 5,
    name: "University Email Account Setup",
    task: "Task: Set up a university email account with step-by-step instructions",
    gamification: "Gamification: Earn points for successfully configuring the email account on personal devices",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 6,
    name: "Assistance with Device Setup",
    task: "Task: Access video tutorials and guides for configuring personal devices for work purposes",
    gamification: "Gamification: Points awarded for completing device setup tasks",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 7,
    name: "Access Cards and Keys",
    task: "Task: Request access cards or keys online, with approval processes integrated",
    gamification: "Gamification: Achieve a Facility Access Pro badge for completing access-related tasks",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 8,
    name: "Academic and Administrative Systems",
    task: "Task: Gain access to academic and administrative systems through a single sign-on portal",
    gamification: "Gamification: Earn points for accessing and navigating these systems efficiently",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },

  {
    id: 9,
    name: "Mandatory Training Enrollment",
    task: "Task: Enroll in mandatory training programs and compliance courses",
    gamification: "Gamification: Earn points for completing each training module, with certificates as rewards",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 10,
    name: "Professional Development Opportunities",
    task: "Task: Browse and register for available workshops, conferences, and skill-building sessions",
    gamification: "Gamification: Gain access to exclusive skill-building challenges with points and skill badges ",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 11,
    name: "Introduction to Department and Colleagues",
    task: "Task: View department-specific introductory videos and profiles of colleagues.",
    gamification: "Gamification: Connect with colleagues through virtual meet-and-greet sessions and earn social badges",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },


  {
    id: 12,
    name: "Department Policies and Procedures",
    task: "Task: Access and acknowledge department-specific policies and procedures",
    gamification: "Gamification: Complete policy quizzes for points and compliance badges",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 13,
    name: "Library Orientation",
    task: "Task: Attend virtual library orientation sessions or explore an interactive library tour",
    gamification: "Gamification: Participate in library treasure hunts and earn library explorer badges.",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 14,
    name: "Access to Research Databases",
    task: "Task: Gain access to research databases and academic journals with a single login",
    gamification: "Gamification: Complete database searches and earn researcher badges",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },


  {
    id: 15,
    name: "Benefits Explanation",
    task: "Task: View multimedia presentations explaining employee benefits",
    gamification: "Gamification: Complete benefits quizzes and earn benefits knowledge badges.",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 16,
    name: "Policy Review",
    task: "Task: Review and acknowledge university policies on work hours, leave, and HR matters",
    gamification: "Gamification: Earn compliance badges for policy acknowledgment",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 17,
    name: "Campus Services Information",
    task: "Task: Access information on campus dining, transportation, wellness services, and parking",
    gamification: "Gamification: Use virtual coupons for dining, earn transit points, or unlock wellness challenges",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },
  {
    id: 18,
    name: "Parking Permits and Transportation Cards",
    task: "Task: Apply for parking permits or public transportation cards online",
    gamification: "Gamification: Receive parking hero badges for successfully securing parking permits",
    imageSrc: 'https://i.pinimg.com/564x/e3/a6/ea/e3a6eac58326cd4f32118f57fb08bd16.jpg',
  },

]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export const Home = () => {
  const [selectedCard, setselectedCard] = useState<DetailCardDto | null>(null);

  const goBackToCards = () => {
    setselectedCard(null);
  };

  return (
    <div className="bg-white">
      {
        selectedCard ? (
          <div>
            <button
              onClick={goBackToCards}
              className=" text-blue-500 hover:underline mt-20 ml-12 block"
            >
              Back to View cards
            </button>
            <DetailsCard data={selectedCard as any} />
          </div>
        ) : (
          <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
            <div className='py-12'>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Onboarding & Assessment</h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>Helps Increase Employee engagement</p>
            </div>
            <div className="-mx-px grid grid-cols-2 border-l border-gray-200 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
              {products.map((product ) => (
                <div key={product.id} 
                   onClick={() => setselectedCard(product as any)}
                  className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="pb-4 pt-10 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      <div>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </div>
                    </h3>
                    <div className="mt-3 flex flex-col items-center">
                      <p className="sr-only"> out of 5 stars</p>
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              5 > rating ? 'text-yellow-400' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{product.task} reviews</p>
                    </div>
                    <p className="mt-4 text-base font-medium text-gray-900"></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      }
    </div>
  )
}
