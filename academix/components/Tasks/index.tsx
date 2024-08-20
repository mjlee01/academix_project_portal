import { useState } from "react";
import Tabs from "@/components/Tabs";
import Icon from "@/components/Icon";
import AddTask from "./AddTask";
import Task from "./Task";
import Link from "next/link";

type TasksProps = {
  classHead?: string;
  items: any;
};

const Tasks = ({ classHead, items }: TasksProps) => {
  const [type, setType] = useState<string>("all-tasks");

  const typeTasks = [
    {
      title: "All Tasks",
      value: "all-tasks",
    },
    {
      title: "New",
      value: "new",
    },
    {
      title: "Сompleted",
      value: "completed",
    },
  ];

  return (
    <div className="">
      <div className={`flex justify-between mb-4 md:block ${classHead}`}>
        <Tabs
          className="md:ml-0"
          classButton="md:ml-0 md:flex-1"
          items={typeTasks}
          value={type}
          setValue={setType}
        />
        <div className="flex flex-row gap-4">

            <button className="btn-stroke btn-small md:hidden">
            <Icon name="filters" />
            <span>Sort: A-Z</span>
            </button>
            <Link href="/projects/kanban-desc">
            <button className="btn-stroke btn-small md:hidden">
                <Icon name="layers" />
                <span>Kanban View</span>
            </button>
            </Link>
        </div>
      </div>
      <div className="card">
        <AddTask />
        {items.map((task: any) => (
          <Task item={task} key={task.id} />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
