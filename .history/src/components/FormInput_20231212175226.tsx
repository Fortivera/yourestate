export default function FormInput(formLabels: any) {
    return (
        {
            formLabels.map((entity) => {
                return (
                    <div key={entity.id} className="flex flex-col md:flex-row py-2 ">
                        <label className="pr-3 w-52" htmlFor={`${entity.name}`}>
                            {entity.name}
                        </label>
                        <input
                            className={`${theme === "light" ? "bg-white" : inputColour} leading-7 w-auto md:w-72 border-b-2`}
                            id=""
                            type={`${entity.type}`}
                            name={`${entity.name}`}
                            aria-label={`${entity.ariaLabel}`}
                            placeholder={`${entity.placeholder}`}
                            onKeyDown={
                                entity.type === "number"
                                    ? (event: React.KeyboardEvent<HTMLInputElement>) => {
                                        if (event.key.toLowerCase() === "e") {
                                            event.preventDefault()
                                        }
                                    }
                                    : undefined
                            }
                        />
                    </div>
                )
            })
        }
    )
}