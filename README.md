# Modal component HRnet 

This is a modal component for React. Developped for a student project and used in [P14-hrnet](https://github.com/antoinea95/p14hrnet)

### Prerequisites

- [Node.js (Version 18.16.0)](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- *(Recommended IDE)* [VSCode](https://code.visualstudio.com/)

## My Table of Content

- [Installation](#installation)
- [Usage](#usage)
- [Props](#Props)

## Installation

You can install the `modal-component-hrnet` package using npm:

```bash
npm install @antoinea95/modal-component-hrnet
```

## Usage

Import `Modal` in your React component:

```jsx
import { Modal } from '@antoinea95/modal-component-hrnet';
```

Implement `Modal` in your React component:

```jsx
function MyComponent() {
  const [isShow, setIsShow] = useState(false)

  return (
    <div>
        <button onClick={() => setIsShow(true)}>Open Modal</button>
        <Modal
          onClose={() => setIsShow(false)}
          isShow={isShow}
          setIsShow={setIsShow}
          timeOut={3000} //optionnal, if you want modal close automatically
        >
        <p> This is a Modal </p>
        </Modal>
      </div>
  )
}
```

You can also display Modal

## Props

The `Modal` component props you need:

| Prop | Type | Description | Required | Default Value |
| ---- | ---- | ----------- | -------- | ------------- |
| children  | React.node  | The content of your modal, it can be anything you want | Yes | - |
| onClose  | () => void  | Callback function to be called when the modal is closed. | Yes | - |
| isShow  | boolean | Boolean indicating whether the modal is open or closed. | Yes | - |
| setIsShow | () => void | Callback function to change isShow value  | Yes | - |


