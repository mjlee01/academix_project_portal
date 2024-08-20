import { useState } from "react";
import Details from "@/components/Details";

type TaskProps = {
    className?: string;
    classTitle?: string; 
    item: any;
    time?: string;
};

const Task = ({ className, classTitle, item, time }: TaskProps) => {
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <button
                className={`relative flex items-center w-full pl-2.5 pr-4 py-1 bg-background transition-colors text-xs outline-none hover:text-purple-2 last:mb-0 dark:bg-n-2 ${className}`}
                onClick={() => setVisible(true)}
            >
                <div
                    className={`shrink-0 w-1.5 h-1.5 rounded-full ${
                        item.color === "green"
                            ? "bg-green-1"
                            : item.color === "yellow"
                            ? "bg-yellow-1"
                            : "bg-purple-1"
                    }`}
                ></div>
                {time && (
                    <div className="min-w-[3.3rem] ml-2.5 mr-3 text-left text-n-3 dark:text-white/75">
                        {time}
                    </div>
                )}
                <div
                    className={`ml-2 truncate text-xs font-bold ${classTitle}`}
                >
                    {item.title}
                </div>
            </button>
            <Details
                title="Finalize Project Proposal For FYP"
                info="Task created on 7 May 2024"
                time="7:30 am"
                users={[
                    "/images/avatars/avatar-5.jpg",
                    "/images/avatars/avatar-6.jpg",
                    "/images/avatars/avatar-7.jpg",
                    "/images/avatars/avatar-8.jpg",
                ]}
                date="15 Aug 2024"
                category="Academic"
                description="Ensure that the final year project proposal includes all necessary sections, including background, objectives, methodology, and expected outcomes. Review feedback from the supervisor and make necessary adjustments."
                visible={visible}
                onClose={() => setVisible(false)}
            />
        </>
    );
};

export default Task;
