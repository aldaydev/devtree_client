import { useState } from "react";
import { social } from "../data/social";
import DevTreeInput from "./DevTreeInput";

export default function LinkTreeView() {

const [devTreeLinks, setDevTreeLinks] = useState(social);

const handleUrlChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(item => item.name === e.target.name ? {...item, url: e.target.value } : item)
    setDevTreeLinks(updatedLinks);
}

const handleEnableLink = (socialName: string) => {
    const updatedEnabled = devTreeLinks.map(item => item.name === socialName ? {...item, enabled : !item.enabled} : item)

    setDevTreeLinks(updatedEnabled);
}

    return (
        <div className="space-y-5">
            {devTreeLinks.map(item => (
                <DevTreeInput
                    key={item.name}
                    item={item}
                    handleUrlChange={handleUrlChange}
                    handleEnableLink={handleEnableLink}
                />
            ))}
        </div>
    )
}
