import Button from "../components/ui/Button";
import TaskCards from "../components/ui/TaskCards";
import React, { useEffect, useState } from "react";
import { getAllTasks, ITask } from "../services/apiTasks";
import NavigationBar from "../components/NavigationBar";

const Tasks = () => {
  const [tasks, setTasks] = useState<ITask[]>();
  useEffect(() => {
    const getTasks = async () => {
      const allTasks = await getAllTasks();
      setTasks(allTasks);
    };
    getTasks();

    return () => {};
  }, []);
  return (
    <main className="page-style">
      <div className="flex flex-col items-center">
        <img
          alt="cat image"
          src="/cats/task-cat.png"
          className="relative w-95%"
        />
        <div className="absolute xs:top-[220px] xx:top-[260px] xr:top-[290px]">
          <h1 className="text-center font-extrabold text-[32px] mb-2">
            TASKS TO EARN
          </h1>
          <p className="text-center text-sm">Complete tasks to earn $MANX</p>
        </div>
      </div>
      <div className="flex flex-col mt-3 mb-10">
        <div className="flex flex-col items-center px-7 py-3 cards space-y-5">
          <p className="uppercase font-semibold text-xs">
            complete every 3 tasks to get a ticket
          </p>
          <div className="flex items-center">
            <span className="circle-span" />
            <span className="rectangle-span" />
            <span className="circle-span" />
            <span className="rectangle-span" />
            <img src="/ticket1.svg" alt="ticket" className="inline w-4 h-7" />
          </div>
          <Button name="CLAIM" />
        </div>
        <div className="flex flex-col space-y-4 mt-8">
          <h1 className="text-center font-extrabold text-[25px] leading-8">
            SPECIAL TASKS
          </h1>
          <div className="cards flex flex-col items-center px-7 py-3 space-y-5">
            <div className="flex space-x-3">
              <div className="p-2 flex bg-[#EFD0CA] rounded-full justify-center items-center">
                <img
                  src="/wallet.png"
                  alt="wallet"
                  className="w-10 h-8 justify-center"
                />
              </div>
              <div className="flex flex-col justify-end">
                <h1 className="font-extrabold text-sm">UPLOAD TASK</h1>
                <p className="text-xs">
                  Pass a background review, pay in USDT and your task will be
                  published
                </p>
              </div>
            </div>
            <Button name="APPLY" link="/apply" />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-col">
            <h1 className="text-center font-extrabold text-[25px] leading-8">
              TASKS
            </h1>
            <p className="text-xs">5 / 30 completed</p>
          </div>
          <TaskCards tasks={tasks} />
        </div>
      </div>
      <NavigationBar />
    </main>
  );
};

export default Tasks;
