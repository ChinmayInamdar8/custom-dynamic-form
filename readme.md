# Custom Dynamic Form

A lightweight, reusable, and configurable dynamic form builder for React applications.

Build forms using configuration objects instead of writing repetitive JSX.

---

## ✨ Features

- ⚡ Build forms using simple configuration
- 🧩 Supports text, email, password, and select fields
- 👁 Built-in password show/hide toggle
- 🎨 Prefixed utility classes to avoid style conflicts (`cdf-`)
- 📦 Lightweight and easy to integrate
- 🧠 TypeScript support

---

## 📦 Installation

```bash
npm install custom-dynamic-form
```

or

```bash
yarn add custom-dynamic-form
```

---

## 🚀 Basic Usage

```tsx
import DynamicForm from "custom-dynamic-form";

const fields = [
  {
    id: "email",
    name: "Email",
    type: "email",
    label: "Enter your email"
  },
  {
    id: "password",
    name: "Password",
    type: "password",
    label: "Enter your password"
  },
  {
    id: "role",
    name: "Role",
    type: "select",
    options: [
      { label: "Admin", value: "admin" },
      { label: "User", value: "user" }
    ]
  }
];

function App() {
  const handleSubmit = (data: Record<string, string>) => {
    console.log(data);
  };

  return (
    <DynamicForm
      fields={fields}
      onSubmit={handleSubmit}
    />
  );
}
```

---

## 🧠 Field Configuration

### Input Field

```ts
{
  id: string;
  name: string;
  type: "text" | "email" | "password";
  label?: string;
}
```

### Select Field

```ts
{
  id: string;
  name: string;
  type: "select";
  options: {
    label: string;
    value: string;
  }[];
}
```

---

## 📤 onSubmit

The `onSubmit` function receives a clean object containing form values:

```ts
{
  email: "example@gmail.com",
  password: "123456",
  role: "admin"
}
```

---

## 🎨 Styling

The component uses prefixed utility classes (e.g., `cdf-`) to prevent style conflicts.

You can:
- Override styles via wrapper
- Extend the component
- Customize as needed

---

## 🛠 TypeScript Support

Fully typed configuration and submit handler support.

Example:

```ts
const handleSubmit = (data: Record<string, string>) => {
  console.log(data);
};
```

---

## 🔄 Versioning

After making changes:

```bash
npm version patch
npm publish
```

- `patch` → Bug fixes
- `minor` → New features
- `major` → Breaking changes

---

## 🤝 Contributing

Contributions are welcome.

If you would like to improve this package, feel free to open an issue or submit a pull request.

---

## 📄 License

This project currently does not specify a license.
All rights reserved unless stated otherwise.