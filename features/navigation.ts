import { useRouter } from "next/router";

export type Nav = {
    name: string;
    url: string;
    isCurrent: boolean;
}

// Sync routes with pages file names
const routes = [
    {
        name: 'home',
        url: '/',
        isCurrent: false,
    },
    {
        name: 'about',
        url: '/about',
        isCurrent: false,
    },
    {
        name: 'articles',
        url: '/articles',
        isCurrent: false,
    },
    {
        name: 'cv',
        url: '/cv',
        isCurrent: false,
    },
    {
        name: 'projects',
        url: '/projects',
        isCurrent: false,
    },
];

function updateIsCurrent(routes: Nav[], currentPath: string) {
    return routes.map((route) => {
        if (route.url === currentPath) {
            route.isCurrent = true;
        } else {
            route.isCurrent = false;
        }
        return route;
    })
}

export function useMyRouter() {
    const { pathname } = useRouter();

    return {
        navList: updateIsCurrent(routes, pathname),
    }
}