import React from 'react';
import { CalendarOutlined, CheckCircleFilled } from '@ant-design/icons';
import { Timeline } from 'antd';
import { GraduationCap, Flask } from '@phosphor-icons/react';
import { useFetchJourneys } from '@/app/features/journeys/useFetchJourneys';

const TimeLine = () => {
  const { data: journeys, isLoading } = useFetchJourneys();
  console.log(journeys);
  return (
    <>
      <section className="relative max-w-5xl mx-auto mb-32">
        <div className="flex justify-center mb-16">
          <div className="flex flex-col text-center gap-4">
            <h1 className="font-bold text-4xl tracking-wider">Qualification</h1>
            <p className="text-[14px] text-gray-600">My Personal Journey</p>
          </div>
        </div>
        <div className="flex gap-12 justify-center mb-24">
          <div className="flex gap-2 font-semibold text-2xl tracking-wider">
            <span className="my-auto">
              <GraduationCap weight="bold" />
            </span>
            Education
          </div>
          <div className="flex gap-2 font-semibold text-2xl tracking-wider">
            <span className="my-auto">
              <Flask weight="bold" />
            </span>
            Experience
          </div>
        </div>
        <Timeline mode="alternate">
          {journeys.map((journey) => {
            return (
              <Timeline.Item key={journey.id} label>
                <div className="">
                  <h1 className="px-6 font-bold text-xl">{journey.title}</h1>
                  <h2 className="px-6 text-xl text-gray-400 mb-4">
                    {journey.location}
                  </h2>
                  <p className="px-8 text-gray-400">
                    <CalendarOutlined /> {journey.year}
                  </p>
                </div>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </section>
    </>
  );
};
export default TimeLine;
