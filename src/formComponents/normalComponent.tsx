import { Field } from "../DynamicForm";



export const  NormalComponent = ({field}:{field:Field})=>{
    return (
        <div
            key={field.name}
            className="cdf-w-full cdf-flex cdf-flex-col cdf-gap-1"
          >
            <label
              htmlFor={field.id}
              className="cdf-w-full cdf-block cdf-text-left"
            >
              {field.name}
            </label>

            <input
              type={field.type}
              name={field.id}
              id={field.id}
              placeholder={field.label}
              className="cdf-w-full cdf-outline-none cdf-border cdf-border-slate-600 cdf-py-1 cdf-px-3 cdf-rounded-sm"
            />
          </div>
    )
}