import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "./DevTreeInput";

export default function LinkTreeView() {

const [devTreeLinks, setDevTreeLinks] = useState(social);

const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const currentLinks = devTreeLinks.forEach(item => {
        if(item.name === e.target.name){
            item.url += e.target.value
        }
    })

    console.log(currentLinks);

}

    return (
        <div className="space-y-5">
            {devTreeLinks.map(item => (
                <DevTreeInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                />
            ))}
        </div>
    )
}
