export interface BlogDataType {
    title: string,
    date: string,
    text: string
}

export const BlogData: BlogDataType[] = [
    {
        title: "React 19 Beta2",
        date: "April 25, 2024",
        text: "In the React 19 Beta Upgrade Guide, we shared step-by-step instructions for upgrading your app to React 19 Beta. In this post, we’ll give an overview of the new features in React 19, and how you can adopt them.",
    },
    {
        title: "React 19 Beta Upgrade Guide",
        date: "April 25, 2024",
        text: "The improvements added to React 19 require some breaking changes, but we’ve worked to make the upgrade as smooth as possible and we don’t expect the changes to impact most apps. In this post, we will guide you through the steps for upgrading libraries to React 19 beta.",
    },
]