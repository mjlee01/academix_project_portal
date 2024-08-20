import Link from "next/link";

const items = [
  {
    title: "LOGIN & REGISTER",
    links: [
      {
        title: "Registration",
        url: "/registration",
      },
    ],
  },
  {
    title: "DASHBOARD",
    links: [
      {
        title: "Social",
        url: "/dashboard/social",
      },
      {
        title: "Projects",
        url: "/dashboard/projects",
      },
      // {
      //     title: "eCommerce",
      //     url: "/dashboard/ecommerce",
      // },
      {
        title: "CRM",
        url: "/dashboard/crm",
      },
    ],
  },
  {
    title: "PROFILE",
    links: [
      {
        title: "All Contacts",
        url: "/profile",
      },
      {
        title: "All Contacts v2",
        url: "/profile/index-v2",
      },
      {
        title: "All Tasks",
        url: "/profile/tasks",
      },
      {
        title: "All Tasks v2",
        url: "/profile/tasks-v2",
      },
      {
        title: "All Tasks v3",
        url: "/profile/tasks-v3",
      },
      {
        title: "All Jobs",
        url: "/profile/jobs",
      },
      {
        title: "Profile Settings",
        url: "/profile/settings",
      },
    ],
  },
  {
    title: "CRM",
    links: [
      {
        title: "Contacts Empty",
        url: "/crm/contacts-empty",
      },
      {
        title: "Contacts List v.1",
        url: "/crm/contacts-v1",
      },
      {
        title: "Contacts List v.2",
        url: "/crm/contacts-v2",
      },
    ],
  },
  {
    title: "CHAT & INBOX",
    links: [
      {
        title: "Inbox Empty",
        url: "/inbox/empty",
      },
      {
        title: "Mail List",
        url: "/inbox/mail-list",
      },
      {
        title: "Mail Compose",
        url: "/inbox/mail-compose",
      },
      {
        title: "Chat",
        url: "/inbox/chat",
      },
    ],
  },
  {
    title: "PROJECT MANAGEMENT",
    links: [
      {
        title: "Projects Empty",
        url: "/projects/projects-empty",
      },
      {
        title: "Projects List v.1",
        url: "/projects/projects-list-v1",
      },
      {
        title: "Projects List v.2",
        url: "/projects/projects-list-v2",
      },
      {
        title: "Projects Grid v.1",
        url: "/projects/projects-grid-v1",
      },
      {
        title: "Projects Grid v.2",
        url: "/projects/projects-grid-v2",
      },
      {
        title: "Projects Details",
        url: "/projects/projects-details",
      },
      {
        title: "Tasks Empty",
        url: "/projects/tasks-empty",
      },
      {
        title: "Tasks List v.1",
        url: "/projects/tasks-list-v1",
      },
      {
        title: "Tasks List v.2",
        url: "/projects/tasks-list-v2",
      },
      {
        title: "Kanban Desk Empty",
        url: "/projects/kanban-desc-empty",
      },
      {
        title: "Kanban Desk Tasks",
        url: "/projects/kanban-desc",
      },
      {
        title: "File Manager Empty",
        url: "/projects/file-manager-empty",
      },
      {
        title: "File Manager Folders List",
        url: "/projects/file-manager-folders",
      },
      {
        title: "File Manager Files List",
        url: "/projects/file-manager-files",
      },
      {
        title: "File Manager Details",
        url: "/projects/file-manager-details",
      },
      {
        title: "Calendar",
        url: "/projects/calendar",
      },
    ],
  },

  {
    title: "HELP CENTER",
    links: [
      {
        title: "Home",
        url: "/support",
      },
      {
        title: "Categories",
        url: "/support/categories",
      },
      {
        title: "Search Result",
        url: "/support/search-result",
      },
      {
        title: "Article",
        url: "/support/article",
      },
    ],
  },
];

const PageListPage = () => {
  return (
    <div className="max-w-[100rem] mx-auto columns-5 px-12 py-8 2xl:columns-4 lg:columns-3 md:px-6 md:py-8 md:columns-1">
      {items.map((item, index) => (
        <div className=" break-inside-avoid-column mb-8 last:mb-0" key={index}>
          <div className="mb-2 text-h6 text-purple-1">{item.title}</div>
          <div className="flex flex-col items-start">
            {item.links.map((link, index) => (
              <Link
                className="inline-block mb-2 text-n-1 font-medium transition-colors hover:text-purple-1 last:mb-0 dark:text-white dark:hover:text-purple-1"
                href={link.url}
                key={index}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PageListPage;
