import { NormalComponent } from "./formComponents/normalComponent";
import { PasswordComponent } from "./formComponents/passwordComponent";
import { SelectComponent } from "./formComponents/selectComponent";
import "./style.css";

interface Options{
    value:string;
    label:string;
}

export interface Field {
  id: string;
  name: string;
  label: string;
  type: string;
  validation?: any;
  options?: Options[];
}

interface DynamicFormProps {
  fields: Field[];
  onSubmit: (data: any) => void;
}

export const DynamicForm = ({ fields, onSubmit }: DynamicFormProps) => {
  const submitHandler: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;

    console.log(data);
    onSubmit(data);
  };
  return (
    <div className="cdf-border cdf-border-sky-600 cdf-rounded cdf-p-2 cdf-shadow-xl">
      <form
        onSubmit={submitHandler}
        className="cdf-w-full cdf-grid cdf-grid-cols-2 cdf-gap-4"
      >
        {fields.map((field, index) => {
            if(field.type==="text" || field.type==="number" || field.type==="email"){
                return (
                    <NormalComponent  field={field} key={field.label}/>
                )
            }else if(field.type==='select'){
                return (
                    <SelectComponent field={field} key={field.label}/>
                )
            }else if(field.type==='password'){
                return (
                    <PasswordComponent field={field} />
                )
            }
        })}

        {/* Make button full width across both columns */}
        <div className="cdf-col-span-2 cdf-flex cdf-justify-center">
          <button
            type="submit"
            className="cdf-bg-sky-600 cdf-py-1 cdf-px-5 cdf-rounded hover:cdf-bg-sky-500 cdf-text-slate-100 cdf-my-3 cdf-shadow-sm cdf-text-shadow-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
