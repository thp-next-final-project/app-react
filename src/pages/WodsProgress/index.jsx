import { useParams } from "react-router";

export const Wods = () => {
    const slug = useParams().section;
    console.log(slug);
    return(
        <div>
            {slug}
        </div>
    );
}