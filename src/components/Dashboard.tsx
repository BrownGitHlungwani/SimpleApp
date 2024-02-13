import { StarIcon } from '@heroicons/react/20/solid'
import { useState } from 'react';
import { Assessments, DetailCardDto, DetailsCard } from '.';


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
              {Assessments.map((product ) => (
                <div key={product.id} 
                   onClick={() => setselectedCard(product as any)}
                  className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75 rounded-full">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="h-full w-full object-cover object-center "
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
