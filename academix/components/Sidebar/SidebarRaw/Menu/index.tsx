import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "@/components/Icon";

import { navigation } from "@/constants/navigation";
import { twMerge } from "tailwind-merge";
import { useLoadUserQuery } from "../../../../redux/features/api/apiSlice";

type MenuProps = {
  visible?: boolean;
};

const Menu = ({ visible }: MenuProps) => {
  const router = useRouter();
  const { data: userData } = useLoadUserQuery({});

  // Use user role to determine navigation links
  const userNavigation = userData?.user ? navigation(userData.user.role) : [];

  return (
    <>
      <div
        className={`mb-3 overflow-hidden whitespace-nowrap text-xs font-medium text-white/50 ${
          visible ? "w-full opacity-100" : "xl:w-0 xl:opacity-0"
        }`}
      >
        Navigation
      </div>
      <div className="-mx-4 mb-10">
        {userNavigation.map((link: any, index: number) => ( // Iterate over userNavigation instead of navigation
          <Link
            href={link.url}
            key={index}
              className={twMerge(
                `flex items-center h-9.5 mb-2 px-4 text-sm text-white fill-white font-bold last:mb-0 transition-colors hover:bg-n-2 ${
                  router.pathname === link.url &&
                  "bg-n-2 text-purple-1 fill-purple-1"
                } ${visible ? "text-sm" : "xl:text-0"}`
              )}
            >
              <Icon
                className={`mr-3 fill-inherit ${
                  visible ? "mr-3" : "xl:mr-0"
                }`}
                name={link.icon}
              />
              {link.title}
              {link.counter && (
                <div
                  className={`min-w-[1.625rem] ml-auto px-1 py-0.25 text-center text-xs font-bold text-n-1 ${
                    visible ? "block" : "xl:hidden"
                  }`}
                  style={{
                    backgroundColor:
                      link.counterColor || "#AE7AFF",
                  }}
                >
                  {link.counter}
                </div>
              )}
          </Link>
        ))}
      </div>
    </>
  );
};



export default Menu;
