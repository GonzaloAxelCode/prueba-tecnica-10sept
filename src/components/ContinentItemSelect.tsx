import { Checkbox, cn } from "@nextui-org/react";

export const ContinentItemSelect = ({ value, image }: any) => {
    return (
        <Checkbox

            classNames={{
                base: cn(
                    "hide-span inline-flex max-w-xs w-full bg-content1 m-0",
                    "hover:bg-content2 items-center justify-start",
                    "data-[selected=true]:bg-content2",
                    "cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
                    "data-[selected=true]:border-primary",
                    "border-gray-300"
                ),
                label: "w-full",

            }}
            value={value}
        >
            <div className="w-full flex flex-col justify-between gap-2">
                <img src={image} alt="" className="w-[60px] h-[60px] mx-auto" />
                <p className="text-center">{value}</p>
            </div>
        </Checkbox>
    );
};
