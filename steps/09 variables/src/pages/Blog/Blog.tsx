import { BlogData } from "@/data/blogData";
import cls from "./Blog.modules.css";

export default function Blog() {
    return (
        <>
            {BlogData.map((b, i) => (
                <div className={cls.blog} key={i}>
                    <h2>{b.title}</h2>
                    <div className="tertiary">{b.date}</div>
                    <p>{b.text}</p>
                    <a href="#">Read more</a>
                </div>
            ))}
        </>
    )
}