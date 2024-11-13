import React, { useEffect, useState } from "react";
import { completeTask, ITask, TaskType } from "../../services/apiTasks";
import { useUserContext } from "../../context/UserContext";
import { Spinner, useToast } from "@chakra-ui/react";
import WebApp from "@twa-dev/sdk";
import { sleep } from "../../utils/helpers";
const TaskButton = ({
  taskId,
  url,
  taskType,
}: {
  taskId: string;
  url: string;
  taskType: TaskType;
}) => {
  const { id, user } = useUserContext();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<string[]>();

  useEffect(() => {
    const complete = user?.completedTasks;
    setCompletedTasks(complete);
  }, [user]);

  useEffect(() => {
    if (completedTasks?.includes(taskId)) setTaskCompleted(true);
  }, [taskId, completedTasks]);

  const handleCompleteTask = async () => {
    if (completedTasks == undefined) return setIsLoading(true);
    try {
      setIsLoading(true);

      if (taskType == "telegram") {
        WebApp.openTelegramLink(url);
      } else {
        WebApp.openLink(url, { try_instant_view: false });
      }

      await sleep(3000);

      await completeTask(id, taskId);

      toast({
        title: "Task completed successfully",
        position: "top",
        colorScheme: "green",
      });
      setTaskCompleted(true);

      setCompletedTasks((curr) => [...curr!, taskId]);
    } catch (error) {
      console.log(error);
      toast({
        title: "Unable to complete task",
        position: "top",
        colorScheme: "orange",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div
      className={`border-[3px] border-solid border-[#000807] rounded-full z-50 ${
        taskCompleted ? "bg-emerald-500 text-white" : ""
      }`}
    >
      <button
        type="button"
        className="text-xs font-bold w-full flex items-center justify-center py-[6px] xs:px-3 xx:px-[18px]"
        onClick={handleCompleteTask}
        disabled={taskCompleted || isLoading}
      >
        {isLoading ? <Spinner /> : taskCompleted ? "Done" : "Go"}
      </button>
    </div>
  );
};

const TaskCards = ({ tasks }: { tasks: ITask[] | undefined }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        {tasks?.map(({ title, reward, _id, url, type }) => (
          <div
            key={_id}
            className={`cards flex my-3 p-3 justify-between bg-[#EFD0CA80] 
          `}
          >
            <div className="flex gap-2">
              <div className="flex flex-col p-2 bg-[#EFD0CA] rounded-full justify-center">
                <img
                  src="/wallet.png"
                  alt="wallet"
                  className="xs:w-6 xs:h-6 xr:w-8 xr:h-7"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold xs:text-xs uppercase text-wrap">
                  {title}
                </h1>
                <div className="text-xs flex gap-2">
                  <p className="">+{reward}</p>
                  <div className="flex gap-1">
                    <img src="/coin.png" alt="coin" className="w-4" />
                    <p>GOLD COINS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <TaskButton taskId={_id} url={url} taskType={type} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCards;
