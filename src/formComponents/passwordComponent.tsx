import { useState } from "react";
import { Field } from "../DynamicForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const PasswordComponent = ({ field }: { field: Field }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      key={field.name}
      className="cdf-w-full cdf-flex cdf-flex-col cdf-gap-1"
    >
      <label htmlFor={field.id} className="cdf-w-full cdf-block cdf-text-left">
        {field.name}
      </label>

      <div className="cdf-relative cdf-w-full">
        <input
          type={showPassword ? "text" : "password"}
          name={field.id}
          id={field.id}
          placeholder={field.label}
          className="cdf-w-full cdf-outline-none cdf-border cdf-border-slate-600 cdf-py-1 cdf-px-3 cdf-rounded-sm cdf-pr-10"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="cdf-absolute cdf-right-2 cdf-top-1/2 -cdf-translate-y-1/2 cdf-text-slate-500 hover:cdf-text-sky-600"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};
