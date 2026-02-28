import { Field } from "../DynamicForm";

export const SelectComponent = ({ field }: { field: Field }) => {
  return (
    <div
      key={field.name}
      className="cdf-w-full cdf-flex cdf-flex-col cdf-gap-1"
    >
      <label htmlFor={field.id} className="cdf-w-full cdf-block cdf-text-left">
        {field.name}
      </label>

      <select
        name={field.name}
        id={field.id}
        defaultValue=""
        className="cdf-w-full cdf-outline-none cdf-border cdf-border-slate-600 cdf-py-1 cdf-px-3 cdf-rounded-sm"
      >
        <option value="" disabled hidden>
          Select {field.name}
        </option>

        {field.options?.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
