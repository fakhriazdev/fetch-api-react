import { useFetchServices } from '@/app/features/services/useFetchServices';
import Image from 'next/image';

Image;

const Services = () => {
  const { data: services, isLoading } = useFetchServices();
  return (
    <>
      <section className="relative max-w-5xl mx-auto mb-32">
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-4xl tracking-wider">Services</h1>
            <p className="text-[14px] text-gray-600">What i offer</p>
          </div>
        </div>
        <div className="flex justify-between gap-20">
          {services.map((service) => {
            return (
              <div
                className="border-[1px] border-gray-800 rounded-xl h-[260px] w-full"
                key={service.id}
              >
                <div className="flex flex-col pt-10 mx-10">
                  <div className="w-30 h-30 ">
                    <Image
                      src={service.nameIcon}
                      width={100}
                      height={100}
                      alt={service.title}
                    />
                  </div>
                  <div className="font-semibold ">
                    <h1>{service.title}</h1>
                  </div>
                  <div className="text-sm">
                    <p>sadsadsadada</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
