import { Switch } from "@headlessui/react"
import type { treeLink } from "../types"
import { classNames } from "../utils"

type DevTreeInputProps = {
    item: treeLink
    handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleEnableLink: (socialName: string) => void
}

export default function LinkInput({ item, handleUrlChange, handleEnableLink }: DevTreeInputProps) {
    return (
        <div className="bg-white shadow-sm p-3 sm:p-5 flex items-center gap-2 sm:gap-3">
            <div
                className="w-6 sm:w-12 h-6 sm:h-12 bg-cover"
                style={{ backgroundImage: `url(/social/icon_${item.name}.svg)` }}
            >
            </div>

            <input
                type="text"
                name={item.name}
                className="flex-1 border border-gray-400 rounded-lg text-sm md:text-lg"
                value={item.url}
                onChange={(e)=>handleUrlChange(e)}
            />

            <Switch
                checked={item.enabled}
                onChange={() => handleEnableLink(item.name)}
                className={classNames(
                    item.enabled ? 'bg-blue-500' : 'bg-gray-200',
                    'relative inline-flex h-5 sm:h-6 w-8 sm:w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        item.enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-4 sm:h-5 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                />
            </Switch>
        </div>
    )
}
